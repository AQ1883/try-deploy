import SlideLogos from "../SlideLogos";
import Galery from "./galery";

function Content3() {
  return (
    <>
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-5xl font-bold mb-20">Our Clients</h1>
        <SlideLogos />
        <h1 className="text-5xl font-bold mb-20 mt-20">Our Branches</h1>
        <Galery/>
      </div>
    </>
  );
}

export default Content3;
