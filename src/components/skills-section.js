import React, {useState} from 'react'

const techSkills = [
  { name: 'Javascript', exp: 9, color: 'yellow' },
  { name: 'HTML/CSS', exp: 10, color: 'green' },
  { name: 'Ruby on Rails', exp: 8, color: 'blue' },
  { name: 'React', exp: 7, color: 'purple' },
  { name: 'Vue JS', exp:6, color: 'pink' },
  { name: 'Node JS', exp: 5, color: 'red' },
  { name: 'SQL', exp: 7, color: 'orange' },
  { name: 'Mongo DB', exp: 5, color: 'yellow' }
]
const creativeSkills = [
  { name: 'Video Editing', exp: 9, color: 'yellow' },
  { name: 'VFX', exp: 6, color: 'green' },
  { name: 'Animation', exp: 7, color: 'blue' },
  { name: 'UX/UI Design', exp: 8, color: 'purple' },
  { name: 'Graphic Design', exp:7, color: 'pink' }
]

export default function SkillsSection() {
  const [skills, setSkills] = useState(techSkills)
  const [techSelected, setTechSelected] = useState(true)
  const renderSkills = () => {
    return skills.map((skill, index) => {
      return (
        <div className='skill' key={index}>
          <h3 className={skill.color}>{skill.name}</h3>
          <span className={skill.color}>
            Exp: {skill.exp}/10 <br />
            {renderLineGraph(skill.exp)}
          </span>
        </div>
      )
    })
  }
  const renderLineGraph = (number) => {
    let line = ''
    for (let i = 0; i < number; i++) {
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
