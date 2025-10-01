import { useState, useEffect } from "react";

const Useeffecthook = () => {
  const [timing, setTiming] = useState(0);
  const [timer, setTimer] = useState(false);
  const [fet, setFet] = useState([])

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



  const fetching = async() => {
      const data = await fetch("https://dummyjson.com/quotes");
      const datas = await data.json();
      console.log(datas)
      setFet(datas.quotes)
  }

  useEffect( () => {
    fetching()
  }, [] )

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

        <div className="p-30">
        <div className="bg-black p-10 ">
          <h2 className="text-7xl text-white font-extrabold text-center pb-10">Fetch API</h2>
        {fet.slice(0, 10).map( (e, i) => (
          <div key={e.id ?? i} className="flex justify-between items-center p-2">
            <h2 className="bg-orange-700 p-4 text-white font-bold"> {e.quote} </h2>
            <h2 className="bg-amber-600 p-4 text-white font-bold"> {e.author} </h2>
            </div>
        ) )}
        </div>
        </div> 

    </>
  );
};
export default Useeffecthook;
