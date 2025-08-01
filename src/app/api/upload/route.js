import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const cloudinaryUrl = await uploadToCloudinary(buffer, file.name);
    
    return NextResponse.json({ 
      success: true, 
      url: cloudinaryUrl,
      originalName: file.name 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

// Upload to Cloudinary function
async function uploadToCloudinary(buffer, fileName) {
  try {
    // Convert buffer to base64
    const base64String = buffer.toString('base64');
    const dataUri = `data:image/jpeg;base64,${base64String}`;

    // Upload to Cloudinary with proper configuration
    const result = await cloudinary.uploader.upload(dataUri, {
      public_id: `planit-wedding/${Date.now()}_${fileName.split('.')[0]}`,
      resource_type: 'auto',
      folder: 'planit-wedding-gallery',
      transformation: [
        { width: 800, height: 600, crop: 'limit' },
        { quality: 'auto' },
        { format: 'auto' }
      ]
    });

    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
}
