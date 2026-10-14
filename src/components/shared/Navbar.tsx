import Image from 'next/image';
import React from 'react';
import logo from "@/assets/book.ico"
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className="border border-green-500 rounded-lg transition-colors duration-300 hover:bg-green-500 hover:text-white">
                                <Link href="/books">Book</Link>
                            </li>
                            <li>
                                <Link href="/listed-books">Listed Books</Link>
                            </li>
                            <li>
                                <Link href="/read-books">Read Books</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={logo} alt="Book Vibe Logo" />
                        Book Vibe
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="border border-green-500 rounded-lg transition-colors duration-300 hover:bg-green-500 hover:text-white">
                            <Link href="/books">Book</Link>
                        </li>
                        <li>
                            <Link href="/listed-books">Listed Books</Link>
                        </li>
                        <li>
                            <Link href="/read-books">Read Books</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-success px-5 py-2 transiton-colors hover:text-white">Sign in</button>
                    <button className="rounded-lg bg-sky-400 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-black">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;