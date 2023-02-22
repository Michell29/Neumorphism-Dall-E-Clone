import React from "react";
import PropTypes from "prop-types";

import { download } from "../assets";
import { downloadImage } from "../utils";

function Card({ _id, name, prompt, photo }) {
  return (
    <div className="p-2 h-auto rounded-xl flex flex-col justify-start items-center group shadow-neumorphismlight card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="flex w-full flex-col max-h-[92%] m-2 p-4">
        <p className="text-md prompt text-gray-500">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-violet-500 object-cover text-white text-xs font-bold flex items-center justify-center rounded-full">
              {name[0]}
            </div>
            <p className="text-gray-500 text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="shadow-neumorphismlightinset p-4 rounded-full outline-none border-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-500 bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  prompt: PropTypes.string,
  photo: PropTypes.string,
};

export default Card;
