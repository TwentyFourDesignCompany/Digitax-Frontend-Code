import React from 'react'
import SideNav from  '../components/SideNav'
import CreateWork from '../layout/CreateWork'
const CreateWorkPage = () => {
  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<CreateWork/>}/>
    </div>
  )
}

export default CreateWorkPage