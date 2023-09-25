import React from 'react'
import SideNav from '../components/SideNav'
import UpdateAbout from '../layout/UpdateAbout'

const UpdateAboutPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<UpdateAbout/>}/>  
    </div>
  )
}

export default UpdateAboutPage