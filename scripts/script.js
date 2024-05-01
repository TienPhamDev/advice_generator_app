const adviceEl = document.querySelector('.advice-text')
const adviceIdEl = document.querySelector('.advice-id')
const api_url = `https://api.adviceslip.com/advice`
async function getData() {
  const res = await fetch(api_url)
  const data = await res.json()
  adviceIdEl.textContent = data.slip.id
  adviceEl.innerHTML = `" <quote>${data.slip.advice}</quote> "`
}

getData()