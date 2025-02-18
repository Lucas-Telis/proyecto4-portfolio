import './Header.css'

const Header = () => {
  return `
    <header>
      <h1>Lucas Telis</h1>
      <button class="menu-toggle" aria-label="Abrir menú">☰</button>
      <nav class="menu">
        <ul>
          <li><a class="header-a" href="#aboutme">About me</a></li>
          <li><a class="header-a" href="#education">Education</a></li>
          <li><a class="header-a" href="#experience">Experience</a></li>
          <li><a class="header-a" href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  `
}

const addMenuFunctionality = () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-toggle')) {
      document.querySelector('.menu').classList.toggle('active')
    }
  })
}

document.addEventListener('DOMContentLoaded', addMenuFunctionality)

export default Header
