import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import "./App.css";

const Home = lazy(() => import("../../Pages/Home/Home"));
const MovieDetails = lazy(() =>
  import("../../Pages/MovieDetails/MovieDetails")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../../Pages/NotFound/NotFound"));
const Movies = lazy(() => import("../../Pages/Movies/Movies"));
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
