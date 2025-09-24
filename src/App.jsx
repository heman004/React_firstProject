import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import MultiCard from "./components/MultiCard";
import LandingPage from "./page/LandingPage";
import Formlanding from "./FormPage/Formlanding";


function App() {


  return (
    <>
      <Router>
         <Navbar />
         <Routes>
           <Route path="/" element={<Banner />} />
           <Route  path="/component" element={<LandingPage />} />
           <Route path="/rendering" element={<Formlanding />} />
         </Routes>
      </Router>
    </>
  )
}

export default App;
