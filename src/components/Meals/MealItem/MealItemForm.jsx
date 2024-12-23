import { useRef, useState } from "react";
import Input from "../../Ui/Input";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //it always string
    const enteredAmountNumber = +enteredAmount; //convert to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="text-right" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="cursor-pointer bg-[#8a2b06] border border-[#8a2b06] text-white py-1 px-8 rounded-full font-bold hover:bg-[#641e03] hover:border-[#641e03] active:bg-[#641e03] active:border-[#641e03]">
        + Add
      </button>
      {!amountValid && <p> please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
