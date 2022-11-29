import React from 'react'

export const NewContact = ({setContacts, contactList, contacts}) => {

    function handleClick() {
        function NewContact() {
          let newContact =
            contactList[Math.floor(Math.random() * contactList.length)];
          return contacts.includes(newContact) ? NewContact() : newContact;
        }
        setContacts((currentState) => [NewContact(), ...currentState]);
      }
      
  return (
    <button
        className="btn-primary border-none p-5 ml-5"
        onClick={handleClick}
    >
        {" "}
        Add Random Contact
    </button>
  )
}
