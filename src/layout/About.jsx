import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [Data, setData] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/about`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e))
  }, [])

  const deleteData = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/about/${id}`)
    .then((res) => {
      if (res.status === 200) {
        toast("Deleted  Sucessfully")
        setTimeout(() => {
          setData([])
        }, 2000);
      }
    })
  }
  return (
    <>
      <div className=' font-poppinsFont text-black m-3 '>
        <h1 className='text-right tracking-wider'>About Page Content</h1>
        {
          Data.length === 0 ?
            <button onClick={() => nav('/about/create')} className=' bg-gray-700 text-white h-[2.5rem] w-[8rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Content</button>
            : ""
        }
        <div>
          {Data?.length === 0 ? (
            <div className=' flex justify-center items-center h-[85vh]'>
              <h1 className=' tracking-wider'>No About Page Content Found Add Some</h1>
            </div>
          ) : (
            <div>
              {
                Data?.map((i, index) => {
                  console.log(i.image)
                  return (
                    <div key={index} className=' tracking-wider mt-6'>
                      <img className=' bg-cover w-[100%] h-[70vh]  mb-6' src={`${i.image}`} alt="none" />
                      <p className=' text-[#191919] text-sm'>{i.paragraph}</p>
                      <div className=' flex justify-end  items-center gap-3 mt-8'>

                        <div className=' w-[2.6rem] h-[2.6rem] flex justify-center items-center bg-gray-700 text-white  rounded-full cursor-pointer' onClick={() => deleteData(i._id)}>
                          <FaTrash className=' w-[1rem] h-[1rem]' />
                        </div>
                        <button onClick={() => nav(`/about/${i._id}`)} className=' bg-gray-700 h-[2.5rem] w-[10rem] rounded-md text-sm  text-white tracking-wider hover:bg-blue-600 mb-2'>Update Content</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )}
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

export default About