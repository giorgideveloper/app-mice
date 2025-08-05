'use client';
import Image from 'next/image';
import styles from './NavbarLink.module.css';
import NavbarHover from './NavbarHover';
import { useState } from 'react';
import icon from '../../../../public/Icon.svg'; // Fixed capitalization in file name
const NavbarLink = ({ children, href, className, dropdown, parent }) => {
    const [isHovered, setIsHovered] = useState(false);
        return ( 
        <>
         <li className={`nav-item ${styles.item}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <a className={`nav-link ${styles.link} ${className}`} href={href}>
                {children}
            </a>
            <Image src={icon} alt="arrow-right" width={15} height={15} />   
        </li>
        {isHovered && <NavbarHover setIsHovered={setIsHovered} dropdown={dropdown} parent={parent} />}
        
        
        </>
    );
};

export default NavbarLink;  