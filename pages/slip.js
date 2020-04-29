import React from "react";
import MainHOC from "../component/main.hoc";

const Slip = (props) => {

  return (
    <div className="hero-body is-fullheight">
      <div className="container">
        <div className="box">
          <center>
            <div className="row">
              <label className="checkbox">
                <input type="checkbox" id="checkbox_1" />
                &nbsp; ประจำเดือน มกราคม 2563
              </label>
              <br />
              <label className="checkbox">
                <input type="checkbox" id="checkbox_1" />
                &nbsp; ตกเบิกตั้งแต่
              </label>
            </div>
          </center>
          <br />
          <div>
            <div className="columns">
              <div className="column is-four-fifths">
                ศาล / สังกัด :<br />
                ชื่อ :
              </div>
              <div className="column is-one-fifth">ลำดับที่ :</div>
            </div>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <div className="columns">
                  <div className="column is-four-fifths">เงินเดือน :</div>
                  <div className="column ">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    เงินประจำตำแหน่ง :
                  </div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    เงินเพิ่มค่าครองชีพชั่วคราว :
                  </div>
                  <div className="column ">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    ค่าตอบแทนรถประจำตำแหน่ง :
                  </div>
                  <div className="column ">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">พสร :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ค่ารักษาพยาบาล :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ค่าศึกษาบุตร :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ค่าเช่าบ้าน :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">พตก :</div>
                  <div className="column ">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    ค่าตอบแทน เต็มขั้น :
                  </div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    ค่าตอบแทนนอกเหนือจากเงินเดือน :
                  </div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ค่าตอบแทนพิเศษ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    เงินรางวัลประจำปี :
                  </div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">อื่นๆ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">...</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">...</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">...</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <center>รวมรายรับ</center>
                  </div>
                  <div className="column">
                    <b>------</b>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="columns">
                  <div className="column is-four-fifths">ภาษีเงินได้ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">สหกรณ์ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    ธนาคารอาคารสงเคราะห์ :
                  </div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ธนาคารกรุงไทย :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ธนาคารธนชาต :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ธนาคารออมสิน :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ธนาคารกสิกรไทย :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ฌยธ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ฌศย :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ค่าเบี้ยประกัน :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ค่าโทรศัพท์ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">มูลนิธิประมาณ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">
                    อาคารชุด(แจ้งวัฒนะ/นนทบุรี) :
                  </div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">ประกันสังคม :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">กบข./กสจ. :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">สะสมส่วนเพิ่ม :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-four-fifths">เรียกคืน/ส่งใช้ :</div>
                  <div className="column">------</div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <center>รวมรายจ่าย</center>
                  </div>
                  <div className="column">
                    <b>------</b>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <center>
                      <b>คงเหลือสุทธิ</b>
                    </center>
                  </div>
                  <div className="column">
                    <b>------</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-full">
              <center>
                <b>***ยอดเงินบาทถ้วน****</b>
              </center>
            </div>
            <hr />
            <div className="column is-full ">
              <div className="columns">
                <div className="column is-half">
                  <div className="columns">
                    <div className="column is-half">
                      <center>รายได้สะสม</center>
                    </div>
                    <div className="column">
                      <b>------</b>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="columns">
                    <div className="column is-half">
                      <center>ภาษีเงินได้สะสม</center>
                    </div>
                    <div className="column">
                      <b>------</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-full">
              <div className="columns">
                <div className="column is-half">
                  <div className="columns">
                    <div className="column is-half">
                      <center>กบข. สะสม</center>
                    </div>
                    <div className="column">
                      <b>------</b>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="columns">
                    <div className="column is-half">
                      <center>กบข. สะสมส่วนเพิ่ม</center>
                    </div>
                    <div className="column">
                      <b>------</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="column is-full">
            <center>
              <u>หมายเหตุ</u>
            </center>
          </div>
        </div>
        <div className="control">
          <center>
            <button className="button is-primary" onClick={() => window.print()}>
              พิมพ์
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};
export default Slip;
