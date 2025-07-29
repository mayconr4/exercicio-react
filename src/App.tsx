import { Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Container from "./components/Container/Container";
import Home from "./pages/Home";
import ClassicRock from "./pages/ClassicRock";
import HeavyMetal from "./pages/HeavyMetal";
import RockProgressivo from "./pages/RockProgressivo";
import Pagina404 from "./pages/Pagina404";
import Menu from "./components/Conteudo/Menu/Menu";
import estilos from "./App.module.css";
// import "./global.css";

export default function App() {
  return (
    <>
      <Cabecalho />

      <Container>
        <Menu />
        <div className={estilos.menu}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ClassicRock" element={<ClassicRock />} />
          <Route path="/HeavyMetal" element={<HeavyMetal />} />
          <Route path="/RockProgressivo" element={<RockProgressivo />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </Container>
    </>
  );
}
