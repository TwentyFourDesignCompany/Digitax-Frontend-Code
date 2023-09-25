import React from 'react'
import SideNav from '../components/SideNav'
import Faq from '../layout/Faq'
const FaqPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<Faq/>}/>
    </div>
  )
}

export default FaqPage