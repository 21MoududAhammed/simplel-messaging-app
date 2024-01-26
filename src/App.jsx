import { useState } from "react";
import Chat from "./components/Chat";
import ContactList from "./components/ContactList";

export default function App() {
  const [contact, setContact] = useState({
    id: 0,
    name: "Mr..",
    email: "mr...",
    message: "",
  });
  const handleSelectUser = (id) => {
    const contact = contacts.find((user) => user.id === id);
    setContact(contact);
  };
  const handleMessage = (contact) => {
    setContact(contact);
  };
  const handleClearTextarea =()=>{
    setContact({...contact, message: ''});
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      <ContactList contacts={contacts} onSelect={handleSelectUser} />
      <Chat contact={contact} onMessage={handleMessage} onClearTextarea={handleClearTextarea} />
    </div>
  );
}

const contacts = [
  { id: 1, name: "User 1", email: "user1@gmail.com" },
  { id: 2, name: "User 2", email: "user2@gmail.com" },
  { id: 3, name: "User 3", email: "user3@gmail.com" },
];
