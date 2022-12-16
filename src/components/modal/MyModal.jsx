import React from "react";
import Modal from "react-modal";
import Button from "../button/Button";
import Input from "../input/Input";
import "./modal.css";
export default function MyModal({
  isOpen,
  onRequestClose,
  contentLabel,
  className,
  BtnModalClass,
  title,
  content,
  InputValue,
  onClick,
  onSendClick,
  onInputChange,
  buttonContext,
  InputPlaceHolder,
  props,
  footerTip,
  overlayClassName,
  contentClass,
  footerClass,
}) {
  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        className={className ?? "modal-content "}
        overlayClassName={overlayClassName ?? "modal-overlay"}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <span>
            <button className="svg-close-btn" onClick={onRequestClose}>
              X
            </button>
          </span>
        </div>
        <hr />
        <p className={contentClass ?? "paragraph"}>{content}</p>
        <Input
          placeholder={InputPlaceHolder}
          value={InputValue}
          onChange={onInputChange}
        />
        <Button className={BtnModalClass ?? "btn-modal"} onClick={onSendClick}>
          {buttonContext ?? "Enviar"}
        </Button>
        <p className={footerClass ?? "footer-content"}>{footerTip}</p>
      </Modal>
    </div>
  );
}
