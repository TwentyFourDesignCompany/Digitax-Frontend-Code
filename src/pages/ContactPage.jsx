import React from 'react'
import SideNav from '../components/SideNav'
import Contact from '../layout/Contact'
const ContactPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<Contact/>}/>
    </div>
  )
}

export default ContactPage