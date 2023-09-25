import React, { useEffect } from 'react'
import SideNav from '../components/SideNav';
import UpdateHome from '../layout/UpdateHome'
import { useNavigate } from 'react-router-dom';

const UpdateHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isVerified') || !localStorage.getItem('adminId')){
      navigate('/')
    }
  }, [navigate]);

  return (
    <div className=' scrollbar-hide'>
      <SideNav page={<UpdateHome/>} />
    </div>
  )
}

export default UpdateHomePage