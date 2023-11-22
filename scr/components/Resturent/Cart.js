import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cartlist from "./Cartlist";
import { clearCart } from "../../redux/CardSlice";

const Cart = () => {
  const getCartData = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const clearItem = () => {
    dispatch(clearCart(getCartData));
  };

  return (
    <div className="  w-3/6 m-auto">
      <h1 className="  text-4xl mt-10 mb-10 flex justify-between items-center">
        Cart
        <label
          className=" text-lg cursor-pointer text-sky-500"
          onClick={clearItem}
        >
          Clear Cart
        </label>
      </h1>
      {getCartData.length === 0 ? (
        <h2 className=" text-center text-xl"> No Item In Cart</h2>
      ) : (
        <>
          {getCartData.map((list) => (
            <Cartlist list={list} key={list.card.info.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
