import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { delCart, truncateCart } from "../slices/listsSlice";
import { useNavigate } from "react-router";
export const Cart = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const cart = useSelector((elem) => elem.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (cartsum <= 0) {
      alert("Ваша корзина пуста!");
    } else {
      dispatch(truncateCart());
      alert("Спасибо за покупку!");
      reset();
    }
    navigate("/catalog");
  };
  const CartSum = () => {
    let cartsum = 0;
    cart.map((elem) => {
      cartsum += parseFloat(elem.price);
      return null;
    });
    return cartsum;
  };
  const cartsum = CartSum();
  return (
    <div className="cartPage">
      <h2>Корзина</h2>
      <div className="cartItems">
        {cart.map((elem) => {
          return (
            <div className="cartItem">
              <img src={require(`${elem.imageUrl}`)} alt="Item" />
              <hr />
              <div className="cartContent">
                <h2>{elem.title}   <span id="delete" onClick={() => {dispatch(delCart(elem.title))}}>Удалить</span></h2>
                <h3>{elem.price}$</h3>
              </div>
            </div>
          );
        })}
      </div>
      <h2 id="total">Итого: {cartsum}$</h2>
      <div className="cartPay">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Номер карты
            <input
              {...register("cardNumber", {
                required: "Введите номер карты",
                pattern: {
                  value: /^\d{16}$/,
                  message: "Номер карты должен состоять из 16 цифр",
                },
              })}
              type="text"
              placeholder="XXXXXXXXXXXXXXXX"
            />
            {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
          </label>
          <br />
          <label>
            Срок годности
            <input
              {...register("expiryDate", {
                required: "Введите срок годности",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Срок годности должен быть в формате MM/YY",
                },
              })}
              type="text"
              placeholder="MM/YY"
            />
            {errors.expiryDate && <p>{errors.expiryDate.message}</p>}
          </label>
          <br />
          <label>
            CVV
            <input
              {...register("cvv", {
                required: "Введите CVV",
                pattern: {
                  value: /^\d{3}$/,
                  message: "CVV должен состоять из 3 цифр",
                },
              })}
              type="password"
              placeholder="123"
            />
            {errors.cvv && <p>{errors.cvv.message}</p>}
          </label>
          <br />
          <button type="submit">Оплатить</button>
        </form>
      </div>
    </div>
  );
};
