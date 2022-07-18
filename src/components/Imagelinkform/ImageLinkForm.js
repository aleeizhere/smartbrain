import React from "react";
const ImageLinkForm = ({ onButtonSubmit, onsearchchange }) => {
  return (
    <>
      <p className="f2 mycenter mt5 tc">
        This app will detect faces in your images
      </p>
      <h5 className="tc navy f4 fw4 tracked-mega">Using Machine Learning</h5>
      <div className="mycenter">
        <div className="mycenter w-90 pad4 br3 flex-column flex-row-ns w-60-ns items-center">
          <input
            className="f5 pa2 w-100 mycenter w-80-ns"
            type="text"
            onChange={onsearchchange}
          />
          <button
            className="w-80 w4-ns grow f5 link ph3 pv2 dib black bg-light"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
