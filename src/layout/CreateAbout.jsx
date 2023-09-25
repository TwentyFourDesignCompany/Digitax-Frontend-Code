import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreateAbout = () => {

  const [image, setImage] = useState("")
  const [paragraph, setparagraph] = useState('')
  const nav = useNavigate()

  const updateData = (e) => {
    e.preventDefault()
    if (!image|| !paragraph){
      toast.error("All Field Are Required")
    }
    else{
      const formData = new FormData();
      formData.append('image', image);
      formData.append('paragraph', paragraph);
      axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/about`,formData)
      .then((res)=>{
        if (res.status===200){
          toast("Posted Sucessfully")
          setTimeout(() => {
            nav('/about')
          }, 2000);
        }
      })
    }
  }


  return (
    <div className=' m-3'>

      <div className='mb-10'>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600'>Upload Content</button>
      </div>

      {
        image ?  <img className='bg-cover w-[100%] h-[70vh]  mb-6' src={`${URL.createObjectURL(image)}`} alt="" />:""
      }


      <div>
        <input type="file" onChange={(e) => {setImage(e.target.files[0])}} />
      </div>


      <input type="text" onChange={(e) => setparagraph(e.target.value)} placeholder='About Deatils' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md mt-6 border-slate-400' />

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

export default CreateAbout