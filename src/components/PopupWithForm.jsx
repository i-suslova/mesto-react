import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className={`popup__button-close popup__button-close_${props.name} hover`}
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>

        <form className="popup__form" name={`form-${props.name}`} method="post">
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
