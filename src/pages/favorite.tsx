import { useContext, useState } from "react";
import { CardFavorites } from "../components/cardFavorites";
import { userContext } from "../store/createContextStore";
import "../style/card.scss";
import { Button } from "react-bootstrap";
import AllData from "../data/list.json";
import { MyCombobox } from "../components/SearchBar";

function favorite() {
  const { favorite, get } = useContext(userContext);

  const [search, setSearch] = useState("");

  const [searchArray, setSearchArray] = useState(AllData);

  const handleSearchClick = () => {
    const handleFilterFavorite = AllData.filter((data) =>
      data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchArray(handleFilterFavorite);
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px  ",
          }}
        >
          <input
            type="text"
            placeholder="Favorite Anime Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "5px", width: "240px" }}
          />
          <Button
            variant="primary"
            style={{ borderRadius: "0" }}
            onClick={handleSearchClick}
          >
            Search
          </Button>
        </div>
      </div>

      <div>
        <MyCombobox />
      </div>
      <div className="card_container">
        {searchArray.map((song: any) => {
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
