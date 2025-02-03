import data from '../../data/data.js'
import './Experience.css'

const template = () => {
  return `
  <section class="experience" id="experience">
    <h2>Experience</h2>
    <ul>
      ${data.workExperience
        .map(
          (item) => `
      <li>
        <h2>${item.name} (${item.date})</h2>
        <a href="">${item.link}</a>
        <h4>${item.job}</h4>
        <p>${item.description}</p>
      </li>
      `
        )
        .join('')}
    </ul>
  </section>`
}

const Experience = () => {
  return template()
}

export default Experience
