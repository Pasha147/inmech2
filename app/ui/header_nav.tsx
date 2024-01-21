
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clases from '@/app/ui/header_nav.module.css'
import Image from 'next/image';

export default function HeaderNav() {
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
                            height= {92}
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
                    <nav className={clases.nav}>
                        {links.map((link) => {
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${clases.navLink} ${pathname === link.href && clases.navLinkActive}`}

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