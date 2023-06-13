import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //определяем, открыт ли попап для редактирования профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  //определяем, открыт ли попап для добавления нового места
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  //определяем, открыт ли попап для редактирования аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  //сохраняем информацию о выбранной карточке
  const [selectedCard, setSelectedCard] = useState(null);

  //обработчики событий открытия попапов
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  //обработчик закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  //принимаем карточку в качестве параметра
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          setSelectedCard={setSelectedCard}
        />
        <Footer />
        <ImagePopup />

        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input"
            id="input-name"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
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
            required
          />
          <span className="popup__error input-job-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="picture"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input"
            id="input-picture"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error input-picture-error"></span>
          <input
            type="url"
            name="link"
            className="popup__input"
            id="input-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error input-link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="picture-delete"
          buttonText="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="avatar"
            className="popup__input"
            id="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error avatar-error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
