import React from 'react'
import SideNav from '../components/SideNav'
import UpdateFaq from '../layout/UpdateFaq'
const UpdateFaqPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<UpdateFaq/>}/>
    </div>
  )
}

export default UpdateFaqPage