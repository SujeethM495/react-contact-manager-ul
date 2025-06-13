import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const addContactHandler = (contact) => {
    if (editContact) {
      setContacts(
        contacts.map((c) => (c.id === editContact.id ? { ...contact, id: editContact.id } : c))
      );
      setEditContact(null);
    } else {
      setContacts([...contacts, { id: uuidv4(), ...contact }]);
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem('contacts', JSON.stringify(newContactList));
  };

  const handleFilterChange = (filteredContacts) => {
    // You can use the filteredContacts here if you need to
  };

  return (
    <div className="ui container">
      <h2>Contact Manager</h2>
      <AddContact addContactHandler={addContactHandler} editContact={editContact} contacts={contacts} />
      <ContactList
        contacts={contacts}
        getContactId={removeContactHandler}
        setEditContact={setEditContact}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;