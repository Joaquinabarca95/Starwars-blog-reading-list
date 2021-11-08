import React, { useEffect, useState } from 'react'

const CharacterCard = ({name, url, toggleFavoritesCharacters, favorites}) => {


    const isFavorite = favorites.favoriteCharacters.includes(name)

    const style = {
        width: "20rem",
        height: "35rem"
      };
    
      const [characterInfo, setCharacterInfo] = useState()
      useEffect(()=> {
       fetch(url)
       .then(response => response.json())
       .then(data => setCharacterInfo(data.result.properties))
       .catch(err => console.log(err))
      }, [characterInfo])

    return (
        <>
            
              <li>
                <div className="card" style={style}>
                  <img src="https://via.placeholder.com/286" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                      {characterInfo ? (
                        <>
                        <p>Gender: {characterInfo.gender}</p>
                        <p>Hair Color: {characterInfo.hair_color}</p>
                        <p>Eye: {characterInfo.eye_color}</p>
                        </>
                      ) : "Loading..."}
                    </p>
                    <div className="card-footer-info">        
                    <a href="/" className="btn btn-primary">
                      More Details...
                    </a>
                    <a onClick={() => toggleFavoritesCharacters(name)} className="btn btn-outline-warning">{isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</a>
                    </div>
                  </div>
                </div>
              </li>
            
          
        </>
    )
}

export default CharacterCard
