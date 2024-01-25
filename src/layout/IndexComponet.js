import React from 'react';
import {Outlet} from "react-router-dom";
import Nav from "./nav/Nav";

function IndexComponet(props) {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default IndexComponet;