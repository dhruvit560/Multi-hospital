import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const reviewData = [
    {
      name: "Jacob Wilsson",
      position: "Writer",
      review:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.z",
    },
    {
      name: "John Doe",
      position: "Artist",
      review:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.z",
    },
    {
      name: "Mitchel Smith",
      position: "Designer",
      review:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.z",
    },
  ];
  return (
    <>
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <h1>
              Welcome to City <br />
              Multispeciality Hospital
            </h1>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
          </div>
        </section>
        <main id="main">
          <section id="why-us" className="why-us"></section>
          <section id="counts" className="counts">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="fas fa-user-md" />
                    <span>23</span>
                    <p>Doctors</p>
                  </div>
                </div>
                <div className="mt-5 col-lg-3 col-md-6 mt-md-0">
                  <div className="count-box">
                    <i className="far fa-hospital" />
                    <span>18</span>
                    <p>Departments</p>
                  </div>
                </div>
                <div className="mt-5 col-lg-3 col-md-6 mt-lg-0">
                  <div className="count-box">
                    <i className="fas fa-heartbeat" />
                    <span>980</span>
                    <p>Patients</p>
                  </div>
                </div>
                <div className="mt-5 col-lg-3 col-md-6 mt-lg-0">
                  <div className="count-box">
                    <i className="fas fa-award" />
                    <span>12</span>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="services">
            <div className="container">
              <div className="section-title">
                <h2>Our Facilities</h2>
                <p>
                  Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam
                  volutpat sollicitudin. Fusce tincidunt sit amet ex in
                  volutpat. Donec lacinia finibus tortor. Curabitur luctus
                  eleifend odio. Phasellus placerat mi et suscipit pulvinar.
                  Donec quis tristique lectus.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fas fa-hospital-alt" />
                    </div>
                    <h4>
                      <a href>24x7 Emergency Available</a>
                    </h4>
                    <p>
                      Nullam accumsan, velit et porta consequat, purus leo
                      congue risus
                    </p>
                  </div>
                </div>
                <div className="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch mt-md-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fas fa-bed" />
                    </div>
                    <h4>
                      <a href>40+ Bed Facilities</a>
                    </h4>
                    <p>
                      Pellentesque id felis elit. Pellentesque blandit sem a
                      nisi dictum
                    </p>
                  </div>
                </div>
                <div className="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch mt-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fas fa-hospital-user" />
                    </div>
                    <h4>
                      <a href>Cardiogram Machine</a>
                    </h4>
                    <p>
                      Donec lacinia finibus tortor. Curabitur luctus eleifend
                      odio.
                    </p>
                  </div>
                </div>
                <div className="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fas fa-dna" />
                    </div>
                    <h4>
                      <a href>X-ray and Sonography</a>
                    </h4>
                    <p>
                      Aliquam auctor felis ut sem elementum, ac rutrum turpis
                      venenatis.
                    </p>
                  </div>
                </div>
                <div className="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fas fa-wheelchair" />
                    </div>
                    <h4>
                      <a href>Semi Special, Special and Delux Room Available</a>
                    </h4>
                    <p>Etiam in massa eu neque euismod consectetur.</p>
                  </div>
                </div>
                <div className="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fas fa-notes-medical" />
                    </div>
                    <h4>
                      <a href>Medical</a>
                    </h4>
                    <p>Morbi vulputate, tortor nec pellentesque molestie</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="testimonials">
            <div className="container">
              <div className="section-title">
                <h2>Reviews</h2>
              </div>
              <div className="text-end">
                <button
                  className="mx-auto appointment-btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Add Review
                </button>
              </div>
              <Slider {...settings}>
                {reviewData.map((e, index) => {
                  return (
                    <>
                      <div>
                        <div className="testimonial-wrap">
                          <div className="testimonial-item">
                            <img
                              src={
                                require("../../assets/img/testimonials/testimonials-1.jpg")
                                  .default
                              }
                              className="testimonial-img"
                              alt
                            />
                            <h3>{e.name}</h3>
                            <h4>{e.position}</h4>
                            <p>
                              <i className="bx bxs-quote-alt-left quote-icon-left" />
                              {e.review}
                              <i className="bx bxs-quote-alt-right quote-icon-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </section>
          <section id="gallery" className="gallery">
            <div className="container">
              <div className="section-title">
                <h2>Gallery</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="#" className="galelry-lightbox">
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-1.jpg")
                            .default
                        }
                        alt="img"
                        className="img-fluid"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="#" className="galelry-lightbox">
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-2.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="#" className="galelry-lightbox">
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-3.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="#" className="galelry-lightbox">
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-4.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="#" className="galelry-lightbox">
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-5.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="assets/img/gallery/gallery-6.jpg"
                      className="galelry-lightbox"
                    >
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-6.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="assets/img/gallery/gallery-7.jpg"
                      className="galelry-lightbox"
                    >
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-7.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="#" className="galelry-lightbox">
                      <img
                        src={
                          require("../../assets/img/gallery/gallery-8.jpg")
                            .default
                        }
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
