'use client';
import Image from 'next/image';
import styles from './NavbarLink.module.css';
import NavbarHover from './NavbarHover';
import { useState } from 'react';
import icon from '../../../../public/Icon.svg'; // Fixed capitalization in file name
import {arialCaps, party} from '@/fonts/Fonts';


const NavbarLink = ({ children, href, className, dropdown, parent, lang }) => {
    const [isHovered, setIsHovered] = useState(false);
    console.log(party);
        return ( 
            <>
             <li className={`nav-item ${styles.item}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <span className={`${styles.link} ${className}`} style={{ cursor: 'default' }}>
                    {children}
                </span>
                <Image src={icon} alt="arrow-right" width={15} height={15} />   
            </li>
            {isHovered && <NavbarHover setIsHovered={setIsHovered} dropdown={dropdown} parent={parent} lang={lang} />}
            </>
        );
};

export default NavbarLink;  