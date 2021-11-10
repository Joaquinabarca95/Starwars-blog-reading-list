import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlanetCard = ({ name, url, toggleFavoritesPlanets, favorites }) => {
  const isFavorite = favorites.favoritePlanets.includes(name);

  const style = {
    width: "20rem",
    height: "35rem",
  };

  const [planetInfo, setPlanetInfo] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanetInfo(data.result.properties))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <li>
        <div className="card" style={style}>
          <img
            src="https://via.placeholder.com/286"
            className="card-img-top"
            alt="..."
          />
          {planetInfo ? (
            <>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <p>Population: {planetInfo.population}</p>
                  <p>Terrain: {planetInfo.terrain}</p>
                </p>
                <div className="card-footer-info">
                  <Link to="/planets" className="btn btn-primary">
                    More Details...
                  </Link>
                  <a
                    onClick={() => toggleFavoritesPlanets(name)}
                    className="btn btn-outline-warning"
                  >
                    {isFavorite ? (
                      <i className="fas fa-heart"></i>
                    ) : (
                      <i className="far fa-heart"></i>
                    )}
                  </a>
                </div>
              </div>
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </li>
    </>
  );
};

export default PlanetCard;
