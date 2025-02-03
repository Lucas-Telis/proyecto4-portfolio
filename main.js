import './style.css'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import { Main, addMainListeners } from './components/Main/Main.js'
import { addAboutListeners } from './components/AboutMe/AboutMe.js'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `
}

render()
addAboutListeners()
addMainListeners()
