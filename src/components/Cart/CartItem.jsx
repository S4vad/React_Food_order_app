const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-[#8a2b06] py-4 my-4">
      <div>
        <h2 className="mb-2 text-[#363636] text-lg">{props.name}</h2>
        <div className="flex justify-between items-center w-40">
          <span className="font-bold text-[#8a2b06]">{price}</span>
          <span className="font-bold border border-gray-300 px-3 py-1 rounded-lg text-[#363636]">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          onClick={props.onRemove}
          className="font-bold text-lg text-[#8a2b06] border border-[#8a2b06] w-12 text-center rounded-lg bg-transparent cursor-pointer mx-1 hover:bg-[#8a2b06] hover:text-white"
        >
          −
        </button>
        <button
          onClick={props.onAdd}
          className="font-bold text-lg text-[#8a2b06] border border-[#8a2b06] w-12 text-center rounded-lg bg-transparent cursor-pointer mx-1 hover:bg-[#8a2b06] hover:text-white"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
