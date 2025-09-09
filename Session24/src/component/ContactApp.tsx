import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";


export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function ContactApp() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Nguyễn Văn A", phone: "0912345678" },
    { id: 2, name: "Trần Thị B", phone: "0987654321" },
    { id: 3, name: "Lê Văn C", phone: "0901234567" },
  ]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updated: Contact) => {
    setContacts(contacts.map(c => (c.id === updated.id ? updated : c)));
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center bg-green-600 text-white py-5 rounded">
        📒 Quản Lý Liên Hệ
      </h1>
      <ContactForm contacts={contacts} onAdd={addContact} onUpdate={updateContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} onUpdate={updateContact} />
    </div>
  );
}
