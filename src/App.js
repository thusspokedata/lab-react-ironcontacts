import { useState } from "react";

import "./App.css";
import contactList from "./contacts.json";

import { NewContact, SortByName, SortByPop, Table } from "./components";


function App() {
  
  const [contacts, setContacts] = useState(contactList.slice(0, 5));

  return (
    <div className="App">
      <div className="container-small">
        <div className="mb-4">
          <h1>IronContacts</h1>

          <NewContact setContacts={setContacts} contactList={contactList} contacts={contacts}/>
          <SortByPop setContacts={setContacts} />
          <SortByName setContacts={setContacts} />


        </div>
        <Table contacts={contacts} setContacts={setContacts}/>
      </div>
    </div>
  );
}
export default App;
