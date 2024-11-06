import PropTypes from 'prop-types';

export const Tangram = () => {
  // Tangram component implementation
};

Tangram.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
