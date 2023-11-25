import React from 'react';
import './LoginForm.css'; // Make sure this path is correct

function LoginForm() {
  return (
    <div className="signup-container">
      <input className="input-field" type="text" placeholder="First Name" />
      <input className="input-field" type="text" placeholder="Last Name" />
      <input className="input-field" type="email" placeholder="Email" />
      <input className="input-field" type="password" placeholder="Password" />
      <input className="input-field" type="password" placeholder="Confirm Password" />
      <div className="half-width-inputs">
        <input className="input-field half-input" type="text" placeholder="Program" />
        <input className="input-field half-input" type="text" placeholder="Grad Year" />
      </div>
      <button className="signup-button">Sign Up</button>
    </div>
  );
}

export default LoginForm;
