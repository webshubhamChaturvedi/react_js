// import React from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import Header from "./components/common/Header";
import Body from "./components/Resturent/Resturent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import { lazy, Suspense, useState } from "react";
// import { Provider } from "react-redux";
import AppStore from "./redux/store";
import { Counter } from "./counter/Counter";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
const Grocery = lazy(() => import("./components/Grocery/Grocery"));

const ResturentDetail = lazy(() =>
  import("./components/Resturent/ResturentDetails/ResturentDetail")
);
import { AuthContext, ThemeContext } from "./components/Auth/AuthContext";
import { Provider } from "react-redux";
import Cart from "./components/Resturent/Cart";
const App = () => {
  const getLocalData = JSON.parse(sessionStorage.getItem("logstatus"));

  const [logstatus, setLogStatus] = useState(getLocalData || false);
  const [theme, setTheme] = useState(() => {
    // Initialize the dark mode state from localStorage if available, else set it to false by default
    const storedDarkMode = localStorage.getItem("themecolor");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ logstatus, setLogStatus }}>
        <div className={`App ${theme ? "light" : "dark"}   min-h-screen`}>
          <Header></Header>
          <Outlet />
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "resturents/:resid",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ResturentDetail />
          </Suspense>
        ),
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "counter",
        element: <Counter></Counter>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AppStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
