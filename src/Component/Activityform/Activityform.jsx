import { useEffect, useState } from "react";
import "./ActivityForm.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import React, { useEffect } from "react";
// import './Activityform.css'

const Activityform = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityType, setActivityType] = useState("");
  const [isDateValid, setIsDateValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTypeValid, setIsTypeValid] = useState(false);
  const [isDurationValid, setIsDurationValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(false);
  const [posts, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChangeActivityName = (event) => {
    const newValue = event.target.value;
    if (newValue.length > 40) {
      return;
    } else {
      setActivityName(event.target.value);
    }
  };

  const handleChangeActivityDate = (event) => {
    setActivityDate(event.target.value);
  };

  const handleChangeActivityDuration = (event) => {
    setActivityDuration(event.target.value);
  };

  const handleChangeActivityType = (event) => {
    props.setActivityType(event.target.value);
    console.log(handleChangeActivityType)
  };

  const handleChangeActivityDescription = (event) => {
    setActivityDescription(event.target.value);
  };

  // validate activityName
  useEffect(() => {
    if (activityName.length >= 0 && activityName.length <= 40) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [activityName]);

  // validate activityDate
  useEffect(() => {
    if (activityDate !== "") {
      setIsDateValid(true);
    } else {
      setIsDateValid(false);
    }
  }, [activityDate]);

  // validate activityType
  useEffect (() => {
    const validTypes = [
      "running",
      "ping-pong",
      "swimming",
      "basketball",
      "bike",
      "dumbbell",
      "boxing",
      "yoga",
      "tennis",
      "golf",
      "other",
      "football",
    ];
    const isTypeValid = validTypes.includes(props.activityType);
    setIsTypeValid(isTypeValid);
    console.log(isTypeValid);
  }, [props.activityType]);

  // validate activityDuration
  useEffect(() => {
    if (activityDuration > 0 && activityDuration.length > 0) {
      setIsDurationValid(true);
    } else {
      setIsDurationValid(false);
    }
  }, [activityDuration]);

  // validate activityDescription
  useEffect(() => {
    if (activityDescription.length > 0 && activityDescription.length < 120) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
    }
  }, [activityDescription]);

  // validate submit
  const canSubmit =
    isDateValid &&
    isNameValid &&
    isTypeValid &&
    isDurationValid &&
    isDescriptionValid;

  const handleSubmit = () => {
    if (canSubmit) {
      let activity = {
        activityDate: activityDate,
        activityName: activityName,
        activityDuration: activityDuration,
        activityType: props.activityType,
        activityDescription: activityDescription,
      };
      const client = axios.create({
        baseURL: "http://localhost:3000",
      });
      client.post("activities", activity).then((Response) => {
        navigate({
          pathname: "/History",
        });
        setPost(Response.date).catch((error) => {
          setError(error);
        });
      });
    } else {
      alert("Invalid value");
    }
  };

    return (
        <div className="activity-form" style={{maxWidth: "1200px", margin: "0 auto"}}>
        <div className="text-center rounded">
    
          <form>
    
            <label><b>Activity Name</b>
              <div className="input-group mb-3" style={{width: "300px", height: "50px"}}>
                <input type="text" className="form-control" placeholder="" aria-label="Username"
                  aria-describedby="basic-addon1"/>
              </div>
            </label>
    
            <p>
              <label><b>Date</b>
                <div className="input-group mb-3" style={{width: "300px", height: "50px"}}>
                  <input type="date" className="form-control" placeholder="" aria-label="date" aria-describedby="basic-addon1"/>
                </div>
              </label>
            </p>
    
            <p>
              <label><b>Activity Type</b>
    
                <div className="input-group mb-3" style={{width: "300px", height: "50px"}}>
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
                <div className="input-group mb-3" style={{width: "300px", height: "50px"}}>
                  <input type="number" className="form-control" placeholder="" aria-label="number"
                    aria-describedby="basic-addon1"/>
                </div>
              </label>
            </p>
    
            <p>
              <label><b>Describe this journal</b>
                <div className="input-group" style={{width: "300px", height: "50px"}}>
                  <textarea className="form-control" aria-label="With textarea" maxlength="120"></textarea>
                </div>
              </label>
            </p>
    
            <div className="d-grid gap-2 col-6 mx-auto" style={{paddingTop: "30px"}}>
              <button type="button" className="btn btn-dark" >Add Activity</button>
            </div>
          </form>
    
        </div>
      </div>

    )
}

export default Activityform;