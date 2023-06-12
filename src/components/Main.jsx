import React from "react";
import { useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  const handleCardClick = (card) => {
    props.setSelectedCard(card);
  };

  //выполненяем запрос в API и обновляем состояние компонента
  React.useEffect(() => {
    const returnPromise = async () => {
      try {
        const { userData, cardData } = await api.getAllNeedData();

        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        //обновляем состояние карточек
        setCards(cardData);
      } catch (error) {
        console.error(error);
      }
    };
    returnPromise();
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__list">
          <div
            className="profile__avatar"
            aria-label="аватар пользователя"
            style={{
              backgroundImage: `url(${userAvatar})`,
            }}
          />

          <button
            type="button"
            className="profile__avatar-button"
            aria-label="редактировать "
            onClick={props.onEditAvatar}
          ></button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>

            <button
              type="button"
              className="profile__button-edit hover"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          type="button"
          className="profile__button-add hover"
          aria-label="добавление фотографий"
          onClick={props.onAddPlace}
        ></button>
      </div>

      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={handleCardClick}
            key={card._id}
            src={card.link}
            like={card.likes}
            title={card.name}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
