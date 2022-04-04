import React from "react";
import './Activityform.css'

const Activityform = (props) => {
  const handleChangeActivityType = (event) => {
    props.setActivityType(event.target.value);
    console.log(handleChangeActivityType)
  }
    return (
        <div className="activity-form">
        <div className="text-center rounded">
    
          <form>
    
            <label><b>Activity Name</b>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="" aria-label="Username"
                  aria-describedby="basic-addon1"/>
              </div>
            </label>
    
            <p>
              <label><b>Date</b>
                <div className="input-group mb-3">
                  <input type="date" className="form-control" placeholder="" aria-label="date" aria-describedby="basic-addon1"/>
                </div>
              </label>
            </p>
    
            <p>
              <label><b>Activity Type</b>
    
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect02"
                      value={props.activityType}
                      onChange={handleChangeActivityType}>
                    <option selected>Choose...</option>
                    <option >running</option>
                    <option >swimming</option>
                    <option >basketball</option>
                    <option >bike</option>
                    <option >dumbbell</option>
                    <option >ping-pong</option>
                    <option >boxing-gloves</option>
                    <option >tennis</option>
                    <option >yoga</option>
                    <option >soccer-ball</option>
                    <option >golf</option>
                    <option >other</option>
                  </select>
                </div>
    
              </label>
            </p>
    
            <p>
              <label><b>Activity Duration</b>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" placeholder="" aria-label="number"
                    aria-describedby="basic-addon1"/>
                </div>
              </label>
            </p>
    
            <p>
              <label><b>Describe this journal</b>
                <div className="input-group">
                  <textarea className="form-control" aria-label="With textarea" maxlength="120"></textarea>
                </div>
              </label>
            </p>
    
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="button" className="btn btn-dark">Add Activity</button>
            </div>
          </form>
    
        </div>
      </div>

    )
}

export default Activityform;