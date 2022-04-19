import React, { useState } from "react";
import Addactivity from "../Component/Addactivity/Addactivity";

// import Navbar from "../Component/Navbar/Navbar";
import Activityform from "../Component/Activityform/Activityform";

const Home = () => {
    const [activityType, setActivityType] = useState("running");
    return (
        <>
            <Addactivity setActivityType={setActivityType} />
            <Activityform
                activityType={activityType}
                setActivityType={setActivityType} />
        </>
    );
};

export default Home;