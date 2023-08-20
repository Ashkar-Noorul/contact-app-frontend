import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

function ContactList(props) {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>;
  });
  return (
    <>
      <h2 style={{ textAlign: "center"}}>
        Contact List       
      </h2>
      <Link to="/add"><button className='ui button blue right'>Add Contact</button></Link>
      
      <div className='ui celled list'>{renderContactList}</div>
    </>

  );
}

export default ContactList