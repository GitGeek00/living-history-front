import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const InputA = ({ label, labelClassName, type, inputName, onChange, controlClassName, disabled, value }) => {
  return (
    <>
      <style type="text/css">
        {`
          .form-control {
            &:focus {
                border-color: #1a4a7a;
                box-shadow: 1px 1px 1px #0303031f inset, 0 0 8px #74afeb6b;
                outline: 0 none;
            }
            &.radius0 {
                border-radius: 0;            
            }
          }
        `}
      </style>
      <FloatingLabel label={label} className={labelClassName}>
        <Form.Control
          type={type}
          placeholder="placeholder"
          name={inputName}
          onChange={onChange}
          className={controlClassName}
          disabled={disabled}
          value={value}
        />
      </FloatingLabel>
    </>
  );
};

export default InputA;
