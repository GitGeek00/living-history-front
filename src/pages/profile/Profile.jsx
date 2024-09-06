import InputA from "../../components/InputA";
import ButtonA from "../../components/ButtonA";
import Menu from "../../components/Menu";
import credentials from "../../utils/credentials";
import { ModalA } from "../../components/Modals";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [cityState, setCityState] = useState("");
  const [countryState, setCountryState] = useState("");

  const navigate = useNavigate();

  const msg = "Not logged in";
  const bodyMsg = "You should login first to access the dashboard";
  const modalTitleColor = "text-danger";

  axios.defaults.headers.common["Authorization"] = `Bearer ${credentials.token}`;

  const getProfileData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/profile`);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error);
      } else if (error.request) {
        console.log(error);
      } else if (error.message) {
        console.log(error.message);
      }
      throw new Error(error.response?.data?.msg || "Error fetching profiles");
    }
  };

  const handleProfileChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/profile`, {
        data: {
          userName: nameState,
          city: cityState,
          country: countryState,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!credentials.user || !credentials.token) {
      setShowModalA(true);
    } else {
      getProfileData().then((data) => {
        setNameState(data.userName);
        setCityState(data.city);
        setCountryState(data.country);
        setEmailState(data.email);
      });
    }
  }, []);

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
      <style>
        {`
        .bg {
          background-image: url("profile.png");          
          background-size: cover;
          width: 28%;
          height: 100%;
          top: 0;
          left: 0;
          padding-top: 35%
        }  
        `}
      </style>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Menu />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-6 p-5 mt-3 bg-white position-relative"
          style={{ boxShadow: "10px 10px 30px #faaf24b4", borderTopRightRadius: "35px" }}
        >
          <div className="bg position-absolute">
            <h5 className="text-center">
              <strong>Maher Algepah</strong>
            </h5>
            <h5 className="text-center">Irvine-USA</h5>
          </div>
          <div className="col-8 offset-4">
            <h5 className="text-secondary pb-4">My profile</h5>
            <form onSubmit={handleProfileChange}>
              <InputA
                label={"Full name"}
                type={"input"}
                labelClassName="text-black"
                controlClassName="mb-2"
                onChange={(e) => setNameState(e.target.value)}
                value={nameState}
              />
              <InputA
                label={"Email address"}
                type={"input"}
                labelClassName="text-black"
                controlClassName="mb-2"
                disabled="disable"
                value={emailState}
              />
              <InputA
                label={"City"}
                type={"input"}
                labelClassName="text-black"
                controlClassName="mb-2"
                onChange={(e) => setCityState(e.target.value)}
                value={cityState}
              />
              <InputA
                label={"Country"}
                type={"input"}
                labelClassName="text-black"
                controlClassName="mb-2"
                onChange={(e) => setCountryState(e.target.value)}
                value={countryState}
              />
              <ButtonA type={"submit"} className="w-100 py-3 mt-3 btn-secondary shadow">
                Save changes
              </ButtonA>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
