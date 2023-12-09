import { useContext } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { userContext } from "./store/createContextStore";
import AllPopUp from "./components/popUp";
import "./style/popStyle.scss";
import "./style/card.scss";
import AllData from "./data/list.json";

const Context = () => {
  const { currentSong, get } = useContext(userContext);
  return (
    <>
      <Header />
      <Outlet />
      {AllData.map((list) => {
        if (currentSong[list.id] !== 0) {
          return (
            <div key={list.id} className="pop_up">
              <div>
                <AllPopUp {...list} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Context;
