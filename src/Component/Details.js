import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Details.css";

function Details() {
  const location = useLocation();

  const [facts, setFacts] = useState([]);
  const [imgg, setImgg] = useState([]);
  const str = location.state;

  console.log(str);

  useEffect(() => {
    Axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1/" + str).then(
      (res) => {
        setImgg(res.data);
        setFacts(res.data.data);
      }
    );
  }, []);

  console.log(imgg);

  console.log(facts);

  return (
    <div class="container">
      <div class="wrapper">
        <div class="card-image">
          <img width="500px" src={imgg.img} alt="Anime-Image" />
        </div>

        {facts.map((fact) => {
          return <div class="anime-facts-description">{fact.fact}</div>;
        })}
      </div>
    </div>
  );
}

export default Details;
