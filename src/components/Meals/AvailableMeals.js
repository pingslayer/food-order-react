import { useEffect, useState } from "react";
//components
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
//css
import classes from "./AvailableMeals.module.css";

/*
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Freezer Fried Chicked",
    description: "Finest thawed chicken fries",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Special Mutton Biryani",
    description: "Navarasa Nayaka Style",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue veggies",
    description: "For that one vegan friend",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Fish Sticks",
    description: "Kanye's favourite",
    price: 18.99,
  },
];
*/

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async () => {
    const response = await fetch(
      "https://react-http-4dcf1-default-rtdb.firebaseio.com/meals.json"
    );
    const responseData = await response.json();
    const loadedMeals = [];
    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }
    setMeals(loadedMeals);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
