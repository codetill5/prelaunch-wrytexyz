import { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Modal from "react-modal";
import { isMobile } from "react-device-detect";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    overflow: "visible",
    width: `${isMobile ? "80%" : ""}`,
  },
};

Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.65)";

const EmailSubscribe = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const postUrl = `${process.env.NEXT_PUBLIC_BASEURL_MAILCHIMP}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    const handleSubmitForm = (e) => {
      e.preventDefault();
      email &&
        email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: email,
        });
      setIsOpen(false);
      setSuccessModal(true);
    };

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    const closeSuccessModal = () => {
      setSuccessModal(false);
    };

    return (
      <div>
        <div className="btnContainer">
          <button onClick={openModal} className="earlyAccessBtn">
            Get Early Access
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <span className="close" onClick={() => closeModal()}>
            <p>x</p>
          </span>
          <form
            className="mc__form"
            onSubmit={(e) => handleSubmitForm(e)}
            onValidated={(formData) => subscribe(formData)}
          >
            <div className="formInnerContainer">
              <label className="emailLabel">EMAIL ADDRESS</label>
              <input
                type="text"
                placeholder="name@email.com"
                className="emailInput"
                onChange={(e) => handleChange(e)}
                value={email}
                required
              />
              <button className="submitBtn" formValues={[email]}>
                Get Early Access
              </button>
            </div>
          </form>
        </Modal>
        <Modal
          isOpen={successModal}
          onRequestClose={closeSuccessModal}
          style={customStyles}
        >
          <span className="close" onClick={() => closeSuccessModal()}>
            <p>x</p>
          </span>
          <div className="succesModal">
            <div className="successModalHeader">
              <h1>Thank You</h1>
              <img src="/heart.gif" />
            </div>
            <h3>We'll email you soon</h3>
          </div>
        </Modal>
      </div>
    );
  };

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default EmailSubscribe;
