import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VehicleCard = ({ name, url, toggleFavoritesVehicles, favorites }) => {
  const isFavorite = favorites.favoriteVehicles.includes(name);

  const style = {
    width: "20rem",
    height: "35rem",
  };

  const [vehicleInfo, setVehicleInfo] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVehicleInfo(data.result.properties))
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
          {vehicleInfo ? (
            <>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <p>Model: {vehicleInfo.model}</p>
                  <p>Manufacturer: {vehicleInfo.manufacturer}</p>
                </p>
                <div className="card-footer-info">
                  <Link to="/vehicles" className="btn btn-primary">
                    More Details...
                  </Link>
                  <a
                    onClick={() => toggleFavoritesVehicles(name)}
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

export default VehicleCard;
