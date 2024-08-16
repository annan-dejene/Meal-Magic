/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Results = ({ meals }) => {
  return (
    <div
      className={"mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 "}
    >
      {meals.map(
        (
          item,
          index // we want to display a maximum of 15 items
        ) =>
          index < 15 && (
            <Link
              to={`/meals/${item.idMeal}`}
              key={item.idMeal}
              className="group"
            >
              <div
                className={
                  "h-min w-1/2 mx-auto my-5 p-1 md:p-2 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 " +
                  (meals.length < 3 ? "md:w-1/2" : "md:w-full")
                }
              >
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className=" rounded-md hover:blur-[2px] group-hover:opacity-90"
                />
              </div>

              <div className="flex flex-col text-center md:text-left">
                <h1
                  className={
                    "text-slate-950 " +
                    (meals.length >= 4 ? "text-lg" : "text-xl")
                  }
                >
                  {item.strMeal}
                </h1>
                <p className="text-sm text-slate-800 hover:underline group-hover:underline">
                  {item.strTags && item.strTags.split(",").join(", ")}
                </p>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default Results;
