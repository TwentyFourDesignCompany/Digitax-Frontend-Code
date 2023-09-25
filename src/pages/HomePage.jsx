import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/SideNav';
import Home from '../layout/Home';
const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem('isVerified') || !localStorage.getItem('adminId')){
        navigate('/')
      }
    }, [navigate]);
  return (
    
    <div className=' scrollbar-hide'>
      <SideNav page={<Home/>} />
    </div>
  )
}

export default HomePage