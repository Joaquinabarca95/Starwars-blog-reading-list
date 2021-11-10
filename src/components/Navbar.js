import React, { useContext, useState } from "react";
import AppContext from "../appcontext/AppContext";
import logo from "../img/starwars-logo.png";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { favorites, toggleFavoritesCharacters, toggleFavoritesPlanets, toggleFavoritesVehicles } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid edit-navbar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="StarWars Logo" height="50px" width="90px" />
          </Link>
          <Dropdown isOpen={isOpen} toggle={toggleIsOpen} direction="left">
            <DropdownToggle className="dropdown_btn">
              <div className="favorites-wrapper">
                <div className="favorites">Favorites</div>
                <div className="cantidad-favoritos">
                  {favorites.favoriteCharacters.length +
                    favorites.favoritePlanets.length +
                    favorites.favoriteVehicles.length}
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu>
              {favorites.favoriteCharacters.map((name) => (
                <DropdownItem key={name}>
                  <div className="favorite-global-container">
                    <div className="favorite-element">{name}</div>
                    <div className="delete-favorite-element">
                      <i
                        className="far fa-trash-alt"
                        onClick={() => toggleFavoritesCharacters(name)}
                      ></i>
                    </div>
                  </div>
                </DropdownItem>
              ))}
              {favorites.favoritePlanets.map((name) => (
                <DropdownItem key={name}>
                  <div className="favorite-global-container">
                    <div className="favorite-element">{name}</div>
                    <div className="delete-favorite-element">
                      <i
                        className="far fa-trash-alt"
                        onClick={() => toggleFavoritesPlanets(name)}
                      ></i>
                    </div>
                  </div>
                </DropdownItem>
              ))}
              {favorites.favoriteVehicles.map((name) => (
                <DropdownItem key={name}>
                  <div className="favorite-global-container">
                    <div className="favorite-element">{name}</div>
                    <div className="delete-favorite-element">
                      <i
                        className="far fa-trash-alt"
                        onClick={() => toggleFavoritesVehicles(name)}
                      ></i>
                    </div>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
