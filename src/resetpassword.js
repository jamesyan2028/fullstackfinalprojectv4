import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import {collection, addDoc, deleteDoc, doc, getDocs, where, query, updateDoc} from "firebase/firestore";
import { db } from './firebaseinit';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      setError(null);
      setSuccess(null);

      try {
        // Query Firestore to find the document with the provided email
        const q = query(
            collection(db, 'logininfo'),
            where('email', '==', email)
        );
        
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If the query returns documents, update the password
            querySnapshot.forEach(async (docSnapshot) => {
                // Get the document reference
                const docRef = doc(db, 'logininfo', docSnapshot.id);
                
                // Update the document with the new password
                await updateDoc(docRef, { password: password });

                setSuccess('Password reset successfully.');
                setEmail('');
                setPassword('');
            });
        } else {
            // If no documents match, display error
            setError('No account associated with that email.');
        }
    } catch (e) {
        console.error('Error resetting password: ', e);
        setError('Error resetting password. Please try again.');
    }
};

    

  return (
    <div>
      <h4>Reset Password</h4>
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
          <label htmlFor="New Password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}


export default ResetPassword;