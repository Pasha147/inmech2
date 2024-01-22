
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clases from '@/app/ui/header_nav.module.css'
import Image from 'next/image';
import { useState } from 'react';

export default function HeaderNav() {

    const [burMenu, setBurMenu] = useState(false);
    const pathname = usePathname();
    const links = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'FounDocum',
            href: '/founDocum',
        },
        {
            name: 'GenMeeting',
            href: '/genMeeting',
        },
        {
            name: 'ComMembers',
            href: '/comMembers',
        },
        {
            name: 'Admin',
            href: '/admin',
        },
    ];

    function hanndleClick() {
        burMenu ? setBurMenu(false) : setBurMenu(true);
        // console.log('burgerMenu = ', burMenu);
    }

    return (
        <header className={clases.header}>
            <div className='container'>
                <div className={clases.header__body}>
                    <Link
                        href="/"
                        className={clases.link__logo}

                    >
                        <Image
                            src="/img/logo5.png"
                            width={300}
                            height={92}
                            priority={true}
                            className={clases.logoImg}
                            // style={{
                            //     height: '100px',
                            //     objectFit: 'contain', // cover, contain, none
                            // }}
                            // className="hidden md:block"
                            alt="Logo"
                        />
                        {/* <img className="logo" src="./img/logo5.png" alt="Logo"></img> */}
                    </Link>
                    <div
                        className={
                            burMenu ?
                                [clases.header__burger, clases.header__burgerOff].join(' ')
                                :
                                clases.header__burger
                        }
                        // onClick={hanndleClick}
                        onClick={() => setBurMenu(prev => !prev)}
                    >
                        <span></span>
                    </div>
                    <nav className={burMenu ? clases.nav : [clases.nav, clases.navOff].join(' ')}>
                        {links.map((link) => {
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${clases.navLink} ${pathname === link.href && clases.navLinkActive}`}
                                    onClick={() => setBurMenu(prev => !prev)}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>

        </header>
    )
}