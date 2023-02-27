import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import SingleProductCard from "./components/views/SingleProductCard/SingleProductCard";
// import Navbar from "HomePageMFE/Navbar";
// import Footer from "HomePageMFE/Footer";





// import Input from "./components/views/Input/Input";

import "./index.scss";

const App = () => {

  const[matches, setMatches]=useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(()=>{
    window.matchMedia("(min-width:768)").addEventListener('change',e=> setMatches(e.matches))
  },[])
return(

  <div className="mt-10 text-3xl mx-auto max-w-6xl">
  
      {/* <Navbar/> */}

      {matches && <SingleProductCard/>}
      {!matches && <SingleProductCard/>}

      {/* <Footer/> */}
      
      
      
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
