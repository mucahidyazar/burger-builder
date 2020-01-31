import React, { useEffect } from "react";
import Auxilliary from "../../../hoc/Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  useEffect(() => {
    console.log("[Modal.js] React.memo and useEffect");
  }, [props.show]);

  useEffect(() => {
    console.log("[Modal] useEffect componentDidUpdate");
  }, []);

  return (
    <Auxilliary>
      <Backdrop show={props.show} clicked={props.modelClosed} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Auxilliary>
  );
};

export default React.memo(Modal);
