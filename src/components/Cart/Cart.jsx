import { useContext } from "react";

import Modal from "../Ui/Modal";
import CartItem from "./CartItem";
import CartContext from "../../../store/CartContext";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRomoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartAddItemHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRomoveHandler.bind(null,item.id)}
          onAdd={cartAddItemHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal
      className="p-4 bg-white rounded-lg shadow-md"
      onClose={props.onClose}
    >
      {cartItems}
      <div className="flex justify-between items-center font-bold text-xl my-4">
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          className="text-[#8a2b06] font-inherit cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-full ml-4 transition duration-200 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white"
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button className="bg-[#8a2b06] text-white font-inherit cursor-pointer border border-[#8a2b06] py-2 px-8 rounded-full ml-4 transition duration-200 hover:bg-[#5a1a01] hover:border-[#5a1a01]">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
