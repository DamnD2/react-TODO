import PropTypes from 'prop-types';

const Icon = (props) => {
  const { src } = props;

  return <img src={src} alt='icon' />;
};

export default Icon;

Icon.propTypes = { src: PropTypes.string.isRequired };
