import { useEffect } from "react";
import Hero from "./components/Hero";
import Clases from "./components/Clases";
import Sedes from "./components/Sedes";
import Planes from "./components/Planes";
import Comunidad from "./components/Comunidad";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  }, []);

  return (
    <>
      <Hero />
      <Clases />
      <Sedes />
      <Planes />
      <Comunidad />
      <Footer />
    </>
  );
}

export default App;
