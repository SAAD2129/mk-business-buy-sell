'use client'
import AdminLayout from '@/components/Layout/AdminLayout';
import Layout from '@/components/Layout/Layout';
import Loader from '@/components/Loader/Loader';
import Input from '@/components/Utils/Input';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [businesses, setBusinesses] = useState([])
    const [loading, setLoading] = useState(false)
    const getBusinesses = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/business/sell?q=isApproved', {
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
    useEffect(() => {
        getBusinesses()
    }, [])
    return (
        <Layout title={'Businesses for Sale'}>
            <section className="px-4 sm:px-12 md:px-16 lg:px-24  my-12  text-white body-font">
                {loading ? <Loader /> : businesses.length > 0 ? <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">GROWN IDEAS</h2>
                        <h1 class="sm:text-3xl text-3xl font-bold title-font mb-4 text-white">Buy the Best Business that suits you</h1>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-16">
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">Status</label>
                            <div className="mt-2">
                                <select id="country" name="country" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={'u'}>Available</option>
                                    <option className='bg-black' value={'u'}>Un Available</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">Category</label>
                            <div className="mt-2">
                                <select id="country" name="country" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={'u'}>Finance</option>
                                    <option className='bg-black' value={'u'}>IT</option>
                                    <option className='bg-black' value={'u'}>Food</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">Location</label>
                            <div className="mt-2">
                                <select id="country" name="country" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={'u'}>United States</option>
                                    <option className='bg-black' value={'u'}>Canada</option>
                                    <option className='bg-black' value={'u'}>Mexico</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        {businesses.map(b => {
                            if (b.isApproved)
                                return <div key={b._id} class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 bg-white/5 rounded-xl border-opacity-60">
                                    <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">{b.businessID}</h2>
                                    <p class="leading-relaxed text-base mb-4">{b.description.slice(0, 70)}...</p>
                                    <p className="my-1">
                                        Ask <span className='text-gray-400'>{b.askingPrice}$
                                        </span>
                                    </p>
                                    <p className="my-1">
                                        Revenue <span className='text-gray-400'>{b.revenue}$
                                        </span>
                                    </p>
                                    <Link href={`/businesses/${b._id}`} class="text-orange-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                        })}

                    </div>
                </div> : <h1 className='text-white text-center'>No Businesses for Sale</h1>}
            </section>
        </Layout>

    )

}

export default Page