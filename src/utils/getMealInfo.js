export const getMealIngredientDetails = (meal) => {
  // Logic to extract ingredient details from the meal object
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strMeasure${i}`]} of ${meal[`strIngredient${i}`]}`
      );
    }
  }
  return ingredients;
};

export const instructionsExtract = (obj) => {
  //    * Returns the instructions in an array.
  const instructionStr = obj["strInstructions"];
  return instructionStr
    .replaceAll("\r", "")
    .split("\n\n")
    .map((inst) => inst.slice(2, inst.length));
};

export const getYTEmbedLink = (ytLink) => {
  const id = ytLink.split("?v=")[1];

  return "http://www.youtube.com/embed/" + id;
};

export async function isValidYouTubeEmbed(url) {
  try {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("X-Aequseted-With", "XMLHttpRequest");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Aequseted-With": "XMLHttpRequest",
      },
    });

    // Check if the response is OK (status 200)
    if (response.ok) {
      const text = await response.text();
      // Check for keywords indicating the video is private
      if (
        text.includes("This video is private") ||
        text.includes("Video unavailable")
      ) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching YouTube embed URL:", error);
    return false;
  }
}

// // Example usage
// const embedUrl = "https://www.youtube.com/embed/daURe-AI5qQ";
// isValidYouTubeEmbed(embedUrl).then((isValid) => {
//   console.log("Is valid YouTube embed:", isValid);
// });
