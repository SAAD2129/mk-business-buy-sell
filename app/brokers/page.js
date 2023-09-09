"use client"
import Layout from '@/components/Layout/Layout'
import Input from '@/components/Utils/Input'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <Layout>
            <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Our Brokers</h1>
                            <div className="h-1 w-20 bg-orange-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"><Input type={'text'} hint={'search broker by name'} /></p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {users?.map(user => {
                            return <div key={user._id} className="xl:w-1/6 md:w-1/3 p-2">
                                <div className="bg-white/10 p-4 rounded-lg">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="h-40 rounded w-full object-fit object-center mb-6" src="https://www.sunbeltcanada.com/wp-content/uploads/2022/04/Azaz-Ahmed.jpg" alt="content" />
                                    <h3 className="tracking-widest text-orange-500 text-xs font-medium title-font">{user.country}</h3>
                                    <h2 className="text-lg text-white font-medium title-font mb-4">{user.firstName} {user.lastName}</h2>
                                    <Link href={`/brokers/${user._id}`} className='text-gray-400 hover:text-white transition-all duration-200'>View Profile</Link>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Page