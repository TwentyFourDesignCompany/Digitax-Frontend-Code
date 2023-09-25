import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [Data, setData] = useState([])

  const nav = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = () => {
    axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/contact`)
      .then((res) => setData(res.data))
      .catch((e) => { console.warn("no data found") });
  };

  console.log(Data)

  const deleteData = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1}/contact/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted  Sucessfully")
          setTimeout(() => {
            setData((prevData) => prevData.filter((item) => item._id !== id));
          }, 2000);
        }
      })
  }

  return (
    <>
      <div className=' font-poppinsFont text-black m-3 h-[100vh] overflow-scroll '>
        <h1 className='text-right tracking-wider'>Contact Page Content</h1>
        {
          Data.length === 0 ?
            <button onClick={() => nav('/contact/create')} className=' bg-gray-700 text-white h-[2.5rem] w-[8rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Content</button>
            : ""
        }
        <div>
          {Data?.length === 0 ? (
            <div className=' flex justify-center items-center h-[85vh]'>
              <h1 className=' tracking-wider'>No Contact Page Content Found Add Some</h1>
            </div>
          ) : (
            <div>
              {
                Data?.map((i, index) => {
                  return (
                    <div>
                      <input type="text" defaultValue={i.paragraph1} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
                      <input type="text" defaultValue={i.heading} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
                      <input type="text" defaultValue={i.paragraph2} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
                      <input type="text" defaultValue={i.email} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
                      <input type="text" defaultValue={i.phone} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
                      <input type="text" defaultValue={i.address} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />

                      <div className=' flex justify-end  items-center gap-3'>
                        <div className=' w-[2.6rem] h-[2.6rem] flex justify-center items-center bg-gray-700 text-white  rounded-full cursor-pointer' onClick={() => deleteData(i._id)}>
                          <FaTrash className=' w-[1rem] h-[1rem]' />
                        </div>
                        <button onClick={() => nav(`/contact/${i._id}`)} className=' bg-gray-700 h-[2.5rem] w-[10rem] rounded-md text-sm  text-white tracking-wider hover:bg-blue-600 mb-2'>Update Content</button>
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

export default Contact