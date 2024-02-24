// Function to fetch a random joke from the Jokes API
async function fetchJoke() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single"
    );
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Failed to fetch joke";
  }
}

// Function to display the joke on button click
function displayJoke() {
  const jokeElement = document.getElementById("joke");
  console.log(jokeElement);
  fetchJoke()
    .then((joke) => {
      jokeElement.textContent = joke;
    })
    .catch((error) => {
      jokeElement.textContent = error;
    });
}

// Add event listener to the button
const button = document.getElementById("jokeButton");
button.addEventListener("click", displayJoke);
