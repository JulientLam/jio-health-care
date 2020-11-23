import { Modal, ModalBody } from "reactstrap";
import "./style.css";

function LoadingPage(props) {
  return (
    <Modal isOpen={props.isOpen}>
      <ModalBody>
        {/* <div className="mx-auto text-center jio-loader-content">
          <img
            className="jio-image"
            src="https://pharmacy.jiohealth.com/assets/images/navJioLogo@3x.png"
            alt="loading..."
          />
          <div style={{ display: "inlineBlock" }}>
            <h1 className="jio-loader-text">Jio Health</h1>
            <p className="loader-text-Phar">
              <small>Pharmacy</small>
            </p>
          </div>
        </div> */}

        <div class="animation-wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default LoadingPage;
