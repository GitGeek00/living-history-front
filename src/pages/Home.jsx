import "bootstrap/dist/css/bootstrap.min.css";
import homeStyles from "./home.module.css";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ModalA, ModalB } from "../components/Modals";
import Menu from "../components/Menu";

const Home = () => {
  const [regValues, setRegValues] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [logValues, setLogValues] = useState({
    email: "",
    password: "",
  });

  const [modalTitleCOlor, setModalTitleColor] = useState("text-black");

  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [msg, setMsg] = useState("");
  const [bodyMsg, setBodyMsg] = useState("");

  const regDivRef = useRef("");
  const logDivRef = useRef("");

  const loginLinkRef = useRef("");
  const homeLinkRef = useRef("");
  const regLinkRef = useRef("");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const handleRegistration = async (e) => {
    e.preventDefault();

    const { userName, email, password, passwordConfirm } = regValues;
    const registerNewUser = { userName, email, password };

    if (password !== passwordConfirm) {
      setModalTitleColor("text-danger");
      setMsg("Password confirmation error!");
      setBodyMsg("Password and password confirmation should be identical!");
      setShowModalA(true);
      return;
    }

    try {
      const data = await axios.post("http://localhost:3000/api/v1/auth/register", registerNewUser);
    } catch (error) {
      if (error.response) {
        setModalTitleColor("text-danger");
        setMsg("Registration Error!");

        let modalMsg = [];
        if (error.response.data.err !== undefined) {
          if (error.response.data.err.errors.userName) {
            modalMsg = [error.response.data.err.errors.userName.message];
          }
          if (error.response.data.err.errors.email) {
            modalMsg = [...modalMsg, error.response.data.err.errors.email.message];
          }
          if (error.response.data.err.errors.password) {
            modalMsg = [...modalMsg, error.response.data.err.errors.password.message];
          }
        } else if (error.response.data.error === "Duplicate") {
          modalMsg = [error.response.data.msg];
        } else {
          console.log(error.response);
        }

        setBodyMsg(<div dangerouslySetInnerHTML={{ __html: modalMsg.join().replace(/,/g, "<br>") }} />);
        setShowModalA(true);
      } else if (error.request) {
        console.log(error.request);
      } else if (error.message) {
        console.log(error.message);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = logValues;
    const loginUser = { email, password };

    if (!email || !password) {
      setMsg("Login Error!");
      setModalTitleColor("text-danger");
      setBodyMsg("You should provide both email and password");
      setShowModalA(true);
      return;
    }

    try {
      const data = await axios.post("http://localhost:3000/api/v1/auth/login", loginUser);
    } catch (error) {
      if (error.response) {
        setModalTitleColor("text-danger");
        setMsg("Unauthorized!");
        setBodyMsg(error.response.data.msg);
        setShowModalA(true);
      } else if (error.request) {
        console.log(error.request);
      } else if (error.message) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className={`container-fluid ${homeStyles.backgroundCarousel}`}>
        <div className="row">
          <div className="col-3">
            <Menu />
          </div>
        </div>
        <div className="row ps-5 pt-5">
          <div className="col-6 mt-5 ps-5">
            <h1 data-aos="fade" className={homeStyles.bigTitle}>
              Navigate History
            </h1>
            <h4 className={homeStyles.smallerTitle}>Contribute the World History</h4>
            <div className="mt-4">
              <h5
                ref={homeLinkRef}
                className={`${homeStyles.nav} ${homeStyles.textBold}`}
                onClick={() => {
                  regDivRef.current.classList.add("d-none");
                  logDivRef.current.classList.add("d-none");
                  homeLinkRef.current.classList.add(`${homeStyles.textBold}`);
                  loginLinkRef.current.classList.remove(`${homeStyles.textBold}`);
                  regLinkRef.current.classList.remove(`${homeStyles.textBold}`);
                }}
              >
                Home
              </h5>
              <h5 className={`${homeStyles.nav}`} onClick={() => setShowModalB(true)}>
                &nbsp;| Public
              </h5>
              <h5
                ref={loginLinkRef}
                className={`${homeStyles.nav}`}
                onClick={() => {
                  regDivRef.current.classList.add("d-none");
                  logDivRef.current.classList.remove("d-none");
                  loginLinkRef.current.classList.add(`${homeStyles.textBold}`);
                  regLinkRef.current.classList.remove(`${homeStyles.textBold}`);
                  homeLinkRef.current.classList.remove(`${homeStyles.textBold}`);
                }}
              >
                &nbsp;| Login
              </h5>
              <h5
                ref={regLinkRef}
                className={`${homeStyles.nav}`}
                onClick={() => {
                  regDivRef.current.classList.remove("d-none");
                  logDivRef.current.classList.add("d-none");
                  regLinkRef.current.classList.add(`${homeStyles.textBold}`);
                  homeLinkRef.current.classList.remove(`${homeStyles.textBold}`);
                  loginLinkRef.current.classList.remove(`${homeStyles.textBold}`);
                }}
              >
                &nbsp;| Register
              </h5>
              <h5 className={`${homeStyles.nav}`}>| About</h5>
            </div>
            <h5 data-aos="fade" className="mt-2" style={{ fontWeight: "300", width: "70%" }}>
              Living History is an interactive platform where users can explore significant world events and historical
              landmarks. It allows users to delve into key moments like Olympic athlete achievements and contribute by
              writing and sharing their own insights on global history. The project aims to create a dynamic,
              user-generated repository of world history, enriching the collective understanding of past events.
            </h5>
          </div>
          <div className="col-5">
            <RegisterForm
              regDivRef={regDivRef}
              handleRegistration={handleRegistration}
              regValues={regValues}
              setRegValues={setRegValues}
            />
            <LoginForm
              logDivRef={logDivRef}
              handleLogin={handleLogin}
              logValues={logValues}
              setLogValues={setLogValues}
            />
          </div>
        </div>
      </div>
      <ModalA
        showModal={showModalA}
        setShowModal={setShowModalA}
        msg={msg}
        bodyMsg={bodyMsg}
        modalTitleCOlor={modalTitleCOlor}
      />

      <ModalB showModal={showModalB} setShowModal={setShowModalB} />
    </>
  );
};

export default Home;
