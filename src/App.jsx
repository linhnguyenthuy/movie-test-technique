import { useState } from "react";
import data from "./assets/data.json";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
console.log(data);
function App() {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <>
      <div style={{ display: "flex", gap: `10px`, zIndex: `-1` }}>
        {data.map((movie, index) => {
          return (
            <div key={index}>
              <button
                style={{
                  width: `150px`,
                  height: `50px`,
                  backgroundColor: `black`,
                  color: `white`,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: `10px`,
                }}
                onClick={() => {
                  setSelectedMovie(movie);
                  setBackgroundImage(movie.background);
                }}
              >
                <h1 key={index}>{movie.name}</h1>
              </button>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "80vh",
          objectPosition: `top`,
          borderRadius: `10px`,
          zIndex: `-1`,
        }}
      >
        {selectedMovie === null ? (
          <div style={{ justifyContent: "center" }}>
            <h2
              style={{
                width: `150px`,
                height: `50px`,
                backgroundColor: `black`,
                color: `white`,
                marginTop: `10vh`,
                borderRadius: `10px`,
                textAlign: `center`,
                paddingTop: `20px`,
              }}
            >
              PLEASE CHOOSE A FILM
            </h2>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                gap: `10px`,
              }}
            >
              {selectedMovie.actors.map((actor, actorIndex) => {
                return (
                  <div key={actorIndex}>
                    <p style={{ color: `white` }}>{actor.name}</p>
                    <img
                      src={actor.picture}
                      alt=""
                      style={{
                        width: `15vh`,
                        height: `15vh`,
                        objectFit: `cover`,
                        objectPosition: `top`,
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => window.location.reload()}
        style={{ display: `flex`, justifyContent: "center" }}
      >
        Back
      </button>
    </>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
