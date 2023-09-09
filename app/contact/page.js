'use client'
import Layout from '@/components/Layout/Layout'
import Input from '@/components/Utils/Input'
import React from 'react'
import { toast } from 'react-toastify'
export const metadata = {
    title: 'Contact',
    description: 'Contact Page',
}
const Page = () => {
    const [userData, setUserData] = React.useState({ firstName: '', lastName: '', email: '', contact: '', message: '' })
    // client.js
    const createQuery = async (e) => {
        e.preventDefault()
        if (!firstName || !lastName || !email || !contact || !message)
            return toast.error('all fields are required')
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                const newUser = await response.json();
                toast.success('query submitted successfully')
                setUserData({ firstName: '', lastName: '', email: '', contact: '', message: '' })
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
    return (
        <Layout>
            <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className=" md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                                <a className="text-orange-500 leading-relaxed ">example@email.com</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed text-gray-400">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={createQuery} className="md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white text-2xl mb-1 font-bold title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-400">Feel free to Ask, Suggest and Complain</p>
                        <div className="relative mb-4">
                            <label for="firstName" className="leading-7 text-sm text-gray-400">First Name <span className="text-orange-500">*</span></label>
                            <Input id="firstName" type="text" hint={'john'} handler={handleChange} value={userData.firstName} />
                        </div>
                        <div className="relative mb-4">
                            <label for="lastName" className="leading-7 text-sm text-gray-400">Last Name <span className="text-orange-500">*</span></label>
                            <Input id="lastName" type="text" hint={'Boe'} handler={handleChange} value={userData.lastName} />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-400">Email <span className="text-orange-500">*</span></label>
                            <Input id="email" type="email" hint={'johncena@gmail.com'} handler={handleChange} value={userData.email} />
                        </div>
                        <div className="relative mb-4">
                            <label for="contact" className="leading-7 text-sm text-gray-400">Contact <span className="text-orange-500">*</span></label>
                            <Input id="contact" type="tel" hint={'92325234242'} handler={handleChange} value={userData.contact} />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-400">Message <span className="text-orange-500">*</span></label>
                            <textarea id="message" rows={4} name="message" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none resize-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700" onChange={handleChange} value={userData.message}></textarea>
                        </div>
                        <button type='submit' className="text-white py-4 inline-block bg-orange-500 border-0 tracking-widest uppercase font-bold px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Send</button>
                        <p className="text-xs text-gray-400 mt-3">we usually respond before 24 hours.</p>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Page