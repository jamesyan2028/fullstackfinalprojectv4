import React, { useRef, useEffect } from 'react';
import './popup.css'; // Optional: For styling the popup
import larva from './oioioi.png';
import larvaaudio from './larvaaudio.mp3';




const Popup = ({ onClose }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Play the audio when the component mounts
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
    }, []);

      
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose}>Close</button>
        <img src={larva} className="App-logo" alt="logo" />
        <audio ref={audioRef}>
                    <source src={larvaaudio} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
      </div>
    </div>
  );
};

export default Popup;