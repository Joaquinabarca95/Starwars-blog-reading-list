import React, { useEffect, useState } from 'react'

const VehicleCard = ({name, url, toggleFavoriteVehicles, favorites}) => {

    const isFavorite = favorites.favoriteVehicles.includes(name)

    const style = {
      width: "20rem",
      height: "35rem"
    }

    const [vehicleInfo, setVehicleInfo] = useState()
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setVehicleInfo(data.result.properties))
        .catch(err => console.log(err))
    }, [vehicleInfo])

    return (
        <>
            <li>
                <div className="card" style={style}>
                  <img src="https://via.placeholder.com/286" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                      {vehicleInfo ? (
                        <>
                        <p>Model: {vehicleInfo.model}</p>
                        <p>Manufacturer: {vehicleInfo.manufacturer}</p>
                        </>
                      ) : "Loading..."}
                    </p>
                    <div className="card-footer-info">        
                    <a href="/" className="btn btn-primary">
                      More Details...
                    </a>
                    <a onClick={() => toggleFavoriteVehicles(name)} className="btn btn-outline-warning">{isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</a>
                    </div>
                  </div>
                </div>
              </li>
        </>
    )
}

export default VehicleCard
