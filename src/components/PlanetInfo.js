import React, { useContext } from 'react'
import AppContext from '../appcontext/AppContext';

const PlanetInfo = () => {
    const { informacionElemento } = useContext(AppContext);
    const style = {
        width: "600px",
        height: "400px",
      };
  
    return (
        <div className="container">
            <div className="cuerpo">

                <div className="informacion col-md-12 mb-5">
                    <h2>{informacionElemento.name}</h2>
                </div>
            
            <img
            style={style}
            src="https://via.placeholder.com/286"
            className="card-img-top"
            alt="..."
          />
            <div className="tabla">
                <table className="table text-danger">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Climate</th>
                            <th scope="col">Population</th>
                            <th scope="col">Orbital Period</th>
                            <th scope="col">Rotation Period</th>
                            <th scope="col">Diameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{informacionElemento.name}</td>
                            <td>{informacionElemento.climate}</td>
                            <td>{informacionElemento.population}</td>
                            <td>{informacionElemento.orbital_period}</td>
                            <td>{informacionElemento.rotation_period}</td>
                            <td>{informacionElemento.diameter}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default PlanetInfo
