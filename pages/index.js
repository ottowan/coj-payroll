import React, { useState } from "react";
import MainHOC from "../component/main.hoc";

const Index = () => {

  const titleInit = (str1, str2, str3) => {
    return (
      <div className="tags has-addons" style={{ marginBottom: 10 }}>
        <span className="tag is-danger"><i className="fas fa-watch" /></span>
        <span className="tag "> {str1}&nbsp;<strong className="has-text-danger">{str2}</strong>&nbsp;{str3}</span>
      </div>
    )
  }

  const [title, setTitle] = useState(titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", ""))

  const handleClick = (e) => {

    if (e.target.dataset.value == "2") {

      setTitle(titleInit("สำหรับ ", "เจ้าหน้าที่ ", "พิมพ์สลิปเงินเดือนข้าราชการตุลาการทั้งหน่วยงาน"))
    } else {

      setTitle(titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", ""))
    }
  }

  return (
    <MainHOC>
      <div className="hero-body is-fullheight">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 is-offset-1 landing-caption">
              <img src="/static/images/logo.png" alt="Logo" width="300" />
              <h2 className="subtitle is-5 is-muted" style={{ marginTop: 20 }}>ระบบพิมพ์สลิปเงินเดือน<strong>ข้าราชการตุลาการ</strong>ศาลยุติธรรม </h2>
              <div className="button-wrap">
                <a

                  className="button cta is-rounded primary-btn raised"
                  onClick={handleClick}
                  data-value="1"
                >
                  ผู้พิพากษา
                </a>
                <a className="button cta is-rounded"
                  onClick={handleClick}
                  data-value="2"
                >
                  เจ้าหน้าที่
                </a>
              </div>


            </div>
            <div className="is-divider-vertical" data-content="OR"></div>

            <div className="column is-5 text-align-top">
              <div>

                <h2 className="subtitle is-5 is-muted is-danger" style={{ marginTop: 20 }}>ระบบพิมพ์สลิปเงินเดือน<strong>ข้าราชการตุลาการ</strong>ศาลยุติธรรม </h2>
                <article className="panel is-warning">
                  <p className="panel-heading">
                    เข้าสู่ระบบ
    </p>

                  <div className="panel-block">

                    <p className="control has-icons-left">
                      <input className="input" type="text" placeholder="Username" required />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="panel-block">

                    <p className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="Password" required />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>

                      <span className="icon is-small is-right" >
                        <i className="fas fa-eye" />
                      </span>
                    </p>
                  </div>

                  <div className="panel-block is-right">
                    <div className="buttons is-right">
                      <button className="button is-link">เข้าสู่ระบบ</button><br />
                    </div>
                  </div>
                </article>
              </div>
              <hr></hr>
              <div className="field">
                {title}
              </div>

            </div>

          </div>
        </div>
      </div >


    </MainHOC >


  );
};
export default Index;
