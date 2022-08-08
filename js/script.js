const components = {
  cursos: [
    {
    name: 'Lógica',
    active: false,
    spots: [
      {
        img: 'image/logo.png',
        description: 'Lógica com portugol',
        link: 'www.google.com',
        alt: 'texto'
      }
    ]
  },
  {
    name: 'HTML & CSS',
    active: true,
    spots: [
      {
        img: 'image/exemplo.jpg',
        description: 'Lógica com portugol',
        link: 'www.google.com',
        alt: 'texto'
      },
    ]
  },
  {
    name: '(...)',
    active: false,
    spots: [
      {
        img: 'image/exemplo.jpg',
        description: 'Lógica com portugol',
        link: 'www.google.com',
        alt: 'texto'
      }
    ]
  }
  ]
}

//------------------------------

let i = 1
const desktopNavBar = document.querySelector('.nav-container')
const containerSpots = document.querySelector('.main')
const mobileNavBar = document.querySelector('.nav-mobile > ul')

function initNavBar(curso){
  let navItem = curso.active ? `<li class="nav-item active" connection="${i}"><p>${curso.name}</p></li>`
  :`<li class="nav-item" connection="${i}"><p>${curso.name}</p></li>`

  desktopNavBar.insertAdjacentHTML('beforeend', navItem)

  navItem = curso.active ? `<li class="nav-mobile-item active" connection="${i}">${curso.name}</li>`
  : `<li class="nav-mobile-item" connection="${i}">${curso.name}</li>`
  mobileNavBar.insertAdjacentHTML('beforeend', navItem)
}

function initSectionSpot(curso){
  let containerSpotsSection =  curso.active ? `<section class="container-spots active" connection="${i}"></section>` : `<section class="container-spots" connection="${i}"></section>`
  containerSpots.insertAdjacentHTML('beforeend', containerSpotsSection)
  initSpots(curso)
} 

function initSpots(curso) {
  let nTarefa = 1
  const containerSpotsSection = document.querySelector(`.container-spots[connection^='${i}']`)
  
  curso.spots.forEach((spot)=>{
    const card = `
    <div class="spots">
          <div class="spots-container-image">
            <img src="${spot.img}" alt="${spot.alt}" class="spots-image">
          </div>
          <h2>Tarefa ${nTarefa}</h2>
          <p>
            ${spot.description}
          </p>
        </div>
    `
    containerSpotsSection.insertAdjacentHTML('beforeend', card)
    nTarefa += 1
  })
  
}

components.cursos.forEach((curso) => {
  initNavBar(curso)
  initSectionSpot(curso)
  i += 1
});