import React from "react";
import { useState } from "react";
//import { useContext } from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

//const currentUser = useContext(CurrentUserContext);

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
 
  }



  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onUpdateUser={props.onUpdateUser} 
    >
      <input
        type="text"
        className="popup__input"
        id="input-name"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
        required
      />
      <span className="popup__error input-name-error"></span>
      <input
        type="text"
        className="popup__input"
        id="input-job"
        name="job"
        placeholder="О себе"
        minLength="2"
        maxLength="200"   
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <span className="popup__error input-job-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

