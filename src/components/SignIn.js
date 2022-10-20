import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrMsg] = useState("");

  const signIn = (e) => {
    e.preventDefault(e);
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const isValidEmail = true;
    // email.match(pattern);

    if (!isValidEmail) {
      setErrMsg("Enter valid email");
      return;
    }

    let url = "?";
    const data = { email: email, password: password };
    navigate("/home");

    //     const response = signin(url, data);
    //     if (response.succeess) {
    //       navigate("./home");
    //     } else {
    //       setErrMsg(response.message);
    //     }
  };

  return (
    <div className="gx-container">
      <div className="gx-main-container">
        <div className="gx-main-content">
          <div className="gx-wrapper">
            <div className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
              <div className="login-content">
                <div
                  className="login-header"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    alignItems: "center",
                    marginBottom: "15px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Login
                </div>
                {errmsg && (
                  <Alert
                    style={{ height: "55px" }}
                    key="danger"
                    variant="danger"
                  >
                    {errmsg}
                  </Alert>
                )}
                <div className="login-form">
                  <form onSubmit={($event) => signIn($event)}>
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrMsg(null);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrMsg(null);
                        }}
                      />
                    </div>
                    <div className="form-group text-row-between">
                      <div className="custom-control custom-checkbox mr-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>
                      {/* <p>
                          <a
                            href="forgot-password1.html"
                            title="Reset Password"
                          >
                            Forgot your password
                          </a>
                        </p> */}
                    </div>
                    <div
                      className="form-group"
                      style={{ justifyContent: "center", display: "flex" }}
                    >
                      <button
                        type="submit"
                        className="gx-btn gx-btn-rounded gx-btn-primary "
                      >
                        Login
                      </button>
                    </div>

                    <a
                      className="gx-btn gx-btn-rounded "
                      onClick={() => navigate("/signup")}
                      style={{ justifyContent: "center", display: "flex" }}
                    >
                      <p style={{ color: "#3f51b5" }}>
                        {" "}
                        New to Boutix? Create an account
                      </p>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default SignIn;
