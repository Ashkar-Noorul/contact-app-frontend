import React , {useRef} from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

function ContactList(props) {
  console.log(props);
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>;
  });

  const getSearchTerm =()=>{
    props.searchKeyword(inputEl.current.value);
  }
  return (
    <>
      <h2 style={{ textAlign: "center"}}>
        Contact List       
      </h2>
      <div className='ui search'>
        <div className='ui icon input'>
          <input ref={inputEl} type="text" placeholder='search Contacts' className='prompt' value={props.term} onChange={getSearchTerm}/>
          <i className='search icon'></i>
        </div>
      </div>
      <Link to="/add"><button className='ui button blue right'>Add Contact</button></Link>
      
      <div className='ui celled list'>{renderContactList.length>0 ? renderContactList: "No contacts available"}</div>
    </>

  );
}

export default ContactList