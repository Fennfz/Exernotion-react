// import { BrowserRouter, Routers, Route } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import './App.css';
// import Navbar from './Component/Navbar/Navbar';
import Addactivity from './Component/Addactivity/Addactivity';
import Activityform from './Component/Activityform/Activityform';
import Footer from './Component/Footer/Footer';
// import ActivityHistory from "./Component/ActivityHistory/ActivityHistory";

// import ActivityHistory from "./Component/ActivityHistory/ActivityHistory";


function App() {
  const [activityType, setActivityType] = useState ("running");
  return (
    <div className="App">

      <Addactivity
        setActivityType={setActivityType} 
      />
      <Activityform 
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </div>
    // <div >
      
    //   <Navbar />
    //   <Addactivity />
    //   <Activityform />
    //   <Footer />
      
    // </div>

    // <BrowserRouter>
    //   <Routers>
    //     <Route path="/" element={<Form />} />
    //     <Route path="ActivityHistory" element={<ActivityHistory />} />
    //   </Routers>
    // </BrowserRouter>
  );
}

export default App;
