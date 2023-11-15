import { useContext } from "react";
import allData from "../data/list.json";
import { CardFavorites } from "../components/cardFavorites";
import { userContext } from "../store/createContextStore";
import "../style/card.scss";

function favorite() {
  const { favorite } = useContext(userContext);
  return (
    <div>
      <div className="card_container">
        {allData.map((song) => {
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
