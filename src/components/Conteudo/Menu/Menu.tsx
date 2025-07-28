import { Link } from "react-router-dom";
import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <Link to="/">Home</Link>
      <Link to="/classicRock">Classic Rock</Link>
      <Link to="/heavyMetal">Heavy Metal</Link>
      <Link to="/rockProgressivo">Rock Progressivo</Link>
    </nav>
  );
}
