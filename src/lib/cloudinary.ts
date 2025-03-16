import { CLOUDINARY_CONFIG } from "./cloudinary-config";

export const uploadToCloudinary = async (file: File): Promise<string> => {
  try {
    // Create form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);
    formData.append("folder", CLOUDINARY_CONFIG.folder);

    // Upload to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    return data.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
