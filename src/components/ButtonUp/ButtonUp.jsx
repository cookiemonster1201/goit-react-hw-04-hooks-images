import classNames from 'classnames';
import PropTypes from 'prop-types';
import buttonUp from './up-arrow.png';
import s from 'components/ButtonUp/ButtonUp.module.css';

export default function ButtonUp({ onClick, isVisible }) {
  const { button, visible } = s;
  return (
    <button
      type="button"
      className={isVisible ? classNames(button, visible) : button}
      onClick={onClick}
    >
      <img src={buttonUp} alt="go up" />
    </button>
  );
}

ButtonUp.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
