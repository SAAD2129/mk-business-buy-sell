import React from 'react'
import Footer from '../Footer'
import AdminHeader from '../AdminHeader'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminHeader />
            {children}
            <Footer />
        </div>
    )
}

export default AdminLayout