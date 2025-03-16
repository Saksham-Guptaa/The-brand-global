export const CLOUDINARY_CONFIG = {
  cloudName: "dwhshwhib",
  uploadPreset: "ml_default", // Using the default unsigned upload preset
  folder: "blog-images",
  allowedFormats: ["jpg", "jpeg", "png", "gif"],
  maxFileSize: 10 * 1024 * 1024, // 10MB
  transformation: [
    {
      quality: "auto",
      fetch_format: "auto",
    },
  ],
};
