import React from "react";

const Input = (props) => {
  return (
    <label className="popup__field" htmlFor={`${props.id}-input`}>
      <input {...props} className="popup__input" id={`${props.id}-input`} />
      <span className="popup__input-error" id={`${props.id}-input-error`} />
    </label>
  );
};

export default Input;