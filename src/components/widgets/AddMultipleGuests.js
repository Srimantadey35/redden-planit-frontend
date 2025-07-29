import React, { useState } from "react";
import Image from "next/image";
import * as XLSX from 'xlsx';
import toast, { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import axios from "axios";
import { useSelector } from "react-redux";


const AddMultipleGuests = ({setisModalOpen, onGuestsImported}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [fileHeaders, setFileHeaders] = useState([]);
  const [fieldMapping, setFieldMapping] = useState({});
  const [showMapping, setShowMapping] = useState(false);
  const [importedGuests, setImportedGuests] = useState([]);
  const [isImportCompleted, setIsImportCompleted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const token = useSelector((state) => state.auth.accessToken);
  
  // Define the expected backend field keys
  const expectedFields = {
    firstName: 'First Name *',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone Number *',
    address: 'Address',
    guestType: 'Guest Type',
    dietaryPreference: 'Dietary Preference',
    notes: 'Notes'
  };
  const liElements = [
    "Enter column headers (eg. Name, Plus One, Street Address) in the first row.",
    "Enter guests and their plus ones or family members on the same line.",
    "Split addresses into four columns: street address, city, state, and zip code.",
    "Enter all required fields (Name, Phone number).",
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileName = file.name.toLowerCase();
      
      if (fileType === 'text/csv' || fileName.endsWith('.csv') || 
          fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
        setSelectedFile(file);
        setPreviewData([]);
        // Automatically preview the file when selected
        handleFilePreview(file);
      } else {
        alert('Please select a valid CSV or Excel file (.csv, .xlsx, .xls)');
      }
    }
  };

  const parseFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = e.target.result;
          let workbook;
          
          if (file.name.toLowerCase().endsWith('.csv')) {
            // Parse CSV
            const text = data;
            const lines = text.split('\n');
            const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
            const guests = [];
            
            for (let i = 1; i < lines.length; i++) {
              if (lines[i].trim()) {
                const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
                const guest = {};
                headers.forEach((header, index) => {
                  guest[header] = values[index] || '';
                });
                guests.push(guest);
              }
            }
            resolve(guests);
          } else {
            // Parse Excel
            workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            resolve(jsonData);
          }
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => reject(new Error('Error reading file'));
      
      if (file.name.toLowerCase().endsWith('.csv')) {
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    });
  };

  const handleFilePreview = async (file) => {
    setIsProcessing(true);
    try {
      const guests = await parseFile(file);
      setRawData(guests);
      setPreviewData(guests.slice(0, 5)); // Show first 5 for preview
      
      // Extract headers from the first row
      if (guests.length > 0) {
        const headers = Object.keys(guests[0]);
        setFileHeaders(headers);
        
        // Auto-map common field names
        const autoMapping = {};
        headers.forEach(header => {
          const lowerHeader = header.toLowerCase();
          if (lowerHeader.includes('first') && lowerHeader.includes('name')) autoMapping.firstName = header;
          else if (lowerHeader.includes('last') && lowerHeader.includes('name')) autoMapping.lastName = header;
          else if (lowerHeader.includes('name') && !lowerHeader.includes('first') && !lowerHeader.includes('last')) autoMapping.firstName = header;
          else if (lowerHeader.includes('phone')) autoMapping.phone = header;
          else if (lowerHeader.includes('email')) autoMapping.email = header;
          else if (lowerHeader.includes('address')) autoMapping.address = header;
          else if (lowerHeader.includes('guest') && lowerHeader.includes('type')) autoMapping.guestType = header;
          else if (lowerHeader.includes('dietary')) autoMapping.dietaryPreference = header;
          else if (lowerHeader.includes('note')) autoMapping.notes = header;
        });
        
        // Check for exact matches first (case-insensitive)
        const exactMatches = {};
        headers.forEach(header => {
          const lowerHeader = header.toLowerCase();
          if (lowerHeader === 'firstname') exactMatches.firstName = header;
          else if (lowerHeader === 'lastname') exactMatches.lastName = header;
          else if (lowerHeader === 'phone') exactMatches.phone = header;
          else if (lowerHeader === 'email') exactMatches.email = header;
          else if (lowerHeader === 'address') exactMatches.address = header;
          else if (lowerHeader === 'guesttype') exactMatches.guestType = header;
          else if (lowerHeader === 'dietarypreference') exactMatches.dietaryPreference = header;
          else if (lowerHeader === 'notes') exactMatches.notes = header;
        });
        
        // Use exact matches if available, otherwise use auto-mapping
        const finalMapping = { ...autoMapping, ...exactMatches };
        setFieldMapping(finalMapping);
        
        // Only show mapping if required fields are missing
        const needsMapping = !finalMapping.firstName || !finalMapping.phone;
        setShowMapping(needsMapping);
      }
    } catch (error) {
      console.error('Error parsing file:', error);
      alert('Error processing file. Please check the file format.');
      setPreviewData([]);
      setRawData([]);
      setFileHeaders([]);
      setShowMapping(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFieldMappingChange = (backendField, fileHeader) => {
    setFieldMapping(prev => ({
      ...prev,
      [backendField]: fileHeader
    }));
  };

  const mapDataToBackendFormat = (data) => {
    return data.map(row => {
      const mappedRow = {};
      Object.entries(fieldMapping).forEach(([backendField, fileHeader]) => {
        if (fileHeader && row[fileHeader] !== undefined) {
          mappedRow[backendField] = row[fileHeader];
        }
      });
      return mappedRow;
    });
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    if (rawData.length === 0) {
      alert('Please wait for file to be processed');
      return;
    }

    // Validate required fields - only check if mapping is shown
    if (showMapping && (!fieldMapping.firstName || !fieldMapping.phone)) {
      alert('Please map the required fields: First Name and Phone Number');
      return;
    }

    setIsProcessing(true);
    
    try {
      const mappedGuests = mapDataToBackendFormat(rawData);
      
      // Filter out empty rows
      const validGuests = mappedGuests.filter(guest => 
        guest.firstName && guest.firstName.trim() !== '' && 
        guest.phone && guest.phone.trim() !== ''
      );
      
      if (validGuests.length === 0) {
        alert('No valid guests found. Please check your data.');
        return;
      }
      
      // Store imported guests for later upload
      setImportedGuests(validGuests);
      setIsImportCompleted(true);
      
      console.log('Import completed, guests ready for upload:', validGuests);
      toast.success(`Successfully imported ${validGuests.length} guests!`)
      
    } catch (error) {
      console.error('Error importing guests:', error);
      alert('Error importing guests. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUploadToBackend = async () => {
    if (importedGuests.length === 0) {
      alert('No guests to upload');
      return;
    }

    setIsUploading(true);
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_SYSTEM}/planners/import-csv-contacts`,{contacts:importedGuests},{
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Call the parent callback if provided
      // if (onGuestsImported) {
      //   onGuestsImported(importedGuests);
      // }
      if(response.status === 201){
      toast.success(`Successfully uploaded ${importedGuests.length} guests!`);
      }
      
      // Close modal after successful upload
      setTimeout(() => {
        setisModalOpen(null);
      }, 1000);
      
    } catch (error) {
      console.error('Error uploading guests to backend:', error);
      toast.error('Error uploading guests to backend. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px",
            borderRadius: "6px",
            zIndex: 999999, // Higher than modal
          },
          success: {
            icon: '✅',
          },
          error: {
            icon: '❌',
          },
        }}
        containerStyle={{ 
          top: '20px',
          zIndex: 999999 // Higher than modal
        }}
      />
      <div className="fixed top-0 left-0 bg-[#000000a5] z-[99999] size-full">
        <div className="flex items-center justify-center size-full p-4">
          <div className="bg-white rounded-[15px] relative max-w-full mx-4 sm:mx-0 my-4 sm:max-w-[600px] 3xl:max-w-[914px] w-full modalAnim max-h-[90vh] overflow-y-auto">
          <div className="px-[20px] md:px-[30px] 3xl:px-[50px] mt-[30px] 3xl:mt-[55px] pb-[20px]">
            <div className="flex items-center mb-[20px] 3xl:mb-[40px]">
              <h3 className="font-semibold text-[24px] 3xl:text-[30px] text-[#151515]">
                Add multiple guests
              </h3>
              <button onClick={()=>setisModalOpen(null)} className="absolute top-5 right-5 cursor-pointer">
                <Image
                className="w-[18px] 3xl:w-[25px]"
                  width={25}
                  height={25}
                  src={"/images/cross.svg"}
                  alt="cross icon"
                />
              </button>
            </div>
            <div>
              <h4 className="text-[#151515] font-medium text-[17px] 3xl:text-[22px]">
                Upload a Spreadsheet (CSV or Excel)
              </h4>
              <div className="mt-4">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileChange}
                  className="mb-3 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#EA0056] file:text-white hover:file:bg-[#c30048] file:cursor-pointer"
                />
                {selectedFile && (
                  <p className="text-sm text-green-600 mb-2">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-t-[#DFDFDF] pt-[35px] px-[20px] md:px-[30px] 3xl:px-[50px] mb-9 3xl:mb-14">
            <p className="text-[#151515] font-medium text-[17px] 3xl:text-[18px]">
              Follow the guidelines below to adapt an existing spreadsheet.
            </p>
            <ul className="mt-[20px] space-y-2.5 mb-9 3xl:mb-11">
              {liElements.map((item, index) => (
                <li
                  key={index}
                  className="font-normal text-[#505050] text-[16px] flex items-center"
                >
                  <Image
                    className="mr-2 w-[17px]"
                    width={17}
                    height={17}
                    src={"/images/pinktick.svg"}
                    alt="pinktick mark"
                  />
                  {item}
                </li>
              ))}
            </ul>
            
            {previewData.length > 0 && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-[16px] mb-2">Preview (First 5 rows):</h5>
                <div className="max-h-32 overflow-auto">
                  {previewData.map((row, index) => (
                    <div key={index} className="text-sm text-gray-700 mb-1">
                      {Object.entries(row).slice(0, 3).map(([key, value]) => (
                        <span key={key} className="mr-4">
                          <strong>{key}:</strong> {value}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {showMapping && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h5 className="font-medium text-[16px] mb-3 text-blue-800">Map Your Fields:</h5>
                <p className="text-sm text-blue-600 mb-4">
                  We couldn&apos;t automatically map some required fields. Please match your file columns to the required fields:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                  {Object.entries(expectedFields).map(([backendField, displayName]) => (
                    <div key={backendField} className="flex items-center space-x-2">
                      <label className="text-sm font-medium text-gray-700 w-24 flex-shrink-0">
                        {displayName}:
                      </label>
                      <select
                        value={fieldMapping[backendField] || ''}
                        onChange={(e) => handleFieldMappingChange(backendField, e.target.value)}
                        className="flex-1 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                      >
                        <option value="">-- Select Column --</option>
                        {fileHeaders.map(header => (
                          <option key={header} value={header}>{header}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  * Required fields (First Name, Phone Number) must be mapped to proceed
                </div>
              </div>
            )}
            
            {!showMapping && !isImportCompleted && fieldMapping.firstName && fieldMapping.phone && (
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                {/* <h5 className="font-medium text-[16px] mb-2 text-green-800">✅ Fields Automatically Mapped</h5> */}
                <p className="text-sm text-green-700">
                  Great! We automatically detected and mapped your file columns. Ready to import!
                </p>
                <div className="mt-2 text-xs text-green-600">
                  <strong>First Name:</strong> {fieldMapping.firstName} • <strong>Phone:</strong> {fieldMapping.phone}
                  {fieldMapping.email && <span> • <strong>Email:</strong> {fieldMapping.email}</span>}
                  {fieldMapping.address && <span> • <strong>Address:</strong> {fieldMapping.address}</span>}
                </div>
              </div>
            )}
            
            {/* {isImportCompleted && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h5 className="font-medium text-[16px] mb-2 text-blue-800">✅ Import Completed!</h5>
                <p className="text-sm text-blue-700">
                  Successfully imported {importedGuests.length} guests. Click "Upload Guests" to save them to the backend.
                </p>
                <div className="mt-2 text-xs text-blue-600">
                  Ready to upload: {importedGuests.length} guests with required fields validated
                </div>
              </div>
            )} */}
            
            <button 
              onClick={isImportCompleted ? handleUploadToBackend : handleUpload}
              disabled={!selectedFile || isProcessing || isUploading || rawData.length === 0 || (showMapping && (!fieldMapping.firstName || !fieldMapping.phone))}
              className="font-semibold text-[16px] 3xl:text-[20px] text-white bg-[#EA0056] hover:bg-[#c30048] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg px-[90px] 3xl:px-[115px] py-3 3xl:py-3.5 mx-auto table cursor-pointer"
            >
              {isUploading ? 'Uploading...' : 
               isProcessing ? 'Processing...' : 
               isImportCompleted ? 'Upload Guests' : 
               rawData.length > 0 ? 'Import Guests' : 'Upload'}
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddMultipleGuests;
