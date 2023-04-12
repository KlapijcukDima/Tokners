import React, { useState } from 'react';
import './Modal.scss';
import { ReactComponent as Menu } from '../../assets/images/svg/burger-menu.svg';
import { ReactComponent as Close } from '../../assets/images/svg/close_icon.svg';


export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="burger-button" onClick={toggleModal}>
        <div className="burger-icon">
          <Menu />
        </div>
      </button>
      <div className={`burger-modal ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleModal}>
              <Close className="close" />
        </button>
        <ul>
          <li>Our team</li>
          <li>Tokens</li>
          <li>Connect wallet</li>
          <li>Lightpaper</li>
        </ul>
      </div>
    </>
  );
};


