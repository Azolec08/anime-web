import { useContext, useState } from "react";
import allData from "../data/list.json";
import { CardFavorites } from "../components/cardFavorites";
import { userContext } from "../store/createContextStore";
import "../style/card.scss";

function favorite() {
  const [search, setSearch] = useState("");

  const handleFilterFavorite = allData.filter((data) =>
    data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const { favorite } = useContext(userContext);
  return (
    <div>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <input
            type="text"
            placeholder="Favorite Anime Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "5px", width: "300px" }}
          />
        </div>
      </div>
      <div className="card_container">
        {handleFilterFavorite.map((song) => {
          if (favorite[song.id] !== 0) {
            return (
              <div key={song.id}>
                <CardFavorites {...song} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default favorite;
