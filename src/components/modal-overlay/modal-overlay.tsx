import React, { FunctionComponent } from 'react';
import stylesModalOverlay from './modal-overlay.module.css';

interface IModalOverlayProps {
  onClick: () => void;
}

const ModalOverlay: FunctionComponent<IModalOverlayProps> = ({ onClick }) => {
  return <div className={ stylesModalOverlay.modalOverlay } onClick={onClick}></div>;
};

export default ModalOverlay;
