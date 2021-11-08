import { useEffect, useState } from "react";

const URL = "https://www.swapi.tech/api/";


export const Fetch_Characters = () => {
  const [state, setState] = useState([]);
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
