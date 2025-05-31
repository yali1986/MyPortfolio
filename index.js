const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function copyEmail() {
const copy = document.getElementById("copy").textContent
navigator.clipboard.writeText(copy)
}

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

const vueProyect = document.getElementById('vueProyect')
const vueButton = document.getElementById('vueButton')
const vue2Proyect = document.getElementById('vue2Proyect')
const vue2Button = document.getElementById('vue2Button')

const react1Button = document.getElementById('react1Button')
const react2Button = document.getElementById('react2Button')
const reactProyect1 = document.getElementById('reactProyect1')
const reactProyect2 = document.getElementById('reactProyect2')

const visitVueProject = document.getElementById('visitVueProject')
const visitReact1Project = document.getElementById('visitReact1Project')
const visitReact2Project = document.getElementById('visitReact2Project')

const githubVueProject = document.getElementById('githubVueProject')
const githubReact1Project = document.getElementById('githubReact1Project')
const githubReact2Project = document.getElementById('githubReact2Project')



vueButton.addEventListener('click', () => {
    vueButton.classList.remove('bg-primary')
    vueButton.classList.add('bg-white')

    vueProyect.classList.remove('hidden')
    vueProyect.classList.add('block')

    vue2Proyect.classList.remove('block')
    vue2Proyect.classList.add('hidden')
    

    reactProyect1.classList.remove('block')
    reactProyect1.classList.add('hidden')
    react1Button.classList.remove('bg-white')
    react1Button.classList.add('bg-primary')

    react2Button.classList.remove('bg-white')
    react2Button.classList.add('bg-primary')
    reactProyect2.classList.remove('block')
    reactProyect2.classList.add('hidden') 

    vue2Button.classList.remove('bg-white')
    vue2Button.classList.add('bg-primary')
    

    
    //github and url
    visitVueProject.classList.remove('hidden')
    githubVueProject.classList.remove('hidden')

    visitReact1Project.classList.remove('block')
    githubReact1Project.classList.remove('block')
    visitReact1Project.classList.add('hidden')
    githubReact1Project.classList.add('hidden')

    visitReact2Project.classList.remove('block')
    githubReact2Project.classList.remove('block')   
    visitReact2Project.classList.add('hidden')
    githubReact2Project.classList.add('hidden')   
})

vue2Button.addEventListener('click', () => {
  // Cambia colores de botones
  vueButton.classList.remove('bg-white')
  vueButton.classList.add('bg-primary')
  react1Button.classList.remove('bg-white')
  react1Button.classList.add('bg-primary')
  react2Button.classList.remove('bg-white')
  react2Button.classList.add('bg-primary')
  vue2Button.classList.remove('bg-primary')
  vue2Button.classList.add('bg-white')

  // Mostrar Vue 2 y ocultar el resto
  vueProyect.classList.add('hidden')
  reactProyect1.classList.add('hidden')
  reactProyect2.classList.add('hidden')
  vue2Proyect.classList.remove('hidden')

  // Mostrar/ocultar botones de enlaces
  visitVueProject.classList.add('hidden')
  githubVueProject.classList.add('hidden')
  visitReact1Project.classList.add('hidden')
  githubReact1Project.classList.add('hidden')
  visitReact2Project.classList.add('hidden')
  githubReact2Project.classList.add('hidden')
})


react1Button.addEventListener('click', () => {
    vueButton.classList.remove('bg-white')
    vueButton.classList.add('bg-primary')
    react1Button.classList.add('bg-white')
    reactProyect1.classList.remove('hidden')
    reactProyect1.classList.add('block')
    vueProyect.classList.add('hidden')
    vue2Proyect.classList.remove('block')
    vue2Proyect.classList.add('hidden')

    reactProyect2.classList.remove('block')
    reactProyect2.classList.add('hidden')

    react2Button.classList.remove('bg-white')
    react2Button.classList.add('bg-primary')
    vue2Button.classList.remove('bg-white')
    vue2Button.classList.add('bg-primary')


    //github and url
    visitVueProject.classList.add('hidden')
    githubVueProject.classList.add('hidden')   
     
    visitReact1Project.classList.remove('hidden')
    githubReact1Project.classList.remove('hidden')
    visitReact1Project.classList.add('block')
    githubReact1Project.classList.add('block')

    visitReact2Project.classList.remove('block')
    githubReact2Project.classList.remove('block')
    visitReact2Project.classList.add('hidden')
    githubReact2Project.classList.add('hidden')

})

react2Button.addEventListener('click', () => {
    vueButton.classList.remove('bg-white')
    vueButton.classList.add('bg-primary')

    react1Button.classList.remove('bg-white')
    react1Button.classList.add('bg-primary')

    reactProyect1.classList.remove('block')
    reactProyect1.classList.add('hidden')

    reactProyect2.classList.remove('hidden')
    reactProyect2.classList.add('block')

    vueProyect.classList.remove('block')
    vueProyect.classList.add('hidden')

    vue2Proyect.classList.remove('block')
    vue2Proyect.classList.add('hidden')

    react2Button.classList.remove('bg-primary')
    react2Button.classList.add('bg-white')
    vue2Button.classList.remove('bg-white')
    vue2Button.classList.add('bg-primary')


    //github and url
    visitVueProject.classList.add('hidden')
    githubVueProject.classList.add('hidden')

    visitReact1Project.classList.remove('block')
    githubReact1Project.classList.remove('block')
    visitReact1Project.classList.add('hidden')
    githubReact1Project.classList.add('hidden')

    visitReact2Project.classList.remove('hidden')
    githubReact2Project.classList.remove('hidden')
    visitReact2Project.classList.add('block')
    githubReact2Project.classList.add('block')

})