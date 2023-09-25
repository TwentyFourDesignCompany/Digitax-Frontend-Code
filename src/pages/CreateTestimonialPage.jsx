import React from 'react'
import SideNav from '../components/SideNav'
import CreateTestimonial from '../layout/CreateTestimonial'

const CreateTestimonialPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<CreateTestimonial/>}/>
    </div>
  )
}

export default CreateTestimonialPage