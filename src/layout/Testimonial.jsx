import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MdEdit } from 'react-icons/md'

const Testimonial = () => {
  const [Data, setData] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/testimonial`)
      .then((res) => setData(res.data))
      .catch((e) => { console.warn("no data found") });
  };

  const deleteData = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/testimonial/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted Successfully");
          setData((prevData) => prevData.filter(item => item._id !== id));
        }
      });
  };

  return (
    <div>

      <div className=' font-poppinsFont text-black m-3 '>
        <h1 className='text-right tracking-wider'>Testimonial Page Content</h1>
        <button onClick={() => nav('/testimonial/create')} className=' bg-gray-700 text-white h-[2.5rem] w-[8rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Content</button>

        <div>
          {Data?.length === 0 ? (
            <div className=' flex justify-center items-center h-[85vh]'>
              <h1 className=' tracking-wider'>No Testimonial Content Found Add Some</h1>
            </div>
          ) : (
            <div className=' flex items-center gap-6 overflow-scroll mt-10 relative'>
              {
                Data.map((i, index) => {
                  return (
                    <div key={index} className=' flex items-center justify-center flex-col p-3 w-[25rem] h-[26rem] overflow-scroll shadow-shadow1 bg-slate-400 flex-shrink-0'>
                      <div className=''>
                        <img src={`${i.image}`} className=' mb-4 w-[10rem] h-[10rem] rounded-full bg-center bg-contain' alt="" />
                      </div>
                      <p className=' mb-4 text-[#00184A]'>{i.message}</p>
                      <p className='text-[#FE4E54] mb-4'>{i.name}</p>

                      <div className='flex items-center gap-[19rem]'>

                        <div className='cursor-pointer' onClick={() => deleteData(i._id)}>
                          <FaTrash className=' w-[2rem] h-[2rem] p-2 bg-gray-700 text-white  rounded-full cursor-pointer' />
                        </div>
                        <div className='cursor-pointer' onClick={() => nav(`/testimonial/${i._id}`)}>
                          <MdEdit className=' w-[2rem] h-[2rem] p-2 bg-gray-700 text-white  rounded-full cursor-pointer' />
                        </div>
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
    </div>
  )
}

export default Testimonial