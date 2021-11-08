import React, { useContext, useEffect } from "react";
import AppContext from "../appcontext/AppContext";
import VehicleCard from "./VehicleCard";

const Vehicles = () => {
  const { vehicles, toggleFavoriteVehicles, favorites } = useContext(AppContext);

  useEffect(() => {}, [vehicles]);
  return (
    <>
      <div className="container-fluid">
        <div className="card-container">
          <div className="title">
            <h3>Vehicles</h3>
          </div>
          <div className="card-list">
            <ul>
              {vehicles ?
                vehicles.results.map((vehicle, index) => {
                  return (
                    <VehicleCard
                      key={index}
                      name={vehicle.name}
                      url={vehicle.url}
                      toggleFavoriteVehicles={toggleFavoriteVehicles}
                      favorites={favorites}
                    />
                  );
                }) : "Loading..."}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
