import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const [Data, setData] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        axios.get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/home`)
            .then((res) => setData(res.data))
            .catch((e) => {})
    }, [nav])

    const deleteData = (id) => {
        axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/home/${id}`)
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
                <h1 className='text-right tracking-wider'>Home Page Content</h1>
                {
                    Data.length===0?
                    <button onClick={() => nav('/home/create')} className=' bg-gray-700 text-white h-[2.5rem] w-[8rem] rounded-md text-sm hover:bg-blue-600 mb-4'>Add Content</button>
                    :""
                }
                <div>
                    {Data?.length === 0 ? (
                        <div className=' flex justify-center items-center h-[85vh]'>
                            <h1 className=' tracking-wider'>No Home Page Content Found Add Some</h1>
                        </div>
                    ) : (
                        <div>
                            {
                                Data?.map((i, index) => {
                                    return (
                                        <div key={index} className=' tracking-wider'>

                                            <div className=' text-white bg-[#EB595C] p-8 w-[100%]  sm:w-[50vw]  overflow-scroll flex justify-center items-start flex-col'>
                                                <h1 className=' mb-4 text-2xl'>{i?.title1}</h1>
                                                <h2 className=' mb-4 font-light'>{i.vate}</h2>
                                                <h3 className=' mb-4'>{i.paragraph1}</h3>
                                            </div>

                                            <h1 className=' mb-4 mt-4 text-2xl text-[#515066] tracking-wider'>{i.affilate}</h1>
                                            <h2 className=' mb-4 text-base text-[#515066]'>{i.title2}</h2>
                                            <p className=' mb-4 text-sm text-gray-500'>{i.paragraph2}</p>

                                            <div className=' flex justify-end  items-center gap-3'>

                                                <div className=' w-[2.6rem] h-[2.6rem] flex justify-center items-center bg-gray-700 text-white  rounded-full cursor-pointer'onClick={()=>deleteData(i._id)}>
                                                    <FaTrash className=' w-[1rem] h-[1rem]' />
                                                </div>
                                                <button onClick={() => nav(`/home/${i._id}`)} className=' bg-gray-700 h-[2.5rem] w-[10rem] rounded-md text-sm  text-white tracking-wider hover:bg-blue-600 mb-2'>Update Content</button>
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

export default Home