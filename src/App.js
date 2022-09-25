import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import AnimeCard from "./Component/animeCard";
import { useNavigate } from "react-router-dom";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1")
      .then((res) => {
        setListOfCoins(res.data.data);
      })
      .catch(function (error) {
        if (error.response || error.request) {
          navigate("/error");
        }
      });
  }, []);

  const filterAnime = listOfCoins.filter((coin) => {
    return coin.anime_name
      .toLowerCase()
      .includes(searchWord.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="nav">
        <img
          class="nav-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcneFgDwQjEwQOqu5I-E1K9h_EvGYyqDLQcA&usqp=CAU"
          alt=""
        />
        <div className="home-about">
          <div className="home">HOME</div>
          <div onClick={() => navigate("./about")} className="about">
            ABOUT
          </div>
        </div>

        <div className="animeHeader">
          <input
            type="text"
            placeholder="Enter anime name"
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="animeDisplay">
        {filterAnime.map((anime) => {
          return (
            <AnimeCard
              id={anime.anime_id}
              name={anime.anime_name}
              icon={anime.anime_img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
