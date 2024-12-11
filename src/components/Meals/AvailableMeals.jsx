

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id} className="mb-2 p-2 bg-gray-100 rounded-lg shadow-md">
      <h3 className="font-semibold">{meal.name}</h3>
      <p>{meal.description}</p>
      <p className="font-bold">${meal.price.toFixed(2)}</p>
    </li>
  ));

  return (
    <section className="max-w-screen-lg w-11/12 mx-auto mt-8 animate-meals">
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
