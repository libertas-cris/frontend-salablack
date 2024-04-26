import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../hooks/auth';
import { Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Admins from '../utils/admins.json';

export function Header() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [open, setOpen] = useState(false);
    const { token, signOut } = useAuth();

    useEffect(() => {
        const decodedToken = decodeToken(token);
        if (decodedToken && Admins.includes(decodedToken.email)) {
            setIsAdmin(true);
        }
    }, [token]);

    let links;

    if (isAdmin) {
        links = [
            { name: "Início", link: "/" },
            { name: "Plataforma", link: "/tutorial" },
            { name: "Ajuda", link: "/teste" },
            { name: "Admin", link: "/admin" },
        ];
    } else {
        links = [
            { name: "Início", link: "/" },
            { name: "Plataforma", link: "/tutorial" },
            { name: "Ajuda", link: "/teste" },
            
        ];
    }

    function handleSignOut() {
        signOut();
    }

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10'>
                <Link to='/'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 pl-36'>
                        <img src="https://raw.githubusercontent.com/libertas-cris/arquivos-salablack/main/logo-salablack-front-removebg-preview.png" alt="" />
                    </div>
                </Link>

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                <ul className={`pr-36 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {links.map((link, index) => (
                        <Link to={link.link} key={index}>
                            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <p className='text-black hover:text-red-500 duration-500'>{link.name}</p>
                            </li>
                        </Link>
                    ))}
                    <button onClick={handleSignOut} className='btn text-red-600 text-sm md:ml-8 font-extrabold px-3 py-1 rounded duration-500 md:static'>Sair</button>
                </ul>
            </div>
        </div>
    );
}
