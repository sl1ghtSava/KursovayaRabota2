import { Link } from "react-router-dom";
import { MySlider } from "../slider/Slider";
import "./Main.css";
export const Main = () => {
  return (
    <div className="mainPage">
      <MySlider />
      <div className="mainDesc">
        <p>
          Добро пожаловать на Transmission!
          <br /> Мы предлагаем только самые <span>лучшие</span> детали!
        </p>
        <p>
          Загляни в наш <Link to="/catalog">каталог</Link>, и убедись в этом
          сам!
        </p>
      </div>
    </div>
  );
};
