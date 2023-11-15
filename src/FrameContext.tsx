import { useContext } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import CardList from "./data/list.json";
import { userContext } from "./store/createContextStore";
import AllPopUp from "./components/popUp";
import "./style/popStyle.scss";
import "./style/card.scss";

const Context = () => {
  const { currentSong } = useContext(userContext);
  return (
    <>
      <Header />
      <Outlet />
      {CardList.map((list) => {
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
