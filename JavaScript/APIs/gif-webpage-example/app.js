const img = document.querySelector('img');
const search = document.querySelector('input');
const btn = document.querySelector('button');

async function getGIF(searchTerm){
    try {
        const url = 'https://api.giphy.com/v1/gifs/translate?api_key=HcVZfgWKEepD3kqw5NRzXPKyAylHNV8C&s=' + searchTerm;
        const response = await fetch(url, {mode: 'cors'})
        const imgData = await response.json()
        img.src = imgData.data.images.original.url;
    } catch (error) {
        errorMsg = document.createElement('div');
        errorMsg.textContent = error;
        document.appendChild(errorMsg);
    }
}

getGIF("Hello")
btn.addEventListener('click', () => {
    getGIF(search.value)
})