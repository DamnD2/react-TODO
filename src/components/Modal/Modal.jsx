/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button/Button';

const Modal = ({ onClick }) => {
  const [field, setField] = React.useState('');

  const onChange = (event) => {
    setField(event.target.value);
  };

  return (
    <div className='modal' onClick={() => onClick(event.target, field)}>
      <div className='modal__wrapper'>
        <div className='modal__title'>Title:</div>
        <textarea onChange={onChange} className='modal__field' />
        <Button styleType='modal-close'>Cancel</Button>
        <Button styleType='modal-save'>Save</Button>
      </div>
    </div>
  );
};

Modal.propTypes = { onClick: PropTypes.func.isRequired };

export default Modal;
