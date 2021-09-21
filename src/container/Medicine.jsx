import React, { useState, useEffect } from "react";
import SingleMedicine from "../component/SingleMedicine";
import {Link} from "react-router-dom"


const Medicine = () => {
  const [change, setChange] = useState("");
  const data = [
    {
      id:101,
      name: "Dhruvit",
      quality: 3,
      detail: "Morbi vulputate, tortor nec pellentesque molestie, eros",
      expiryDate: "05/10/2021",
    },
    {
      id:102,
      name: "DDhruvit",
      quality: 4,
      detail: "vulputate, tortor nec pellentesque molestie, eros Morbi ",
      expiryDate: "10/10/2021",
    },
    {
      id:103,
      name: "ABC",
      quality: 3,
      detail: " tortor nec Morbi vulputate, pellentesque molestie, eros",
      expiryDate: "05/10/2021",
    },
    {
      id:104,
      name: "XYZ",
      quality: 4,
      detail: "pellentesque Morbi vulputate, tortor nec  molestie, eros",
      expiryDate: "10/10/2021",
    },
  ];

  // console.log(setChange)

  // console.log(data);

  // useEffect(() => {
  //   const aaa = localStorage.setItem("medicine",  JSON.stringify(data));
  //   console.log(aaa);
  // },[data])
  

  // localStorage.getItem("medicine")
  
  const localData = localStorage.getItem("medicineData");
  let localMData;

  if(localData === null){
    localStorage.setItem("medicineData",JSON.stringify(data));
    localMData = data
  }else{
    localMData = JSON.parse(localData)
  }
  
  console.log(localMData)
  

  return (
    <>
      <section id="medicine" className="medicine">
        <div className="container">
          <div className="section-title">
            <h2>Medicine</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
              aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
              orci vehicula facilisis.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="d-flex align-items-center justify-content-end">
          <Link href="#" to="/add-medicine" className="m-0 border-none nav-link scrollto active appointment-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path  fill="#fff" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg> Add Medicine</Link>
          
          
          </div>
          <div className="mt-3 row">
            <div className="mx-auto col-lg-6">
              <input
                type="search"
                className="p-3 border w-100"
                placeholder="Search here"
                onChange={(e) => setChange(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2 row">
            {localMData.map((e, index) => (
              <SingleMedicine
                // id={e.id}
                name={e.name}
                quality={e.quality}
                expiryDate={e.expiryDate}
                details={e.detail}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicine;
