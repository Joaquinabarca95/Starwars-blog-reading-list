import React, { useContext } from "react";
import AppContext from "../appcontext/AppContext";
import logo from "../img/starwars-logo.png";

const Navbar = () => {

  const {favorites, toggleFavoritesCharacters} = useContext(AppContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid edit-navbar">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="StarWars Logo" height="50px" width="90px" />
          </a>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <div className="favorites">

                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Favorites 
                  <div className="cantidad-favoritos">
                  {favorites.favoriteCharacters.length + favorites.favoritePlanets.length + favorites.favoriteVehicles.length}
                  </div>
                </a>
                  </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li> 
                    <div className="favorites-container">
                      {!favorites ? favorites.favoriteCharacters.map((name) =>                        
                        <>
                        <a className="dropdown-item" href="/">{name}</a> 
                        <i className="far fa-trash-alt" onClick={() => toggleFavoritesCharacters(name)}></i>
                        </>                    
                        ) : "(empty)"}      
                        </div>   
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
