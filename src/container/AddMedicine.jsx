import React, { useState, useEffect } from "react";

const AddMedicine = (props) => {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      quality: "",
      expiry: "",
      details: "",
    },
  ]);
  const [newData, setNewData] = useState({});

  const handleChanges = (e, index) => {
    const value = [...inputFields];
    if (e.target.name == "name") {
      value[index].name = e.target.value;
    }
    if (e.target.name == "quality") {
      value[index].quality = parseInt(e.target.value);
    }
    if (e.target.name == "expiry") {
      value[index].expiry = parseInt(e.target.value);
    }
    if (e.target.name == "details") {
      value[index].details = e.target.value;
    }
    setInputFields(value);
    console.log(inputFields);
  };

  const addInput = (e, index) => {
    const OldValues = [...inputFields];
    OldValues.splice(index + 1, 0, {
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
    let localData = JSON.parse(localStorage.getItem("medicine"));
    const OldValues = [...inputFields];

    let n = localData[localData.length - 1].id + 1;
    let data = OldValues.map((value) => ({ ...value, id: n++ }));
    data.map((d) => localData.push(d));

    localStorage.removeItem("medicine");
    localStorage.setItem("medicine", JSON.stringify(localData));
    alert("Submitted");
    props.reRender();
  };
  useEffect(() => {
    console.log("DDDDD");
  }, [props.updateItems]);

  console.log(newData);
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
                      value={e.name}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Quality"
                      name="quality"
                      value={e.quality}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Expire Date"
                      name="expiry"
                      value={e.expiry}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Details"
                      name="details"
                      value={e.details}
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
