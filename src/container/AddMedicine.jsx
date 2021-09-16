import React, { useState } from "react";
import SingleMedicine from "../component/SingleMedicine";

const AddMedicine = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      quality: "",
      expiry: "",
      details: "",
    },
  ]);

  const handleChanges = (e) => {
    // console.log(e.target.value + " " + e.target.name);
  };

  const addInput = (e,index) => {
    const values = [...inputFields];
    values.splice(index , 0 ,{name: "",quality: "",expiry: "",details: ""})
    setInputFields(values)
    // console.log(index);
  } 
  const removeInput = (e,index) => {
    const values = [...inputFields];
    values.splice(index , 1)
    setInputFields(values)
  } 
  const submitForm = () => {};
  return (
    <>
      <section id="medicine" className="py-5 medicine">
        <div className="container">
          <form
            className="add-medicine"
            method="post"
            onSubmit={(e) => submitForm(e)}
          >
            {inputFields.map((e, index) => {
              return(
                <div className="mt-3 row">
                <div className="col-1">{index + 1}</div>
                <div className="col-lg-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => handleChanges(e)}
                  />
                </div>
                <div className="col-lg-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Quality"
                    name="quality"
                    onChange={(e) => handleChanges(e)}
                  />
                </div>
                <div className="col-lg-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Expire Date"
                    name="expiry"
                    onChange={(e) => handleChanges(e)}
                  />
                </div>
                <div className="col-lg-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Details"
                    name="details"
                    onChange={(e) => handleChanges(e)}
                  />
                </div>
                <div className="col-lg-2 col-6">
                  <a
                    href="#"
                    className="px-3 mx-2 btn btn-success d-inline-block"
                    onClick={(e) => addInput(e,index)}
                  >
                    +
                  </a>
                  <a onClick={(e) => removeInput(e, index)} href="#" className="px-3 btn btn-danger d-inline-block">
                    -
                  </a>
                </div>
              </div>
              )
            })}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddMedicine;
