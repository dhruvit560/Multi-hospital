import React, { useState, useEffect } from "react";
import SingleMedicine from "../component/SingleMedicine";
import { Link } from "react-router-dom";
import AddMedicine from "./AddMedicine";

const Medicine = () => {
  const [change, setChange] = useState("");
  const [, reRender] = useState({});
  const [deleteData, setDeleteData] = useState({});
  const [editData, setEditData] = useState({});

  const data = [
    {
      id: 101,
      name: "Dhruvit",
      quality: 3,
      detail: "Morbi vulputate, tortor nec pellentesque molestie, eros",
      expiryDate: "05/10/2021",
    },
    {
      id: 102,
      name: "DDhruvit",
      quality: 4,
      detail: "vulputate, tortor nec pellentesque molestie, eros Morbi ",
      expiryDate: "10/10/2021",
    },
    {
      id: 103,
      name: "ABC",
      quality: 3,
      detail: " tortor nec Morbi vulputate, pellentesque molestie, eros",
      expiryDate: "05/10/2021",
    },
    {
      id: 104,
      name: "XYZ",
      quality: 4,
      detail: "pellentesque Morbi vulputate, tortor nec  molestie, eros",
      expiryDate: "10/10/2021",
    },
  ];

  const handleRerender = () => {
    reRender({});
  };

  const handleDelete = (id) => {
    let delData = localMData.filter((d) => d.id !== id)
    localStorage.removeItem("medicine");
    localStorage.setItem("medicine", JSON.stringify(delData))
    reRender({});
  };
  const handleEdit = (id) => {
    let edit = localMData.filter((e) => e.id === id);
    setEditData(edit[0]);
    console.log(editData);
  };

  const localData = localStorage.getItem("medicine");
  let localMData;

  if (localData == null) {
    localStorage.setItem("medicine", JSON.stringify(data));
  } else {
    localMData = JSON.parse(localData);
  }
  // console.log(localMData);
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
          <div className="d-flex align-items-center justify-content-center">
            <AddMedicine reRender={() => handleRerender()} updateItems={setEditData} />
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
                id={e.id}
                name={e.name}
                quality={e.quality}
                expiryDate={e.expiryDate}
                details={e.detail}
                editData={() => handleEdit(e.id)}
                deleteData={() => handleDelete(e.id)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicine;
