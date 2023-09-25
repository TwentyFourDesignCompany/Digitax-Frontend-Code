import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateContact = () => {

  const [Data, setData] = useState({
    paragraph1: '',
    heading: '',
    paragraph2: '',
    email: "",
    phone: "",
    address: "",
  });
  const nav = useNavigate()
  const onChangeInput = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const updateData = (e) => {
    e.preventDefault();
    if (!Data.paragraph1 || !Data.paragraph2 || !Data.heading || !Data.email|| !Data.paragraph1 ||!Data.address){
      toast.error("All Field Are Required")
    }
    else{
      axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/contact`, Data).then((res) => {
        if (res.status === 200) {
          toast('Addedd Successfully');
          setTimeout(() => {
            nav('/contact');
          }, 2000);
        }
      });
    }
  };

  return (
    <div className=' m-3'>
      <div className='mb-10'>
        <button onClick={updateData} className=' bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600'>Create Content</button>
      </div>

      <div className=' mt-10'>
        <input onChange={onChangeInput} name='paragraph1' type="text" placeholder='Enter Header Paragraph' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input onChange={onChangeInput} name='heading' type="text" placeholder='Enter Contact Heading' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input onChange={onChangeInput} name='paragraph2' type="text" placeholder='Enter Contact Paragraph' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input onChange={onChangeInput} name='email' type="text" placeholder='Enter Email' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input onChange={onChangeInput} name='phone' type="text" placeholder='Enter Phone Part' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
        <input onChange={onChangeInput} name='address' type="text" placeholder='Enter Address' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
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

export default CreateContact