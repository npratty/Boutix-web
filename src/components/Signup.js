import "../App.css";
import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Outlet } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [endDate] = useState(new Date());
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [usertype, setUsertype] = useState("");
  const [gender, setGender] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [errMsg, setErrMsg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault(e);

    if (
      !fullname ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !usertype ||
      !gender ||
      !endDate
    ) {
      setErrMsg("Fill all fields");
      return;
    }

    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const emailValidate = email.match(pattern);
    if (!emailValidate) {
      setErrMsg("Enter valid email");
      return;
    }
    if (password != confirmPassword) {
      setErrMsg("Enter correct password");
      return;
    }

    let url = "?";
    const data = {
      name: fullname,
      email: email,
      phone: phone,
      password: password,
      usertype: usertype,
      gender: gender,
      dob: endDate,
    };
    console.log(data);
    navigate("../home");

    // const response = await signUp(url, data);
    //     if (response.success) {
    //       navigate("./home");
    //     } else {
    //       setErrMsg(response.message);
    //     }
    //   };
  };
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="d-flex justify-content-center align-items-center ">
          <div
            style={{ display: "flex", alignItems: "center", height: "100vh" }}
          >
            <div
              style={{
                height: "500px",
                width: "600px",
                backgroundColor: "white",
              }}
            >
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
                Signup
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                {errMsg && (
                  <Alert
                    style={{
                      height: "10px",
                      maxWidth: "250px",
                      alignItems: "center",
                      display: "flex",
                      textAlign: "center",
                    }}
                    key="danger"
                    variant="danger"
                  >
                    {errMsg}
                  </Alert>
                )}
              </div>

              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <form onSubmit={($event) => signUp($event)}>
                  <div className="form-inline" style={{ padding: "15px" }}>
                    <div className="form-group mr-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div className="form-group mr-2">
                      <input
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrMsg(null);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-inline" style={{ padding: "15px" }}>
                    {" "}
                    <div className="form-group mr-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group  mr-2" style={{ width: "47%" }}>
                      <div className="form-group row">
                        <div className="col-md-10 col-sm-9">
                          <select
                            value={usertype}
                            className="custom-select"
                            onChange={(e) => setUsertype(e.target.value)}
                          >
                            <option selected>User Type</option>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-inline" style={{ padding: "15px" }}>
                    <div className="form-group row">
                      <div className="col-md-10 col-sm-9">
                        <select
                          value={gender}
                          className="custom-select"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option selected>Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="transgender">TransGender</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showYearDropdown
                        scrollableYearDropdown
                        endDate={endDate}
                        classNameName="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-inline" style={{ padding: "15px" }}>
                    <div className="form-group  mr-2" style={{ width: "47%" }}>
                      <input
                        placeholder="Password"
                        id="inputPassword2"
                        className="form-control"
                        type="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group  mr-2" style={{ width: "47%" }}>
                      <input
                        placeholder="Confirm Password"
                        id="inputPassword2"
                        className="form-control"
                        type="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div
                    className="form-group"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <button
                      type="submit"
                      className="gx-btn gx-btn-rounded gx-btn-primary "
                    >
                      Sign up
                    </button>
                  </div>
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    {" "}
                    <a
                      className="gx-btn gx-btn-rounded "
                      onClick={() => navigate("/Signin")}
                      style={{ marginLeft: "10px" }}
                    >
                      Existing User? Log in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default SignUp;
