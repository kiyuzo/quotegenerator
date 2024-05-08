// create a function that fetches a random quote from the API
function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then((quote) => {
            document.getElementById('quotes').textContent = '" ' + quote.content + ' "';
            document.getElementById('author').textContent = '~ ' + quote.author;
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation: ' + error.message);
        });
}

// create an event listener so that when the button is clicked the website generates a new quote
document.getElementById('random').addEventListener('click', () => {
    getQuote();
});

// tweets the current generatd quote
document.getElementById('tweet').addEventListener('click', () => {
    const quote = document.getElementById('quotes').textContent;
    const author = document.getElementById('author').textContent;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
});

// initialize the function when the website is loaded for the first time
getQuote();
