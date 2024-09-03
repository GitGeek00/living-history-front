import Modal from "react-bootstrap/Modal";
import ButtonA from "./ButtonA";
import Select from "react-select";
import { Link } from "react-router-dom";

const ModalA = ({ msg, bodyMsg, showModal, setShowModal, modalTitleColor }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} size="md" onHide={handleClose} animation={false}>
        <Modal.Body className="p-4 pt-5" style={{ outline: "1px solid gray", outlineOffset: "-5px" }}>
          <div className="ps-3">
            <h5 className={modalTitleColor}>{msg}</h5>
            <p>{bodyMsg}</p>
            <br />
          </div>
          <div className="text-center mt-3">
            <ButtonA className={"btn-secondary w-50"} onClick={handleClose}>
              Ok
            </ButtonA>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const options = [
  { value: "olympic", label: "Olympic" },
  { value: "soccer", label: "Soccer", disabled: true },
  { value: "happenedInThisDay", label: "On This Day in History", disabled: true },
];

const ModalB = ({ showModal, setShowModal, modalTitleColor }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      <style type="text/css">{`
          a.closeBtn {
              position: absolute;
              top: 15px;
              right: 30px;
              font-size: 5rem;
              margin-left: 50px;
              cursor: pointer;
              text-decoration: none;
              color: gray;
          }
    `}</style>
      <Modal show={showModal} size="lg" onHide={handleClose} animation={false}>
        <Modal.Body className="p-4 pt-5" style={{ outline: "1px solid gray", outlineOffset: "-5px" }}>
          <a className={"closeBtn"} onClick={handleClose}>
            <h1>&times;</h1>
          </a>
          <div className="ps-3">
            <h3 className={modalTitleColor || "text-gray"}>Public Records</h3>
            <p>Please select one of many records</p>
          </div>
          <div className="mt-3">
            <div className="container">
              <Select
                defaultValue={options[0]}
                options={options}
                isOptionDisabled={(option) => option.disabled}
                styles={{
                  control: (baseStyles, state, isSelected) => ({
                    ...baseStyles,
                    border: state.isFocused ? "2px solid orange !important" : "2px solid orange",
                    boxShadow: state.isFocused ? "none" : "none",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? "orange" : "transparent",
                    color: state.isFocused ? "white" : "black",
                  }),
                }}
              />
            </div>
            <div className="mt-4 mb-4" style={{ paddingLeft: "13px" }}>
              <Link to={"/olympic"}>
                <ButtonA className={"btn-secondary w-25 py-2 shadow"} onClick={handleClose}>
                  <span style={{ fontSize: "1.1rem" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#ffffff"
                    >
                      <path d="M280-280h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                    &nbsp;Open records
                  </span>
                </ButtonA>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ModalA, ModalB };
