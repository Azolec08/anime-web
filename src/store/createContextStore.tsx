import { createContext, useState, ReactNode, useRef } from "react";
import allData from "../data/list.json";

interface contextTypes {
  currentSong: any[];
  show: boolean;
  favorite: any[];
  count: number;
  addSongFavorites: (songId: number) => void;
  deleteSongFavorites: (songId: number) => void;
  addFavorite: (songId: number) => void;
  minusFavorite: (songId: number) => void;
  handleAdd: () => void;
  handleMinus: () => void;
}

export const userContext = createContext({} as contextTypes);

interface childrenType {
  children: ReactNode;
}

export const UseContextProvider = ({ children }: childrenType) => {
  const songAllData = () => {
    let currentSong = [];
    for (let i = 0; i < allData.length + 1; i++) {
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
};
