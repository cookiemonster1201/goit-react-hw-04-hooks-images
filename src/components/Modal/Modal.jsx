import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from 'components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  closeModal,
  handleGalleryNav,
  imgIdx,
  children,
  images,
}) {
  const { modal, overlay } = s;

  useEffect(() => {
    window.addEventListener('keydown', onGalleryNav);
    return () => {
      window.removeEventListener('keydown', onGalleryNav);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGalleryNav = ({ code }) => {
    console.log(imgIdx, 'this id');
    switch (code) {
      case 'Escape':
        closeModal();
        break;

      case 'ArrowRight':
        if (imgIdx >= images.length - 1) {
          return;
        }
        handleGalleryNav(++imgIdx);
        break;

      case 'ArrowLeft':
        if (imgIdx <= 0) {
          return;
        }
        handleGalleryNav(--imgIdx);
        break;

      default:
        toast.info('Press ESC to exit');
    }
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={overlay} onClick={handleBackdropClick}>
      <div className={modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleGalleryNav: PropTypes.func.isRequired,
  imgIdx: PropTypes.number.isRequired,
};
