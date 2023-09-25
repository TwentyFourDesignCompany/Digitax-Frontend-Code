import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const UpdateTestimonial = () => {
  const { id } = useParams()
  const [image, setImage] = useState('')
  const [message, setmessage] = useState('')
  const [Name, setName] = useState('')
  const [selected,setSelected] = useState('')
  const nav = useNavigate()

  useEffect(() => {
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/testimonial/${id}`)
      .then((res) => {
        setImage(res.data.image)
        setmessage(res.data.message)
        setName(res.data.name)
      })
  }, [id])

  const updateData = (e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);
    formData.append('message', message);
    formData.append('name', Name);

    axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/testimonial/${id}`,formData)
    .then((res)=>{
      if (res.status===200){
        toast("Updated Sucessfully")
        setTimeout(() => {
          nav('/testimonial')
        }, 2000);
      }
    })
  }
  return (
    <div className=' m-3'>

      <div className='mb-10'>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600'>Update Content</button>
      </div>
      {
        
        <img className='bg-cover w-[100%] h-[70vh]  mb-6' src={` ${selected ? URL.createObjectURL(image) : `/images/${image}`}` } alt="" />
      }
      <div>
        <input type="file" onChange={(e)=>{setImage(e.target.files[0])
        setSelected(e.target.files[0])
        }}/>
      </div>

      <input type="text" defaultValue={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Testimonial Deatils' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md mt-6 border-slate-400'/>
      <input type="text" defaultValue={Name} onChange={(e)=>setName(e.target.value)} placeholder='Testimonial Name' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md mt-6 border-slate-400'/>

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

export default UpdateTestimonial