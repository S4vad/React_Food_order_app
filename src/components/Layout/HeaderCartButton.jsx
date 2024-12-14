import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0)
  return (
    <button
      className="flex items-center justify-around bg-[#4d1601] text-white py-3 px-12 rounded-full font-bold cursor-pointer hover:bg-[#2c0d00] transition"
    onClick={props.onClick}
    >
      <span className="flex items-center mr-2">
        <CartIcon className="w-5 h-5" />
      </span>
      <span className="text-base">Your Cart</span>
      <span className="bg-[#b94517] text-white py-1 px-4 rounded-full ml-4 font-bold hover:bg-[#92320c]">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
