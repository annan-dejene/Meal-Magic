import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Meal from "./pages/MealPage";
import RandomMeal from "./pages/RandomMeal";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Locations from "./pages/Locations";
import Location from "./pages/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="random" element={<RandomMeal />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:location" element={<Location />} />
          <Route path="/meals/:id" element={<Meal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
