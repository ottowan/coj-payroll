import React, { Fragment } from "react";
import Head from 'next/head'
const MainHeader = () => {
  return (
    <Fragment>
      {/* <div className="bd-notice">
        <div className="container">
          <div className="bd-notice-body">
            <p>
              Bulma <strong>0.8.2</strong> is out!
      </p>
            <p>
              <a target="_blank" href="https://github.com/jgthms/bulma/releases/tag/0.8.2">Release notes</a>
              <span>–</span>
              <a target="_blank" href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip"><strong>Download it now</strong></a>
            </p>
          </div>
        </div>
      </div> */}

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
                หน้าหนัก
    </a>
              <a href="#" className="navbar-item is-secondary">
                สำหรับผู้พิพากษา
    </a>
              <a href="#" className="navbar-item is-secondary">
                สำหรับเจ้าหน้าที่
    </a>
              <a href="#" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                คู่มือการใช้งาน
    </a>
              <a className="navbar-item">
                <span className="button signup-button rounded secondary-btn raised">
                  Log in
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
