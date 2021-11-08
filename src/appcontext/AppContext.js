import React, { createContext, useState } from 'react'
import { Fetch_Characters, Fetch_Planets, Fetch_Vehicles } from './fetch/Fetch';

const AppContext = createContext();

const userFavorites = {
    favoriteCharacters: [],
    favoritePlanets: [],
    favoriteVehicles: []
}

export const ContextWrapper = ({children}) => {
    const characters = Fetch_Characters()
    const planets = Fetch_Planets()
    const vehicles = Fetch_Vehicles()
    const [favorites, setFavorites] = useState(userFavorites)

    const toggleFavoritesCharacters = (characterName) => {
        const isFavorite = favorites.favoriteCharacters.includes(characterName)
        const favoriteCharacters = isFavorite ? favorites.favoriteCharacters.filter(favoriteCharacter => favoriteCharacter !== characterName) : [...favorites.favoriteCharacters, characterName]
        setFavorites({...favorites, favoriteCharacters})
    }

    const toggleFavoritesPlanets = (planetName) => {
        const isFavorite = favorites.favoritePlanets.includes(planetName)
        const favoritePlanets = isFavorite ? favorites.favoritePlanets.filter(favoritePlanet => favoritePlanet !== planetName) : [...favorites.favoritePlanets, planetName]
        setFavorites({...favorites, favoritePlanets})
    }

    const toggleFavoritesVehicles = (vehicleName) => {
        const isFavorite = favorites.favoriteVehicles.includes(vehicleName)
        const favoriteVehicles = isFavorite ? favorites.favoriteVehicles.filter(favoriteVehicle => favoriteVehicle !== vehicleName) : [...favorites.favoriteVehicles, vehicleName]
        setFavorites({...favorites, favoriteVehicles})
    }

    const data = {characters, planets, vehicles, toggleFavoritesCharacters, favorites, toggleFavoritesPlanets, toggleFavoritesVehicles}
    

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext
