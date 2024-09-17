import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import {collection, addDoc, deleteDoc, doc, getDocs, where, query} from "firebase/firestore";
import { db } from './firebaseinit';
import Popup from './popup2.js';

const LoginCheck = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      setError(null);
      setSuccess(null);

      try {
        // Query Firestore to check if a document with matching email and password exists
        const q = query(
          collection(db, 'logininfo'),
          where('email', '==', email),
          where('password', '==', password)
        );
        
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          // If the query returns documents, the login is successful
          setSuccess('Successful Login!');
          setIsPopupOpen(true); // Open the popup
          setEmail('');
          setPassword('');
        } else {
          // If no documents match, display error
          setError('Incorrect email or password.');
        }
      } catch (e) {
        console.error('Error checking login info: ', e);
        setError('Error checking login information. Please try again.');
      }
    };
    const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <h4>Log In</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isPopupOpen && <Popup onClose={closePopup} />} {/* Render the popup */}
    </div>
  );
}


export default LoginCheck;