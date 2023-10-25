// src/Form.js
import React, { useState } from 'react';
import LocationModal from './LocationModal';
// import axios from 'axios';
import Toastify from 'toastify-js'
import axios from '../axios';
import axiosInstance from '../axios';

const Form = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [number, setNumber] = useState('');
  const [select, setSelect] = useState(null);
  const [address, setAddress] = useState('');
  const [working, setWorking] = useState('');
  const [referral, setReferral] = useState('');
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const handleLocationButtonClick = () => {
    // Open the location modal
    setLocationModalOpen(true);
  };

  const handleLocationModalClose = () => {
    // Close the location modal
    setLocationModalOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Get user's location (latitude and longitude) here
    try {
      const position = await getCurrentLocation();
      // Send user information and location data to your server
      const userData = { name, email, address, number, referral, working, select, contact, location: position };
      const response = axiosInstance.post('/post-user', { ...userData }).then((res) => {
        if (res?.data?.message) {
          setName('');
          setLocation('');
          setContact('');
          setNumber('');
          setAddress('');
          setContact('');
          setWorking('');
          setReferral('');
          Toastify({
            text: res.data.message,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "info",
          }).showToast();
        }
      }).catch((err) => {
        console.log(err)
        if (err?.response?.status) {
          Toastify({
            text: err.response.data.message,
            backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
            className: "info",
          }).showToast();
        }
      });

      console.log('User Data:', userData);
    } catch (error) {
      // Handle error 
      console.error('Error getting location:', error);
      // Open the location modal if geolocation is denied or not available
      setLocationModalOpen(true);
    }
  };

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Latitude:', latitude);
            resolve({ lat: latitude, lng: longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject('Geolocation is not available');
      }
    });
  };



  return (
    <div>
      {/* <h1 className='text-xl'>Earn Extra Cash With Your Shop</h1> */}
      <p className='text-center text-xs text-gray-500 my-2'><span className='font-bold text-[#e83e8c]'>NOTE: </span>We collect your location information in order to mark it on Google Maps, making it simpler for customers to find your shop.</p>
      <form onSubmit={handleFormSubmit} >
        <div className='mt-2 md:grid md:grid-cols-2 md:gap-x-4'>

        
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Shop Owner's Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder='Sassty'
              className="border rounded-md p-2 w-full focus:outline-[#e83e8c] focus:border-[#e83e8c]"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder='email'
              className="border rounded-md p-2 w-full focus:outline-[#e83e8c] focus:border-[#e83e8c]"
              value={email}
              // required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-bold">
              WhatsApp Number :
            </label>
            <input
              type="text"
              id="contact"
              className="border  rounded-md p-2 w-full focus:outline-[#e83e8c] focus:border-[#e83e8c]"
              value={contact}
              placeholder='233558168135'
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700 font-bold">
              Call Number:
            </label>
            <input
              type="text"
              id="number"
              className="border rounded-md p-2 w-full focus:outline-[#e83e8c]"
              value={number}
              aria-invalid="true"
              placeholder='233558168135'
              required
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

    
        <div className="mb-4">
          <div className='flex flex-row items-center'>
            <label htmlFor="select" className="block text-gray-700 font-bold">
              Working Days
            </label>
            <span className='text-gray-700'></span>
          </div>
          <select name="select" id="select" className="border rounded-md p-2 cursor-pointer w-full focus:outline-[#e83e8c]" onChange={(e) => setSelect(e.target.value)}>
            <option value={select} className='text-gray-700' disabled>Choose working days</option>
            <option value={select} className='text-gray-700'>Monday - Friday</option>
            <option value={select} className='text-gray-700'>Monday - Saturday</option>
            <option value={select} className='text-gray-700'>Monday - Sunday</option>

          </select>

        </div>
        <div className="mb-4">
          <div className='flex flex-row'>
            <label htmlFor="working" className="block text-gray-700 font-bold">
              Working Hours

            </label>
            <span className='text-gray-700'></span>
          </div>
          {/* <span className='text-gray-700'>Eg.(8am - 7pm)</span> */}
          <input
            type="text"
            id="working"
            className="border rounded-md p-2 w-full focus:outline-[#e83e8c]"
            value={working}
            placeholder='8am - 7pm'
            required
            onChange={(e) => setWorking(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className='flex flex-col'>
            <label htmlFor="referral" className="  text-gray-700 font-bold">
              Referral Code:
            </label>
            {/* <span className='text-gray-700'>(Referred by someone?Ask for their code, if not, leave it blank)</span> */}
          </div>
          <input
            type="text"
            id="referral"
            className="border rounded-md p-2 w-full focus:outline-[#e83e8c]"
            value={referral}
            aria-invalid="true"
            placeholder='Referred by someone?Ask for their code, if not, leave it blank'
        
            onChange={(e) => setReferral(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold">
            Area:
          </label>
          <textarea
            id="address"
            className="border rounded-md p-2 w-full focus:outline-[#e83e8c] h-11"
            value={address}
            placeholder='eg. Weija'
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#e83e8c] text-white rounded-md hover:bg-[#c63478]"
        >

          Submit
        </button>
      </form>
      <LocationModal isOpen={locationModalOpen} onRequestClose={handleLocationModalClose} />
    </div>
  );
};

export default Form;
