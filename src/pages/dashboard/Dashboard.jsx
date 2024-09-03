import dashImg from "../../assets/dash_img.png";
import dashboardStyles from "./Dashboard.module.css";
import Menu from "../../components/Menu";

const Dashboard = () => {
  return (
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
          Welcome Maher
        </h1>
        <h1 className={`${dashboardStyles.textFocusIn} text-center text-secondary`}>
          Embark on a wild journey through <br /> different historical eras.
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
