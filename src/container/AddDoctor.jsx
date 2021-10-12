import React,{useState} from "react";

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
    }
  ]);
  const submitItem = () => {
    let localData = JSON.parse(localStorage.getItem("doctor"));
    const OldValue = [...inputField];
    
    let n = localData[localData.length - 1].id + 1;
    let data = OldValue.map((value) => ({ ...value, "id": n++ }));
    data.map((d) => localData.push(d));

    localStorage.removeItem("doctor");
    localStorage.setItem("doctor", JSON.stringify(localData));
    alert("Submitted");
  }
  const changeInput = (e,index) => {
      const OldValue = [...inputField];
      
      if(e.target.name == "name"){
        OldValue[index].name = e.target.value
      }else if(e.target.name == "position"){
        OldValue[index].position = e.target.value
      }else if(e.target.name == "details"){
        OldValue[index].details = e.target.value
      }else if(e.target.name == "twitter"){
        OldValue[index].twitter = e.target.value
      }else if(e.target.name == "facebook"){
        OldValue[index].facebook = e.target.value
      }else if(e.target.name == "insta"){
        OldValue[index].insta = e.target.value
      }else if(e.target.name == "linkdin"){
        OldValue[index].linkdin = e.target.value
      }

      setInputField(OldValue);
      console.log(inputField)
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
              <div className="mt-3 d-flex align-items-center" style={{gap:"1rem"}}>
                <div className="">{index + 1}</div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => changeInput(e,index)}
                    value={e.name}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Position"
                    name="position"
                    onChange={(e) => changeInput(e,index)}
                    value={e.position}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Details"
                    name="details"
                    onChange={(e) => changeInput(e,index)}
                    value={e.details}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Twitter"
                    name="twitter"
                    onChange={(e) => changeInput(e,index)}
                    value={e.twitter}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Facebook"
                    name="facebook"
                    onChange={(e) => changeInput(e,index)}
                    value={e.facebook}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Insta"
                    name="insta"
                    onChange={(e) => changeInput(e,index)}
                    value={e.insta}
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Linkdin"
                    name="linkdin"
                    onChange={(e) => changeInput(e,index)}
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
        <div className="text-center">
          <button onClick={() => submitItem()}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
