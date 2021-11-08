import { useEffect, useState } from "react";

const URL = "https://www.swapi.tech/api/";


export const Fetch_Characters = () => {
  const [state, setState] = useState();
  useEffect(() => {
    fetch(URL + "people")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return state;
};

export const Fetch_Planets = () => {
    const [state, setState] = useState()
    useEffect(() => {
        fetch(URL + "planets")
        .then((res)=> res.json())
        .then((data) => {
            setState(data)
            console.log(data);
        })
    }, [])
    return state
}

export const Fetch_Vehicles = () => {
    const [state, setState] = useState()
    useEffect(() => {
        fetch(URL + "vehicles")
        .then(res => res.json())
        .then(data => {
            setState(data)
            console.log(data);
        })
    }, [])
    return state
}
