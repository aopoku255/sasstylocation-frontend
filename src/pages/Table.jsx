import React, { useEffect, useRef, useState } from 'react'
import axiosInstance from '../axios'
import { useReactToPrint } from 'react-to-print'

const Table = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axiosInstance.get('/get-users').then((res) => {
            console.log(res)
            setData(res?.data?.data)
        }).catch((err) => {
            console.log(err)
        })
      }, [])

      const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
  <div className='p-5'>
      <div class="overflow-x-auto">
    <div className='flex justify-between items-center'>
        <div></div>
        <button className='bg-[#e83e8c] p-2 rounded-md text-white mb-5' onClick={handlePrint}>Download</button>
    </div>
  <table class="min-w-full border rounded-lg overflow-hidden" ref={componentRef}>
    <thead class=" text-gray-700">
      <tr className=' divide-y-[1px]'>
        <th></th>
        <th>#</th>
        <th class=" py-2 px-4">Shop Name</th>
        <th class=" py-2 px-4">Email</th>
        <th class=" py-2 px-4">Contact</th>
        <th class=" py-2 px-4">Opening Hours</th>
        <th class=" py-2 px-4">Whatsapp</th>
        <th class=" py-2 px-4">Working Days</th>
        <th class=" py-2 px-4">Referral</th>
        <th class=" py-2 px-4">Address</th>
        <th></th>
        {/* <th class="w-1/4 py-2 px-4">Location (Lat, Lng)</th> */}
      </tr>
    </thead>
    <tbody class="text-gray-700">
      {/* <!-- Example user data, replace with your actual data --> */}
      {
        data.map(({name, email, address, contact, number, referral, select, working}, index) => <tr className=' divide-y-[1px]'>
            <td></td>
            <td>{index + 1}</td>
        <td class="py-5 px-4 ">{name || "N/A"}</td>
        <td class="py-5 px-4 ">{email || "N/A"}</td>
        <td class="py-5 px-4 ">{contact || "N/A"}</td>
        <td class="py-5 px-4 text-center">{working || "N/A"}</td>
        <td class="py-5 px-4 text-center">{number || "N/A"}</td>
        <td class="py-5 px-4 text-center">{select || "N/A"}</td>
        <td class="py-5 px-4 text-center">{referral || "N/A"}</td>
        <td class="py-5 px-4 text-justify">{address || "N/A"}</td>
        <td></td>
      </tr>)
      }
      
      {/* <!-- Add more rows for additional users as needed --> */}
    </tbody>
  </table>
</div>
  </div>

  )
}

export default Table