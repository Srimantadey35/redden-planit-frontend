// utils/cloudinaryUpload.js
export const uploadToCloudinary = async (file) => {
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvvlu2zk9/image/upload';
  const UPLOAD_PRESET = 'planet-services';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('folder', 'user_uploads'); // Optional but good for organizing

  try {
    const res = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error('Cloudinary upload failed');

    const data = await res.json();

    return data.secure_url; // Or public_id if you want to store reference
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    throw err;
  }
};
