import React from 'react'
import SideNav from '../components/SideNav'
import CreateService from '../layout/CreateService'

const CreateServicePage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<CreateService/>}/>
    </div>
  )
}

export default CreateServicePage