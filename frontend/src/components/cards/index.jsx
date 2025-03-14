import React, { useState } from "react";
import "./cards.css";
import ErrorIcon from "../../assets/error.svg";
import SuccessIcon from "../../assets/done.svg";
import ExitIcon from "../../assets/exit.svg";

export default function Card({ type, message, subMessage }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const icon = type === "error" ? ErrorIcon : SuccessIcon;
  const cardClass = type === "error" ? "box_error" : "box_success";

  return (
    <div className="container_card">
      <div className="box_card">
        <div className={cardClass}>
          <img src={icon} alt={type} className="icon" />
        </div>
        <div className="box_text">
          <p className="text">{message}</p>
          <p className="subtext">{subMessage}</p>
        </div>
        <div className="box_exit" onClick={handleClose}>
          <img src={ExitIcon} alt="Exit icon" className="icon_exit" />
        </div>
      </div>
    </div>
  );
}
