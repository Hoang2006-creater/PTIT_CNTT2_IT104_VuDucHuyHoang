import { useState, useRef } from "react";
import axios from "axios";

const CLOUD_NAME = "dljrxbhmz";
const UPLOAD_PRESET = "upload";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  function handleChooseFile() {
    fileInputRef.current?.click();
  }
  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setUploading(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      setImageUrl(res.data.secure_url);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  }
  function handleAddProduct() {
    if (!name || !price || !imageUrl) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: Number(price),
      description,
      imageUrl,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  }

  function handleDelete(id: number) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Quản lý sản phẩm</h1>
      <div className="border p-4 rounded shadow mb-6">
        <label className="block mb-2 font-semibold">Tên sản phẩm *</label>
        <input
          type="text"
          className="border p-2 rounded w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2 font-semibold">Giá *</label>
        <input
          type="number"
          className="border p-2 rounded w-full mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className="block mb-2 font-semibold">Mô tả</label>
        <textarea
          className="border p-2 rounded w-full mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="block mb-2 font-semibold">Ảnh sản phẩm *</label>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleUpload}
          className="hidden"
        />
        <button
          onClick={handleChooseFile}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {imageUrl && (
          <img
            src={imageUrl}
            alt="preview"
            className="w-32 h-32 object-cover mt-3 rounded shadow"
          />
        )}

        <button
          onClick={handleAddProduct}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm sản phẩm
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded shadow p-3 flex flex-col items-center"
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              className="w-40 h-40 object-cover rounded"
            />
            <h3 className="font-bold mt-2">
              {p.name} - {p.price} đ
            </h3>
            <p className="text-sm text-gray-600">{p.description}</p>
            <button
              onClick={() => handleDelete(p.id)}
              className="mt-2 text-red-500 hover:underline"
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManager;
