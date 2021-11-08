import React, { useContext, useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import AppContext from "../appcontext/AppContext";


const Characters = () => {

    const {characters} = useContext(AppContext)
    const [allCharacters, setAllCharacters] = useState([])
    useEffect(()=> {
        console.log(characters, "entre a characters");
    }, [characters])
  return (
    <>
      <div className="container-fluid">
        <div className="card-container">
          <div className="title">
            <h3>Characters</h3>
          </div>
          
          <CharacterCard />
        </div>
      </div>
    </>
  );
};

export default Characters;
