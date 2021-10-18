import { render } from "@testing-library/react";
import React, { useState } from "react";

const AddAppointment = () => {
  const [inputField, setInputField] = useState([
    {
      name: "",
      email: "",
      phone: "",
      appointment: "",
      department: "",
      message: "",
    },
  ]);
  const [data, setData] = useState();

  const changeInput = (e,index) => {
    const OldValue = [...inputField];
    if (e.target.name === "name") {
      OldValue[index].name = e.target.value;
      console.log(e.target.value);
    } else if (e.target.name === "email") {
      OldValue[index].email = e.target.value;
    } else if (e.target.name === "phone") {
      OldValue[index].phone = e.target.value;
    } else if (e.target.name === "appointment") {
      OldValue[index].appointment = e.target.value;
    } else if (e.target.name === "department") {
      OldValue[index].department = e.target.value;
    } else if (e.target.name === "message") {
      OldValue[index].message = e.target.value;
    }

    setInputField(OldValue);
    
  };

  const handleSubmit = () => {
    let localData = localStorage.getItem("appointment");
    let localAData;
    
    if(localData === null){
      localStorage.setItem("appointment", JSON.stringify(inputField))
    }else{
      localAData = JSON.parse(localData);
    }

    setInputField(localAData);
    console.log(inputField);    
  }
  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="php-email-form">
            {inputField.map((e, index) => {
              return (
                <>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        onChange={(e) => changeInput(e, index)}
                      />
                    </div>
                    <div className="mt-3 col-md-4 form-group mt-md-0">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        onChange={(e) => changeInput(e, index)}
                      />
                      <div className="validate" />
                    </div>
                    <div className="mt-3 col-md-4 form-group mt-md-0">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        onChange={(e) => changeInput(e, index)}
                      />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mt-3 col-md-4 form-group">
                      <input
                        type="datetime"
                        name="date"
                        className="form-control datepicker"
                        id="date"
                        placeholder="Appointment Date"
                        onChange={(e) => changeInput(e, index)}
                      />
                      <div className="validate" />
                    </div>
                    <div className="mt-3 col-md-4 form-group">
                      <select
                        name="department"
                        id="department"
                        className="form-select"
                        onChange={(e) => changeInput(e, index)}
                      >
                        <option value>Select Department</option>
                        <option value="Department 1">Department 1</option>
                        <option value="Department 2">Department 2</option>
                        <option value="Department 3">Department 3</option>
                      </select>
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="mt-3 form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message (Optional)"
                      onChange={(e) => changeInput(e, index)}
                    />
                    <div className="validate" />
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your appointment request has been sent successfully. Thank
                      you!
                    </div>
                  </div>
                </>
              );
            })}
            <div className="text-center">
              <button onClick={() => handleSubmit()} type="submit">Make an Appointment</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAppointment;
