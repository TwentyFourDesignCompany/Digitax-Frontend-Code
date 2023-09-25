import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const Form = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const nav = useNavigate()

    const onChangeInput = (e) => {
        setInputValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!isLogin?!inputValue.name:'' || !inputValue.email || !inputValue.password) {
            toast.error("ALL FIELDS ARE REQUIRED")
        }
        else {
            axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/${isLogin ? "login" : "register"}`, inputValue)
                .then((res) => {
                    console.log(res)
                    if (res?.status === 200) {
                        localStorage.setItem('isVerified', true)
                        localStorage.setItem('adminId', res.data._id)
                        toast(`${isLogin ? "Login successful" : "Register successful"}`)
                        setTimeout(() => {
                            nav('/dashboard') 
                        }, 2000);
                    }
                })
                .catch((e) => {
                    if (e?.response?.status === 400) {
                        toast.error("Admin already exits")
                    }
                    else if (e?.response?.status === 404) {
                        toast.error("Account not found")
                    }
                    else if (e?.response?.status === 300) {
                        toast.error("Invalid credentials")
                    }
                })
        }
    }

    return (
        <>
            <div className='flex justify-center items-center bg-no-repeat bg-cover opacity-70 bg-center w-[100vw] h-[100vh] font-poppinsFont' style={{ backgroundImage: 'url(./bg.jpeg)' }}>

                <div className=' bg-black w-[20rem] sm:w-[25rem] rounded-lg  p-[1rem]'>

                    {/* UPPER LOGIN AND REGISTER  */}
                    <div className='flex items-center justify-center gap-3'>

                        <div className="cursor-pointer flex justify-center items-center flex-col" onClick={() => setIsLogin((prev) => !prev)}>
                            <p className='mb-1 font-bold text-white tracking-wider text-lg'>Register</p>
                            <div className={`w-[5rem] h-[3px] ${!isLogin ? 'bg-orange-600' : ''}`}></div>
                        </div>

                        <div className='w-[1px] h-[1.5rem] bg-gray-600'></div>
                        <div className="cursor-pointer flex justify-center items-center flex-col" onClick={() => setIsLogin((prev) => !prev)}>
                            <p className='mb-1 font-bold text-white text-lg tracking-wider'>Login</p>
                            <div className={`w-[5rem] h-[3px] ${isLogin ? 'bg-orange-600' : ''}`}></div>
                        </div>

                    </div>

                    {/* FORM MAIN S */}
                    <div className=' mt-8'>
                        {/* NAME  */}
                        {
                            !isLogin ?
                                <div className='mb-4' >
                                    <p className='font-bold mb-1 text-white tracking-wider'>Name</p>

                                    <div className=' relative'>
                                        <input name='name' onChange={onChangeInput} type="text" placeholder='Enter Your Name' className=' w-[100%] h-[2.5rem] rounded-md pl-5 pr-5 outline-none' />
                                        <FaUser className='absolute top-3 right-2' />
                                    </div>
                                </div>
                                : ""
                        }

                        {/* EMAIL  */}
                        <div className='mb-4'>
                            <p className='font-bold mb-1 text-white tracking-wider'>Email</p>
                            <div className=' relative'>
                                <input name='email' onChange={onChangeInput} type="text" placeholder='Enter Your Email' className=' w-[100%] h-[2.5rem] rounded-md pl-5 pr-5 outline-none ' />
                                <MdMarkEmailUnread className='absolute top-2 right-2 text-[1.4rem]' />
                            </div>
                        </div>

                        {/* PASSWORD  */}
                        <div className='mb-6'>
                            <p className='font-bold mb-1 text-white tracking-wider'>Password</p>
                            <div className=' relative'>
                                <input name='password' onChange={onChangeInput} type={showPassword ? "text" : "password"} placeholder='Enter Your Password' className=' w-[100%] h-[2.5rem] rounded-md pl-5 pr-5 outline-none mb-' />
                                {
                                    showPassword ?
                                        <AiFillEyeInvisible onClick={() => setshowPassword((pre) => !pre)} className='absolute top-[0.6rem] cursor-pointer right-2 text-[1.4rem]' /> :
                                        <AiFillEye onClick={() => setshowPassword((pre) => !pre)} className='absolute top-[0.6rem] cursor-pointer right-2 text-[1.4rem]' />

                                }
                            </div>
                        </div>

                        {/* BUTTON  */}
                        <div className='flex justify-center items-center mt-4 mb-3'>
                            <button onClick={submitForm} className='w-[100%] tracking-wider h-[3rem] outline-none rounded-md bg-blue-500 text-white'>{isLogin ? "Login To Your Account" : "Create An Account"}</button>
                        </div>
                    </div>

                </div>

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
        </>
    )
}

export default Form