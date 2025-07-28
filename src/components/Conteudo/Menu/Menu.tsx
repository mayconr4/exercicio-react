// components/Conteudo/Menu/Menu.tsx
import estilos from "./Menu.module.css";

import { Link } from "react-router-dom";

// Adicionamos o className como prop opcional
type MenuProps = {
  className?: string;
};

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <Link className={estilos.menuItem} to="/">
        Home
      </Link>
      <Link className={estilos.menuItem} to="/ClassicRock">
        Classic Rock
      </Link>
      <Link className={estilos.menuItem} to="/RockProgressivo">
        Rock Progressivo
      </Link>
      <Link className={estilos.menuItem} to="/HeavyMetal">
        Heavy Metal
      </Link>
    </nav>
  );
}
