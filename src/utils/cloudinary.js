// utils/cloudinary.js

// utils/cloudinaryUpload.js
// export const uploadToCloudinary = async (file) => {
//   const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvvlu2zk9/image/upload';
//   const UPLOAD_PRESET = 'planet-services';

//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', UPLOAD_PRESET);
//   formData.append('folder', 'user_uploads'); // Optional but good for organizing

//   try {
//     const res = await fetch(CLOUDINARY_URL, {
//       method: 'POST',
//       body: formData,
//     });

//     if (!res.ok) throw new Error('Cloudinary upload failed');

//     const data = await res.json();

//     return data.secure_url; // Or public_id if you want to store reference
//   } catch (err) {
//     console.error('Cloudinary upload error:', err);
//     throw err;
//   }
// };

export const uploadToCloudinary = async (file) => {
  const getCloudinaryUrl = (fileType) => {
    if (fileType.startsWith('image/')) {
      return 'https://api.cloudinary.com/v1_1/dvvlu2zk9/image/upload';
    }
    else if (fileType === 'application/pdf') {
    return 'https://api.cloudinary.com/v1_1/dvvlu2zk9/media/upload';
    }
    else {
      return 'https://api.cloudinary.com/v1_1/dvvlu2zk9/raw/upload';
    }
  };

  const CLOUDINARY_URL = getCloudinaryUrl(file.type);
  const UPLOAD_PRESET = 'planet-services';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  
  const getFolder = (fileType) => {
    if (fileType.startsWith('image/')) return 'user_uploads/images';
    if (fileType === 'application/pdf') return 'user_uploads/pdfs';
    if (fileType.includes('document') || fileType.includes('word')) return 'user_uploads/documents';
    if (fileType.includes('spreadsheet') || fileType.includes('excel')) return 'user_uploads/spreadsheets';
    if (fileType.includes('presentation') || fileType.includes('powerpoint')) return 'user_uploads/presentations';
    return 'user_uploads/others';
  };
  
  formData.append('folder', getFolder(file.type));
  
  if (!file.type.startsWith('image/')) {
    formData.append('resource_type', 'raw');
  }

  try {
    const res = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error?.message || res.statusText}`);
    }

    const data = await res.json();
    
    return data.secure_url;
    
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    throw new Error(`Upload failed: ${err.message}`);
  }
};

export const validateFileType = (file) => {
  const allowedTypes = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml',
    'application/pdf',
    'application/msword', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain', 'text/csv',
    'application/rtf', 'application/zip'
  ];

  return allowedTypes.includes(file.type);
};

export const getFileCategory = (fileType) => {
  if (fileType.startsWith('image/')) return 'image';
  if (fileType === 'application/pdf') return 'pdf';
  if (fileType.includes('document') || fileType.includes('word')) return 'document';
  if (fileType.includes('spreadsheet') || fileType.includes('excel')) return 'spreadsheet';
  if (fileType.includes('presentation') || fileType.includes('powerpoint')) return 'presentation';
  if (fileType.startsWith('text/')) return 'text';
  return 'other';
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
