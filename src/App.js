// src/App.js
import React from "react";
import "./App.css";
import { useState } from "react";
import contactList from "./contacts.json";
// import AddRandomContact from "./AddRandomContact";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));
  /////////////////////////////////////////////////////////////////////
  function deleteOnClick(id) {
    setContacts((curr) => [
      ...curr.filter((contact) => {
        return contact.id !== id;
      }),
    ]);
  }
  /////////////////////////////////////////////////////////////////////
  function sortPopClick() {
    setContacts((currentState) => [
      ...currentState.sort((a, b) => b.popularity - a.popularity),
    ]);
  }
  /////////////////////////////////////////////////////////////////////
  function sortNameClick() {
    setContacts((currentState) => [
      ...currentState.sort((a, b) => a.name.localeCompare(b.name)),
    ]);
  }

  /////////////////////////////////////////////////////////////////////
  function handleClick() {
    function NewContact() {
      let newContact =
        contactList[Math.floor(Math.random() * contactList.length)];
      return contacts.includes(newContact) ? NewContact() : newContact;
    }
    setContacts((currentState) => [NewContact(), ...currentState]);
  }

  /////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <div className="container-small">
        <h1>IronContacts</h1>
        {/* <AddRandomContact /> */}
        <button
          className="btn-primary border-none p-5 ml-5"
          onClick={handleClick}
        >
          {" "}
          Add Random Contact
        </button>
        <button
          className="btn-primary border-none p-5 ml-5 "
          onClick={sortPopClick}
        >
          {" "}
          Sort by Popularity
        </button>
        <button
          className="btn-primary border-none p-5 ml-5"
          onClick={sortNameClick}
        >
          {" "}
          Sort by Name
        </button>

        <table>
          <thead className="thead">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="some alt" height="120px" />
                </td>
                <td>
                  <h2>{contact.name}</h2>
                </td>
                <td>
                  <h3>{contact.popularity}</h3>
                </td>
                <td>
                  <h2>{contact.wonOscar === true && <p>🏆</p>}</h2>
                </td>
                <td>
                  <h2>{contact.wonEmmy && <p>🏆</p>}</h2>
                </td>
                <td cla>
                  <h2>
                    <button
                      className="btn-danger mr-5 border-none p-5 ml-5"
                      onClick={() => deleteOnClick(contact.id)}
                    >
                      Delete
                    </button>
                  </h2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <AddRandomContact /> */}
      </div>
    </div>
  );
}
export default App;
