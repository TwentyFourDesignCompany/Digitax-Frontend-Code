import React from 'react'
import SideNav  from '../components/SideNav'
import CreateContact from '../layout/CreateContact'
const CreateContactPage = () => {
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<CreateContact/>}/>
    </div>
  )
}

export default CreateContactPage