import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { idMeal } = useParams();
  return <div>Meal {idMeal}</div>;
};

export default MealDetails;
