'use client';
import { use, useEffect } from 'react';
import styles from './NavbarLink.module.css';

const NavbarHover = ({ dropdown, setIsHovered, parent }) => {
    const dropdownItems = dropdown?.map((item) => item.parent === parent ? (
        <li className={styles.dropdownItem} key={item.id}>
            <a href={item.href}>{item.title}  </a>
        </li>
    ) : '');

    return (
        <ul className={`dropdown ${styles.dropdown}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={styles.mainTitle}>
                             <a href="#"><h4>მთავარი</h4></a>
                        </div>
                        <div className={styles.hoverItems}>
                            {dropdownItems}
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    );
};

export default NavbarHover;