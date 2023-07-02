import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  //записываем объект, возвращаемый хуком, в переменную
  const EditAvatarPopupRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: EditAvatarPopupRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={EditAvatarPopupRef}
        type="url"
        name="avatar"
        className="popup__input"
        id="avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error avatar-error"></span>

      <button type="submit" className="popup__button">
        {props.isLoading ? "Сохранение..." : props.buttonText}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
