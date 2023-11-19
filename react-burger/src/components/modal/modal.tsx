import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from "./modal.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals');

interface IModalProps {
  children: ReactNode | '';
  onClose: () => void;
  header?: string;
}

const Modal: FunctionComponent<IModalProps> = ({
  children,
  onClose,
  header = '',
}) => {
  function onOverlayClick() {
    onClose();
  }

  const onPressEsc = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  React.useEffect(() => {
      document.addEventListener('keydown', onPressEsc);
    return () => {
      document.removeEventListener('keydown', onPressEsc);
    };
  }, [onPressEsc]);

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onOverlayClick} />
      <div className={styles.modal}>
        <div className={`${styles.modalHeading} mt-10 mr-10 ml-10`}>
          <h1 className={`${styles.label} text text_type_main-large`}>{header}</h1>
          <button className={styles.buttonClose} onClick={onClose}> <CloseIcon type="primary" /> </button>
        </div>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </>,
    modalRoot);
};

export default Modal;
