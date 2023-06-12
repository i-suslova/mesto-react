import React from "react";

function Card(props) {
  const handleClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <article className="element" key={props.card._id}>
      <img
        src={props.card.link}
        alt=""
        className="element__photo"
        style={{ backgroundImage: `url(${props.src})` }}
        onClick={handleClick}
      />
      <button
        type="button"
        className="element__button-delete hover"
        aria-label="удалить"
      ></button>
      <h2 className="element__title">{props.title}</h2>
      <div className="element__likes">
        <button
          type="button"
          className="element__button-like"
          aria-label="нравится"
        ></button>
        <span className="element__number-like">{props.like.length}</span>
      </div>
    </article>
  );
}

export default Card;
