let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

})

  let allGameData = []

  fetch('http://localhost:3000/toys'/*, { method: 'GET' }*/)
  .then(res => {return res.json()}) //.then(res => res.json())
  .then(data => {
    allGameData = data
    renderAllGames(allGameData)
  })

