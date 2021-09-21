import React, { useState } from "react";

const AddMedicine = () => {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      quality: "",
      expiry: "",
      details: "",
    },
  ]);
  // const [values, setValues] = useState([]);

  const handleChanges = (e, index) => {
    // console.log(e.target.value + " " + e.target.name);
    // setValues((values) => ({...values,[e.target.name]:e.target.value}))
    if (e.target.name == "name") {
      inputFields[index].name = e.target.value;
    }
    if (e.target.name == "quality") {
      inputFields[index].quality = parseInt(e.target.value);
    }
    if (e.target.name == "expiry") {
      inputFields[index].expiry = parseInt(e.target.value);
    }
    if (e.target.name == "details") {
      inputFields[index].details = e.target.value;
    }

    // setInputFields(inputFields);
    console.log(inputFields);
  };

  const addInput = (e, index) => {
    const OldValues = [...inputFields];
    OldValues.splice(index, 0, {
      name: "",
      quality: "",
      expiry: "",
      details: "",
    });
    setInputFields(OldValues);
  };
  const removeInput = (e, index) => {
    const OldValues = [...inputFields];
    OldValues.splice(index, 1);
    setInputFields(OldValues);
  };
  const submitForm = () => {
    console.log(inputFields);
    
    const OldValues = [...inputFields];
    
    let localData = JSON.parse(localStorage.getItem("medicine"))
    localStorage.setItem('medicineData',JSON.stringify(localData))
    console.log([...localData,inputFields])
  };
  return (
    <>
      <section id="medicine" className="py-5 medicine">
        <div className="container">
          <div className="add-medicine" method="post">
            {inputFields.map((e, index) => {
              return (
                <div className="mt-3 row">
                  <div className="col-1">{index + 1}</div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      name="name"
                      // value={e.name}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Quality"
                      name="quality"
                      // value={e.quality}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Expire Date"
                      name="expiry"
                      // value={e.expiry}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Details"
                      name="details"
                      // value={e.details}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <a
                      href="#"
                      className="px-3 mx-2 btn btn-success d-inline-block"
                      onClick={(e) => addInput(e, index)}
                    >
                      +
                    </a>
                    <a
                      onClick={(e) => removeInput(e, index)}
                      href="#"
                      className="px-3 btn btn-danger d-inline-block"
                    >
                      -
                    </a>
                  </div>
                </div>
              );
            })}

            <div className="mt-4 text-center">
              <button
                type="submit"
                onClick={(e) => submitForm(e)}
                className="mx-auto appointment-btn scrollto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddMedicine;
