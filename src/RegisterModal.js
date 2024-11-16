// RegisterModal.js
import React from 'react';
import UserReg from './UserReg';


const RegisterModal = ({ closeModal }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div className="userForm">
      <div className="overlay" onClick={handleBackgroundClick}>
        <div className="modal">
          <button onClick={closeModal} className="closeButton">X</button>          
          {/* Instead of the form, render the UserReg component */}
          <UserReg closeModal={closeModal} />

        </div>
      </div>
    </div>
  );
};

export default RegisterModal;