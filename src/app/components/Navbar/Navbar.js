'use client';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import NavbarLink from './NavbarLink';
export default function  Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownItems = [
        {
            id: 1,
            title: 'ღონისძიების სივრცე',
            href: '/',
            icon: '/icon.svg'
        },
        {
            id: 2,
            title: 'ღონისძიების სივრცე2',
            href: '/',
            icon: '/icon.svg'
        },
        {
            id: 3,
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
                    <NavbarLink href="/" className="nav-link " aria-current="page">რატომ ბათუმი</NavbarLink>
                    <NavbarLink href="#" className="nav-link" dropdown={dropdownItems}>ღონისძიების სივრცე</NavbarLink>
                </ul>
               <Button>ეწვიე ბათუმს</Button>
                </div>
			</div>
		</nav>
        </>
	);
}