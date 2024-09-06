import { useRef, useState } from "react";
import { ModalB } from "../components/Modals";
import { Link } from "react-router-dom";
import mainLogo from "../assets/logo.png";

const Menu = () => {
  const [showModalB, setShowModalB] = useState(false);

  const sideNavRef = useRef("");

  const closeNav = () => {
    sideNavRef.current.style.left = "-350px";
  };

  const openNav = () => {
    sideNavRef.current.style.left = "0";
  };

  return (
    <>
      <style type="text/css">
        {`
            .sideNav {
                height: 100%;
                left: -350px;
                width: 350px;
                position: fixed;
                z-index: 1;
                top: 0;
                background-color: #111;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
            }

            .sideNav a {
                padding: 8px 8px 8px 32px;
                text-align: left;
                text-decoration: none;
                font-size: 25px;
                color: #818181 !important;
                display: block;
                transition: 0.3s;
                cursor: pointer;
            }

            .sideNav a:hover {
                color: #f1f1f1 !important;
            }

            a.closeBtn {
                position: absolute;
                top: 0;
                right: 20px;
                font-size: 5rem;
                margin-left: 50px;
                cursor: pointer;
            }
      `}
      </style>

      <div className="container-fluid pt-3 ps-5">
        <div ref={sideNavRef} className="sideNav">
          <a className="closeBtn" onClick={closeNav}>
            <h1>&times;</h1>
          </a>
          <Link to={"/"}>
            <img src={mainLogo} alt="" />
          </Link>
          <Link to={"/profile"} reloadDocument>
            My profile
          </Link>
          <a href="#">My contributions</a>
          <a href="#">My revision requests</a>
          <a
            onClick={() => {
              setShowModalB(true);
              sideNavRef.current.style.left = "-350px";
            }}
          >
            Public records
          </a>
          <hr />
          <a href="#">Log out</a>
        </div>

        <div className="row justify-content-start text-start">
          <div className="col-1 text-center p-0 pt-3" style={{ width: "fit-content" }}>
            <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="38px"
                viewBox="0 -960 960 960"
                width="38px"
                fill="#5f6368"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </span>
          </div>
          <div className="col-2 p-0" style={{ width: "fit-content" }}>
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <ModalB showModal={showModalB} setShowModal={setShowModalB} />
    </>
  );
};

export default Menu;
