import React from "react";
import "./facerecognition.css";

const FaceRecognition = ({ imageurl, boxarr }) => {
  let i = 0;
  return (
    <div className="mycenter">
      <div className="mt2 relative">
        {boxarr.map((box) => {
          return (
            <div
              key={i++}
              className="bounding-box"
              style={{
                top: box.topRow,
                bottom: box.bottomRow,
                right: box.rightCol,
                left: box.leftCol,
              }}
            ></div>
          );
        })}

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
