import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="Error">
      {console.log(error)}
      <h1>404 Page Not found</h1>
      <Link to={"/"}>Back To Home</Link>
    </div>
  );
};
export default ErrorPage;
