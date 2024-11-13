import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Screens from "./Componts/Screens";




function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
     
      <Screens />
      
   
      
    
      
    </>
  );
}

export default App;
