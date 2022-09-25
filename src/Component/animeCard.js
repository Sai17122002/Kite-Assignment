import React from "react";
import { useNavigate } from "react-router-dom";

import "./animeCard.css";

function AnimeCard(props) {
  const navigate = useNavigate();

  const detailsNavigate = () => {
    navigate("/det", { state: props.name });
  };

  const animeArr = [
    "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be",
    "You can't always hold on to the things that are important. By letting them go we gain something else",
    "People who can't throw something important away, can never hope to change anything",
    "An excellent leader must be passionate because it's their duty to keep everyone moving forward",
    "Protecting someone means giving them a place to belong. Giving them a place where they can be happy",
  ];

  console.log(props.icon);

  return (
    <div className="anime_card" id="tomb">
      <div className="info_section">
        <div
          style={{ backgroundImage: `url(${props.icon})` }}
          className="anime_header"
        ></div>
        <div className="anime_desc">
          <h1>{props.name}</h1>
          <p className="text">{animeArr[Math.floor(Math.random() * 5) + 1]}</p>
          <button onClick={detailsNavigate} className="button">
            Show Facts
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
