import React, { useState, useEffect } from "react";

const AddMedicine = (props) => {
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      quality: "",
      expiryDate: "",
      detail: "",
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
    if (e.target.name == "expiryDate") {
      value[index].expiryDate = parseInt(e.target.value);
    }
    if (e.target.name == "detail") {
      value[index].detail = e.target.value;
    }
    setInputFields(value);
  };

  const addInput = (e, index) => {
    const OldValues = [...inputFields];
    OldValues.splice(index + 1, 0, {
      name: "",
      quality: "",
      expiryDate: "",
      detail: "",
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
    let data = OldValues.map((value) => ({ ...value, "id": n++ }));
    data.map((d) => localData.push(d));

    localStorage.removeItem("medicine");
    localStorage.setItem("medicine", JSON.stringify(localData));
    alert("Submitted");
    props.reRender();
  };
  useEffect(() => {
    setNewData(props.updateItems)
  }, [props.updateItems]);
  
  const handleUpdateChange = (e) => {
    console.log(e.target.name)
   setNewData((value) => ({...value, [e.target.name] : e.target.value}))
    
  }
  const submitUpdate =  ()=> {
    let localData = JSON.parse(localStorage.getItem("medicine"));

    let afterUpdate = localData.map((l) => {
      if(l.id === newData.id){
        return newData
      }else {
        return l
      }
    })
    localStorage.removeItem("medicine");
    localStorage.setItem("medicine", JSON.stringify(afterUpdate));
    alert("Updated");
    props.reRender();
    console.log(afterUpdate)
  }
  
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
                      value={newData ? newData.name : e.name}
                      onChange={(e) => {newData ? handleUpdateChange(e) :handleChanges(e, index)}}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Quality"
                      name="quality"
                      value={newData ? newData.quality : e.quality}
                      onChange={(e) => handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Expire Date"
                      name="expiryDate"
                      value={newData ? newData.expiryDate : e.expiryDate}
                      onChange={(e) => newData ? handleUpdateChange(e) : handleChanges(e, index)}
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Detail"
                      name="detail"
                      value={newData ? newData.detail : e.detail}
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

              {
                  Object.keys(props.updateItems).length === 0 ? <button
                  type="submit"
                  onClick={(e) => submitForm(e)}
                  className="mx-auto appointment-btn scrollto"
                >
                  Submit
                </button> : 
                <button
                type="submit"
                onClick={(e) => submitUpdate(e)}
                className="mx-auto appointment-btn scrollto"
              >
                Update
              </button>
                }
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddMedicine;
