import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* TODO: change to logo */}
      <Link to="/">Ikea Deal</Link>
      <nav>
        <NavLink to="/">Deals</NavLink>
        <NavLink to="saved">Saved</NavLink>
        <Link to="login">
          {/* TODO change to icon */}
          login
        </Link>
      </nav>
    </header>
  );
}
