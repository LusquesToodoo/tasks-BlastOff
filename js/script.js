const components = {
  cursos: [
    {
    name: 'Lógica',
    active: false,
    spots: [
      {
        img: false,
        img_alternative:['img_cursos/logica/0.jpg','img_cursos/logica/1.jpg','img_cursos/logica/2.jpg'],
        description: 'Lógica com portugol',
        link: 'www.google.com',
        alt: 'Lógica'
      }
    ]
  },
  {
    name: 'HTML & CSS',
    active: true,
    spots: [
      {
        img: false,
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Lógica com portugol',
        link: 'www.google.com',
        alt: 'HTML & CSS'
      },
    ]
  },
  {
    name: '(...)',
    active: false,
    spots: [
      {
        img: 'img_cursos/empy/0.jpg',
        description: 'Em breve (...)',
        link: 'www.google.com',
        alt: 'Em breve (...)'
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
    const imgSpot = spot.img ? spot.img : spot.img_alternative[Math.floor(Math.random() * spot.img_alternative.length)]
    const card = `
    <div class="spots">
          <div class="spots-container-image">
            <img src="${imgSpot}" alt="${spot.alt}" class="spots-image">
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

//------------------------------

function sectionCursos(element){
  console.log('click')
}

function sectionCursos(element){
  if(element.explicitOriginalTarget.className == 'nav-item active'){
    return
  }
  const currentSection = document.querySelector(`.container-spots[connection="${this.getAttribute('connection')}"]`)
  const currentNavItem = document.querySelector(`.nav-item[connection="${this.getAttribute('connection')}"]`)
  const currentNavItemMobile = document.querySelector(`.nav-mobile-item[connection="${this.getAttribute('connection')}"]`)
  document.querySelector('.nav-item.active').classList.remove('active')
  document.querySelector('.nav-mobile-item.active').classList.remove('active')
  document.querySelector('.container-spots.active').classList.remove('active')
  currentSection.classList.add('active')
  currentNavItem.classList.add('active')
  currentNavItemMobile.classList.add('active')
}

const navItem = document.querySelectorAll('.nav-item')
const navItemMobile = document.querySelectorAll('.nav-mobile-item')
const buttonMenuMobile = document.querySelector('.menu-mobile:not(off)')

navItem.forEach((element)=>{
  element.addEventListener('click', sectionCurso)
})
navItemMobile.forEach((element)=>{
  element.addEventListener('click', sectionCurso)
})
buttonMenuMobile.addEventListener('click', ()=>{
  const menuMobile = document.querySelector('.nav-mobile')
  menuMobile.classList.toggle('active')
})
