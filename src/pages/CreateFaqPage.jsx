import React from 'react'
import SideNav from '../components/SideNav'
import CreateFaq from '../layout/CreateFaq'

const CreateFaqPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<CreateFaq/>}/>
    </div>
  )
}

export default CreateFaqPage