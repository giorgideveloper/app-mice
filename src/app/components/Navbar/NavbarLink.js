'use client';
import Image from 'next/image';
import styles from './NavbarLink.module.css';
import NavbarHover from './NavbarHover';
import { useState } from 'react';
import icon from '../../../../public/Icon.svg'; // Fixed capitalization in file name
import {arialCaps, firago} from '@/fonts/Fonts';

const NavbarLink = ({ children,  className, dropdown, parent, lang }) => {
    const [isHovered, setIsHovered] = useState(false);
        return ( 
            <>
             <li className={`nav-item ${styles.item}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <span className={`${styles.link} ${className}`} style={{ cursor: 'default', fontFamily: lang === 'ka' ? arialCaps.style.fontFamily : firago.style.fontFamily }}  >
                    {children}
                </span>
                <Image src={icon} alt="arrow-right" width={15} height={15} />   
            </li>
            {isHovered && <NavbarHover firago={firago} arialCaps={arialCaps} setIsHovered={setIsHovered} dropdown={dropdown} parent={parent} lang={lang} />}
            </>
        );
};

export default NavbarLink;  