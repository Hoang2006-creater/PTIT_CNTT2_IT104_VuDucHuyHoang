import { useState } from "react";
import type { Contact } from "./ContactApp";

interface Props {
  contacts: Contact[];
  onAdd: (contact: Contact) => void;
  onUpdate: (contact: Contact) => void;
}

export default function ContactForm({ contacts, onAdd }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !phone) {
      setError("Không được để trống!");
      return;
    }
    if (contacts.some(c => c.phone === phone)) {
      setError("Số điện thoại đã tồn tại!");
      return;
    }

    onAdd({ id: Date.now(), name, phone });
    setName("");
    setPhone("");
    setError("");
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-green-700 font-semibold mb-2">Thêm liên hệ mới</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Tên liên hệ"
          value={name}
          onChange={e => setName(e.target.value)}
          className="shadow-2xl rounded p-2 flex-1"
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="shadow-2xl rounded p-2 flex-1"
        />
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
          Thêm
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
