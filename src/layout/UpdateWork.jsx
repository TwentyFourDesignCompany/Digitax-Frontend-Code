import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UpdateWork = () => {

  const { role,id } = useParams()
  const [paragraph, setparagraph] = useState('')
  const formattedRole = role.replace(/%20/g, ' ');
  const nav = useNavigate()
  useEffect(() => {
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/work/${id}`)
      .then((res) => {
        setparagraph(res.data.paragraph)
      })
  }, [id])

  const updateData = (e)=>{
    e.preventDefault()

    axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/work/${id}`,{paragraph:paragraph})
    .then((res)=>{
      if (res.status===200){
        toast("Updated Sucessfully")
        setTimeout(() => {
          if (formattedRole==="IOSS"){
            nav('/ioss')
          }
          else if (formattedRole==="Fiscal Representation"){
            nav('/fiscal')
          }
          else if (formattedRole==="Taxpay"){
            nav("/tax")
          }
          else if(formattedRole ==="Partnerships"){
            nav("/partner")
          }
        }, 2000);
      }
    })
  }
  return (
    <div className=' m-3'>

      <div className='mb-10'>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600'>Update Content</button>
      </div>

      <input type="text" defaultValue={paragraph} onChange={(e)=>setparagraph(e.target.value)} placeholder='Work Paragraph' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md mt-6 border-slate-400'/>

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

export default UpdateWork