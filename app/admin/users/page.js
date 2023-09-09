"use client"
import AdminLayout from '@/components/Layout/AdminLayout'
import Layout from '@/components/Layout/Layout'
import User from '@/models/User'
import dbConnect from '@/utils/db'
import { TrashIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            const response = await fetch('/api/user/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json()
                setUsers(data.users)
            } else {
                console.error('Error creating user:', response.statusText);
            }
        } catch (error) {
            toast.error(error.message)
            console.error('Error:', error);
        }
    };
    const approveRequest = async (id) => {
        try {
            const response = await fetch('/api/user/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id })
            });
            if (response.ok) {
                const data = await response.json()
                setUsers(data.users)
                toast.success('Request approved successfully!')
            } else {
                toast.error(response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const deleteRequest = async (id) => {
        console.log('called')
        try {
            const response = await fetch('/api/user/request', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id })
            });
            if (response.ok) {
                const data = await response.json()
                setUsers(data.users)
                toast.success('user deleted successfully!')
            } else {
                toast.error(response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <AdminLayout>
            <section className="px-4 sm:px-12 md:px-16 lg:px-24 my-24 shadow-lg rounded-lg">
                <div className="overflow-x-auto rounded-lg">
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
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white/5 divide-y divide-white/40 rounded-lg">
                            {/* <!-- Example data rows --> */}
                            {users && users.map(user => {
                                return <tr key={user._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.firstName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.lastName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {!user.isApproved && <button
                                            onClick={() => approveRequest(user._id)}
                                            className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 px-2 py-1 rounded-md mx-2 inline-flex items-center md:mb-2 lg:mb-0 text-xs"
                                        >
                                            Approve
                                        </button>}
                                        <button onClick={() => deleteRequest(user._id)}>
                                            <TrashIcon  className='w-6 h-6 cursor-pointer inline-block text-red-400 hover:text-red-500' />
                                        </button>

                                    </td>
                                </tr>
                            })}

                            {/* <!-- Add more rows as needed --> */}
                        </tbody>
                    </table>
                </div>
            </section>
        </AdminLayout>


    )
}

export default Page