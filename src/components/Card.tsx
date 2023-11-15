import { useState, useContext } from "react";
import CardComponents from "./cardComponents";
import CardList from "../data/list.json";
import "../style/card.scss";
import "../style/popStyle.scss";
import Switch from "react-switch";

const Cards: React.FC = () => {
  const [dark, setDark] = useState("Light");

  return (
    <div className="position_relative">
      <div id={dark} className="dark_mode">
        <span>{dark} Mode</span>
        <Switch
          onChange={() => setDark(dark === "Dark" ? "Light" : "Dark")}
          checked={dark === "Dark"}
        />
      </div>
      <div className="card_container" id={dark}>
        {CardList.map((list, index) => {
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
