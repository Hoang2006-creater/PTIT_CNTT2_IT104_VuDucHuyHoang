import { useState, useRef } from "react";
import axios from "axios";

const CLOUD_NAME = "dljrxbhmz";       
const UPLOAD_PRESET = "upload";     

function SingleUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleChooseFile() {
    fileInputRef.current?.click(); 
  }

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      setUploadedUrl(res.data.secure_url);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="font-bold mb-4">Upload 1 ảnh lên Cloudinary</h2>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="hidden"
      />
      <button
        onClick={handleChooseFile}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Choose file
      </button>
      <button
        onClick={handleUpload}
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {file && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Ảnh đã chọn:</p>
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-40 h-40 object-cover rounded shadow"
          />
        </div>
      )}
      {uploadedUrl && (
        <div className="mt-6">
          <p className="text-sm text-green-600">Upload thành công:</p>
          <img
            src={uploadedUrl}
            alt="uploaded"
            className="w-40 h-40 object-cover rounded shadow"
          />
        </div>
      )}
    </div>
  );
}

export default SingleUpload;
