import { fetchMovies } from "./fetchMovies.js"
import { showFilms } from "../views/mainPage.js"
import { modalPage } from "../pages.js/modalPage.js"

const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=b3c1212f587b7b2fa31125223a40e728&query=`
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=b3c1212f587b7b2fa31125223a40e728`

export async function searchMovie(e) {
  let data
  if (e.target.value === "") {
    data = await fetchMovies(apiUrl)
  } else {
    data = await fetchMovies(searchUrl + e.target.value)
  }

  showFilms(data)
  modalPage(data)
}