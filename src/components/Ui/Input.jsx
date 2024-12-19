import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      <label htmlFor={props.input.id} className="font-bold mr-4">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="w-12 rounded-md border border-gray-300 font-inherit pl-2"
      />
    </div>
  );
});

// PropTypes validation
Input.propTypes = {
  label: PropTypes.string.isRequired, // The label must be a string and is required
  input: PropTypes.shape({
    id: PropTypes.string.isRequired, // input id must be a string and required
    type: PropTypes.string.isRequired, // input type must be a string and required
    value: PropTypes.string.isRequired, // input value must be a string and required
  }).isRequired,
};

export default Input;
