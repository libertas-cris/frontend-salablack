import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../hooks/auth';

export function Header (){
    let Links =[
        {name:"Início",link:"/"},
        {name:"Plataforma",link:"/"},
        {name:"Ajuda",link:"/"},
      ];
      let [open, setOpen] =useState(false);

      const {signOut} = useAuth();

      function handleSignOut(){
        signOut();
      }

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 pl-36'>
                <img src="https://raw.githubusercontent.com/libertas-cris/arquivos-salablack/main/logo-salablack-front-removebg-preview.png" alt="" />
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`pr-36 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link, index) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={index}>
                        <a href={link.link} className='text-black  hover:text-red-500 duration-500'>{link.name}</a>
                    </li>))
                }
                <button onClick={handleSignOut} className='btn text-red-600 text-sm md:ml-8 font-extrabold px-3 py-1 rounded duration-500 md:static'>Sair</button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};
