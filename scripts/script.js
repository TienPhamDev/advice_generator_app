const adviceEl = document.querySelector('.advice');
const api_url = `https://api.adviceslip.com/advice`
async function getData() {
  const res = await fetch(api_url)
  const data = await res.json()
  adviceEl.textContent = data.slip.advice
}

getData()