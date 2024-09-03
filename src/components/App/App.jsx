import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./App.css";
import Home from "../../Pages/Home";
import MovieDetails from "../../Pages/MovieDetails";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieID" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
