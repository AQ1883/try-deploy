import Abouts1 from "../Componts/About-s1";
import Abouts2 from "../Componts/abouts2";
import Abouts3 from "../Componts/abouts3";
import Abouts4 from "../Componts/abouts4";

function About() {
  return (
    <>
      <div className="h-screen">
        <Abouts1 />
      </div>
      <div className="bg-black ">
        <Abouts2 />
        <Abouts3 />

        <Abouts4 />
      </div>
    </>
  );
}

export default About;
