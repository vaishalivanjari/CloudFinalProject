import React from 'react'
import { HeartIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

const handleLogout = (() => {
    localStorage.removeItem("userID");
    window.location.href = '/';
})

const  = () => {
  return (
        <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} onClick={handleLogout}/>
  )
}


export default 