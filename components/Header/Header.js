import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Lucas Telis</h1>
    <nav>
      <ul>
        <li>
          <a class="header-a" href="#aboutme">About me</a>
        </li>
        <li>
          <a class="header-a" href="#education">Education</a>
        </li>
        <li>
          <a class="header-a" href="#experience">Experience</a>
        </li>
        <li>
          <a class="header-a" href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  return template()
}

export default Header
