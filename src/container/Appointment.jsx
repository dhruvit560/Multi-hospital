import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddAppointment from "./AddAppointment";

const Appointment = () => {
  const [appData, setAppData] = useState();
  const [reRender, setRerender] = useState();

  const loadData = () => {
    const localData = localStorage.getItem("appointment");
    var localAData;

    if (localData == null) {
      localStorage.setItem("appointment", JSON.stringify(localData));
    } else {
      localAData = JSON.parse(localData);
    }

    setAppData(localAData);
  };

  useEffect(() => {
    loadData();
  }, []);

  //   console.log(dataGet)

  const deleteItem = (e) => {
    let delData = appData.splice(0, 1);
    // localStorage.removeItem("appointment");
    // let localData = localStorage.setItem("appointment", JSON.stringify(delData))
    // setRerender({});

    // if(localData === []){
    //   const l =  "No data found"
    // }else{
    //   localData = "abc"
    // }
  }

  const handleRerender = () => {
    setRerender({})
  }

  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec
              lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus
              placerat mi et suscipit pulvinar.
            </p>
          </div>
          <div className="mt-4">
            <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>

              <TabPanel>
                <AddAppointment reRender={() => handleRerender()} />
              </TabPanel>
              <TabPanel>
                <div className="row doctors">
                  {
                    appData != undefined ? appData.map((e, index) => {
                      return (
                        <>
                          <div className="mt-4 col-lg-6">
                            <div className="member d-flex align-items-start">
                              <div className="member-info">
                                <h4>Name : {e.name}</h4>
                                <p>Email : {e.email}</p>
                                <p>Phone : {e.phone}</p>
                                <p>Appointment : {e.appointment}</p>
                                <p>Department : {e.department}</p>
                                <p>Message : {e.message}</p>
  
                                <div className="mt-3">
                                  <button className="bg-transparent">
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
                                  <a href="#" onClick={(e) => deleteItem(e)}>
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
                        </>
                      );
                    }) :
                    <p className="mt-3 text-center">
                      "No data found"
                    </p>
                  }
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
