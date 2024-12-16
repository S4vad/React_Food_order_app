import Input from "../../Ui/Input";
const MealItemForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="text-right" onSubmit={submitHandler}>
      <Input
        ref
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
    </form>
  );
};

export default MealItemForm;
