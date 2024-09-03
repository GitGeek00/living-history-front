import InputA from "../../components/InputA";
import ButtonA from "../../components/ButtonA";
import mainLogo from "../../assets/logo.png";
import Menu from "../../components/Menu";

const Profile = () => {
  return (
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
            <InputA label={"Full name"} type={"input"} labelClassName="text-black" controlClassName="mb-2" />
            <InputA label={"Email address"} type={"input"} labelClassName="text-black" controlClassName="mb-2" />
            <InputA label={"City"} type={"input"} labelClassName="text-black" controlClassName="mb-2" />
            <InputA label={"Country"} type={"input"} labelClassName="text-black" controlClassName="mb-2" />
            <ButtonA className="w-100 py-3 mt-3 btn-secondary shadow">Save changes</ButtonA>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
