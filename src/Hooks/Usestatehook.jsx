import { useState } from "react";

const Usestatehook = () => {
  const [count, setCount] = useState(1);
  const [isLogged, setIsLogged] = useState({});
  const [showing, setShowing] = useState(true);
  const [series, setSeries] = useState([0, 1]);
  const [value, setValue] = useState([]);

  const increaseCount = () => {
    setCount(count + 1);
  };
  if (count === 11) {
    setCount(0);
  }
  const DecreaseCount = () => {
    setCount(count - 1);
  };
  if (count === 0) {
    setCount(1);
  }

  const loginSuccess = () => {
    setIsLogged(!isLogged);
  };

  const boxhidden = () => {
    setShowing(!showing);
  };

  const addFebonicic = () => {
    const last = series[series.length - 1];
    const secLast = series[series.length - 2];
    setSeries([...series, last + secLast]);
  };

  const fiveValue = () => {
    let feb = [0, 1];
    for (let i = 2; i < 9; i++) {
      feb[i] = feb[i - 1] + feb[i - 2];
    }
    setValue(feb);
  };

  return (
    <>
    <div className="p-3">
      <h2 className="bg-lime-400 text-center font-extrabold text-3xl p-1">UseState</h2>
    </div>  
      <div className=" flex justify-around items-center p-5">
        <div className=" bg-rose-400  text-center p-5 rounded">
          <h1 className="font-bold text-3xl p-2">Count Increasing</h1>
          <h1 className="font-semibold text-2xl p-2">{count}</h1>
          <button
            onClick={increaseCount}
            className="bg-black text-white p-2 rounded"
          >
            Increase
          </button>{" "}
          <br /> <br />
          <button
            onClick={DecreaseCount}
            className="bg-black text-white p-2 rounded"
          >
            Decrease
          </button>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="bg-amber-400 p-6 text-center rounded">
            <h1 className="text-3xl font-bold">True or False</h1>
            {isLogged ? (
              <p className="p-3 text-2xl font-semibold text-green-800">
                hai i'm show
              </p>
            ) : (
              <p className="p-3 text-2xl font-semibold text-red-600">Im hide</p>
            )}
            <button
              onClick={loginSuccess}
              className="bg-black text-white p-2 rounded"
            >
              {isLogged ? "show" : "Hide"}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center text-center p-5">
          <div>
            {showing ? (
              <div className="bg-emerald-600 w-50 h-50 flex justify-center items-center rounded">
                <button
                  onClick={boxhidden}
                  className="bg-fuchsia-800 text-white p-2.5 rounded"
                >
                  Show
                </button>
              </div>
            ) : (
              <div className="bg-white w-50 h-50 flex justify-center items-center">
                <button
                  onClick={boxhidden}
                  className="bg-fuchsia-800 text-white p-2.5 rounded"
                >
                  Hide
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-around items-center p-5">
        <div className="flex, justify-center items-center">
          <div className="bg-amber-800 max-w-fit p-5 rounded text-center">
            <h1 className="text-white font-bold text-2xl">
              {" "}
              Febonicic Series{" "}
            </h1>
            <h2 className="text-white p-2">{series.join(" , ")}</h2>
            <button
              onClick={addFebonicic}
              className="bg-black p-2 text-white rounded "
            >
              Add Next
            </button>
          </div>
        </div>
        <div className="flex, justify-center items-center">
          <div className="bg-blue-950 max-w-fit p-5 rounded text-center">
            <h2 className="font-bold text-white text-2xl">
              5 values in Febonicic
            </h2>
            <h2 className="p-2 text-white"> {value.join(" , ")} </h2>
            <button onClick={fiveValue} className="bg-amber-50 p-2 rounded">
              {" "}
              click{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Usestatehook;
