import React from "react";
import {Link} from "react-router-dom"

const doctorData = [
  {
    name:"John Doe",
    position: "Chief Medical Officer",
    details:"Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
    twitter:"https://twitter.com/doctorthemovie?lang=en",
    facebook:"https://www.facebook.com/realdoctormike/",
    insta:"https://www.instagram.com/medical.doctors/?hl=en",
    linkdin:"https://www.linkedin.com/company/linkmydoctor"
  },
  {
    name:"John White",
    position: "Anesthesiologist",
    details:"Aenean ac turpis ante. Mauris velit sapie",
    twitter:"https://twitter.com/doctorthemovie?lang=en",
    facebook:"https://www.facebook.com/realdoctormike/",
    insta:"https://www.instagram.com/medical.doctors/?hl=en",
    linkdin:"https://www.linkedin.com/company/linkmydoctor"
  },
  {
    name:"Umika Loha",
    position: "Cardiology",
    details:"Curabitur luctus eleifend odio. Phasellus placerat mi.",
    twitter:"https://twitter.com/doctorthemovie?lang=en",
    facebook:"https://www.facebook.com/realdoctormike/",
    insta:"https://www.instagram.com/medical.doctors/?hl=en",
    linkdin:"https://www.linkedin.com/company/linkmydoctor"
  },
  {
    name:"Daimy Smith",
    position: "Neurosurgeon",
    details:"Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.",
    twitter:"https://twitter.com/doctorthemovie?lang=en",
    facebook:"https://www.facebook.com/realdoctormike/",
    insta:"https://www.instagram.com/medical.doctors/?hl=en",
    linkdin:"https://www.linkedin.com/company/linkmydoctor"
  }
]

const Doctors = () => {
  return (
    <>
      <section id="doctors" className="doctors">
  <div className="container">
    <div className="section-title">
      <h2>Doctors</h2>
      <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
    </div>
    <div className="text-end">
      <Link to="" className="appointment-btn mx-auto">Add Doctor</Link>
    </div>
    <div className="row">

         {
           doctorData.map((e) => {
            return (
              <>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="member-info">
                    <h4>{e.name}</h4>
                    <span>{e.position}</span>
                    <p>{e.details}</p>
                    <div className="social">
                      <Link to={{ pathname:e.twitter}} target="_blank">
                        <i className="ri-twitter-fill" />
                      </Link>
                      <Link to={e.facebook} target="_blank"><i className="ri-facebook-fill" /></Link>
                      <Link to={e.insta} target="_blank"><i className="ri-instagram-fill" /></Link>
                      <Link to={e.linkdin} target="_blank"> <i className="ri-linkedin-box-fill" /> </Link>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )
           })
         }
    </div>
  </div>
</section>

    </>
  );
};

export default Doctors;
