import React, {useState} from 'react'

const techSkills = [
  { name: 'Javascript', exp: 45, color: 'yellow' },
  { name: 'HTML/CSS', exp: 50, color: 'green' },
  { name: 'Ruby on Rails', exp: 40, color: 'blue' },
  { name: 'React', exp: 35, color: 'purple' },
  { name: 'Vue JS', exp:30, color: 'pink' },
  { name: 'Node JS', exp: 25, color: 'red' },
  { name: 'SQL', exp: 35, color: 'orange' },
  { name: 'Mongo DB', exp: 25, color: 'yellow' }
]
const creativeSkills = [
  { name: 'Video Editing', exp: 45, color: 'yellow' },
  { name: 'VFX', exp: 30, color: 'green' },
  { name: 'Animation', exp: 35, color: 'blue' },
  { name: 'UX/UI Design', exp: 40, color: 'purple' },
  { name: 'Graphic Design', exp:40, color: 'pink' }
]

export default function SkillsSection() {
  const [skills, setSkills] = useState(techSkills)
  const [techSelected, setTechSelected] = useState(true)
  const renderSkills = () => {
    return skills.map((skill) => {
      return (
        <div className='skill'>
          <h3 className={skill.color}>{skill.name}</h3>
          <span className={skill.color}>
            Exp: {renderLineGraph(skill.exp)}
          </span>
        </div>
      )
    })
  }
  const renderLineGraph = (number) => {
    let line = ''
    for (let i = 0; i < number; i+=2) {
      line += '#'
    }
    return line
  }
  const selectTechSkills = () => {
    setSkills(techSkills)
    setTechSelected(true)
  }
  const selectCreativeSkills = () => {
    setSkills(creativeSkills)
    setTechSelected(false)
  }
  return (
    <div className='skills section'>
      <h2>My Skills</h2>
      <div className='switch-view'>
        <span className={ techSelected ? 'link active' : 'link' } onClick={selectTechSkills}>Technical</span>
        <span> | </span>
        <span className={ !techSelected ? 'link active' : 'link' } onClick={selectCreativeSkills}>Creative</span>
      </div>
      <div className='skills-grid'>
        {renderSkills(techSkills)}
      </div>
    </div>
  )
}
