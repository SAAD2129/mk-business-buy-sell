"use client"
import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
export const metadata = {
    title: 'Buyer FAQ',
    description: 'Buyer FAQ Page',
}

const faqs = [
    { id: 'hello sir how are you', 'question': 'hello sir how are you?', 'answer': 'I am fine sir' },
    { id: 'how was the day sir', 'question': 'how was the day sir?', 'answer': 'It was a fine day sir' },
    { id: 'can we meet today', 'question': 'can we meet today?', 'answer': `oh! definitely let's meet` }
]

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [faqId, setFaqId] = useState('')
    const faqHandler = (id) => {
        if (faqId === id)
            setFaqId('')
        else
            setFaqId(id)
    }
    return (
        <Layout>
            <section className="px-4 sm:px-12 md:px-16 lg:px-24 text-gray-400 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="object-cover object-center rounded" alt="hero" src="https://www.sunbeltcanada.com/wp-content/uploads/2021/04/buyers-faqs-01-min.jpeg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">FAQs for Business Buyers</h2>
                        <p className="mb-8 leading-relaxed">
                            You likely have many questions about buying your business, we are happy to provide the FAQs below for your consideration.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Sunbelt Canada represents business opportunities right across the country. They vary in size from small owner operated businesses which sell for as little as $250,000 to large businesses that sell for many millions of dollars. Some are suitable for new entrepreneurs, some for seasoned business owners and some for acquisition by large corporations, Family Offices, or Private Equity Groups.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            They vary by industry ranging from Hotels and Motels to Software Companies and everything in between.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our goal is to have something that works well for each buyer and we have a large selection of quality businesses for sale in Canada at any given time.</p>

                    </div>

                </div>
                <div className=" mx-4 px-4 bg-white/5 py-8">
                    {faqs.map((faq => {
                        return <div key={faq.id} className=''>
                            <div className={`capitalize p-2 border-b border-b-white/10 py-2 my-4 text-white/80 hover:text-white/100`}>
                                <p className='text-lg cursor-pointer' onClick={() => faqHandler(faq.id)}>{faq.question}</p>
                            </div>
                            {faq.id === faqId && <p className='text-gray-300 px-4 '> {faq.answer}</p>}
                        </div>
                    }))}
                </div>
            </section>
        </Layout>
    )
}

export default page