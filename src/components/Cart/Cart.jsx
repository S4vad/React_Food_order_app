import Modal from "../Ui/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {[{ id: "c1", name: "sushi", amount: 2, price: 299 }].map((item) => (
        <li key={item.id} className="py-2 border-b border-gray-300">
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal className="p-4 bg-white rounded-lg shadow-md"
    onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-xl my-4">
        <span>Total amount</span>
        <span>36.56</span>
      </div>
      <div className="text-right">
        <button className="text-[#8a2b06] font-inherit cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-full ml-4 transition duration-200 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white"
        onClick={props.onClose}>
          Close
        </button>
        <button className="bg-[#8a2b06] text-white font-inherit cursor-pointer border border-[#8a2b06] py-2 px-8 rounded-full ml-4 transition duration-200 hover:bg-[#5a1a01] hover:border-[#5a1a01]">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
