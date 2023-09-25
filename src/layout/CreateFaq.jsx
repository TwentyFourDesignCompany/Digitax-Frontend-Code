import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateFaq = () => {
    const [Data, setData] = useState({ title: "", question: "", answer: "" });
    const nav = useNavigate();

    const onChangeInput = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const updateData = (e) => {
        e.preventDefault();
        if (!Data.title || !Data.answer || !Data.question){
            toast.error("All Field Are Required")
        }
        else{
            axios.post(`https://weak-blue-bison-tutu.cyclic.cloud/api/v1/faq`, Data)
                .then((res) => {
                    if (res.status === 200) {
                        toast("Posted Sucessfully")
                        setTimeout(() => {
                            nav('/faq')
                        }, 2000);
                    }
                })
        }
    };

    return (
        <div className='m-3'>

            <div>
                <button onClick={updateData} className='bg-gray-700 text-white h-[2.8rem] w-[9rem] rounded-md text-sm hover:bg-blue-600 mb-4'>
                    Post Content
                </button>
            </div>
            <input type="text" onChange={onChangeInput} name='question' placeholder='Question....?' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
            <input type="text" onChange={onChangeInput} name='answer' placeholder='Answer...' className='mb-4 w-[100%] h-[2.5rem] p-2 outline-none border-solid border-2 rounded-md border-slate-400' />
            
            <div className=' flex items-center gap-5 flex-wrap mb-4'>

                <label htmlFor="IOSS" className='flex items-center gap-2 '>
                    <input
                        type="checkbox"
                        id="IOSS"
                        name="title"
                        value="IOSS"
                        checked={Data.title === "IOSS"}
                        onChange={onChangeInput}
                        className="rounded border-black-300 w-[1.2rem] h-[1.2rem]"
                    />
                    <p> IOSS</p>
                </label>

                <label htmlFor="Fiscal Representation" className='flex items-center gap-2 '>
                    <input
                        type="checkbox"
                        id="FiscalRepresentation"
                        name="title"
                        value="Fiscal Representation"
                        checked={Data.title === "Fiscal Representation"}
                        onChange={onChangeInput}
                        className="rounded border-black-300 w-[1.2rem] h-[1.2rem]"
                    />
                    <p>Fiscal Representation</p>
                </label>

                <label htmlFor="Taxpay" className='flex items-center gap-2 '>
                    <input
                        type="checkbox"
                        id="Taxpay"
                        name="title"
                        value="Taxpay"
                        checked={Data.title === "Taxpay"}
                        onChange={onChangeInput}
                        className="rounded border-black-300 w-[1.2rem] h-[1.2rem]"
                    />
                    <p>Taxpay</p>
                </label>
                
                <label htmlFor="Partnerships" className='flex items-center gap-2 '>
                    <input
                        type="checkbox"
                        id="Partnerships"
                        name="title"
                        value="Partnerships"
                        checked={Data.title === "Partnerships"}
                        onChange={onChangeInput}
                        className="rounded border-black-300 w-[1.2rem] h-[1.2rem]"
                    />
                    <p>Partnerships</p>
                </label>
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

export default CreateFaq;
