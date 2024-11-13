import Example from "./Example";

function Content2() {
  return (
    <>
      <div className="container mx-auto px-4 text-white">
        <div className="flex justify-center pt-40 pb-40">
          <h1
            style={{ fontSize: "5em", fontWeight: "bold" }}
            className=" w-4/5 text-center"
          >
            The Numbers Behind Our Success
          </h1>
        </div>

        <div className="flex justify-around text-center">
          <Example />
        </div>
      </div>
    </>
  );
}

export default Content2;
