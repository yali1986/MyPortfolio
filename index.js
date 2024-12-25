const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');   
});

const vueProyect = document.getElementById('vueProyect')

const vueButton = document.getElementById('vueButton')
const react1Button = document.getElementById('react1Button')
const react2Button = document.getElementById('react2Button')

const reactProyect1 = document.getElementById('reactProyect1')

react1Button.addEventListener('click', () => {
    vueButton.classList.remove('bg-white')
    vueButton.classList.add('bg-primary')
    react1Button.classList.add('bg-white')
    reactProyect1.classList.remove('hidden')
    reactProyect1.classList.add('block')
    vueProyect.classList.add('hidden')
    
    reactProyect2.classList.remove('block')
    reactProyect2.classList.add('hidden')

    react2Button.classList.remove('bg-white')
    react2Button.classList.add('bg-primary')
})

vueButton.addEventListener('click', () => {
    vueButton.classList.remove('bg-primary') 
    vueButton.classList.add('bg-white')   
    vueProyect.classList.remove('hidden') 
    vueProyect.classList.add('block')   
    reactProyect1.classList.remove('block') 
    reactProyect1.classList.add('hidden') 
    react1Button.classList.remove('bg-white')     
    react1Button.classList.add('bg-primary') 
    react2Button.classList.remove('bg-white')
    react2Button.classList.add('bg-primary') 
    reactProyect2.classList.remove('block')
    reactProyect2.classList.add('hidden')   
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

    react2Button.classList.remove('bg-primary')
    react2Button.classList.add('bg-white')
})