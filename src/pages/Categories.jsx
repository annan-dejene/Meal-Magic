import { useState, useEffect } from "react";
import { fetchMeals } from "../utils/fetchMeals";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    const fetchCategories = async () => {
      const data = await fetchMeals(url);
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold mb-10">
        Meal Categories
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {!categories ? (
          <Spinner />
        ) : (
          categories.map((category) => (
            <Link to={`${category.strCategory}`} key={category.idCategory}>
              <div>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className={
                    category.strCategory === "Breakfast" ||
                    category.strCategory === "Goat"
                      ? "rounded-full w-16 h-16 sm:w-48 sm:h-48  mx-auto object-cover"
                      : ""
                  }
                />
              </div>
              <h2 className="text-center text-base sm:text-lg">
                {category.strCategory}
              </h2>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
