import React from "react";
import "./Card.scss";
import image1 from '../../assets/Card/image-1.svg'
import imageLogo1 from '../../assets/Card/image-logo-1.svg'

const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src={image1} alt="" />
      <div className="card__info">
        <div className="card__info--text">
          <h3 className="card__info--text--title">SYNTH#BOI</h3>
          <p className="card__info--text--desc">women of web</p>
        </div>
        <div className="card__info--detailed">
          <div className="flex flex-row gap-[10px] items-center">
            <img src={imageLogo1} alt="" className="card__info--detailed--img" />
            <span className="card__info--detailed--desc">Name of Ritist</span>
          </div>
          <div className="flex flex-col place-items-end">
            <span className="card__info--detailed--subinfo">Current Bid</span>
            <span className="card__info--detailed--subinfo">16.0 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
