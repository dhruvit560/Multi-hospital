import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddDoctor = () => {
  const [inputField, setInputField] = useState([
    {
      name: "",
      position: "",
      details: "",
      twitter: "",
      facebook: "",
      insta: "",
      linkdin: "",
    },
  ]);

      setInputField(OldValue);


      
     
  }

  const handleSubmit = () => {
    let localData = JSON.parse(localStorage.getItem("doctor"));

  }
  const addInput = (e,index) => {
      const Oldvalue = [...inputField];
      Oldvalue.splice(index + 1, 0, {
        name: "",
        position: "",
        details: "",
        twitter: "",
        facebook: "",
        insta: "",
        linkdin: "",
      })
      setInputField(Oldvalue)
  }
  const removeInput = (e,index) => {
      const Oldvalue = [...inputField];
      Oldvalue.splice(index,1)
      setInputField(Oldvalue)
  }
  return (
    <>
      <div className="container my-5">
        {inputField.map((e, index) => {
          return (
            <>
              <div
                className="mt-3 d-flex align-items-center"
                style={{ gap: "1rem" }}
              >
                <div className="">{index + 1}</div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => changeInput(e, index)}
                    value={e.name}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Position"
                    name="position"
                    onChange={(e) => changeInput(e, index)}
                    value={e.position}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Details"
                    name="details"
                    onChange={(e) => changeInput(e, index)}
                    value={e.details}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Twitter"
                    name="twitter"
                    onChange={(e) => changeInput(e, index)}
                    value={e.twitter}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Facebook"
                    name="facebook"
                    onChange={(e) => changeInput(e, index)}
                    value={e.facebook}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Insta"
                    name="insta"
                    onChange={(e) => changeInput(e, index)}
                    value={e.insta}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Linkdin"
                    name="linkdin"
                    onChange={(e) => changeInput(e, index)}
                    value={e.linkdin}
                  />
                </div>

                <div className="col-lg-2 col-6">
                  <button
                    className="px-3 mx-2 btn btn-success d-inline-block"
                    onClick={() => addInput(e, index)}
                  >
                    +
                  </button>
                  <button
                    className="px-3 btn btn-danger d-inline-block"
                    onClick={() => removeInput(e, index)}
                  >
                    -
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <div className="mt-5 text-center">
          <button
            onClick={() => ChangeSubmit()}
            className="mx-auto appointment-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )

export default AddDoctor;
