import React, { useState } from "react";
import SingleMedicine from "../component/SingleMedicine";

const AddMedicine = () => {
  const [inputField, setInputField] = useState([
    { name: "", quality: "", expiry: "", details: "" },
  ]);

  const addInput = (e,index) => {
    const values = [...inputField];
    values.push({ name: "", quality: "", expiry: "", details: "" })

    setInputField(values);
  } 
  const removeInput = (e,index) => {
    const values = [...inputField];
    values.splice(index,1);

    setInputField(values);
  };
  const handleChanges = (e,index) => {
    const values = [...inputField];
    
    if(e.target.name == "name"){
       values[index].name = e.target.value;
    } else if(e.target.name == "quality"){
      values[index].quality = e.target.value;
    }else if(e.target.name == "expiry"){
      values[index].expiry = e.target.value;
    }else if(e.target.name == "details"){
      values[index].details = e.target.value;
    }

    setInputField(values)
  };
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
            {inputField.map((e, index) => {
              return (
                <div className="mt-3 row">
                  <div className="col-1">{index + 1}</div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => handleChanges(e,index)}
                      value={e.name}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Quality"
                      name="quality"
                      onChange={(e) => handleChanges(e,index)}
                      value={e.quality}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Expire Date"
                      name="expiry"
                      onChange={(e) => handleChanges(e,index)}
                      value={e.expiry}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Details"
                      name="details"
                      onChange={(e) => handleChanges(e,index)}
                      value={e.details}
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
                    <a href="#" className="px-3 btn btn-danger d-inline-block" onClick={(e) => removeInput(e, index)}>
                      -
                    </a>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddMedicine;
