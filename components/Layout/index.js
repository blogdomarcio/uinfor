import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
    return (

        <div className='container mx-auto bg-red-200'>
            <Header />
            <div className='h-screen'>
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout
