import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        localStorage.clear();
        router.push('/login');
    }
    useEffect(() => {
        if(localStorage.getItem('token') != undefined)
        {
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        }
      }, [])
    return (
        
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav">
                    
                    <img className="logo" src="/assets/images/sourcign_logo.jfif" alt=""/>
                    <ul className="nav">
                    <li className="scroll-to-section"><a href="/#top" className={router.pathname == "/" ? 'active' : ''}>Home</a></li>
                    <li className="scroll-to-section"><a href="/#about">About</a></li>
                    <li className="scroll-to-section"><a href="/#services">Feature</a></li>
                    <li className="scroll-to-section">
                        <a href="/#contact">Contact Us?</a>
                    </li>
                    {
                        isLoggedIn ?
                        (
                            <>
                                <li><a href="/search" className={router.pathname == "/search" ? 'active' : ''}>Search</a></li>
                                <li>
                                    <div className="border-first-button">
                                    <a onClick={handleLogout} style={{cursor:"pointer"}}>logout</a>
                                    </div>
                                </li>
                            </>
                        ):
                        (
                            <li>
                                <div className="border-first-button">
                                <a href="/login">Register</a>
                                </div>
                            </li>
                        )
                    }
                    
                    </ul>
                    <a className='menu-trigger'>
                    <span>Menu</span>
                    </a>
                    
                </nav>
                </div>
            </div>
            </div>
        </header>  
    )
}