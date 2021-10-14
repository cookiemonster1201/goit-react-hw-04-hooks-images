import { useEffect } from 'react';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import s from 'components/ImageGallery/ImageGallery.module.css';

import PropTypes from 'prop-types';
export default function ImageGalleryList({
  images,
  trackScroll,
  handleOpenModal,
}) {
  const { gallery } = s;

  useEffect(() => {
    window.addEventListener('scroll', trackScroll);
    return window.removeEventListener('scroll', trackScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={gallery} onClick={handleOpenModal}>
      {images &&
        images.map(image => <ImageGalleryItem key={image.id} image={image} />)}
    </ul>
  );
}

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  showImages: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};
