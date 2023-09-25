import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateContact = () => {
  const { id } = useParams();
  const [Data, setData] = useState({
    paragraph1: '',
    heading: '',
    paragraph2: '',
    email: '',
    phone: '',
    address: '',
  });

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/contact/${id}`)
      .then((res) => {
        setData({
          paragraph1: res?.data?.paragraph1,
          heading: res?.data?.heading,
          paragraph2: res?.data?.paragraph1,
          email: res?.data?.email,
          phone: res?.data?.phone,
          address: res?.data?.address,
        });
      })
      .catch((e) => console.log(e));
  }, [id]);

  const onChangeInput = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const updateData = (e) => {
    e.preventDefault();
    axios.put(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/contact/${id}`, Data).then((res) => {
      if (res.status === 200) {
        toast('Updated Successfully');
        setTimeout(() => {
          nav('/contact');
        }, 2000);
      }
    });
  };


  return (
    <div className="m-3">
      <div>
        <button
          onClick={updateData}
          className="bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4"
        >
          Update Content
        </button>
      </div>

      <div className="flex flex-col mt-10">


        <div className=' mt-10'>
          <input onChange={onChangeInput} name='paragraph1' type="text" defaultValue={Data.paragraph1} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
          <input onChange={onChangeInput} name='heading' type="text" defaultValue={Data.heading} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
          <input onChange={onChangeInput} name='paragraph2' type="text" defaultValue={Data.paragraph2} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
          <input onChange={onChangeInput} name='email' type="text" defaultValue={Data.email} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
          <input onChange={onChangeInput} name='phone' type="text" defaultValue={Data.phone} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
          <input onChange={onChangeInput} name='address' type="text" defaultValue={Data.address} className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
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
  );
};

export default UpdateContact;

