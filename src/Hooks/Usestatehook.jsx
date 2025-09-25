import { useState } from "react";

const Usestatehook = () => {
  const [count, setCount] = useState(0);
  const [isLogged, setIsLogged] = useState({});
  const [showing, setShowing] = useState(true);

  const increaseCount = () => {
    setCount(count + 1);
  };
  if (count === 11) {
    setCount(0);
  }

  const loginSuccess = () => {
    setIsLogged(!isLogged);
  };

  const boxhidden = () => {
    setShowing(!showing);
  };
  return (
    <>
      <div className=" flex justify-around items-center p-5">
        <div className=" bg-rose-400 max-w-fit text-center p-5 rounded">
          <h1 className="font-bold text-3xl p-2">Count Increasing</h1>
          <h1 className="font-semibold text-2xl p-2">{count}</h1>
          <button onClick={increaseCount} className="bg-black text-white p-2 rounded">
            Increase
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
            <button onClick={loginSuccess} className="bg-black text-white p-2 rounded">
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

      <div>
        <div>
            
        </div>
      </div>
    </>
  );
};
export default Usestatehook;
