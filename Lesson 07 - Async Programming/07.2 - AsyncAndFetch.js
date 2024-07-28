/*API to Use:
https://official-joke-api.appspot.com/random_joke
Steps:
Create an async function named fetchAndDisplayJokes.
Inside the fetchAndDisplayJokes function, use the fetch API to get data from the URL.
Use await to wait for the fetch operation to complete.
Convert the response to JSON format using response.json() and await.
Log the joke in a specific format: Joke: [setup] - Punchline: [punchline].
Repeat the process to fetch and display three jokes. */

//Async Function
const fetchJoke = async () => {
  //Try catch block
  try {
    //Api called via fetch Api and wait till the data pulls through
    const jokeFetch = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    //Checks if the api call status was 200 or ok
    if (!jokeFetch.ok) {
      throw new Error(
        `The Fetch has Failed! status Code -> ${jokeFetch.status}`
      );
    }
    //wait till the data in converted to json
    const jokeData = await jokeFetch.json();
    return jokeData;
  } catch (error) {
    return console.log(error);
  }
};

//another async function to display the jokes
const displayJoke = async (numOfJokes) => {
  //For how many jokes the user wishes for
  for (let i = 1; i <= numOfJokes; i++) {
    //joke hold the Joke from Api call
    const joke = await fetchJoke();
    //ternary condition to print the joke in a simple Manner
    joke
      ? console.log(
          `${i}. joke: ${joke.setup} , PunchLine: ${joke.punchline} \n`
        )
      : console.log("Some Error!");
  }
};
//Function to display the jokes!
displayJoke(5);
