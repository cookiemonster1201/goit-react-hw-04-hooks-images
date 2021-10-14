import PropTypes from 'prop-types';
import s from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css';
export default function ImageGalleryItem({ image: { webformatURL, tags } }) {
  const { image, item } = s;
  return (
    <li className={item}>
      <img src={webformatURL} alt={tags} className={image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
