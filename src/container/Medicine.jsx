import React, { useState, useEffect } from "react";
import SingleMedicine from "../component/SingleMedicine";
import { Link } from "react-router-dom";
import AddMedicine from "./AddMedicine";
// import { value } from "dom7";

const Medicine = () => {
  const [change, setChange] = useState("");
  const [, reRender] = useState({});
  const [deleteData, setDeleteData] = useState({});
  const [editData, setEditData] = useState({});
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const Originaldata = [
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
    loadData();
  };

  const handleDelete = (id) => {
    let delData = data.filter((d) => d.id !== id);
    localStorage.removeItem("medicine");
    localStorage.setItem("medicine", JSON.stringify(delData));
    handleRerender();
  };
  const handleEdit = (id) => {
    let edit = data.filter((e) => e.id === id);
    setEditData(edit[0]);
  };

  const loadData = () => {
    const localData = localStorage.getItem("medicine");
    var localMData;

    if (localData == null) {
      localStorage.setItem("medicine", JSON.stringify(Originaldata));
    } else {
      localMData = JSON.parse(localData);
    }

    setData(localMData[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const shortingData = (e) => {
    let UpdateSort;
    if (e.target.value === "hl") {
      UpdateSort = data.sort((a, b) => (a.quality < b.quality ? 1 : -1));
    } else if (e.target.value === "hl") {
      UpdateSort = data.sort((a, b) => (a.quality > b.quality ? 1 : -1));
    }
    // setData(UpdateSort);
  };

  // let filterData = data.filter((m) => 
  //       (m.name.toLowerCase().includes(search.toLowerCase()) || 
  //       m.quantity.toString().includes(search) || 
  //       m.price.toString().includes(search) ))

  // if (search == "") {
  //   filterData = data;
  // }
  //console.log(search)
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
            <AddMedicine
              reRender={() => handleRerender()}
              updateItems={editData}
            />
          </div>
          <div className="mt-3 row">
            <div className="mx-auto col-lg-6">
              <input
                type="search"
                className="p-3 border w-100"
                placeholder="Search here"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="mx-auto col-lg-6">
              <select
                onClick={(e) => shortingData(e)}
                className="form-select h-100"
              >
                <option value="0">-- select --</option>
                <option value="hl">High to low</option>
                <option value="lh">Low to high</option>
              </select>
            </div>
          </div>
          <div className="mt-2 row">
            {data != undefined ? (
              data.map((e, index) => (
                <SingleMedicine
                  id={e.id}
                  name={e.name}
                  quality={e.quality}
                  expiryDate={e.expiryDate}
                  details={e.detail}
                  editData={() => handleEdit(e.id)}
                  deleteData={() => handleDelete(e.id)}
                />
              ))
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicine;
