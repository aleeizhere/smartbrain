import React from "react";
import "./facerecognition.css";

const FaceRecognition = ({ imageurl, box }) => {
  return (
    <div className="center ma">
      <div className="mt2 relative">
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            right: box.rightCol,
            left: box.leftCol,
          }}
        ></div>
        <img
          src={imageurl}
          alt=""
          width="500px"
          height="auto"
          id="inputimage"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
