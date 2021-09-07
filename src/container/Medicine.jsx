import React, { useState } from "react";
import SingleMedicine from "../component/SingleMedicine";

const Medicine = () => {
  const [change, setChange] = useState("");
  console.log(setChange);
  const data = [
    {
      name: "Dhruvit",
      quality: 3,
      detail: "Morbi vulputate, tortor nec pellentesque molestie, eros",
      expiryDate: "05/10/2021",
    },
    {
      name: "DDhruvit",
      quality: 4,
      detail: "vulputate, tortor nec pellentesque molestie, eros Morbi ",
      expiryDate: "10/10/2021",
    },
    {
      name: "ABC",
      quality: 3,
      detail: " tortor nec Morbi vulputate, pellentesque molestie, eros",
      expiryDate: "05/10/2021",
    },
    {
      name: "XYZ",
      quality: 4,
      detail: "pellentesque Morbi vulputate, tortor nec  molestie, eros",
      expiryDate: "10/10/2021",
    },
  ];

  console.log(setChange)

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
          <div className="row">
            <div className="mx-auto col-lg-6">
              <input
                type="search"
                className="p-3 border w-100"
                placeholder="Search here"
                onChange={(e) => setChange(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 row">
            {data.map((e, index) => (
              <SingleMedicine
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
