import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/css/style.css";
import React from "react";
import HeaderMain from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import { Switch, Route } from "react-router-dom";
import Department from "./container/Department";
import AboutUs from "./container/AboutUs";
import ContactUs from "./container/ContactUs";
import Appointment from "./container/Appointment";
import Doctors from "./container/Doctors";
import Login from "./container/Login";
import Medicine from "./container/Medicine";
import AddMedicine from "./container/AddMedicine";
import AddDoctor from "./container/AddDoctor";

function App() {
  return (
    <>
      <HeaderMain />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/department" component={Department} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/login" component={Login} />
        <Route path="/medicine" component={Medicine} />
        <Route path="/add-medicine" component={AddMedicine} />
        <Route path="/add-doctor" component={AddDoctor} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
