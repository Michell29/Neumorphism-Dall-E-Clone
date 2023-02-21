import React from "react";
import PropTypes from "prop-types";

function FormField({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor={name} className="block text-xl text-gray-500">
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-bold tex-gray-200 bg-gray-400 text-sm py-1 shadow-neumorphismlight px-4 rounded-md text-gray-200"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="shadow-neumorphismlightinset text-gray-400 text-sm rounded-xl placeholder:text-gray-400 outline-none block w-full p-3"
      />
    </div>
  );
}

FormField.propTypes = {
  LabelName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  isSurpriseMe: PropTypes.bool,
  handleSurpriseMe: PropTypes.func,
};

export default FormField;
