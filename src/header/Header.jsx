import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerMain">
      <div className="header">
        <div className="headerBlock">
          <div
            className="headerMenu"
            onClick={toggleSlider}
            style={{ transform: `scale(${isOpen ? "1.25" : "1"})` }}
          >
            <svg
              fill="darkred"
              height="50px"
              width="50px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g width="200px">
                <path d="M1 1H7V7H1V1Z" fill="darkred" />
                <path d="M9 1H15V7H9V1Z" fill="darkred" />
                <path d="M1 9H7V15H1V9Z" fill="darkred" />
                <path d="M9 9H15V15H9V9Z" fill="darkred" />
              </g>
            </svg>
          </div>
          <Link to="/">
            <div className="headerLogo">Transmisson</div>
          </Link>
          <div className={`headerSlide ${isOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleSlider}>
              <div className="headerSlideButton">Главная</div>
            </Link>
            <Link to="/catalog" onClick={toggleSlider}>
              <div className="headerSlideButton">Каталог</div>
            </Link>
            <Link to="/cart" onClick={toggleSlider}>
              <div className="headerSlideButton">Корзина</div>
            </Link>
            <Link to="/aboutus" onClick={toggleSlider}>
              <div
                className="headerSlideButton"
                id="lastelem"
                style={{ borderBottom: "none" }}
              >
                О нас
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
