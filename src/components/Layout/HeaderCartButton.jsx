
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button
      className="flex items-center justify-around bg-[#4d1601] text-white py-3 px-12 rounded-full font-bold cursor-pointer hover:bg-[#2c0d00] transition"
    >
      <span className="flex items-center mr-2">
        <CartIcon className="w-5 h-5" />
      </span>
      <span className="text-base">Your Cart</span>
      <span className="bg-[#b94517] text-white py-1 px-4 rounded-full ml-4 font-bold hover:bg-[#92320c]">
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;
