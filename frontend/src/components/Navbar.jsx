import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, AcademicCapIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);
    const navigate = useNavigate();
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[]);

    const navigateToHome = (() => {
        navigate("/");
    });

    const handleLogout = (() => {
        localStorage.removeItem("userID");
        window.location.href = '/';
    })
    const handleLogin = (() => {
        window.location.href = '/login';
    })

return (
   <>
      <header className={
        !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }>
        <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
                <AcademicCapIcon className={`w-16 h-auto icon-style ${navState && "text-slate-900 transition-all duration-300"}`} onClick={navigateToHome} />
                
                {/* <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
                    drop-shadow-lg'>UTA MarketPlace</h1> */}

</div>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                    <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                        <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                    </button>
                </li>
                <li className='grid items-center'>
                    <ArrowRightOnRectangleIcon onClick={handleLogin} className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <ArrowLeftOnRectangleIcon onClick={handleLogout} className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
            </ul>
        </nav>
      </header>
   </>
  )
}

export default Navbar