import type { Contact } from "./ContactApp";
import ContactItem from "./ContactItem";

interface Props {
  contacts: Contact[];
  onDelete: (id: number) => void;
  onUpdate: (contact: Contact) => void;
}

export default function ContactList({ contacts, onDelete, onUpdate }: Props) {
  return (
    <div className="bg-white p-4 rounded mt-6 shadow">
      <h2 className="text-green-700 font-semibold mb-3">Danh sách liên hệ</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className=" p-2">Tên liên hệ</th>
            <th className=" p-2">Số điện thoại</th>
            <th className=" p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
