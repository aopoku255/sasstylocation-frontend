import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"

const Home = () => {
  return (
    <>
    <div className="container mx-auto p-4  overflow-y-scroll flex justify-center items-center">
   <div className="w-full max-w-2xl">
     <div className="bg-white rounded-lg shadow-lg p-4 shadow-[#e83e8d55]">
       {/* <h1 className="text-2xl font-semibold mb-4">User Information Form</h1> */}
       <img src={logo} alt="" className='h-12 mx-auto' />
       {/* Your Form component goes here */}
       <Form />
     </div>
     {/* <Link to="/users" className='bg-purple-500 w-full rounded py-2 my-4 block text-center text-white'>View map</Link> */}
   </div>
 </div>
</> 
  )
}

export default Home