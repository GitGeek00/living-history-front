import dashImg from "../../assets/dash_img.png";
import dashboardStyles from "./Dashboard.module.css";
import Menu from "../../components/Menu";
import { ModalA } from "../../components/Modals";
import credentials from "../../utils/credentials";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [showModalA, setShowModalA] = useState(false);
  const navigate = useNavigate();

  const msg = "Not logged in";
  const bodyMsg = "You should login first to access the dashboard";
  const modalTitleColor = "text-danger";

  useEffect(() => {
    if (!credentials.user || !credentials.token) {
      setShowModalA(true);
    }    
  },[]);

  return !credentials.user || !credentials.token ? (
    <>
      <ModalA
        showModal={showModalA}
        setShowModal={setShowModalA}
        msg={msg}
        bodyMsg={bodyMsg}
        modalTitleColor={"text-danger"}
        handleClose={() => navigate(-1)}
      />
    </>
  ) : (
    <>
      <div className={`container-fluid ${dashboardStyles.bg}`}>
        <div className="row">
          <div className="col-3">
            <Menu />
          </div>
        </div>
        <div className="text-center">
          <img src={dashImg} alt="" />
        </div>
        <h1 className="text-center mt-3" style={{ fontWeight: "600" }}>
          DASHBOARD
        </h1>
        <h1 className="text-center" style={{ fontWeight: "800", fontSize: "4rem" }}>
          Welcome {credentials.user}
        </h1>
        <h1 className={`${dashboardStyles.textFocusIn} text-center text-secondary`}>
          Embark on a wild journey through <br /> different historical eras.
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
