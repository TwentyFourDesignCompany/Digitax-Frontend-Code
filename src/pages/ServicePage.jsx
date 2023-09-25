import React from 'react'
import SideNav from '../components/SideNav'
import Service from '../layout/Service'
const ServicePage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<Service/>}/>
    </div>
  )
}

export default ServicePage