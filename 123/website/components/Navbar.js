import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
            <div className='logo font-bold'>
                Facebook
            </div>
            <ul className='flex gap-6'>
                <a href='/' className='text-xs'>Home</a>
                <a href='/about' className='text-xs'>About</a>
                <a href='/contact' className='text-xs'>Contact</a>
            </ul>
        </nav>
    )
}

export default Navbar
