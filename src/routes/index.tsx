import React from "react";
import { Link, Routes } from "react-router-dom";
import PrivateRoute from "features/routes";

function Router() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={"/posts"}>Posts</Link>
      <PrivateRoute />
    </div>
  );
}

export default Router;
