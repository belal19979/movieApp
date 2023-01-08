import { mainErrorPage } from "../pages.js/errorPage.js"


export async function fetchSpecificFilm(id) {
  const apiKey = 'b3c1212f587b7b2fa31125223a40e728'
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    if (!res.ok) {
      mainErrorPage()
    } else {
      const data = await res.json()
      return data
    }


  } catch (e) {
    console.log(e)
  }

}
