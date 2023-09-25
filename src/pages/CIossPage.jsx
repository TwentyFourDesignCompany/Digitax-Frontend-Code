import React from 'react'
import SideNav from '../components/SideNav'
import CIoss from '../layout/CIoss'
const CIossPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<CIoss/>}/>
    </div>
  )
}

export default CIossPage