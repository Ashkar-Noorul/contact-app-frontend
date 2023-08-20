import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import './components/App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import api from "./api/contacts";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  //retrieve contacts
  const retrieveContacts = async()=>{
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const getAllContacts = async()=>{
      const allContacts = await retrieveContacts();
      if(allContacts){
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler}></AddContact>}></Route>
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}></ContactList>}></Route>
          <Route path='/contact/:id' element={<ContactDetails></ContactDetails>}></Route>
          

        </Routes>

      </Router>

    </div>
  );
}

export default App;
