import React from 'react'
import SideNav from '../components/SideNav'
import CUIoss from '../layout/CUIoss'
const CUIossPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<CUIoss/>}/>
    </div>
  )
}

export default CUIossPage