import React, { useState,useEffect } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const [filteredContacts, setFilteredContacts] = useState([]);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const searchContacts = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const contacts = props.contacts;

    const filteredContacts = contacts.filter((contact) => {
      return contact.firstname.toLowerCase().includes(searchQuery);
    });

    setFilteredContacts(filteredContacts);
    props.onFilterChange(filteredContacts);
  };

  useEffect(() => {
    setFilteredContacts(props.contacts);
  }, [props.contacts]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by First Name"
        onChange={searchContacts}
        style={{ width: "60%", padding: "10px", fontSize: "16px" }}
      />
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={deleteConactHandler}
            editHandler={props.setEditContact}
          />
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default ContactList;