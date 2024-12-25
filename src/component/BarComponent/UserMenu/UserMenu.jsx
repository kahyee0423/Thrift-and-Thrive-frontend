import React, { useState, useRef, useEffect } from 'react';
import './UserMenu.css';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ children }) => { 

  const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

   const goToUserLogin = () => {
      navigate('/UserLogin')
    }

    const goToUserSignUp = () => {
      navigate('/UserSignUp')
    }

     useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
              closeMenu();
            }
          };
          if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
      
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);

    return (
        <div className="userMenuContainer" ref={menuRef}>
            <div
                className="menuTrigger"
                onClick={toggleMenu}
                aria-haspopup="true"
                aria-expanded={isOpen}
                role="button"
            >
                {children} 
            </div>
            {isOpen && (
                 <div className="menuContainer" role="menu">
                 <button 
                    className="signInButton"
                    onClick={goToUserLogin}
                    role="menuitem"
                    tabIndex={0}
                 >
                 Sign in
                 </button>
            
                 <button 
                     className="createAccountButton"
                     onClick={goToUserSignUp}
                     role="menuitem"
                    tabIndex={0}
                >
                Create an account
                </button>
            
                <hr className="divider" />
            
                <a 
                   href="/AdminLogin"
                   className="adminLink"
                   role="menuitem"
                   tabIndex={0}
                >
                   Sign in as Admin
                 </a>
                 </div>
                
            )}
        </div>
    );
}

export default UserMenu;