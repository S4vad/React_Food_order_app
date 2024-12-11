import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="p-4 shadow-md rounded-xl bg-white">
      {props.children}
    </div>
  );
};

// Add PropTypes validation
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
