import React, { useContext } from 'react'
import AppContext from '../appcontext/AppContext'

const CharacterInfo = () => {

    const {informacionElemento} = useContext(AppContext)

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
                            <th scope="col">Birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Height</th>
                            <th scope="col">Skin Color</th>
                            <th scope="col">Eye Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{informacionElemento.name}</td>
                            <td>{informacionElemento.birth_year}</td>
                            <td>{informacionElemento.gender}</td>
                            <td>{informacionElemento.height}</td>
                            <td>{informacionElemento.skin_color}</td>
                            <td>{informacionElemento.eye_color}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default CharacterInfo
