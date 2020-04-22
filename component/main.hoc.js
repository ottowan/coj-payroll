import React, { Fragment } from "react";
import MainHeader from "./main.header";
import MainFooter from "./main.footer";
import MainContent from "./main.content";
import MainMenuBar from "./main.menubar";

const MainHOC = () => {
  return (
    <Fragment>
      <MainHeader />
      <MainMenuBar />
      <MainContent />
      <MainFooter />
    </Fragment>
  );
};
export default MainHOC;
