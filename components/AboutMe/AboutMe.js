import data from '../../data/data.js'
import './AboutMe.css'

const template = () => {
  return `
    <nav class="aboutme1">
    <div class="h1h3">
      <h3>Hi!</h3>
      <h1>I´m a web developer</h1>
      <h3>I build thing for web</h3>
      </div>
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      </nav>
      <section class="aboutme" id="aboutme">
      <h1>About me</h1>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a class "a" href=${`mailto:${data.email}>Contact me</a>`}
      <h1 class="h1skills">My skills</h1>
            <ul>
        <li>
          <img src="../../assets/css3.png" />
        </li>
        <li>
          <img src="../../assets/github.png" />
        </li>
        <li>
          <img src="../../assets/javascript.png" />
        </li>
        <li>
          <img src="../../assets/node.png" />
        </li>
        <li>
          <img src="../../assets/vite.png" />
        </li>
        <li>
          <img src="../../assets/html5.png" />
        </li>
    </ul>
    </section>
  `
}

export const AboutMe = () => {
  return template()
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'))
}
