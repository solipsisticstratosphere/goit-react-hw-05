import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
  );
}
