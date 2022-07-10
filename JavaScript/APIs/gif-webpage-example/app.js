const img = document.querySelector('img');
const search = document.querySelector('input');
const btn = document.querySelector('button');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=HcVZfgWKEepD3kqw5NRzXPKyAylHNV8C&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });

btn.addEventListener('click', () => {
    url = 'https://api.giphy.com/v1/gifs/translate?api_key=HcVZfgWKEepD3kqw5NRzXPKyAylHNV8C&s=' + search.value;
    fetch(url, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch(error => {
        errorMsg = document.createElement('div');
        errorMsg.textContent = error;
        document.appendChild(errorMsg);
    })
})