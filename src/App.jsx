import Array from "./Forms/array";
import ArrayOfObj from "./Forms/ArrayOfObj";
import Login from "./Forms/Login";
import Object from "./Forms/Object";
import Register from "./Forms/Register";
import LandingPage from "./page/LandingPage";
import { useState } from "react";


function App() {

  let [customer, setCustomer] = useState(true)

  function changeBtn(){
      setCustomer(false);
  }

  return (
    <>
      <LandingPage />
      {/* <h1>{customer ? <Login /> : <Register />}</h1>
      <button onClick={changeBtn}>click to change</button> */}
      {/* <Array />
      <Object />
      <ArrayOfObj /> */}
    </>
  )
}

export default App;
