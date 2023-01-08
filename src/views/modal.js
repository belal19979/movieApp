const modalDiv = document.querySelector('.modal')
const imageUrl = 'https://image.tmdb.org/t/p/w500'

export function showFilmModal() {
  modalDiv.style.display = 'block'

  document.addEventListener('click', (e) => {
    if (e.target.className === 'closeBtn')
      modalDiv.style.display = 'none'
  })

}


export function injectDataToModal(film) {
  const genresArr = []
  let productionCountyAlt
  let { backdrop_path, genres, production_countries, budget, vote_average, vote_count, original_title } = film

  if (production_countries.length === 0) {
    productionCountyAlt = "undefined"
  } else {
    productionCountyAlt = production_countries[0].name
  }

  genres.forEach((el) => genresArr.push(el.name))


  modalDiv.innerHTML = `
  <div class="modal-content">
        <span class="closeBtn">x</span>
        <img
          src="${imageUrl}${backdrop_path}"
        />
        <div class="details">
          <h3>Name : <span>${original_title}</span></h3>
          <h3>Country : <span>${productionCountyAlt}</span></h3>
          <h3>Budget :<span>${budget} $</span></h3>
          <h3>Genre : <span>${[...genresArr]}</span></h3>
          <h3>Vote Average :<span>${vote_average}</span></h3>
          <h3>Vote Count :<span>${vote_count}</span></h3>
        </div>
      </div>
  `

}
