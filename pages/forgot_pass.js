import React from "react";
import MainHOC from "../component/main.hoc";

const SearchUser = () => {
  return (
    <MainHOC>
      <div className="hero-body is-fullheight">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-offset-1 landing-caption">
              <img src="/static/images/logo.png" alt="Logo" width="300" />
              <h2 className="subtitle is-5 is-muted" style={{ marginTop: 20 }}>
                ระบบพิมพ์สลิปเงินเดือน<strong> ข้าราชการตุลาการ </strong>
                ศาลยุติธรรม
              </h2>
            </div>

            <div className="column is-6 is-offset-1 landing-caption">
              <div className="column is-10 text-align-top">
                <div>
                  <h2 className="subtitle" style={{ marginTop: 20 }}>
                    <b>
                      ผู้ใช้ <font color="red">ลืมรหัสผ่าน</font> หรือ &nbsp;
                      <font color="red">เปลี่ยนรหัสผ่าน</font>
                    </b>
                  </h2>
                  <article className="panel is-primary">
                    <p className="panel-heading">เปลี่ยนรหัสผ่าน</p>

                    <div className="panel-block">
                      <div className="field-label is-normal">
                        <label className="label">Username</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel-block">
                      <div className="field-label is-normal">
                        <label className="label">E-mail</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel-block is-right">
                      <div className="buttons is-right">
                        <button className="button is-danger">ยืนยัน </button>
                        <button className="button is-warning">ยกเลิก </button>
                        <br />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainHOC>
  );
};
export default SearchUser;
