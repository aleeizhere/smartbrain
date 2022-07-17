import React from "react";
import "./imagelink.css";
import Rank from "../rank/Rank";
const ImageLinkForm = ({ onButtonSubmit, onsearchchange }) => {
  return (
    <>
      <div className="center">
        <Rank />
        <p className="tc">This app will detect faces in your images</p>
        <div className="formcontainer flex">
          <input
            className="f5 pa2 w-90"
            type="text"
            onChange={onsearchchange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib black bg-light"
            onClick={onButtonSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
