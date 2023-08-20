import React from 'react';
import user from "../images/user.png";
import { Link } from 'react-router-dom';
import './App.css'

const ContactDetails = (props) => {
  return (
    <div className='main'>
      <div className='ui card centered'>
        <div className='image'>
          <img src={user} alt="user" />
        </div>
        <div className='content'>
          <div className='header'>Noorul</div>
          <div className='description'>noorulashkar007@gmail.com</div>
        </div>
      </div>
      <div className='App'>
        <Link to="/">
          <button className='ui button blue center'>
            Back to Contact List
          </button>
        </Link>
      </div>

    </div>
  )
}

export default ContactDetails