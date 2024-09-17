import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import {collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from './firebaseinit';

const CreateNewLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      setError(null);
      setSuccess(null);

    try {
    // Create a new document in Firestore with email and password fields
        const docRef = await addDoc(collection(db, 'logininfo'), {
            email: email,
            password: password
        });
        console.log('Document written with ID: ', docRef.id);
        setSuccess('Login info successfully submitted!');
        setEmail('');
        setPassword('');
    } catch (e) {
        console.error('Error adding document: ', e);
        setError('Error submitting login info.');
    };
    }
  return (
    <div>
      <h4>Create New Login</h4>
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
    </div>
  );
};


export default CreateNewLogin;