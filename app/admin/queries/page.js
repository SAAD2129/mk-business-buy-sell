'use client'
import AdminLayout from '@/components/Layout/AdminLayout'
import Loader from '@/components/Loader/Loader';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  const [contacts, setContacts] = React.useState([])
  const [loading, setLoading] = useState(false)
  const getQueries = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setContacts(data.queries)
      } else {
        toast.error(response)
        console.error('Error creating user:', response.statusText);
      }
      setLoading(false)

    } catch (error) {
      console.error('Error:', error);
      setLoading(false)

    }
  };
  useEffect(() => {
    getQueries()
  }, [])
  return (
    <AdminLayout>
      <section className="px-4 sm:px-12 md:px-16 lg:px-24 my-24 shadow-lg rounded-lg">
        {loading ? <Loader/>:contacts.length > 0 ? <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-white/40 rounded-lg">
            <thead className="bg-white/5 ">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Query
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/5 divide-y divide-white/40 rounded-lg">
              {/* <!-- Example data rows --> */}
              {contacts && contacts.map(contact => {
                return <tr key={contact._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contact.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contact.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {contact.message.slice(0, 40)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">

                    <button onClick={() => deleteRequest(contact._id)}>
                      <TrashIcon className='w-6 h-6 cursor-pointer inline-block text-red-400 hover:text-red-500' />
                    </button>
                    <Link href={`/admin/queries/${contact._id}`} >
                      <EyeIcon className='w-6 h-6 cursor-pointer inline-block text-blue-400 hover:text-blue-500 mx-2' />
                    </Link>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div> :<h1 className='text-white text-center'>No Queries Found!</h1> }
      </section>
    </AdminLayout>
  )
}

export default Page