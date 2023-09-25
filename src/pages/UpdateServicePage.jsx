import React from 'react'
import UpdateService from '../layout/UpdateService'
import SideNav from '../components/SideNav'
const UpdateServicePage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<UpdateService/>}/>
    </div>
  )
}

export default UpdateServicePage