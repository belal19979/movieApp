const error = document.querySelector('.error')
const mainDiv = document.querySelector('.main')


export function mainErrorPage() {
  mainDiv.innerHTML = ''
  error.innerHTML = `
  <div class="error">
  <h1>sorry , Something Went Wrong</h1>
</div>

  `
}

export function searchErrorPage() {
  mainDiv.innerHTML = ''
  error.innerHTML = `
  <div class="error">
  <h1>sorry , there is no films with this name</h1>
</div>

  `
}

export function hideError() {
  error.innerHTML = ''
}