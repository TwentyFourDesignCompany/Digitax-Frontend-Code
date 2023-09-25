import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UpdateFaq = () => {
  const {id,title}= useParams()
  const [Data, setData] = useState({
    question:"",
    title:title,
    answer:""

  })
  const nav = useNavigate()
  useEffect(() => {
      axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/${id}`)
      .then((res)=>{
        setData({
          title:res.data.title,
          question:res.data.question,
          answer:res.data.answer,
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
    axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/${id}`,Data)
    .then((res)=>{
      if (res.status===200){
        toast("Updated Sucessfully")
        setTimeout(() => {
          nav('/faq')
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
        <input type="text" onChange={onChangeInput} defaultValue={Data?.question} name='question' placeholder='Question' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input type="text" onChange={onChangeInput} defaultValue={Data?.answer} name='answer' placeholder='Answer' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
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

export default UpdateFaq