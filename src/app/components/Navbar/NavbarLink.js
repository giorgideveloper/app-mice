'use client';
import Image from 'next/image';
import styles from './NavbarLink.module.css';
import NavbarHover from './NavbarHover';
const NavbarLink = ({ children, href, className, dropdown }) => {
    

    console.log(dropdown);
        return (
        <>
        <li className={`nav-item ${styles.item}`}>
            <a className={`nav-link ${styles.link} ${className}`} href={href}>
                {children}
            </a>
            <Image src="/icon.svg" alt="arrow-right" width={15} height={15} />
            <NavbarHover dropdown={dropdown} />
        </li>
        </>
    );
};

export default NavbarLink;