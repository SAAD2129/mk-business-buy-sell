"use client"
import AdminLayout from '@/components/Layout/AdminLayout'
import Layout from '@/components/Layout/Layout'
import User from '@/models/User'
import dbConnect from '@/utils/db'
import { TrashIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
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

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <AdminLayout>
            <Head>
                <title>Your  Title</title>
            </Head>

            <section className="px-4 sm:px-12 md:px-16 lg:px-24 my-24 text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Realistic Data</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Here is what we got for you.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">2.7K</h2>
                                <p className="leading-relaxed text-gray-400">Businesses</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">1.3K</h2>
                                <p className="leading-relaxed text-gray-400">Users</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">74</h2>
                                <p className="leading-relaxed text-gray-400">Queries</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">46</h2>
                                <p className="leading-relaxed text-gray-400">Admins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>


    )
}

export default Page