import React from "react";
import SingleMedicine from "../component/SingleMedicine";

const Medicine = () => {
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
    }
  ];
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
          <div className="row mt-5">
                {
                    data.map((e,index) => <SingleMedicine name={e.name} quality={e.quality} expiryDate={e.expiryDate} details={e.detail}/>)
                }
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicine;
