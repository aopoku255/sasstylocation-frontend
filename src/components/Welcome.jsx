import React, { useState } from 'react'
import { IoCloudDoneOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import form from '../assets/form.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import file from "../assets/_PUPs Terms.pdf"



const Welcome = () => {

    const shopData = [
        "You will receive our terms and conditions for your review.",
        "You will be contacted after you've received the terms and conditions.",
        "You will then be registered if you agree to our terms.",
        "A representative will visit your location for assessment."
    ]
    return (
        <div className='bg-[#f0ebf8] py-4'>
            <section className=' w-full flex flex-col items-center'>
                <img className='w-[640px] h-[160px] object-contain' src={form} alt="" />
                <div className='bg-[#fff] shadow-lg md:w-[640px] md:mt-4 border-t-[10px] border-[#D63E5A] rounded-md p-8 '>
                    <header>
                        <h3 className='font-[600] text-3xl font-Montserrat'>Earn Extra Cash With Your Shop </h3>
                    </header>
                    <p className='font-Montserrat text-[0.9rem] my-4'>
                        <a href='https://sassty.com/' target='_blank' className='font-bold'>Sassty.com</a> is an online multivendor marketplace, which sells over 10,000 products in <span className='font-bold'>15+ categories.</span> We are looking to partner with shop owners to provide a <span className='font-bold'>seamless service to our customers.</span> We would love you to be part of that seamless service and you will be rewarded for it.
                    </p>
                    <p className='font-Montserrat text-[0.9rem] my-4'>
                        <Link to="/form" className='font-bold underline'>Use your shop</Link> as a pickup point for <span className='font-bold'>Sassty.com</span> and <span className='font-bold'>earn a commission for each package picked by our customers.</span> If interested please read our terms and conditions <a className='font-bold text-[#D63E5A]' href={file} target='_blank'>here</a> kindly complete the form. After the completion of the form:
                    </p>
                    <div className='font-Montserrat w-full text-[0.9rem] md:pl-10 ml-4 pb-6'>
                        {
                            shopData.map(data => {
                                return (
                                    <ul className='list-disc'>
                                        <li>{data}</li>
                                    </ul>
                                )
                            })
                        }

                    </div>
                    {/* <div className='flex  border-t w-full flex-row font-sans text-sm items-center pt-2  justify-between'>
                        <div className='font-Roboto'>
                            <span className='font-bold text-gray-500'>danielboadu594@gmail.com</span>
                            <Link to='' className='text-blue-500 pl-1'>Switch Account</Link>
                        </div>
                        <IoCloudDoneOutline size={26} color='gray' onClick={toggle} className='cursor-pointer'/>
                    </div>
                
                    <div className='flex flex-row items-center'>
                        <MdOutlineMarkEmailRead color='gray' />
                        <span className='text-gray-500 font-Roboto text-sm ml-4'>Not Shared</span>
                    </div> */}


                </div>
            </section>
            <div className='mt-4 flex font-Roboto flex-row items-center md:gap-x-48 px-10 justify-between md:px-80'>
                <Link to='/form'>
                    <button className='bg-white px-4 py-1 shadow-md rounded-md mt-2 text-[#D63E5A]'>Next</button>
                </Link>
                {/* <span>Page 1 of 2</span> */}
                
            </div>
        </div>
    )
}

export default Welcome