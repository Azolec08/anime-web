import Home from "./pages/home";
import Card from "./pages/Card";
import FrameContext from "./FrameContext";
import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/favorite";
import { UseContextProvider } from "./store/createContextStore";

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
