"use client"
import Input from '@/components/Utils/Input'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

const Page = () => {
  const [userData, setUserData] = React.useState({ password: '', email: '' })
  const loginUser = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        toast.success('login successfully!')
        setUserData({ password: '', email: '' })
      } else {
        toast.error(response.message)
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      toast.error(error.message)
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <title>Login</title>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Link href={'/'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-10 w-auto" src="/mkorange.png" alt="Your Company" />
      </Link>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={loginUser} className="space-y-6" action="#" method="POST">
        <div>
          <label for="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
          <div className="mt-2">
            <Input hint={'johnboe@gmail.com'} id={'email'} type={'email'} handler={handleChange} value={userData.email} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label for="password" className="block text-sm font-medium leading-6 text-white">Password</label>
            <div className="text-sm">
              <Link href="#" className="font-semibold text-orange-600 hover:text-orange-500">Forgot password?</Link>
            </div>
          </div>
          <div className="mt-2">
            <Input hint={'********'} id={'password'} type={'password'} handler={handleChange} value={userData.password} />
          </div>
        </div>
        <button className="w-full text-white py-4 inline-block bg-orange-500 border-0 tracking-widest uppercase font-bold px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Sign in</button>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?&nbsp;&nbsp;&nbsp;
        <Link href="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Register Here</Link>
      </p>
    </div>
  </div>
}

export default Page