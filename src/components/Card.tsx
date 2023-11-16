import { useState } from "react";
import CardComponents from "./cardComponents";
import CardList from "../data/list.json";
import * as React from "react";
import "../style/card.scss";
import "../style/popStyle.scss";
import Switch from "react-switch";

const Cards = ({}) => {
  const [dark, setDark] = useState("Light");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = CardList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="position_relative">
      <div id={dark} className="dark_mode">
        <span>{dark} Mode</span>
        <Switch
          onChange={() => setDark(dark === "Dark" ? "Light" : "Dark")}
          checked={dark === "Dark"}
        />
      </div>
      <div className="dark_mode">
        <div>
          <input
            type="text"
            placeholder="Anime Search"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ padding: "5px", width: "300px" }}
          />
        </div>
      </div>
      <div className="card_container" id={dark}>
        {filteredData.map((list, index) => {
          return (
            <div key={index}>
              <CardComponents {...list} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
