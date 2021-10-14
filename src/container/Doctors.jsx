import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddDoctor from "./AddDoctor";

const Doctors = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const [editData, setEditData] = useState();
  const [, reRender] = useState({});

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

    setData(localDData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (id) => {
    const UpdData = data.filter((d) => d.id === id);
    setEditData(UpdData[0])
    // console.log(UpdData)
    handleRerender()
  };
  
  const deleteData = (id) => {
    const delData= data.filter((d) => d.id !== id);
    setData(delData)
    handleRerender()
    // alert("Delete Data");
  };

  const handleRerender = () => {
    reRender({})
  }
  const changeSearch = () => {};
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
          <AddDoctor reRender={() => handleRerender()} updateItem={editData}/>
          {/* <button onClick={() => loadData()}>
            data
          </button> */}
          <div className="row">
            <div className="mx-auto col-lg-7">
              <input
                type="search"
                className="p-3 border w-100"
                placeholder="Search here"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {data !== undefined
              ? data.map((e, index) => {
                  return (
                    <div className="mt-4 col-lg-6" >
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
                          <div className="mt-3">
                            <button className="bg-transparent" onClick={() => handleEdit(e.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="#00cb2c"
                                  d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
                                />
                              </svg>
                            </button>
                            <a href="#" onClick={() => deleteData(e.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="red"
                                  d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : <div className="text-center col-12">Loading</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;