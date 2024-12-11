import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center px-10 shadow-md z-10">
        <h1 className="text-2xl font-bold">ReactMeals</h1>
        <HeaderCartButton />

      </header>
      <div className="w-full h-96 overflow-hidden relative z-0">
        <img
          src={mealsImage}
          alt="A table of food"
          className="w-[100%] h-full object-cover "
        />
      </div>
    </>
  );
};

export default Header;
