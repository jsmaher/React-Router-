import React from 'react';
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div >
    <h1>Contact</h1>
    <Link to="/">Home</Link>
      <br />
      <br />
      <Link to="/about">About</Link>
      <br />
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <br />

     <Link to="/Contact">Contact</Link>
  </div>

  );
}

export default Contact;