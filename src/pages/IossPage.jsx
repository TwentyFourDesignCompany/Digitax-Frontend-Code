import React from 'react'
import SideNav from '../components/SideNav' 
import Ioss from '../layout/Ioss'
const IossPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<Ioss/>}/>
    </div>
  )
}

export default IossPage