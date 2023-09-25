import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEdit } from 'react-icons/md';

const Faq = () => {
  const [groupedData, setGroupedData] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = () => {
    const endpoints = [
      `https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/title/IOSS`,
      `https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/title/Fiscal Representation`,
      `https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/title/Taxpay`,
      `https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/title/Partnerships`
    ];

    const fetchPromises = endpoints.map(endpoint => axios.get(endpoint));

    Promise.allSettled(fetchPromises)
      .then(results => {
        const data = results.reduce((acc, result, index) => {
          if (result.status === "fulfilled") {
            const response = result.value;
            const title = response.data[0]?.title;
            if (title) {
              acc[title] = response.data.map((item, index) => ({ ...item, index }));
            }
          } else {
          }
          return acc;
        }, {});


        setGroupedData(data);
      })
      .catch((error) => {
        setGroupedData({});
      });
  };


  const deleteData = (id) => {
    axios.delete(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast("Deleted Successfully");
          fetchData();
        }
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className='font-poppinsFont text-black m-3 h-[100vh] overflow-scroll'>
      <h1 className='text-right tracking-wider'>FAQ Page Content</h1>
      <button onClick={() => nav('/faq/create')} className='bg-gray-700 text-white h-[2.5rem] w-[8rem] rounded-md text-sm hover:bg-blue-600 mb-4'>
        Add Content
      </button>
      <div>
        {Object.keys(groupedData).length === 0 ? (
          <div className='flex justify-center items-center h-[85vh]'>
            <h1 className='tracking-wider'>No FAQS Content Found Add Some</h1>
          </div>
        ) : (
          <div className='mt-10'>
            {Object.keys(groupedData).map((title) => (
              <div key={title} className='mb-4'>
                <h1 className='text-xl sm:text-3xl mb-3'>{title}</h1>
                {groupedData[title].map((item) => (
                  <React.Fragment key={item.index}>
                    <h2 className='text-lg sm:text-xl mb-1'>Question: {item.question}</h2>
                    <p className='text-lg sm:text-xl mb-4'>Answer: {item.answer}</p>
                    <div className='flex gap-5 items-center mb-4'>
                      <MdEdit onClick={() => nav(`/faq/${item.title}/${item._id}`)} className='w-[2rem] h-[2rem] bg-sky-400 rounded-md p-2 cursor-pointer' />
                      <FaTrash onClick={() => deleteData(item._id)} className='w-[2rem] h-[2rem] bg-sky-400 rounded-md p-2 cursor-pointer' />
                    </div>
                    <hr className='border-solid border-[0.1px] border-slate-500 mb-1' />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default Faq;
