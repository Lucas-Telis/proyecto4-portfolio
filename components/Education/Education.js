import data from '../../data/data.js'
import './Education.css'

const template = () => {
  return `
    <section class="education" id="education">
      <h2>Education</h2>
      <h3>${data.education.degree}</h3>
      <h4>${data.education.university}</h4>
      <p>${data.education.graduationYear}</p>`
}

const Education = () => {
  return template()
}

export default Education
