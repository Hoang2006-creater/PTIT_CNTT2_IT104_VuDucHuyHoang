import { useState, useRef } from "react";
import axios from "axios";
const CLOUD_NAME = "dljrxbhmz";
const UPLOAD_PRESET = "upload";
function MultiUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleChooseFile() {
    fileInputRef.current?.click();
  }

  async function handleUpload() {
    if (files.length === 0) return;

    try {
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        return axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
      });

      const responses = await Promise.all(uploadPromises);
      const urls = responses.map((res) => res.data.secure_url);
      setUploadedUrls(urls);
      setSuccessMessage("Upload thành công!");
    } catch (err) {
      console.error("Upload failed:", err);
      setSuccessMessage(null);
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="font-bold mb-4">Upload nhiều ảnh lên Cloudinary</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={(e) => {
          if (e.target.files) {
            const selected = Array.from(e.target.files);
            setFiles((prev) => [...prev, ...selected].slice(0, 3));
          }
        }}
        className="hidden"
      />

      <button
        onClick={handleChooseFile}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Choose files
      </button>
      <button
        onClick={handleUpload}
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {successMessage && (
        <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
      )}
      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {files.map((file, i) => (
            <div key={i}>
              <p className="text-sm text-gray-600 truncate">{file.name}</p>
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-32 h-32 object-cover rounded shadow"
              />
            </div>
          ))}
        </div>
      )}
      {uploadedUrls.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          {uploadedUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`uploaded-${i}`}
              className="w-32 h-32 object-cover rounded shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiUpload;
