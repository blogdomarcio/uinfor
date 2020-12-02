import React from 'react'
import "tailwindcss/tailwind.css"
import Layout from '../components/Layout'


const MyApp = ({ Component, pageProps }) => {

    return (
        <div>
            <Layout>
                <div className='container mx-auto'>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </div>
    )

}


export default MyApp

