import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { NavLinks } from '../Data/navLink'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SideNav = ({page}) => {
  const [toogleNav, setToogleNav] = useState(true)
  const nav = useNavigate()

  const logout = () => {
    localStorage.removeItem('isVerified')
    localStorage.removeItem('adminId')
    toast("Sucesfully Logout")
    setTimeout(()=>{
      nav('/')
    },2000)
  }

  return (

    <div className="flex gap-0 relative font-poppinsFont">

      <div className={`w-[5rem] grow-0 h-[100vh]  bg-slate-100 ${toogleNav ? "sm:w-[12rem]" : "sm:w-[5rem]"}`}>

        {/* LOGO AND CLOSE IOCN */}
        <div className='sm:flex sm:justify-end sm:cursor-pointer hidden '>
          <div className='flex justify-center items-center mt-2 mr-2 w-[2rem] h-[2rem] bg-blue-700 rounded-3xl cursor-pointer'>
            {
              toogleNav ?
                <MdKeyboardDoubleArrowLeft onClick={() => setToogleNav((prev) => !prev)} className='w-[1.2rem] h-[1.2rem] text-white items-center' /> :
                <MdKeyboardDoubleArrowRight onClick={() => setToogleNav((prev) => !prev)} className='w-[1.2rem] h-[1.2rem] text-white items-center' />
            }
          </div>
        </div>

        {/* LOGO  */}
        <div className=' flex justify-center items-center'>
          <h1 className='text:sm sm:text-lg tracking-wider mb-0'><span className=' text-orange-600'>D</span>igitax</h1>
        </div>
        <hr className=' h-[1.5px] m-0.5 bg-slate-500' />

        {/* NAVLINKS  */}
        <div className=' mt-1 ml-2 mr-2'>
          {
            NavLinks.map((i,index) => {
              return (
                <div className=' cursor-pointer' o onClick={() => {
                  if (i.id === 7) { logout(); }
                  else{nav(`${i.link}`)}
                }}>

                  <div key={index} className={`sm:flex sm:gap-2 sm:items-center mb-1 hover:bg-slate-300 hover:shadow-shadow1 hover:rounded-md p-[2.3px]`}>
                    <h1 className=' text-xl m-[2px] text-white w-[1.9rem] h-[1.9rem] p-1 bg-blue-500 flex justify-center items-center rounded-lg'>{i.icon}</h1>
                    <h1 className={`hidden sm:block ${!toogleNav ? "sm:hidden" : "block"}`}>{i.title}</h1>
                  </div>
                  <hr className=' border-solid border-[0.1px] border-slate-500 mb-1' />
                </div>

              )
            })
          }
        </div>

      </div>

      <div className=' w-[2px] h-[100vh] border-solid border-[0.1px] border-gray-400'></div>

      <div className='grow bg-gray-300 h-[100vh] overflow-scroll'>
        {page}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default SideNav


