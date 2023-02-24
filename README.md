# sw-clonewars-quotes

### README

The script reads in data from a JSON file containing quotes from the Star Wars Clone Wars TV series. The data is then transformed into a new JSON data structure where the quotes are grouped by season and episode number.

The script accomplishes this by defining a function called groupEpisodesBySeason which takes in an array of quote objects as an argument. This function loops through each quote object and creates an array of seasons, where each season contains an array of episodes with the corresponding quotes.

To do this, the function checks to see if the season has already been added to the seasons array. If not, it creates a new season object and adds it to the seasons array. If the season object already exists, it simply adds the episode and quote to the season's episodes array.

Once the data has been grouped by season and episode, the script uses the fs module to write the grouped data to a new JSON file called quotesOutput.json. If there's an error writing the file, the script logs the error to the console. Otherwise, it logs a success message.

Overall, the script demonstrates how to read and write JSON data using Node.js and how to transform data from one format to another using JavaScript functions. It also provides an example of how to use the fs module to work with files in Node.js.
