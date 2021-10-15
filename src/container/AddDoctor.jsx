import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddDoctor = (props) => {
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
  const [newData, setNewData] = useState()

  const changeInput = (e, index) => {
    const OldValue = [...inputField];

    if (e.target.name == "name") {
      OldValue[index].name = e.target.value;
    } else if (e.target.name == "position") {
      OldValue[index].position = e.target.value;
    } else if (e.target.name == "details") {
      OldValue[index].details = e.target.value;
    } else if (e.target.name == "twitter") {
      OldValue[index].twitter = e.target.value;
    } else if (e.target.name == "facebook") {
      OldValue[index].facebook = e.target.value;
    } else if (e.target.name == "insta") {
      OldValue[index].insta = e.target.value;
    } else if (e.target.name == "linkdin") {
      OldValue[index].linkdin = e.target.value;
    }

    setInputField(OldValue);
  };
  const addInput = (e, index) => {
    const Oldvalue = [...inputField];
    Oldvalue.splice(index + 1, 0, {
      name: "",
      position: "",
      details: "",
      twitter: "",
      facebook: "",
      insta: "",
      linkdin: "",
    });
    setInputField(Oldvalue);
  };
  const removeInput = (e, index) => {
    const Oldvalue = [...inputField];
    Oldvalue.splice(index, 1);
    setInputField(Oldvalue);
  };

  const ChangeSubmit = () => {
    let localData = JSON.parse(localStorage.getItem("doctor"));
    const OldValue = [...inputField];

    let n = localData[localData.length - 1].id + 1;
    let data = OldValue.map((value) => ({ ...value, id: n++ }));
    data.map((d) => localData.push(d));

    localStorage.removeItem("doctor");
    localStorage.setItem("doctor", JSON.stringify(localData));
    alert("Submitted")
    props.reRender()
  };

  const handleUpdate = () => {
    let localData = JSON.parse(localStorage.getItem("doctor"));

    let afterUpdate = localData.map((l) => {
      if(l.id === newData.id){
        return newData
      }else {
        return l
      }
    })

    localStorage.removeItem("doctor");
    localStorage.setItem("doctor", JSON.stringify(afterUpdate));
    alert("Updated");
    props.reRender();
    console.log(afterUpdate)
    setInputField([
      {
        name: "",
        quality: "",
        expiryDate: "",
        detail: "",
      },
    ])
    setNewData({})
  }

  useEffect(() => {
    setNewData(props.updateItem)
  }, [props.updateItem])
  console.log(props.updateItem)

  
  const ChangeUpdate = () => {

  }
  const changeUpdateInput = (e) => {
   setNewData((value) => ({...value, [e.target.name] : e.target.value}))
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
                    onChange={(e) => newData === undefined ? changeInput(e, index) : changeUpdateInput(e,index)}
                    value={newData === undefined ? e.name : newData.name}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Position"
                    name="position"
                    onChange={(e) => newData === undefined ? changeInput(e, index) : changeUpdateInput(e,index)}
                    value={newData === undefined ? e.position : newData.position}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Details"
                    name="details"
                    onChange={(e) => newData === undefined ? changeInput(e, index) : changeUpdateInput(e,index)}
                    value={newData === undefined ? e.details : newData.details}

                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Twitter"
                    name="twitter"
                    onChange={(e) => newData === undefined ? changeInput(e, index) : changeUpdateInput(e,index)}
                    value={newData === undefined ? e.twitter : newData.twitter}

                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Facebook"
                    name="facebook"
                    onChange={(e) => newData === undefined ? changeInput(e, index) : changeUpdateInput(e,index)}
                    value={newData === undefined ? e.facebook : newData.facebook}

                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Insta"
                    name="insta"
                    onChange={(e) => newData === undefined ? changeInput(e, index) : changeUpdateInput(e,index)}
                    value={newData === undefined ? e.insta : newData.insta}

                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Linkdin"
                    name="linkdin"
                    onChange={(e) => changeInput(e, index)}
                    value={newData === undefined ? e.linkdin : newData.linkdin}

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
          {
            newData === undefined ? <button
              type="submit"
              onClick={(e) => ChangeSubmit(e)}
              className="mx-auto appointment-btn scrollto"
            >
              Submit
            </button> :
              <button
                type="submit"
                onClick={(e) => handleUpdate(e)}
                className="mx-auto appointment-btn scrollto"
              >
                Update
              </button>
          }
        </div>
      </div>
    </>
  );
};

export default AddDoctor;