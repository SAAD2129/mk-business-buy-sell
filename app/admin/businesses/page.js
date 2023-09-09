'use client'
import AdminLayout from '@/components/Layout/AdminLayout';
import Loader from '@/components/Loader/Loader';
import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  const [businesses, setBusinesses] = useState([])
  const [loading, setLoading] = useState(false)
  const getBusinesses = async (id) => {

    try {
      setLoading(true)
      const response = await fetch('/api/business/sell', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json()
        setBusinesses(data.businesses)
      } else {
        toast.error(response.statusText)
      }
      setLoading(false)

    } catch (error) {
      toast.error(error.message)
      console.error('Error:', error);
      setLoading(false)

    }
  };
  const approveRequest = async (id) => {
    try {
      setLoading(true)

      const response = await fetch('/api/business/sell', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        const data = await response.json()
        setBusinesses(data.businesses)
        toast.success('Request approved successfully!')
      } else {
        toast.error(response.statusText)
      }
      setLoading(false)

    } catch (error) {
      console.error('Error:', error);
      setLoading(false)

    }
  };
  const deleteRequest = async (id) => {
    try {
      setLoading(true)
      const response = await fetch('/api/business/sell', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        const data = await response.json()
        setBusinesses(data.businesses)
        toast.success('Request deleted successfully!')

      } else {
        toast.error(response.statusText)
      }
      setLoading(false)
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getBusinesses()
  }, [])
  return (
    <AdminLayout>
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 my-24 shadow-lg rounded-lg">
        {!loading ? businesses.length > 0 ? <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-white/40 rounded-lg">
            <thead className="bg-white/5 ">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Business Id
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Asking
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  G Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/5 divide-y divide-white/40 rounded-lg">
              {/* <!-- Example data rows --> */}
              {businesses && businesses.map(business => {
                return <tr key={business._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {business.businessID}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {business.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {business.askingPrice} $
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {business.revenue} $
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {!business.isApproved && <button
                      onClick={() => approveRequest(business._id)}
                      className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 px-2 py-1 rounded-md mx-2 inline-flex items-center md:mb-2 lg:mb-0 text-xs"
                    >
                      Approve
                    </button>}
                    <TrashIcon onClick={() => deleteRequest(business._id)} className='w-6 h-6 cursor-pointer inline-block text-red-400 hover:text-red-500' />
                  </td>
                </tr>
              })}

              {/* <!-- Add more rows as needed --> */}
            </tbody>
          </table>
        </div> : <h1 className='text-white text-center'>No Requests Found!</h1> : <Loader />}
      </section>
    </AdminLayout>
  )
}

export default Page