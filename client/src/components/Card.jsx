import React from "react";
import PropTypes from "prop-types";

import { download } from "../assets";
import { downloadImage } from "../utils";

function Card({ _id, name, prompt, photo }) {
  return (
    <div className="p-2 rounded-xl flex flex-col justify-center items-center group shadow-neumorphismlight card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex w-full flex-col max-h-[92%] m-2 p-4">
        <p className="text-md overflow-y-auto prompt text-gray-500">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-violet-500 object-cover text-white text-xs font-bold flex items-center justify-center rounded-full">
              {name[0]}
            </div>
            <p className="text-gray-400 text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="bg-blue-400 p-1 rounded-full outline-none border-none"
          >
            <img
              src={download}
              alt="download"
              className="h-6 w-6 object-contain invert"
            />
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
