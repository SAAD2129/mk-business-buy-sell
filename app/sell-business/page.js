'use client'
import Input from '@/components/Utils/Input'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
export const metadata = {
    title: 'Sell A Business',
    description: 'Home Page',
}
const Page = () => {
    const [businessDetails, setBusinessDetails] = useState({
        businessID: '', yearEstablished: '', location: '', businessCategory: '', financing: '', status: '', description: '', askingPrice: '', revenue: '', sde: '', ebitda: '', downPayment: '', ffe: '', occupancyCost: '', inventory: '',
    })
    const createBusiness = async (e) => {

        e.preventDefault()
        const { businessID, yearEstablished, location, businessCategory, financing, status, description, askingPrice, revenue, sde, } = businessDetails
        if (!businessID || !yearEstablished || !location || !businessCategory || !financing || !status || !description || !askingPrice || !revenue || !sde){
            // console.log(businessID, yearEstablished, location, businessCategory, financing, status, description, askingPrice, revenue, sde, )
            return toast.error('Please fill all required fields')
            // return;
        }
        try {

            const response = await fetch('/api/business/sell', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(businessDetails),
            });
            console.log(response)
            if (response.ok) {
                const data = await response.json();
                toast.info(data.message)
                setBusinessDetails({
                    businessID: '', yearEstablished: '', location: '', businessCategory: '', financing: '', status: '', description: '', askingPrice: '', revenue: '', sde: '', ebitda: '', downPayment: '', ffe: '', occupancyCost: '', inventory: '',
                })
            } else {
                toast.error(response.statusText)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setBusinessDetails({ ...businessDetails, [e.target.name]: e.target.value })
    }
    return (<div className="px-4 sm:px-12 md:px-16 lg:px-24 flex min-h-full flex-col justify-center py-12">
        <Head>
            <title>Sell A Business</title>
        </Head>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href={'/'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="mx-auto h-10 w-auto" src="/mkorange.png" alt="Your Company" />
            </Link>
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white my-4 ">Sell A Business</h2>
        </div>
        <form onSubmit={createBusiness}>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-white uppercase">Business Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">Enter all required information correctly with <span className='text-orange-500'>*</span>.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-white">Business Id <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <Input type="text" id="businessID" hint={'OTT1437xc'} value={businessDetails.businessID} handler={handleChange} />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white">Year Established <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <Input type="year" id="yearEstablished" hint={'Boe'} value={businessDetails.yearEstablished} handler={handleChange} />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="businessCategory" className="block text-sm font-medium leading-6 text-white">Business Category <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <select id="businessCategory" value={businessDetails.businessCategory} onChange={handleChange} name="businessCategory" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={''} selected>--Select Category--</option>
                                    <option className='bg-black' value={'finance'}>Finance</option>
                                    <option className='bg-black' value={'it'}>It</option>
                                    <option className='bg-black' value={'food'}>Food</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-white">Location <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <select id="location" name="location" value={businessDetails.location} onChange={handleChange} autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={''} selected>--Select Country--</option>

                                    <option className='bg-black' value={'us'}>United States</option>
                                    <option className='bg-black' value={'ca'}>Canada</option>
                                    <option className='bg-black' value={'mx'}>Mexico</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Financing" className="block text-sm font-medium leading-6 text-white">Financing <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <select id="financing" value={businessDetails.financing} onChange={handleChange} name="financing" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={''} selected>--Select Financing--</option>
                                    <option className='bg-black' value={'available'}>Available</option>
                                    <option className='bg-black' value={'un available'}>Un Available</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="status" className="block text-sm font-medium leading-6 text-white">Status <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <select id="status" value={businessDetails.status} onChange={handleChange} name="status" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                                    <option className='bg-black' value={''} selected>--Select Status--</option>
                                    <option className='bg-black' value={'available'}>Available</option>
                                    <option className='bg-black' value={'un available'}>Un Available</option>
                                </select>
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">Description <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <textarea id="description" name="description" rows="3" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700" onChange={handleChange} value={businessDetails.description} ></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">Write business details.</p>
                        </div>

                    </div>
                </div>
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-white uppercase">Financial Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">enter all required information correctly.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="askingPrice" className="block text-sm font-medium leading-6 text-white">Asking Price <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <Input type="number" min={'0'} id="askingPrice" hint={'14800092'} handler={handleChange} value={businessDetails.askingPrice} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">price in dollars($)</p>

                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="revenue" className="block text-sm font-medium leading-6 text-white">Gross Revenue <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <Input type="number" min={'0'} id="revenue" hint={'148329'} handler={handleChange} value={businessDetails.revenue} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">price in dollars($)</p>

                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="sde" className="block text-sm font-medium leading-6 text-white">SDE <span className='text-orange-500'>*</span></label>
                            <div className="mt-2">
                                <Input id="sde" type="number" min={'0'} hint={'4328532'} handler={handleChange} value={businessDetails.sde} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">price in dollars($)</p>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="ebitda" className="block text-sm font-medium leading-6 text-white">EBITDA</label>
                            <div className="mt-2">
                                <Input id="ebitda" type="number" min={'0'} hint={'432852'} handler={handleChange} value={businessDetails.ebitda} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">price in dollars($)</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="downPayment" className="block text-sm font-medium leading-6 text-white">Down Payment</label>
                            <div className="mt-2">
                                <Input type="text" id="downPayment" hint={'523523'} handler={handleChange} value={businessDetails.downPayment} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">leave empty if want to sent on request.</p>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="ffe" className="block text-sm font-medium leading-6 text-white">FF&E (included)</label>
                            <div className="mt-2">
                                <Input type="text" hint={'FF & E'} id="ffe" handler={handleChange} value={businessDetails.ffe} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">leave empty if want to sent on request.</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="occupancyCost" className="block text-sm font-medium leading-6 text-white">Occupancy Cost</label>
                            <div className="mt-2">
                                <Input type="number" min={'0'} id="occupancyCost" hint={'43235324'} handler={handleChange} value={businessDetails.occupancyCost} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">leave empty if want to sent on request.</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="inventory" className="block text-sm font-medium leading-6 text-white">Inventory</label>
                            <div className="mt-2">
                                <Input type="text" id="inventory" hint={'inventory'} handler={handleChange} value={businessDetails.inventory} />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-400">leave empty if want to sent on request.</p>

                        </div>

                    </div>
                </div>
            </div>
            <button className="w-1/4 text-white py-4 inline-block bg-orange-500 border-0 tracking-widest uppercase font-bold px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Post</button>
        </form>
    </div>
    )
}

export default Page