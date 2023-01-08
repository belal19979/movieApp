import { mainErrorPage, searchErrorPage, hideError } from "../pages.js/errorPage.js"

export async function fetchMovies(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()

    if (data.success === false) {
      mainErrorPage()
    }
    else if (data.total_pages === 0) {
      searchErrorPage()
    }
    else {
      hideError()
      return data.results
    }

  } catch (e) {
    mainErrorPage()
  }
}