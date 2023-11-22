import React, { useEffect, useRef, useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatue";
// import Headerwith from "./HeaderWithClassComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
// import { loginHeaderText } from "../../app/CounterSlice";
import { AuthContext, ThemeContext } from "../Auth/AuthContext";
import { fetchApiDataAsync } from "../../redux/CardSlice";

const Icon = function () {
  // const level = useContext(logcontext);

  const onlineStatus = useOnlineStatus();
  const { theme, setTheme } = useContext(ThemeContext);

  // console.log(theme);

  useEffect(() => {
    localStorage.setItem("themecolor", JSON.stringify(theme));
  }, [theme]);
  const onSettheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <div className="Icon">
      <a href="facebook.com">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      Online Status:
      <span
        className="onlinestatus ml-2"
        style={{ backgroundColor: `${onlineStatus ? "green" : "red"}` }}
      ></span>
      <button
        onClick={onSettheme}
        className="ml-3 bg-slate-900 rounded-md  text-white text-sm px-3 py-1"
      >
        {theme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

const Navbar = (props) => {
  const { logstatus } = useContext(AuthContext);
  JSON.parse(localStorage.getItem("logstatus"));

  // console.log(logstatus.status);

  // const [login, setlogin] = useState("Login");
  const [about, setAbout] = useState("About us");
  const dispatch = useDispatch();

  // const logintext = useSelector((state) => state.resturent.logintext);
  // const loginDispatch = useDispatch();

  // const LoginFunction = () => {
  //   setlogin((prev) => {
  //     // const newvalue = prev === "Login" ? "Logout" : "Login";
  //     return prev === "Login" ? "Logout" : "Login";
  //   });
  // };

  const aboutFunction = () => {
    setAbout((prevv) => {
      return prevv === "About us" ? "About" : "About us";
    });
    compRef.current.classList.add("abc");
  };
  // console.log("nav called");
  useEffect(() => {
    // alert("about Change");
  }, [about]);

  const compRef = useRef();
  // console.log(compRef.current.innerHTML);
  const cart = useSelector((store) => store.cart.item);
  const apiData = useSelector((state) => state.cart.Apiitem);
  // useEffect(() => {
  //   // When the component mounts, fetch the API data
  //   dispatch(fetchApiDataAsync());
  // }, [dispatch]);
  // console.log({ apiData });
  console.log(cart);

  return (
    <div className="Navitem" ref={compRef}>
      <ul className="container ">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"about"} onClick={aboutFunction}>
            {about}
          </NavLink>
        </li>
        <li>
          <NavLink to={"contact-us"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"grocery"}>Grocery</NavLink>
        </li>
        <li>
          <NavLink to={"cart"}>
            Cart
            <sup className=" w-7 h-7 rounded-3xl bg-sky-700 text-white inline-block  text-center leading-7">
              {cart.length}
            </sup>
          </NavLink>
        </li>

        {/* <li onClick={() => loginDispatch(loginHeaderText())}>{logintext}</li> */}
        <li>
          {logstatus.status ? (
            `${logstatus.name}`
          ) : (
            <NavLink to={"Login"}>Login</NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="flex bg-sky-100 mb-3">
        <div className="logo ">
          <a>
            <img src={LOGO_URL} alt="abc" />
          </a>
        </div>
        <Navbar />
        {/* <Search /> */}
        <Icon />
      </header>
      {/* <Headerwith></Headerwith> */}
    </>
  );
};

export default Header;
