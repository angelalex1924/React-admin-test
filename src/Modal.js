import React, { useState } from 'react';
import './Modal.css'; // Import the CSS file for styling

const Modal = ({ handleClose, show, handleSave }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [newQuizTitle, setNewQuizTitle] = useState('');

  const saveAndClose = () => {
    handleSave(newQuizTitle);
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h2 className='modal-title'>Add new Quiz</h2>
        <input
          type='text'
          className='quiz-input'
          placeholder='Enter New Quiz Title'
          value={newQuizTitle}
          onChange={(e) => setNewQuizTitle(e.target.value)}
        />
        <button onClick={saveAndClose} className='save-btn'>Save</button>
        <button onClick={handleClose} className='close-btn'>Close</button>
      </section>
    </div>
  );
};

export default Modal;
