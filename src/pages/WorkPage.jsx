import React from 'react'
import SideNav from  '../components/SideNav'
import Work from '../layout/Work'
const WorkPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<Work/>}/>
    </div>
  )
}

export default WorkPage