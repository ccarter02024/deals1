import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import './CenteredLogo.css'; // Assuming you have a separate CSS file for styles

const CenteredLogo = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);
    const openRegisterModal = () => setIsRegisterOpen(true);
    const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <div class="logo-wrapper">
        <div class="u-menu">
            <span onClick={openLoginModal}>Login</span>
            <span onClick={openRegisterModal}>Create Account</span>
        </div>
        <div className="logo-container">
            <img 
            src="./logo-z1.jpg"
            alt="Logo" 
            className="logo"
            />
        </div>
        {isLoginOpen && <LoginModal closeModal={closeLoginModal} />}
        {isRegisterOpen && <RegisterModal closeModal={closeRegisterModal} />}
      </div>
    );
    
}

export default CenteredLogo;