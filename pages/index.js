import React, { useState } from "react";
import MainHOC from "../component/main.hoc";
import fetch from "unfetch";
import Link from "next/link";
// import {
//   ToastsContainer,
//   ToastsStore,
//   ToastsContainerPosition,
// } from "react-toasts";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "center",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
// Modal.setAppElement("#my_modal");

// const modalRedText = { color: "#f00" };
// const modalInfoText = { color: "#29b6f6" };

const Index = (props) => {
  /*Start modal*/
  // var subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // if (responseStatus) {
  //   //   subtitle.style.color = '#29b6f6';
  //   // } else {
  //   //   subtitle.style.color = '#f00';
  //   // }
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  /*End modal*/

  const titleInit = (str1, str2, str3) => {
    return (
      <div className="tags has-addons" style={{ marginBottom: 10 }}>
        <span className="tag is-danger">
          <i className="fas fa-watch" />
        </span>
        <span className="tag">
          {str1}&nbsp;<strong className="has-text-danger">{str2}</strong>&nbsp;
          {str3}
        </span>
      </div>
    );
  };

  const [title, setTitle] = useState(
    titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", "ข้าราชการตุลาการ")
  );
  const [selectLogin, setSelectLogin] = useState("ผู้พิพากษา");

  const [inputs, setInputs] = useState({ username: "", password: "" });
  // const [modalText, setModalText] = useState("");
  // const [responseStatus, setResponseStatus] = useState(false);
  const [resError, setResError] = useState({ status: false });
  const [login, setLogin] = useState({ status: false });

  const handleChange = (e) => {
    console.log(e.target);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLogin({ status: true });

    if (inputs.username && inputs.password) {
      var url = "http://localhost:8888/api/v1/auth";
      var payload = JSON.stringify(inputs);
      console.log(payload);
      await fetch
        .post(url, payload)
        .then(function (response) {
          console.log("#### RESPONSE ####");
          console.log(response);

          //Set error status = false
          setResError({ status: false });
          setLoging({ status: false });
          //setRedirect({ status: true })

          localStorage.setItem("user", response.data.user.username);
          // localStorage.setItem("token", response.data.token);

          let user = localStorage.getItem("user");
          // let token = localStorage.getItem("token");

          console.log(user);
          // console.log(token);

          dispatch({
            type: "LOGIN",
            payload: {
              user,
              // token,
            },
          });
        })
        .catch(function (error) {
          console.log("#### ERROR ####");
          console.log(error.response.data.full_messages[0]);
          console.log(error.response.data.full_messages[1]);

          //Set error status = true
          setResError({ status: true });
          setLogin({ status: false });
          if (error.response.data.full_messages[1]) {
            ToastsStore.error(
              "Error : " +
                error.response.data.full_messages[0] +
                "" +
                error.response.data.full_messages[1]
            );
          } else {
            ToastsStore.error(
              "Error : " + error.response.data.full_messages[0]
            );
          }
        });
    }
    //   var sendData = { ...inputs};

    //   sendData.username = "ZmFywQ";
    //   sendData.password = "rpGyudZB";

    //   const payload = JSON.stringify(sendData);
    //   console.log(payload);

    //   const response = await fetch(
    //     "http://localhost:8888/api/v1/auth",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: payload,
    //   }
    //   );
    //   const results = await response.json();
    // //Open modal & set text
    // setIsOpen(true);
    // if (results.status == 200) {
    //   console.log(results);
    //   setResponseStatus(true);
    //   setModalText(`${results.message}`);
    // } else {
    //   console.log(results);
    //   setResponseStatus(false);
    //   setModalText(" Username & Password ไม่ถูกต้อง !!!!");
    // }
  };

  const handleClick = (e) => {
    if (e.target.dataset.value == "2") {
      setTitle(
        titleInit(
          "สำหรับ ",
          "เจ้าหน้าที่ ",
          "พิมพ์สลิปเงินเดือนข้าราชการตุลาการทั้งหน่วยงาน"
        )
      );
      setSelectLogin("เจ้าหน้าที่");
    } else {
      setTitle(
        titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", "ข้าราชการตุลาการ")
      );
      setSelectLogin("ผู้พิพากษา");
    }
  };

  return (
    <MainHOC>
      {/* {resError.status && (
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
      )} */}
      <div className="hero-body is-fullheight">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 is-offset-1 landing-caption">
              <img src="/static/images/logo.png" alt="Logo" width="300" />
              <h2 className="subtitle is-5 is-muted" style={{ marginTop: 20 }}>
                ระบบพิมพ์สลิปเงินเดือน<strong> ข้าราชการตุลาการ </strong>
                ศาลยุติธรรม
              </h2>
              <div className="button-wrap">
                <a
                  className="button cta is-rounded primary-btn raised"
                  onClick={handleClick}
                  data-value="1"
                >
                  ผู้พิพากษา
                </a>
                <a
                  className="button cta is-rounded"
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
                <h2
                  className="subtitle"
                  style={{ marginTop: 20, color: "#f39200" }}
                >
                  ระบบพิมพ์สลิปเงินเดือน <a>ข้าราชการตุลาการ</a> ศาลยุติธรรม
                </h2>
                <article className="panel is-warning">
                  <p className="panel-heading">เข้าสู่ระบบ ({selectLogin})</p>

                  <div className="panel-block">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        value={inputs.username}
                        required
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="panel-block">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="password"
                        value={inputs.password}
                        required
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>

                      <span className="icon is-small is-right">
                        <i className="fas fa-eye" />
                      </span>
                    </p>
                  </div>

                  <div className="panel-block is-right">
                    <div className="buttons is-right">
                      <button className="button is-link" onClick={handleSubmit}>
                        {login.status && { selectLogin }}
                        เข้าสู่ระบบ
                      </button>
                      <Link href="/forgot_pass">
                      <button className="button" >
                        ลืมรหัสผ่าน/เปลี่ยนรหัสผ่าน
                      </button>
                      </Link>
                      <br />
                    </div>
                  </div>
                </article>
              </div>
              <hr></hr>
              <div className="field">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </MainHOC>
  );
};
export default Index;
