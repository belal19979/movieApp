import { injectDataToModal } from "../views/modal.js"
import { showFilmModal } from "../views/modal.js"
import { fetchSpecificFilm } from "../fetchApiRequests/fetchSpecificFilm.js"



export async function modalPage(data) {
  document.querySelectorAll('.film-detail').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const clickedFilmId = parseInt(e.target.parentNode.parentNode.id)
      data.forEach(async ({ id }) => {
        if (id === clickedFilmId) {
          const filmData = await fetchSpecificFilm(id)
          injectDataToModal(filmData)
          showFilmModal()

        }
      })
    })
  })
}