import React, { useContext } from 'react'
import AppContext from '../appcontext/AppContext';

const VehicleInfo = () => {

    const {informacionElemento}= useContext(AppContext);
    const style = {
        width: "800px",
        height: "600px",
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
                            <th scope="col">Model</th>
                            <th scope="col">Cargo Capacity</th>
                            <th scope="col">Crew</th>
                            <th scope="col">Length</th>
                            <th scope="col">Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{informacionElemento.name}</td>
                            <td>{informacionElemento.model}</td>
                            <td>{informacionElemento.cargo_capacity}</td>
                            <td>{informacionElemento.crew}</td>
                            <td>{informacionElemento.length}</td>
                            <td>{informacionElemento.vehicle_class}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default VehicleInfo
