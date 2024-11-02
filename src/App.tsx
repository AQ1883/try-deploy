import "./App.css";
import Test from "./Componts/Screens";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
    
      <Test />
    </>
  );
}

export default App;
