import React from 'react'
import SideNav from '../components/SideNav'
import Testimonial from '../layout/Testimonial'
const TestimonialPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<Testimonial/>}/>
    </div>
  )
}

export default TestimonialPage