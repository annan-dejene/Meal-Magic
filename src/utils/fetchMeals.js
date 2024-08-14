export const fetchMeals = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error occured while fetching", error);
    return "Yelem";
  }
};
