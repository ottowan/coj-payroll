import React from "react";
import MainHOC from "../component/main.hoc";
import Search from "./search-jud";

const SearchUser = () => {
  return (
    <MainHOC>
      <div className="hero-body is-fullheight">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-12 is-offset-1 landing-caption">
              <div className="column is-10 text-align-top">
                <div>
                  <h2 className="subtitle" style={{ marginTop: 20 }}>
                    ค้นหาข้อมูลเงินเดือน ตั้งแต่ &nbsp;
                    <font color="red">มกราคม 2563 </font>
                  </h2>
                  <article className="panel is-primary">
                    <p className="panel-heading">กรอกข้อมูลเจ้าหน้าที่</p>

                    <div className="panel-block">
                      <div className="field-label is-normal">
                        <label className="label">ประเภทเงิน</label>
                      </div>
                      <div className="field-body">
                        <div className="field is-narrow">
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select>
                                <option>เลือกประเภทเงิน</option>
                                <option value="1">ตกเบิก</option>
                                <option value="2">เงินเดือน</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-block">
                      <div className="field-label is-normal">
                        <label className="label">ประจำเดือน</label>
                      </div>
                      <div className="field-body">
                        <div className="field is-narrow">
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select>
                                <option>เลือกเดือน</option>
                                <option value="1">มกราคม</option>
                                <option value="2">กุมภาพันธ์</option>
                                <option value="3">มีนาคม</option>
                                <option value="4">เมษายน</option>
                                <option value="5">พฤษภาคม</option>
                                <option value="6">มิถุนายน</option>
                                <option value="7">กรกฎาคม</option>
                                <option value="8">สิงหาคม</option>
                                <option value="9">กันยายน</option>
                                <option value="10">ตุลาคม</option>
                                <option value="11">พฤศจิกายน</option>
                                <option value="12">ธันวาคม</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-block">
                      <div className="field-label is-normal">
                        <label className="label">ปี</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              defaultValue="2563"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-block is-right">
                      <div className="buttons is-right">
                        <button className="button is-warning">ค้นหา </button>
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
