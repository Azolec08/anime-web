import Home from "./components/home";
import Card from "./components/Card";
import FrameContext from "./FrameContext";
import { Routes, Route } from "react-router-dom";
import { UseContextProvider } from "./store/createContextStore";
import Favorite from "./pages/favorite";

function App() {
  return (
    <div className="App">
      <UseContextProvider>
        <Routes>
          <Route element={<FrameContext />}>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </UseContextProvider>
    </div>
  );
}

export default App;
