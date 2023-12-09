import { useState, useEffect, useContext } from "react";
import CardComponents from "../components/cardComponents";
import "../style/card.scss";
import "../style/popStyle.scss";
import Switch from "react-switch";
import RingLoader from "react-spinners/RingLoader";
import { userContext } from "../store/createContextStore";
import AllData from "../data/list.json";

export default function Cards() {
  const { get } = useContext(userContext);

  const [dark, setDark] = useState("Light");

  const [searchTerm, setSearchTerm] = useState("");

  const [spin, setSpin] = useState(false);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = AllData.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setSpin(true);
    setTimeout(() => {  
      setSpin(false);
    }, 2500);
  }, []);

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
      {spin ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RingLoader color="red" size={80} />
        </div>
      ) : (
        <div className="card_container" id={dark}>
          {filteredData.map((list: any) => {
            return (
              <div key={list.id}>
                <CardComponents {...list} />
                <span>No Data Available</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
