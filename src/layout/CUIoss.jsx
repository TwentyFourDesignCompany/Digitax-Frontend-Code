import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CUIoss = () => {
  const { role, id } = useParams()
  const formattedRole = role.replace(/%20/g, ' ');
  const [image, setImage] = useState('')
  const [question, setquestion] = useState('')
  const [answer, setanswer] = useState('')
  const [selected, setSelected] = useState('')
  const nav = useNavigate()

  useEffect(() => {
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/image/question/${id}`)
    .then((res) => {
      setImage(res.data.image)
      setquestion(res.data.question)
      setanswer(res.data.answer)
    })
      .catch((e) => { })
  }, [role, id])

  const updateData = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('image', image);
    formData.append('question', question);
    formData.append('answer', answer);
  
    axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/image/question/${id}`, formData)
      .then((res) => {
        if (res.status === 200) {
          toast("Updated Successfully");
          setTimeout(() => {
            if(formattedRole==="IOSS"){
              nav('/ioss')
            }
            else if(formattedRole==="Partnerships"){
              nav("/partner")
            }
            else if (formattedRole==="Taxpay"){
              nav("/tax")
            }
            else if (formattedRole==="Fiscal Representation"){
              nav("/fiscal")
            }
          }, 2000);
        }
      });
  };

  return (

    <div className=' m-3'>

      <div className='mb-10'>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600'>Update Content</button>
      </div>
      {

        <img className='bg-cover w-[100%] h-[70vh]  mb-6' src={` ${selected ? URL.createObjectURL(image) : `http://localhost:4000/images/${image}`}`} alt="" />
      }
      <div>
        <input type="file" onChange={(e) => {
          setImage(e.target.files[0])
          setSelected(e.target.files[0])
        }} />
      </div>

      <input type="text" defaultValue={question} onChange={(e) => setquestion(e.target.value)} placeholder='Enter Your Question' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md mt-6 border-slate-400' />
      <input type="text" defaultValue={answer} onChange={(e) => setanswer(e.target.value)} placeholder='Enter Your Answer' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md mt-6 border-slate-400' />

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

export default CUIoss