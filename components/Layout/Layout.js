import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Head from 'next/head'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Header title={title} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout