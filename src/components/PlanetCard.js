import React, { useEffect, useState } from 'react'

const PlanetCard = ({name, url, toggleFavoritePlanets, favorites}) => {


    const isFavorite = favorites.favoritePlanets.incldues(name)

    const style = {
      width: "20rem",
      height: "35rem"
      };
    
      const [planetInfo, setPlanetInfo] = useState()
      useEffect(()=> {
       fetch(url)
       .then(response => response.json())
       .then(data => setPlanetInfo(data.result.properties))
       .catch(err => console.log(err))
      }, [planetInfo])

    return (
        <>
            
              <li>
                <div className="card" style={style}>
                  <img src="https://via.placeholder.com/286" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                      {planetInfo ? (
                        <>
                        <p>Population: {planetInfo.population}</p>
                        <p>Terrain: {planetInfo.terrain}</p>
                        </>
                      ) : "Loading..."}
                    </p>
                    <div className="card-footer-info">        
                    <a href="/" className="btn btn-primary">
                      More Details...
                    </a>
                    <a onClick={() => toggleFavoritePlanets(name)} className="btn btn-outline-warning">{isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</a>
                    </div>
                  </div>
                </div>
              </li>
            
          
        </>
    )
}

export default PlanetCard
