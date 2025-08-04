'use client';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import NavbarLink from './NavbarLink';
import NavbarLang from './NavbarLang';
export default function  Navbar({lang}) {
    console.log(lang);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownItems = [
        {
            parent:1,
            id: 1,
            title: 'ღონისძიების სივრცე',
            href: '/',
            icon: '/icon.svg'
        },
        {
            parent:1,
            id: 2,
            title: 'ღონისძიების სივრცე2',
            href: '/',
            icon: '/icon.svg'
        },
        {
            parent:1,
            id: 3,
            title: 'ღონისძიების სივრცე3',
            href: '/',
            icon: '/icon.svg'
        },
        {
            parent:2,
            id: 4,
            title: 'ღონისძიების სივრცე23333',
            href: '/',
            icon: '/icon.svg'
        },
        {
            parent:2,
            id: 5,
            title: 'ღონისძიების სივრცე2',
            href: '/',
            icon: '/icon.svg'
        },
        {
            parent:2,
            id: 6,
            title: 'ღონისძიების სივრცე3',
            href: '/',
            icon: '/icon.svg'
        },
        {
            parent:2,
            id: 7,
            title: 'ღონისძიების სივრცე3',
            href: '/',
            icon: '/icon.svg'
        }

    ];

   
	return (
        <>
		<nav className={`navbar fixed-top navbar-expand-lg navbar-light ${styles.navbar}`}>
			<div className="container align-items-end py-2">
				<a className="navbar-brand" href="#">
                    <Image src="/logo.svg" alt="logo" width={130} height={100} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavbarLink href="#" className="nav-link" dropdown={dropdownItems} parent={1} >რატომ ბათუმი</NavbarLink>
                    <NavbarLink href="#" className="nav-link" dropdown={dropdownItems} parent={2}>ღონისძიების სივრცე</NavbarLink>
                </ul>
               <Button><a href="https://visitbatumi.com/ka"> ეწვიე ბათუმს</a></Button>
               <NavbarLang className={styles.lang} lang={lang} />
                </div>
			</div>
		</nav>
        </>
	);
}