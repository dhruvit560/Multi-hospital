import { render } from "@testing-library/react";
import React, { useState } from "react";

const Appointment = () => {
  const [userAppointment, setUserAppointment] = useState({
    name : "",
    email : "",
    phone : "",
    date : "",
  })
 
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const newEntry = {name:name, email:email, phone: phone, date:date,};
  //   setAllEntry([...allEntry, newEntry]);
  // }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
  }
  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec
              lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus
              placerat mi et suscipit pulvinar.
            </p>
          </div>
          <form method="post" className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={userAppointment.name}
                  onChange={handleInput}
                />
              </div>
              <div className="mt-3 col-md-4 form-group mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={userAppointment.email}
                  onChange={handleInput}
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
                />
                <div className="validate" />
              </div>
              <div className="mt-3 col-md-4 form-group">
                <select
                  name="department"
                  id="department"
                  className="form-select"
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
                rows={5}
                placeholder="Message (Optional)"
                defaultValue={""}
              />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </form>
        </div>
      </section>
      
    </>
  );
};

export default Appointment;
