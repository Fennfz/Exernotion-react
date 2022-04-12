import React from "react";
import './ActivityHistory.css'


const ActivityHistory = () => {
  
    return (

    <section className="card-indent" style={{maxWidth: "1200px", margin: "0 auto"}}>

        <h4 className="headTextHistory">
        Activity History
        </h4>

      <div className="activity-history" >
  
          <div className="card mb-3"  >
              <div className="row g-0">
                <div className="col-md-4" >
                  <img src="/images/basketball.png" className="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">Date</p>
                    <p className="card-text">Activity</p>
                    <p className="card-text">Duration</p>
                    <p className="card-text">Type</p>
                    <p className="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4" >
                  <img src="/images/basketball.png" className="img-fluid rounded-start"  alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">Date</p>
                    <p className="card-text">Activity</p>
                    <p className="card-text">Duration</p>
                    <p className="card-text">Type</p>
                    <p className="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
  
        </div>

 

    </section>
    )
} 

export default ActivityHistory;