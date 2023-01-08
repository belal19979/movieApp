import { searchMovie } from "./src/fetchApiRequests/searchMovie.js"
import { mainPage } from "./src/views/mainPage.js"



const searchInput = document.querySelector('.search')


async function main() {
  mainPage()
  searchInput.addEventListener('input', searchMovie)
}


window.addEventListener('load', main)