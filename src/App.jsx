import Array from "./Forms/array";
import ArrayOfObj from "./Forms/ArrayOfObj";
import Login from "./Forms/Login";
import Object from "./Forms/Object";
import Register from "./Forms/Register";
import LandingPage from "./page/LandingPage";


function App() {

  let customer = true;

  function changeBtn(){
       customer = false
       console.log(customer)
  }

  return (
    <>
      {/* <LandingPage /> */}
      {/* <h1>{customer ? <Login /> : <Register />}</h1>
      <button onChange={changeBtn}>click to change</button> */}
      <Array />
      <Object />
      <ArrayOfObj />
    </>
  )
}

export default App;
