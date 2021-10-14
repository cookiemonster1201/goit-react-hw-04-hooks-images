import PropTypes from 'prop-types';
import s from 'components/Button/Button.module.css';
export default function Button({ onClick }) {
  const { button } = s;
  return (
    <button type="button" className={button} onClick={onClick}>
      <span>Show more</span>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
