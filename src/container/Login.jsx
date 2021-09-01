import React, { useState } from "react";

const Login = () => {
  const [auth, setAuth] = useState("signup");
  const [forgot, setForgot] = useState("forgot");

  return (
    <>
      <section id="login" className="login">
        <div className="container">
          {forgot != "forgot" ? (
            <div className="section-title">
              {" "}
              <h2>Forgot Password</h2>{" "}
            </div>
          ) : (
            <div className="section-title">
              {auth == "signup" ? <h2>Sign Up</h2> : <h2>Login</h2>}
            </div>
          )}
          <div>
          {forgot == forgot ? null :
            <div>
            {auth == "signup" ? (
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
            ) : null}
            </div>}

            {forgot == forgot ? null : (
              <div className="form-group mt-3">
                <label>Email ID</label>
                <input type="text" className="form-control" />
              </div>
            )}
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="text" className="form-control" />
            </div>
            {forgot != forgot ? null : (
              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input type="text" className="form-control" />
              </div>
            )}

            <div className="mt-3 text-end d-block">
              {forgot != "forgot" ? null : (
                <a
                  href="#"
                  onClick={() => {
                    setForgot("");
                  }}
                >
                  Forgot Password?
                </a>
              )}
            </div>
            <div className="text-center mt-5">
              {forgot != "forgot" ? null : <div>
                {auth == "signup" ? (
                  <p>
                    Already have account{" "}
                    <a
                      href="#"
                      onClick={() => {
                        setAuth("");
                      }}
                    >
                      Login
                    </a>
                  </p>
                ) : (
                  <p>
                    Don't have an account{" "}
                    <a
                      href="#"
                      onClick={() => {
                        setAuth("signup");
                      }}
                    >
                      Sign up
                    </a>
                  </p>
                )}
              </div> }

              {forgot != forgot ? (
                <div>
                  {auth == "signup" ? (
                    <a className="appointment-btn scrollto m-0">
                      <span className="d-none d-md-inline">Sign up</span>
                    </a>
                  ) : (
                    <a className="appointment-btn scrollto m-0">
                      <span className="d-none d-md-inline">Login</span>
                    </a>
                  )}
                </div>
              ) : (
                <a className="appointment-btn scrollto m-0">
                  <span className="d-none d-md-inline">Forgot</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
