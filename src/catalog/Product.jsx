import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import { delCart, addCart } from "../slices/listsSlice";
import { useLocation } from "react-router";
export const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const list = useSelector((state) => state.catalog.catalog);
  const cart = useSelector((state) => state.cart.cart);
  const filtered = list.filter(
    (elem) => elem.title === searchParams.get("name")
  );
  return (
    <div className="productPage">
      <img alt="good" src={require(`${filtered[0].imageUrl}`)} />
      <div className="productTitle">
        <h1>{filtered[0].title}</h1>
        <h2>{filtered[0].price}$</h2>
      </div>
      <hr />
      <button
        onClick={(e) => {
          console.log(e);
          console.log(e.target.innerHTML);
          if (e.target.innerHTML === "В корзине") {
            dispatch(delCart(filtered[0].title));
          } else {
            dispatch(
              addCart(list.filter((obj) => obj.title === filtered[0].title))
            );
          }
        }}
      >
        {cart.some((obj) => obj.title === filtered[0].title)
          ? "В корзине"
          : "В корзину!"}
      </button>
      <div className="productDesc">
        <div className="productAdvanced">
          <h3>Производитель: {filtered[0].manufacturer}</h3>
          <h3>Тип: {filtered[0].type}</h3>
          <h3>Описание: {filtered[0].desc}</h3>
        </div>
        <div className="productGrad"></div>
      </div>
    </div>
  );
};
