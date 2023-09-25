import React from 'react'
import SideNav from '../components/SideNav'
import Fiscal from '../layout/Fiscal'
const FiscalPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<Fiscal/>}/>
    </div>
  )
}

export default FiscalPage