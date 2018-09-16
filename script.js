// Write your Javascript excercises here:


// Replaces the HTML within the object with id of "demo" with something of our choice.

//document.getElementById("demo").innerHTML = "Hello World"

// Our variables
const key = "19ba61176d7947f0953cc7cddc41e38a"
const url = `https://newsapi.org/v2/everything?q="hip hop"AND"new review"OR"Brockhampton""Frank Ocean"OR"Aminé"OR"Chance the Rapper"OR"Anderson .Paak"OR"Jireel"OR"Snoh Aalegra"&"-movie"&"-movies"&from=2018-08-25&sortBy=relevancy&apiKey=${key}`


// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {

					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
    <div class="link"><a href=${article.url}>To article.</a></div>
            </div>`
    })
}





//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
