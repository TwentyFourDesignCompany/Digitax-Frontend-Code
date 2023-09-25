import React from 'react'
import SideNav from '../components/SideNav'
import About from '../layout/About'
const AboutPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<About/>}/>
    </div>
  )
}

export default AboutPage