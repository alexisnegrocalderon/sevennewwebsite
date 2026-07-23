import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Clases from "./components/Clases";
import Sedes from "./components/Sedes";
import Planes from "./components/Planes";
import Comunidad from "./components/Comunidad";
import Footer from "./components/Footer";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      </AnimatePresence>
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
