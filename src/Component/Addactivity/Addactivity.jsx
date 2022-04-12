import React from "react";
import './Addactivity.css';

const imgStyle = {
    width: '100px',
    height: '100px'
}

const Addactivity = (props) => {
  const onClick = (type) => {
    props.setActivityType(type);
    // alert(type);
  }
    return (
        <div className="activity-select" style={{maxWidth: "1200px", margin: "0 auto"}} >
        <h4 className="headText" >Add Your Activity</h4>
        <div className="phonecontent" id="activityphone">
    
          <div className="text-center rounded" >
            <div className="banner-area">
              
              <img src="./images/running.png" className="banner" alt="running" style={imgStyle} onClick={() => onClick("running")}/>
              <img src="./images/swimming.png" alt="swimming" style={imgStyle} onClick={() => onClick("swimming")}/>
              <img src="./images/basketball.png" alt="basketball" style={imgStyle} onClick={() => onClick("basketball")}/>
              <img src="./images/bike.png" alt="bike" style={imgStyle} onClick={() => onClick("bike")}/>
              <img src="./images/dumbbell.png" alt="dumbbell" style={imgStyle} onClick={() => onClick("dumbbell")}/>
              <img src="./images/ping-pong.png" alt="ping-pong" style={imgStyle} onClick={() => onClick("ping-pong")}/>
            </div>
    
            <div className="banner-area">
    
                <img src="./images/boxing-gloves.png" alt="boxing-gloves" style={imgStyle} onClick={() => onClick("boxing-gloves")}/>
                <img src="./images/tennis.png" alt="tennis" style={imgStyle} onClick={() => onClick("tennis")}/>
                <img src="./images/yoga.png" alt="yoga" style={imgStyle} onClick={() => onClick("yoga")}/>
                <img src="./images/soccer-ball.png" alt="soccer-ball" style={imgStyle} onClick={() => onClick("soccer-ball")}/>
                <img src="./images/golf.png" alt="golf" style={imgStyle} onClick={() => onClick("golf")}/>
                <img src="./images/ellipsis.png" alt="ellipsis" style={imgStyle} onClick={() => onClick("other")}/>
    
            </div>
          </div>
    
        </div>
      </div>
    )
} 

export default Addactivity;