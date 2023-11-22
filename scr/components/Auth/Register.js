import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  // console.log(`${process.env.PUBLIC_URL}api/mynewtables`);

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    reenterpass: "",
  });
  // const [credentailError, setcredentailError] = useState(false);
  const [fieldError, setfieldError] = useState(false);
  const [emailError, setEmailerror] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    // console.log({ ...formData });

    if (Object.values(formData).some((value) => value.trim().length === 0)) {
      // alert("Please enter the value");
      setfieldError(true);
      return;
    }
    if (formData.password !== formData.reenterpass) {
      return;
    }
    const body = {};

    body.data = { ...formData };

    console.log(body.data);

    fetch(`${process.env.PUBLIC_URL}api/mynewtables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    // setformData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   reenterpass: "",
    // });
  };

  const getInputValue = (e) => {
    setformData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    // if (formData.password !== formData.reenterpass) {
    //   setformData({
    //     ...formData,
    //     passswordnotmatch: "Password Not Matched",
    //   });
    //   console.log(formData.passswordnotmatch);
    // } else {
    //   setformData({
    //     ...formData,
    //     passswordnotmatch: "",
    //   });
    //   // setformData(formData);
    // }
  };
  // console.log(formData);
  return (
    <div className=" w-3/6 m-auto rounded-lg p-8 bg-sky-100 mt-12 signup">
      <h1 className=" text-3xl text-center mb-3">Register</h1>
      <div className=" w-3/4 m-auto">
        <form onSubmit={formSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                value={formData.name}
                type="text"
                name="name"
                id="name"
                autoComplete="Name"
                placeholder="Enter your Name"
                className=" h-11 px-3 py-2 rounded-md focus-visible:outline-none block w-full bg-white"
                onChange={(e) => getInputValue(e)}
              />
              {fieldError && formData.name.trim() === "" && (
                <label className=" text-red-500">Please Enter the Name</label>
              )}
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                value={formData.email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter your Email"
                className=" h-11 px-3 py-2 rounded-md focus-visible:outline-none block w-full bg-white	"
                onChange={(e) => getInputValue(e)}
              />
              {fieldError && formData.email.trim() === "" && (
                <label className=" text-red-500">Please Enter the Email</label>
              )}
            </div>
            <div>
              <label className="block mb-2" htmlFor="password">
                Create Password
              </label>
              <input
                value={formData.password}
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                placeholder="Password"
                className=" h-11 px-3 py-2 rounded-md focus-visible:outline-none block w-full bg-white	"
                onChange={(e) => getInputValue(e)}
              />
              {fieldError && formData.password.trim() === "" && (
                <label className=" text-red-500">
                  Please Enter the Password
                </label>
              )}
            </div>
            <div>
              <label className="block mb-2" htmlFor="reenterpass">
                Re-Enter Password
              </label>
              <input
                value={formData.reenterpass}
                type="password"
                name="reenterpass"
                id="reenterpass"
                autoComplete="reenterpass"
                placeholder="Password"
                className=" h-11 px-3 py-2 rounded-md focus-visible:outline-none block w-full bg-white	"
                onChange={(e) => getInputValue(e)}
              />
              {fieldError && formData.reenterpass.trim() === "" ? (
                <label className=" text-red-500">
                  Please Enter the Password
                </label>
              ) : formData.password !== formData.reenterpass ? (
                <label className=" text-red-500">
                  Your Password is not matched
                </label>
              ) : (
                ""
              )}
              {/* <label>{formData.passswordnotmatch}</label> */}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-5 bg-blue-400 rounded-md text-white w-40 mt-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
