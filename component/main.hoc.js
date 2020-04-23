import React, { Fragment } from "react";
import MainHeader from "./main.header";
import MainFooter from "./main.footer";
import MainContent from "./main.content";

const MainHOC = (props) => {
  return (
    <Fragment>
      <MainHeader />
      {props.children}



      <MainFooter />
    </Fragment >
  );
};
export default MainHOC;
