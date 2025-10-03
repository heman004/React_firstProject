import { useState, useEffect } from "react";

const Useeffecthook = () => {
  const [timing, setTiming] = useState(0);
  const [timer, setTimer] = useState(false);

     const changeTime = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor ((seconds % 3600) / 60);
      const sec = (seconds % 60);

      return `${String(hours).padStart(2, "0")} : ${String(mins).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`
     }
  useEffect( () => {
      let Timer;
      if(timer) {
        Timer = setInterval(() => {
          setTiming(pre => pre + 1)
        }, 1000);
      }

      return () => clearInterval(Timer)
  }, [timer] )



  return (
    <>
      <div className="p-5">
        <h1 className="bg-lime-400 text-center font-extrabold text-3xl p-1">
          useEffect
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-250 bg-pink-600 text-center p-30">
          <h2 className="text-5xl font-extrabold p-10 ">Stop Watch</h2>
          <h2 className="font-bold text-4xl pb-10 text-white"> { changeTime(timing) } </h2>
          <div className="flex justify-around items-center">
          <button onClick={ () => { setTimer(true) } } className="bg-black font-bold text-white pt-2 pb-2 ps-5 pe-5 rounded hover:bg-white hover:text-black">Start</button>
          <button onClick={ () => { setTimer(false) } }  className="bg-black font-bold text-white pt-2 pb-2 ps-5 pe-5 rounded hover:bg-white hover:text-black">Stop</button>
          <button onClick={ () => { setTiming(0); setTimer(false) } }  className="bg-black font-bold text-white pt-2 pb-2 ps-5 pe-5 rounded hover:bg-white hover:text-black">Reset</button>
          <button onClick={ () => { setTiming(0); setTimer(true) } }  className="bg-black font-bold text-white pt-2 pb-2 ps-5 pe-5 rounded hover:bg-white hover:text-black">Restart</button>
          </div>
        </div>
      </div>




    </>
  );
};
export default Useeffecthook;
