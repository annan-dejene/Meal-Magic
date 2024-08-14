import { useState } from "react";
import SearchMeals from "../components/SearchMeals";
import Results from "../components/Results";
import { fetchMeals } from "../utils/fetchMeals";

const Home = () => {
  const [searchMeal, setSearchMeal] = useState("");
  const [meals, setMeals] = useState([]);

  return (
    <main className="max-w-7xl mx-auto p-8">
      <SearchMeals
        searchMeal={searchMeal}
        setSearchMeal={setSearchMeal}
        fetchMeals={fetchMeals}
        setMeals={setMeals}
      />

      <Results meals={meals} />
    </main>
  );
};

export default Home;
