import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import VanillaJS from "./pages/VanillaJS";
import Progressive1 from "./pages/Progressive1";
import Progressive2 from "./pages/Progressive2";
import GoodPicture from "./img/nature.jpg";
import BadPicture from "./img/nature-small.jpg";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <div className="content">
        <Routes>
          <Route index element={<Main />} />
          <Route
            path="/js"
            element={
              <VanillaJS GoodPicture={GoodPicture} BadPicture={BadPicture} />
            }
          />
          <Route
            path="/progressive1"
            element={
              <Progressive1 GoodPicture={GoodPicture} BadPicture={BadPicture} />
            }
          />
          <Route
            path="/progressive2"
            element={
              <Progressive2 GoodPicture={GoodPicture} BadPicture={BadPicture} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
