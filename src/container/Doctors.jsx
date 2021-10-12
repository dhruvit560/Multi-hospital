import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const doctorData = [
    {
      id: 101,
      name: "Atha Smith",
      position: "Chief Medical Officer",
      details: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
      twitter: "https://twitter.com/doctorthemovie?lang=en",
      facebook: "https://www.facebook.com/Drsonline1/",
      insta: "https://www.instagram.com/medical.doctors/?hl=en",
      linkdin: "https://www.linkedin.com/company/linkmydoctor/",
    },
    {
      id: 102,
      name: "John White",
      position: "Anesthesiologist",
      details: "Aenean ac turpis ante. Mauris velit sapien.",
      twitter: "https://twitter.com/doctorthemovie?lang=en",
      facebook: "https://www.facebook.com/Drsonline1/",
      insta: "https://www.instagram.com/medical.doctors/?hl=en",
      linkdin: "https://www.linkedin.com/company/linkmydoctor/",
    },
    {
      id: 103,
      name: "Umika Loha",
      position: "Cardiology",
      details: "Curabitur luctus eleifend odio. Phasellus placerat mi.",
      twitter: "https://twitter.com/doctorthemovie?lang=en",
      facebook: "https://www.facebook.com/Drsonline1/",
      insta: "https://www.instagram.com/medical.doctors/?hl=en",
      linkdin: "https://www.linkedin.com/company/linkmydoctor/",
    },
    {
      id: 104,
      name: "Daimy Smith",
      position: "Neurosurgeo",
      details:
        "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.",
      twitter: "https://twitter.com/doctorthemovie?lang=en",
      facebook: "https://www.facebook.com/Drsonline1/",
      insta: "https://www.instagram.com/medical.doctors/?hl=en",
      linkdin: "https://www.linkedin.com/company/linkmydoctor/",
    },
    
  ];

  const loadData = () => {
    const localData = JSON.parse(localStorage.getItem("doctor"));
    let localDData;

    if (localData == null) {
      localDData = localStorage.setItem("doctor", JSON.stringify(doctorData));
    } else {
      localDData = localData;
    }

    setData(localDData)
  }

  useEffect(() => {
    loadData();
  }, []);

  const changeSearch = () => {
    
  }
  return (
    <>
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>
              Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
              Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
              erat. Quisque in lectus id nulla viverra sodales in a risus.
              Aliquam ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu
              sagittis nec. Phasellus a eleifend elit.
            </p>
          </div>
          <div className="text-end">
            <Link to="add-doctor" className="mx-auto appointment-btn">
              Add Doctor
            </Link>
          </div>

          <div className="row">
            {/* <div className="mx-auto col-lg-7">
              <input
                type="search"
                className="p-3 border w-100"
                placeholder="Search here"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div> */}
            {
              data !== undefined ? (
                data.map((e, index) => {
                  return (
                    <div className="mt-4 col-lg-6">
                      <div className="member d-flex align-items-start">
                        <div className="member-info">
                          <h4>{e.name}</h4>
                          <span>{e.position}</span>
                          <p>{e.details}</p>
                          <div className="social">
                            <Link to={e.twitter}>
                              <i className="ri-twitter-fill" />
                            </Link>
                            <Link to={e.facebook}>
                              <i className="ri-facebook-fill" />
                            </Link>
                            <Link to={e.linkdin}>
                              <i className="ri-instagram-fill" />
                            </Link>
                            <Link to={e.linkdin}>
                              <i className="ri-linkedin-box-fill" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : "Loading"
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
