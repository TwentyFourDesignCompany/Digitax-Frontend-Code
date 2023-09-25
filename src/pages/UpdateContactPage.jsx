import React from 'react'
import SideNav from '../components/SideNav'
import UpdateContact from '../layout/UpdateContact'
const UpdateContactPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<UpdateContact/>}/>
    </div>
  )
}

export default UpdateContactPage