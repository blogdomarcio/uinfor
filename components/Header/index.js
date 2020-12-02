import React from 'react'
import Link from 'next/link'
// import Menu from './Menu'

// import styles from './styles.module.css'

const Header = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Link href='/'>
                    <div className='bg-red-900'>
                        <a>
                            <img className=' mx-auto p-2' src='/logo_uesb.png' />
                            <h1 className='font-bold text-center text-white text-2xl p-2'> UINFOR-IT</h1>
                        </a>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header