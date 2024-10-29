/* 
 * Fetch data from an external API
 * Format data if required
 */

// Fetch data from an external API
async function fetchRecipes() {
    try {
        // Define request properties
        const apiKey = 'INSERT YOUR API KEY HERE';
        const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey;
        const headers = { 'Content-Type': 'application/json' };

        const response = await fetch(url, { headers });
        const status = response.status;
        const body = await response.json();

        if (status == 200) {
            console.log('Success');
            return { status: true, data: body };
        } else {
            console.log('Error');
        }
        return { status: false };
    } catch (error) {
        console.error(error);
    }
}

async function loadAndFetchRecipes() {
    try {
        // Fetch Recipes
        const response = await fetchRecipes();

        const recipeList = document.getElementById('recipeList');
        if (response.status == true) {
            // Retrieve the data
            const data = response.data;
            const results = data.results;

            // Get reference to list
            results.forEach(result => {
                // Create elements
                const listItem = document.createElement('li');
                const img = document.createElement('img');

                // Gather required properties from the response data
                const title = result.title;
                const image = result.image;

                // Modify the elements created with the data
                listItem.textContent = title;
                img.src = image;

                // Make changes on the UI
                recipeList.append(listItem);
                recipeList.append(img);
            });
        } else {
            const listItem = document.createElement('li');
            const message = 'There was an error fetching data from the API';

            listItem.textContent = message;
            recipeList.append(listItem);
        }
    } catch (error) {
        console.error(error);
    }
}

window.onload = loadAndFetchRecipes;