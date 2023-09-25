import React from 'react'
import SideNav from '../components/SideNav'
import CreateAbout from '../layout/CreateAbout'
const CreateAboutPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<CreateAbout/>}/>
    </div>
  )
}

export default CreateAboutPage