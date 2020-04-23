import React, { Fragment } from "react";
import Head from 'next/head'
const MainHeader = () => {
  return (
    <Fragment>


      <nav className="bd-navbar navbar is-fresh has-shadow is-spaced ">
        <div className="container">
          <div className="navbar-brand">


            <a href="/" className="logo-brand">
              <img src="/static/images/coj_logo.png" className="logo-brand-img" alt="Logo" />
            </a>

            <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbar-menu" className="navbar-menu is-static">

            <div className="navbar-end">
              <a href="#" className="navbar-item is-secondary">
                <i className="fas fa-home" style={{ marginRight: 10 }} />หน้าหลัก
    </a>
              <a href="#" className="navbar-item is-secondary">
                สำหรับผู้พิพากษา
    </a>
              <a href="#" className="navbar-item is-secondary">
                สำหรับเจ้าหน้าที่
    </a>

              <a className="navbar-item">
                <span className="button signup-button rounded secondary-btn raised">
                  คู่มือการใช้งาน
      </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default MainHeader;
