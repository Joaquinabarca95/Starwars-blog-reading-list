import React, { useContext, useEffect } from 'react'
import AppContext from '../appcontext/AppContext';
import PlanetCard from './PlanetCard';

const Planets = () => {

    const { planets, toggleFavoritesPlanets, favorites} = useContext(AppContext)
    useEffect(() => {
    }, [planets])
    return (
        <>
         <div className="container-fluid">
        <div className="card-container">
          <div className="title">
            <h3>Planets</h3>
          </div>
          <div className="card-list">
              <ul>
            {planets ?
              planets.results.map((planet, index) => {
                return <PlanetCard key={index} name={planet.name} url={planet.url} toggleFavoritesPlanets={toggleFavoritesPlanets} favorites={favorites}/>;
              }): "Loading..."}
              </ul>
          </div>
        </div>
      </div>   
        </>
    )
}

export default Planets
