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
            className="font-bold bg-gradient-to-r from-[#a7baba] to-[#c6dddd] hover:shadow-neumorphismlightinset text-gray-500 text-sm py-1 shadow-neumorphismlightbutton px-4 rounded-md text-gray-200"
          >
            Sorprendeme
          </button>
        )}
      </div>
      <input
        autoComplete="off"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="shadow-neumorphismlightinset px-5 text-gray-500 text-sm rounded-xl placeholder:text-gray-500 outline-none block w-full p-3"
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
