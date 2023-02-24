/* The script reads in data from a JSON file containing quotes from the Star Wars Clone Wars TV series. The data is then transformed into a new JSON data structure where the quotes are grouped by season and episode number.

The script accomplishes this by defining a function called groupEpisodesBySeason which takes in an array of quote objects as an argument. This function loops through each quote object and creates an array of seasons, where each season contains an array of episodes with the corresponding quotes.

To do this, the function checks to see if the season has already been added to the seasons array. If not, it creates a new season object and adds it to the seasons array. If the season object already exists, it simply adds the episode and quote to the season's episodes array.

Once the data has been grouped by season and episode, the script uses the fs module to write the grouped data to a new JSON file called quotesOutput.json. If there's an error writing the file, the script logs the error to the console. Otherwise, it logs a success message.

Overall, the script demonstrates how to read and write JSON data using Node.js and how to transform data from one format to another using JavaScript functions. It also provides an example of how to use the fs module to work with files in Node.js. */

import { writeFile } from 'fs';

// Import the quotes data from a JSON file
import data from './quotes.json' assert { type: "json" };

// Function to group episodes by season
function groupEpisodesBySeason(data) {
  // Create an empty array to store the seasons
  let seasons = [];

  // Loop through each quote object
  data.forEach(quote => {
    // Find the season object that matches the current quote's season
    let seasonObj = seasons.find(season => season.season === quote.Season);

    // If the season object doesn't exist, create it and add it to the seasons array
    if (!seasonObj) {
      seasonObj = {
        season: quote.Season,
        episodes: []
      };
      seasons.push(seasonObj);
    }

    // Add the episode and quote to the season's episodes array
    seasonObj.episodes.push({
      episode: quote.Episode,
      quote: quote.Quote
    });
  });

  // Return the seasons array
  return seasons;
}

// Call the function to group the episodes by season
const groupedData = groupEpisodesBySeason(data);

// Write the grouped data to a new JSON file
writeFile('quotesOutput.json', JSON.stringify(groupedData), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Quotes data written to quotesOutput.json');
});