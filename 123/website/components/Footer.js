import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-around bg-slate-800 text-white py-4'>
            <div className='text-center'>
                Copyright @ Facebook | All right reserved
            </div>
            <ul className='flex gap-2 text-sm'>
                <a href='/' className='text-xs'>Home</a>
                <a href='/about' className='text-xs'>About</a>
                <a href='/contact' className='text-xs'>Contact</a>
            </ul>
        </footer>
    )
}

export default Footer
