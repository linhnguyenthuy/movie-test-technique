import { useState } from "react";
import data from "./assets/data.json";

import "./App.css";
console.log(data);
function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "80vh",
        }}
      >
        {selectedMovie === null ? (
          <>
            {data.map((movie, index) => {
              return (
                <div key={index}>
                  <div>
                    <button
                      onClick={() => {
                        setSelectedMovie(movie);
                        setBackgroundImage(movie.background);
                      }}
                    >
                      <h1 key={index}>{movie.name}</h1>
                    </button>
                  </div>
                </div>
              );
            })}
            <button style={{ width: `150px`, height: `50px` }}>
              <h2>PLEASE CHOOSE A FILM</h2>
            </button>
          </>
        ) : (
          <>
            {data.map((movie, index) => {
              return (
                <div key={index}>
                  <div>
                    <button
                      onClick={() => {
                        setSelectedMovie(movie);
                        setBackgroundImage(movie.background);
                      }}
                    >
                      <h1 key={index}>{movie.name}</h1>
                    </button>
                  </div>
                  {/* {selectedMovie.name === movie.name && (
                  <>
                    <div
                      className="movieimage"
                      style={{
                        display: "flex",
                        position: "relative",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {movie.actors.map((actor, actorIndex) => {
                        return (
                          <div key={actorIndex}>
                            <p style={{ color: "white" }}>{actor.name}</p>
                            <img
                              src={actor.picture}
                              alt=""
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                objectPosition: "50% 0%",
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </>
                )} */}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default App;
