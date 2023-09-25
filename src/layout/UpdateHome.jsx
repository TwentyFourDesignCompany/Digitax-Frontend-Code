import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const UpdateHome = ({update}) => {
  const {id}= useParams()
  const [Data, setData] = useState({
    title1:"",
    vate:"",
    paragraph1:"",
    affilate:"",
    title2:"",
    paragraph2:""

  })
  const nav = useNavigate()
  useEffect(() => {
      axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/home/${id}`)
      .then((res)=>{
        setData({
          title1:res.data.title1,
          vate:res.data.vate,
          paragraph1:res.data.paragraph1,
          affilate:res.data.affilate,
          title2:res.data.title1,
          paragraph2:res.data.paragraph2
        })
      })
      .catch((e)=>console.log(e))
  }, [id])
  
  const onChangeInput = (e)=>{
    setData((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const updateData = (e)=>{
    e.preventDefault()
    axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/home/${id}`,Data)
    .then((res)=>{
      if (res.status===200){
        toast("Updated Sucessfully")
        setTimeout(() => {
          nav('/dashboard')
        }, 2000);
      }
    })
  }

  return (
    <div className=' m-3'>

      <div>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Update Content</button>
      </div>

      <div className=' flex flex-col mt-10'>
        <input type="text" onChange={onChangeInput} defaultValue={Data?.title1} name='title1' placeholder='Main Heading' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} defaultValue={Data?.vate} name='vate' placeholder='Vate By' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} defaultValue={Data?.paragraph1} name='paragraph1' placeholder='First Paragraph' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400'/>
        <input type="text" onChange={onChangeInput} defaultValue={Data?.affilate} name='affilate' placeholder='Affilate Network' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400'/>
        <input type="text" onChange={onChangeInput} defaultValue={Data?.title2} name='title2' placeholder='Short description' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400'/>
        <input type="text" onChange={onChangeInput} defaultValue={Data?.paragraph2} name='paragraph2' placeholder='Large Description' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400'/>
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

export default UpdateHome