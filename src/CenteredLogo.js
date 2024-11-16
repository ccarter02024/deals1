import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import Search from './Search';
import './CenteredLogo.css'; // Assuming you have a separate CSS file for styles

const CenteredLogo = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);
    const openRegisterModal = () => setIsRegisterOpen(true);
    const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <div className="logo-wrapper">
        <Search />
        <div className="u-menu">
            <span onClick={openLoginModal}>Login</span>
            <span onClick={openRegisterModal}>Create Account</span>
        </div>
        <div className="logo-container">
            <img 
            src="./logotest.jpg"
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