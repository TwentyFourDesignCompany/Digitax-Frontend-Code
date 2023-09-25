import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreateHome = () => {
  const [Data, setData] = useState({
    title1: "",
    vate: "",
    paragraph1: "",
    affilate: "",
    title2: "",
    paragraph2: ""
  })
  const nav = useNavigate()

  const onChangeInput = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const updateData = (e) => {
    e.preventDefault()
    if (!Data.affilate || !Data.paragraph1 || !Data.paragraph2 || !Data.title1|| !Data.title1 ||!Data.vate){
      toast.error("All Field Are Required")
    }
    else{
      axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/home`, Data)
        .then((res) => {
          if (res.status === 200) {
            toast("Posted Sucessfully")
            setTimeout(() => {
              nav('/dashboard')
            }, 2000);
          }
        })
    }
  }

  return (
    <div className=' m-3'>

      <div>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Post Content</button>
      </div>

      <div className=' flex flex-col mt-10'>
        <input type="text" onChange={onChangeInput} name='title1' placeholder='Main Heading' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} name='vate' placeholder='Vate By' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} name='paragraph1' placeholder='First Paragraph' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} name='affilate' placeholder='Affilate Network' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} name='title2' placeholder='Short description' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} name='paragraph2' placeholder='Large Description' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
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

export default CreateHome