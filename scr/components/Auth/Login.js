import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
function Login() {
  const navigate = useNavigate();
  let registerLink = useNavigate("");
  const { setLogStatus } = useContext(AuthContext); //sending data through usecontext
  const loginPage = () => {
    registerLink = registerLink("/register");
  };

  const [loginInput, useloginInput] = useState({
    name: "",
    password: "",
  });
  const [credentailError, setcredentailError] = useState(false);
  const [fieldError, setfieldError] = useState(false);

  const handleLoginForm = (e) => {
    // const loginVal = localStorage.getItem("Formdata");
    e.preventDefault();

    fetch(`${process.env.PUBLIC_URL}api/mynewtables`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        data.data.map((val) => {
          if (
            Object.values(loginInput).some((value) => value.trim().length === 0)
          ) {
            setfieldError(true);
            setcredentailError(false);

            return;
          }
          if (
            val.attributes.name.includes(loginInput.name.trim()) &&
            loginInput.password === val.attributes.password
          ) {
            navigate("/");
            sessionStorage.setItem(
              "logstatus",
              JSON.stringify({
                status: true,
                name: loginInput.name,
              })
            );
            setLogStatus({
              status: true,
              name: loginInput.name,
            });

            useloginInput({
              name: "",
              password: "",
            });
          }

          if (
            loginInput.name !== val.attributes.name ||
            loginInput.password !== val.attributes.password
          ) {
            setfieldError(false);
            setcredentailError(true);
            // console.log(val.attributes.name, loginInput.name);

            useloginInput({
              name: "",
              password: "",
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // var parsedObject = JSON.parse(loginVal);

    // console.log(parsedObject, loginInput.name);
  };
  const getloginValue = (e) => {
    useloginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-3/12   m-auto rounded-lg p-8 bg-sky-100 mt-12 login">
      {credentailError && !fieldError ? (
        <div className=" bg-red-400 p-2 rounded-md mb-4 text-center">
          Your Credential is wrong
        </div>
      ) : (
        <></>
      )}
      <h1 className=" text-3xl text-center mb-3">Login</h1>
      <form onSubmit={handleLoginForm}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              value={loginInput.name}
              type="text"
              name="name"
              id="name"
              autoComplete="Name"
              placeholder="Enter your Name"
              className=" h-11 px-3 py-2 rounded-md focus-visible:outline-none block w-full bg-white"
              onChange={(e) => getloginValue(e)}
            />
            {fieldError && loginInput.name.trim() === "" ? (
              <label className=" text-red-500">Please Enter the Name</label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={loginInput.password}
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Enter your Password"
              className=" h-11 px-3 py-2 rounded-md focus-visible:outline-none block w-full bg-white"
              onChange={(e) => getloginValue(e)}
            />
            {fieldError && loginInput.password.trim() === "" ? (
              <label className=" text-red-500">Please Enter the Password</label>
            ) : (
              ""
            )}
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
      <div className="text-center mt-6">
        <label>Do you want Signup ?</label>
        <Link
          to={registerLink}
          className="text-cyan-500 ml-2"
          onClick={loginPage}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
