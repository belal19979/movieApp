import { modalPage } from "../pages.js/modalPage.js"
import { fetchMovies } from "../fetchApiRequests/fetchMovies.js"
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=b3c1212f587b7b2fa31125223a40e728`

function getColoredVotes(vote) {
  if (vote >= 8) {
    return "green"
  } else if (vote >= 6) {
    return "orange"
  } else {
    return "red"
  }
}


export const showFilms = (movies) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500'
  const mainDev = document.querySelector('.main')
  mainDev.innerHTML = ''
  movies.forEach((movie) => {
    const { original_title: title, backdrop_path, vote_average: vote, overview, id } = movie
    const movieDiv = document.createElement('div')
    movieDiv.className = 'movie'
    movieDiv.id = id
    movieDiv.innerHTML = `
    <img
          src="${imageUrl}${backdrop_path}"
          alt="image"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class=${getColoredVotes(vote)}>${vote}</span>

        </div>

        <div class="overview ${id}">
        <button class='film-detail'>film detail</button>
          <h3>overview</h3>
          ${overview}
        </div>`

    mainDev.appendChild(movieDiv)

  })
}


export async function mainPage() {
  const data = await fetchMovies(apiUrl)
  showFilms(data)
  modalPage(data)
}