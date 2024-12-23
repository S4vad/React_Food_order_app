import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import PropTypes from "prop-types";
import cartContext from "../../../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="flex justify-between my-4 pb-4 border-b border-gray-300">
      <div>
        <h3 className="mb-1 text-lg font-semibold">{props.name}</h3>
        <div className="italic text-gray-700">{props.description}</div>
        <div className="mt-1 text-xl font-bold text-orange-800">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MealItem;
