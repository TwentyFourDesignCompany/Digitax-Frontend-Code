import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopUp = ({ setisUpdate, setpopupId, setisimage, setrole, setistext, setisquestion, isUpdate, popupId, showPopup, setshowPopup, role, isquestion, istext, isimage }) => {
  const closePop = () => {
    setisUpdate(true)
    setpopupId("")
    setisimage("")
    setrole("")
    setistext(false)
    setisimage(false)
    setisquestion(false)
    setshowPopup(false)
  }
  const [heading, setheading] = useState('')
  const [paragraph, setparagraph] = useState('')

  useEffect(() => {
    if (isUpdate) {
      if (istext) {
        axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/top/text/${popupId}`)
          .then((res) => {
            setheading(res?.data?.heading)
            setparagraph(res?.data?.paragraph)
          })

      }
      else if (isquestion) {
        axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/question/second/${popupId}`)
          .then((res) => {
            setheading(res?.data?.question)
            setparagraph(res?.data?.answer)
          })

      }
    }
  }, [isquestion,isUpdate,istext,popupId])


  const updateData = () => {

    if (isUpdate) {
      if (istext) {
        axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/text/${popupId}`, { heading: heading, paragraph: paragraph })
        .then((res) => {
          if (res.status === 200) {
              toast("Data Updated")
              setTimeout(() => {
                closePop()
              }, 3000);
            }
        })
      }
      else if (isquestion) {
        axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/question/${popupId}`, {question: heading, answer: paragraph})
        .then((res) => {
          if (res.status === 200) {
            toast("Data Updated")
            setTimeout(() => {
              closePop()
            }, 3000);
          }
        })
      }
    }
    else if (!isUpdate){
      if (istext) {
        axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/text`, { heading: heading, paragraph: paragraph,role:role })
        .then((res) => {
            if (res.status === 200) {
              toast("Data Posted")
              setTimeout(() => {
                closePop()
              }, 3000);
            }
        })
        .catch((e)=>console.log(e))
      }
      else if (setisquestion){
        axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/question`, { question: heading, answer: paragraph,role:role })
        .then((res) => {
            if (res.status === 200) {
              toast("Data Posted")
              setTimeout(() => {
                closePop()
              }, 3000);
            }
        })
        .catch((e)=>console.log(e))
      }
    }
  }

  return (
    <div>
      <ImCross className=' float-right cursor-pointer' onClick={closePop} />

      <input defaultValue={isUpdate ? heading : ""} type="text" onChange={(e) => setheading(e.target.value)} name='question' placeholder='Question....?' className='mb-4 mt-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
      <input defaultValue={isUpdate ? paragraph : ""} type="text" onChange={(e) => setparagraph(e.target.value)} name='answer' placeholder='Answer...' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
      <div>
        <button onClick={updateData} className='bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4'>
          {isUpdate ? "Update Content" : "Post Content"}
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1000}
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

export default PopUp