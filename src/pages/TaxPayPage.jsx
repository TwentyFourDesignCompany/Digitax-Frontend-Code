import React from 'react'
import SideNav from '../components/SideNav'
import TaxPay from '../layout/TaxPay'
const TaxPayPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<TaxPay/>}/>
    </div>
  )
}

export default TaxPayPage