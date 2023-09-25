import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MdEdit } from 'react-icons/md'
import PopUp from '../components/PopUp'
const TaxPay = () => {
  const nav = useNavigate()
  const [iossTop, setIossTop] = useState([])
  const [iossQuestion, setiossQuestion] = useState([])
  const [issoImageQuestion, setissoImageQuestion] = useState([])
  const [works, setworks] = useState([])

  const [showPopup, setshowPopup] = useState(false)
  const [popupId, setpopupId] = useState('')
  const [role, setrole] = useState('')
  const [istext, setistext] = useState(false)
  const [isquestion, setisquestion] = useState(false)
  const [isimage, setisimage] = useState(false)
  const [isUpdate, setisUpdate] = useState(true)

  useEffect(() => {

    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/text/Taxpay`)
      .then((res) => {
        setIossTop(res?.data)
      })
      .catch((e) => {
        if (e.response.status === 404) {
        }
      })

    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/question/Taxpay`)
      .then((res) => {
        setiossQuestion(res?.data)
      })
      .catch((e) => {
        if (e.response.status === 404) {
        }
      })
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/image/Taxpay`)
      .then((res) => {
        setissoImageQuestion(res?.data)
      })
      .catch((e) => {
        if (e.response.status === 404) {
        }
      })

    // HOW IT WORKS
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/work/role/Taxpay`)
    .then((res) => {
      setworks(res?.data)
    })
    .catch((e) => {
      if (e.response.status === 404) {
      }
    })
  }, [showPopup])

  const delTopIoss = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/text/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted Successfully");
          setIossTop((prevData) => prevData.filter(item => item._id !== id));
        }
      })
  }

  const delQuestion = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/question/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted Successfully");
          setiossQuestion((prevData) => prevData.filter(item => item._id !== id));
        }
      })
  }

  const delImageQuestion = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/ioss/image/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted Successfully");
          setissoImageQuestion((prevData) => prevData.filter(item => item._id !== id));
        }
      })
  }

  const deleteData = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/work/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted Successfully");
          setworks((prevData) => prevData.filter(item => item._id !== id));
        }
      });
  };

  return (
    <div className=' font-poppinsFont text-black m-3 '>
      <h1 className='text-right tracking-wider mb-4'>Tax Pay Page Content</h1>
      {
        iossTop.length === 0 ?
          <>
            <div className=' flex justify-center items-center mt-0 mb-3'>
              <button onClick={() => {
                setisUpdate(false)
                setshowPopup(true)
                setrole("Taxpay")
                setistext(true)
              }} className=' bg-gray-700 text-white h-[2.5rem] w-[8rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Content</button>
              <h1 className=' tracking-wider'>No Tax Pay Header Found Adds Header</h1>
            </div>
          </>
          : ""
      }
      {/* IOSS TOP  */}
      <div>
        {
          iossTop.map((i, ind) => {
            return (
              <div key={ind}>
                <h1 className='mb-2'>{i.heading}</h1>
                <p>{i.paragraph}</p>
                <div className=' flex justify-end  items-center gap-3'>
                  <div className=' w-[2.6rem] h-[2.6rem] flex justify-center items-center bg-gray-700  hover:bg-blue-600  text-white  rounded-full cursor-pointer' onClick={() => delTopIoss(i._id)}>
                    <FaTrash className=' w-[1rem] h-[1rem] ' />
                  </div>
                  <button onClick={() => {
                    setpopupId(i._id)
                    setrole(i.role)
                    setshowPopup(true)
                    setistext(true)
                    setisUpdate(true)
                  }} className=' bg-gray-700 h-[2.5rem] w-[10rem] rounded-md text-sm  text-white tracking-wider hover:bg-blue-600 mb-4 mt-4'>Update Content</button>
                </div>
                <hr className=' border-solid border-[0.1px] border-slate-500 mb-4' />
              </div>

            )
          })
        }
      </div>

      {/* IOSS QUESTION  */}

      {iossQuestion.length === 0 ?
        <>
          <div className=' flex justify-center items-center mt-0 mb-3'>
            <h1 className=' tracking-wider'>No Tax Pay Question Found</h1>
          </div>
        </>
        : ""}

      <button onClick={() => {
        setisUpdate(false)
        setshowPopup(true)
        setrole('Taxpay')
        setisquestion(true)
      }} className=' bg-gray-700 text-white h-[2.5rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Question</button>
      <div>
        {
          iossQuestion?.map((i, ind) => {
            return (
              <div key={ind}>
                <h1 className='mb-2 text-xl'>{i.question}</h1>
                <p>{i.answer}</p>
                <div className=' flex justify-end  items-center gap-3'>
                  <div className=' w-[2.6rem] h-[2.6rem] flex justify-center items-center bg-gray-700  hover:bg-blue-600  text-white  rounded-full cursor-pointer' onClick={() => delQuestion(i._id)}>
                    <FaTrash className=' w-[1rem] h-[1rem] ' />
                  </div>
                  <button onClick={() => {
                    setpopupId(i._id)
                    setrole(i.role)
                    setshowPopup(true)
                    setisquestion(true)
                  }} className=' bg-gray-700 h-[2.5rem] w-[10rem] rounded-md text-sm  text-white tracking-wider hover:bg-blue-600 mb-4 mt-4'>Update Question</button>
                </div>
                <hr className=' border-solid border-[0.1px] border-slate-500 mb-4' />

              </div>

            )
          })
        }
      </div>

      {/* ISSO IMAGE QUESTION  */}
      {issoImageQuestion.length === 0 ?
        <>
          <div className=' flex justify-center items-center mt-0 mb-3'>
            <h1 className=' tracking-wider'>No Tax Pay Image Question Found</h1>
          </div>
        </>
        : ""}

      <button onClick={() => nav('/C/Taxpay')}className=' bg-gray-700 text-white h-[2.5rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Image</button>
      <div>
        {
          issoImageQuestion.map((i, index) => {
            return (
              <div className='mb-6'>
                <div className=' bg-slate-400 p-3'>
                  <div className=' flex justify-between items-center'>
                    <div>
                      <img src={`${i.image}`} className=' mb-2 w-[5rem] h-[5rem]' alt="" />
                    </div>
                    <div className=' flex gap-4'>
                      <FaTrash onClick={() => delImageQuestion(i._id)} className=' text-xl cursor-pointer p-2 m-[2px] text-white w-[2.1rem] h-[2.1rem] bg-blue-500 flex justify-center items-center rounded-lg' />
                      <MdEdit onClick={()=>nav(`/U/${i.role}/${i._id}`)}  className=' text-xl cursor-pointer p-2 m-[2px] text-white w-[2.1rem] h-[2.1rem] bg-blue-500 flex justify-center items-center rounded-lg' />
                    </div>
                  </div>
                  <h1 className=' text-lg mb-2'>{i.question}</h1>
                  <p>{i.answer}</p>
                </div>
                <hr className=' border-solid border-[0.1px] border-slate-500 mb-4' />
              </div>

            )
          })
        }
      </div>
      
      {/* /* HOW ITS WORKS  */} 

            {works.length === 0 ?
        <>
          <div className=' flex justify-center items-center mt-0 mb-3'>
            <h1 className=' tracking-wider'>No How It Works Found</h1>
          </div>
        </>
        : ""}

      <button onClick={() => {nav('/work/create/Taxpay')}} className=' bg-gray-700 text-white h-[2.5rem] w-[11rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add How It Works</button>
      <div>
        {
          <div className=' flex items-center gap-6 overflow-scroll mt-10 relative'>
            {
              works.map((i, index) => {
                return (
                  <div key={index} className=' flex items-center justify-center flex-col p-3 w-[26rem] h-[15rem] overflow-scroll shadow-shadow1 bg-slate-400 flex-shrink-0'>
                    <p className=' mb-4 text-[#00184A]'>{i.paragraph}</p>

                    <div className='flex items-center gap-[19rem]'>

                      <div className='cursor-pointer' onClick={() => deleteData(i._id)}>
                        <FaTrash className=' w-[2rem] h-[2rem] p-2 bg-gray-700 text-white  rounded-full cursor-pointer' />
                      </div>
                      <div className='cursor-pointer' onClick={() => nav(`/work/Taxpay/${i._id}`)}>
                        <MdEdit className=' w-[2rem] h-[2rem] p-2 bg-gray-700 text-white  rounded-full cursor-pointer' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div>

      {
        showPopup ?
          <div className=' fixed top-[35%] left-[50%] bg-white w-[50%] translate-x-[-40%] translat-y-[-50%] p-3'>
            <PopUp setisUpdate={setisUpdate} setisimage={setisimage} setpopupId={setpopupId} setisquestion={setisquestion} setistext={setistext} setrole={setrole} isUpdate={isUpdate} istext={istext} isquestion={isquestion} isimage={isimage} popupId={popupId} setshowPopup={setshowPopup} showPopup={showPopup} role={role} />
          </div>
          : ""
      }

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

export default TaxPay