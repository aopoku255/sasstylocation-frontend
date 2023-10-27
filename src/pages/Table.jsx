import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '../axios';
import { useReactToPrint } from 'react-to-print';

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Set the number of items per page here

  useEffect(() => {
    axiosInstance.get('/get-users')
      .then((res) => {
        console.log(res);
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Calculate the index of the last item to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item to be displayed
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current page data
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center">
          <div></div>
          <button className="bg-[#e83e8c] p-2 rounded-md text-white mb-5" onClick={handlePrint}>
            Download
          </button>
        </div>
        <table class="min-w-full border rounded-lg overflow-hidden" ref={componentRef}>
          {/* ... Table header ... */}
          <tbody class="text-gray-700">
            {currentData.map(({ name, email, address, contact, number, referral, select, working }, index) => (
              <tr className="divide-y-[1px]" key={index}>
                <td></td>
                <td>{indexOfFirstItem + index + 1}</td>
                <td class="py-5 px-4 ">{name || "N/A"}</td>
                <td class="py-5 px-4 ">{email || "N/A"}</td>
                <td class="py-5 px-4 ">{contact || "N/A"}</td>
                <td class="py-5 px-4 text-center">{working || "N/A"}</td>
                <td class="py-5 px-4 text-center">{number || "N/A"}</td>
                <td class="py-5 px-4 text-center">{select || "N/A"}</td>
                <td class="py-5 px-4 text-center">{referral || "N/A"}</td>
                <td class="py-5 px-4 text-justify">{address || "N/A"}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {data.length > itemsPerPage && (
            <ul className="flex space-x-2">
              {Array(Math.ceil(data.length / itemsPerPage))
                .fill(0)
                .map((_, index) => (
                  <li
                    key={index}
                    className={`${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    } px-4 py-2 cursor-pointer rounded`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
