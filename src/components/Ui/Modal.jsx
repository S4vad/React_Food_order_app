import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-20"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-xl shadow-lg z-30 animate-slide-down md:w-[40rem] md:left-1/2 md:transform md:-translate-x-1/2">
      <div className="">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
