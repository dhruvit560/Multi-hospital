import React, { useState } from "react";
import SingleMedicine from "../component/SingleMedicine";

const AddMedicine = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      quality: "",
      expiry: "",
      details: "",
    }
  ]);

  const handleChanges = (e, index) => {
   
    const values = [...inputFields];
    if(e.target.name == "name"){
        values[index].name = e.target.value;
    } else if(e.target.name == "quality"){
      values[index].quality = e.target.value;
    } else if(e.target.name == "expiry"){
      values[index].expiry = e.target.value;
    } else if(e.target.name == "details"){
      values[index].details = e.target.value;
    }
    
  };

  const addInputField = () => {
    const values = [...inputFields];
    values.push({ name: "", quality: "", expiry: "", details: "" });

    setInputFields(values);
  };
  const removeInputField = (index) => {
    const values = [...inputFields];
    values.splice(index,1);

    setInputFields(values);
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
            
            {inputFields.map((value, index) => {
              return (
                <>
                  <div className="row">
                    <div className="col-1">
                      {index}
                    </div>
                    <div className="col-lg-2 col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => handleChanges(e)}
                        value={value.name}
                      />
                    </div>
                    <div className="col-lg-2 col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Quality"
                        name="quality"
                        onChange={(e) => handleChanges(e)}
                        value={value.quality}
                      />
                    </div>
                    <div className="col-lg-2 col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Expire Date"
                        name="expiry"
                        onChange={(e) => handleChanges(e)}
                        value={value.expiry}
                      />
                    </div>
                    <div className="col-lg-2 col-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Details"
                        name="details"
                        onChange={(e) => handleChanges(e)}
                        value={value.details}
                      />
                    </div>
                    <div className="col-lg-2 col-6">
                      <a
                        href="#"
                        className="px-3 mx-2 btn btn-success d-inline-block"
                        onClick={addInputField}
                      >
                        +
                      </a>
                      <a
                        href="#"
                        className="px-3 btn btn-danger d-inline-block"
                        onClick={removeInputField}
                      >
                        -
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddMedicine;
