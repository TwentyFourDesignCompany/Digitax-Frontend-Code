import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import CreateHome from '../layout/CreateHome';

const CreateHomePage = () => {

    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem('isVerified') || !localStorage.getItem('adminId')){
        navigate('/')
      }
    }, [navigate]);
  return (
    <div className=' scrollbar-hide'>
        <SideNav page={<CreateHome/>} />
    </div>
  )
}

export default CreateHomePage