import { useState } from "react";
import type { Contact } from "./ContactApp";
import ConfirmModal from "./ConfirmModal";

interface Props {
  contact: Contact;
  onDelete: (id: number) => void;
  onUpdate: (contact: Contact) => void;
}

export default function ContactItem({ contact, onDelete }: Props) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <>
      <tr>
        <td className=" p-2">{contact.name}</td>
        <td className=" p-2">{contact.phone}</td>
        <td className=" p-2 flex gap-2 justify-center">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Sửa</button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => setIsConfirmOpen(true)}
          >
            Xóa
          </button>
        </td>
      </tr>
      {isConfirmOpen && (
        <ConfirmModal
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={() => {
            onDelete(contact.id);
            setIsConfirmOpen(false);
          }}
        />
      )}
    </>
  );
}
