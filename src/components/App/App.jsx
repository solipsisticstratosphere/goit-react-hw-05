import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import "./App.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const MovieDetails = lazy(() =>
  import("../../pages/MovieDetails/MovieDetails")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
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
