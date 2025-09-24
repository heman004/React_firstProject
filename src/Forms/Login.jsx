import { useState } from "react";

const Login = ({ openn, isClose }) => {
  if (!openn) return null;
  const [name, setName] = useState("");
  const [submitName, setSubmitName] = useState("");

  const enterName = () => {
    setSubmitName(name);
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className=" bg-black p-30 rounded-2xl">
          <h1 className="pb-5 text-center font-bold text-3xl">Login</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={ (e) => { setName(e.target.value) } }
            className="p-3 border-none"
          />

          <br /> <br />
          <div className="text-center">
            <button className="p-2 bg-white rounded text-black" onClick={enterName}>Login</button> 
            <button onClick={isClose} className="bg-green-600 p-2 rounded ">Close</button>
          </div>
          {submitName && (
            <p className="mt-5 p-2"> Welcome, <b>{submitName}</b> 🎆 </p> 
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
