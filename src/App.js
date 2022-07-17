import "./App.css";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/Imagelinkform/ImageLinkForm";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const options = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const USER_ID = "dev2io7673je";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "feda33b651984b5c887c4986b00e9d2f";
const APP_ID = "7824f90f89c24ec4b45d75a256925b13";
const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";
// Change this to whatever image URL you want to process
// const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
/*
const onSearchChange = (event) => {
  console.log(event.target.value);
};
*/

function App() {
  let [imageurl, setimageurl] = useState("");
  let [searchinput, setsearchinput] = useState("");
  let [boxarr, setboxarr] = useState([]);

  function calculatefacelocation(data) {
    const clarifaidata = data;
    const image = document.getElementById("inputimage");
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaidata.left_col * width,
      topRow: clarifaidata.top_row * height,
      rightCol: width - clarifaidata.right_col * width,
      bottomRow: height - clarifaidata.bottom_row * height,
    };
  }

  const onsearchchange = (event) => {
    setsearchinput(event.target.value);
  };
  const onButtonSubmit = () => {
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////
    setimageurl(searchinput);
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: searchinput, //we could have passed the imageurl here but that is giving us the error that's why imageurl is used just for
              //displaying the image.
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let regionsarr = JSON.parse(result).outputs[0].data.regions.map(
          (regions) => {
            return calculatefacelocation(regions.region_info.bounding_box);
          }
        );
        //[0].data.regions[0].region_info.bounding_box
        setboxarr(regionsarr);
      })
      .catch((error) => console.log("error", error));
  };

  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Navigation />

      <ImageLinkForm
        onButtonSubmit={onButtonSubmit}
        onsearchchange={onsearchchange}
      />

      <FaceRecognition imageurl={imageurl} boxarr={boxarr} />
    </div>
  );
}

export default App;
