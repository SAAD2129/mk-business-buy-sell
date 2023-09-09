"use client"
import Input from '@/components/Utils/Input'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'
export const metadata = {
  title: 'Register',
  description: 'Register Page',
}
const Page = () => {
  const [userData, setUserData] = React.useState({ firstName: '', lastName: '', password: '', country: '', streetAddress: '', city: '', zipCode: '', state: '', email: '', about: '' })
  // client.js
  const createUser = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(response)
      if (response.ok) {
        const newUser = await response.json();
        toast.info('account request sent successfully, please wait for approval')
        setUserData({ firstName: '', lastName: '', password: '', country: '', streetAddress: '', city: '', zipCode: '', state: '', email: '', about: '' })
      } else {
        toast.error(response)
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return <div className="px-4 sm:px-12 md:px-16 lg:px-24 flex min-h-full flex-col justify-center py-12">

    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Link href={'/'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-10 w-auto" src="/mkorange.png" alt="Your Company" />
      </Link>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Register for an account</h2>
    </div>
    <form onSubmit={createUser}>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">enter all required information correctly.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-white">First name</label>
              <div className="mt-2">
                <Input type="text" id="firstName" hint={'John'} handler={handleChange} value={userData.firstName} />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white">Last name</label>
              <div className="mt-2">
                <Input type="text" id="lastName" hint={'Boe'} handler={handleChange} value={userData.lastName} />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
              <div className="mt-2">
                <Input id="email" type="email" hint={'johnboe@gmail.com'} handler={handleChange} value={userData.email} />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
              <div className="mt-2">
                <Input id="password" type="password" hint={'*******'} handler={handleChange} value={userData.password} />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">Country</label>
              <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700">
                  <option className='bg-black' value={'u'}>United States</option>
                  <option className='bg-black' value={'u'}>Canada</option>
                  <option className='bg-black' value={'u'}>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-white">Street address</label>
              <div className="mt-2">
                <Input type="text" id="streetAddress" hint={'Street Address'} handler={handleChange} value={userData.streetAddress} />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">City</label>
              <div className="mt-2">
                <Input type="text" hint={'city'} id="city" handler={handleChange} value={userData.city} />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-white">State / Province</label>
              <div className="mt-2">
                <Input type="text" id="state" hint={'state/province'} handler={handleChange} value={userData.state} />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zipCode" className="block text-sm font-medium leading-6 text-white">ZIP / Postal code</label>
              <div className="mt-2">
                <Input type="text" id="zipCode" hint={'67130'} handler={handleChange} value={userData.zipCode} />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">About</label>
              <div className="mt-2">
                <textarea id="about" name="about" rows="3" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700" onChange={handleChange} value={userData.about}></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">Write a few sentences about yourself.</p>
            </div>

          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-gray-500">
        already a member?&nbsp;&nbsp;&nbsp;
        <Link href="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign in Here</Link>
      </p>
      <button className="w-1/4 text-white py-4 inline-block bg-orange-500 border-0 tracking-widest uppercase font-bold px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Sign up</button>
    </form>
  </div>
}

export default Page