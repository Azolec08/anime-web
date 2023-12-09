import { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import AllData from "../data/list.json";

type contextTypes = {
  currentSong: any[];
  show: boolean;
  favorite: any[];
  count: number;
  get: any[];
  addSongFavorites: (songId: number) => void;
  deleteSongFavorites: (songId: number) => void;
  addFavorite: (songId: number) => void;
  minusFavorite: (songId: number) => void;
  handleAdd: () => void;
  handleMinus: () => void;
};

export const userContext = createContext({} as contextTypes);

type childrenType = {
  children: ReactNode;
};

export function UseContextProvider({ children }: childrenType) {
  const [get, setGet] = useState([]);

  useEffect(() => {
    async function callApi() {
      const result = await axios.get("http://localhost:3009/anime");
      setGet(result.data);
    }

    callApi();
  }, [get]);

  const songAllData = () => {
    let currentSong = [];
    for (let i = 0; i < AllData.length + 1; i++) {
      currentSong[i] = 0;
    }
    return currentSong;
  };

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };


  const [currentSong, setCurrentSong] = useState(songAllData());

  const [show, setShow] = useState<boolean>(false);

  function addSongFavorites(songId: number) {
    setCurrentSong((prev) => ({ ...prev, [songId]: prev[songId] + 1 }));
  }

  function deleteSongFavorites(songId: number) {
    setCurrentSong((prev) => ({ ...prev, [songId]: prev[songId] - 1 }));
  }

  const [favorite, setFavorite] = useState(songAllData());

  function addFavorite(songId: number) {
    setFavorite((prev) => ({ ...prev, [songId]: prev[songId] + 1 }));
    handleAdd();
  }
  function minusFavorite(songId: number) {
    setFavorite((prev) => ({ ...prev, [songId]: prev[songId] - 1 }));
  }

  return (
    <div>
      <userContext.Provider
        value={{
          currentSong,
          show,
          favorite,
          count,
          get,
          addSongFavorites,
          deleteSongFavorites,
          addFavorite,
          minusFavorite,
          handleAdd,
          handleMinus,
        }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
}
