import React, { useContext, useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import AppContext from "../appcontext/AppContext";

const Characters = () => {
  const { characters, toggleFavoritesCharacters, favorites, toggleInformacionElemento} = useContext(AppContext);

  // useEffect(() => {
  // }, [characters]);
  return (
    <>
      <div className="container-fluid">
        <div className="card-container">
          <div className="title">
            <h3>Characters</h3>
          </div>
          <div className="card-list">
              <ul>
            {characters ?
              characters.results.map((character, index) => {
                return <CharacterCard key={index} name={character.name} url={character.url} toggleFavoritesCharacters={toggleFavoritesCharacters} favorites={favorites} toggleInformacionElemento={toggleInformacionElemento}/>;
              }) : "Loading..."}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
