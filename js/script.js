const components = {
  cursos: [
    {
    name: 'Lógica',
    active: false,
    spots: [
      {
        img: false,
        img_alternative:['img_cursos/logica/0.jpg','img_cursos/logica/1.jpg','img_cursos/logica/2.jpg'],
        description: 'Calcula salário total de funcionário com um bônus de vendas.',
        link: 'https://github.com/LusquesToodoo/LucasSilva-BlastOff/blob/main/Curso%20-%20LOO/tarefas/tarefa%201.ALG',
        alt: 'Lógica de programação'
      },
      {
        img: false,
        img_alternative:['img_cursos/logica/0.jpg','img_cursos/logica/1.jpg','img_cursos/logica/2.jpg'],
        description: 'Informa média de Km/L de acordo com dados entregues pelo usuário.',
        link: 'https://github.com/LusquesToodoo/LucasSilva-BlastOff/blob/main/Curso%20-%20LOO/tarefas/tarefa%202.ALG',
        alt: 'Lógica de programação'
      },
      {
        img: false,
        img_alternative:['img_cursos/logica/0.jpg','img_cursos/logica/1.jpg','img_cursos/logica/2.jpg'],
        description: 'Avalia se financiamento será concedido ou negado.',
        link: 'https://github.com/LusquesToodoo/LucasSilva-BlastOff/blob/main/Curso%20-%20LOO/tarefas/tarefa%203.ALG',
        alt: 'Lógica de programação'
      },
      {
        img: false,
        img_alternative:['img_cursos/logica/0.jpg','img_cursos/logica/1.jpg','img_cursos/logica/2.jpg'],
        description: 'Avalia se conta do banco do cliente tem saldo para descontar valor de cheque.',
        link: 'https://github.com/LusquesToodoo/LucasSilva-BlastOff/blob/main/Curso%20-%20LOO/tarefas/tarefa%204.ALG',
        alt: 'Lógica de programação'
      },
    ]
  },
  {
    name: 'HTML & CSS',
    active: true,
    spots: [
      {
        img: 'img_cursos/html_css/t1.png',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Reproduzindo a página da foto usando medidas <b>absolutas.</b>',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%201/index.html',
        alt: 'HTML & CSS'
      },
      {
        img: 'img_cursos/html_css/t1.png',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Reproduzindo a página da foto usando medidas <b>relativas.</b>',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%202/index.html',
        alt: 'HTML & CSS'
      },
      {
        img: 'img_cursos/html_css/t3.PNG',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Desenvolvendo layout com medidas relativas e imagem na borda.',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%203/index.html',
        alt: 'HTML & CSS'
      },
      {
        img: 'img_cursos/html_css/t4.PNG',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Prática da propriedade float.',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%204/index.html',
        alt: 'HTML & CSS'
      },
      {
        img: 'img_cursos/html_css/t5.PNG',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Desenvolvendo layout com propriedades estudadas até então.',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%205/index.html',
        alt: 'HTML & CSS'
      },
      {
        img: 'img_cursos/html_css/t6.png',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Prática com elementos de tabela.',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%206/index.html',
        alt: 'HTML & CSS'
      },
      {
        img: 'img_cursos/html_css/t7.png',
        img_alternative:['img_cursos/html_css/0.jpg','img_cursos/html_css/1.jpg','img_cursos/html_css/2.jpg'],
        description: 'Alterando layout anterior para um mais específico.',
        link: 'https://lusquestoodoo.github.io/LucasSilva-BlastOff/Curso%20-%20Web/tarefas/tarefa%207/index.html',
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
        link: '#',
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
    <a class="spots-link" href="${spot.link}" target="__blank">
      <div class="spots">
            <div class="spots-container-image">
              <img src="${imgSpot}" alt="${spot.alt}" class="spots-image">
            </div>
            <h2>Tarefa ${nTarefa}</h2>
            <p>
              ${spot.description}
            </p>
          </div>
    </a>
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

function sectionCurso(element){
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
