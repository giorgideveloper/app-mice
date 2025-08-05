'use client';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import NavbarLink from './NavbarLink';
import NavbarLang from './NavbarLang';
import { fetchMenu } from '@/service/service';
import { useEffect, useState } from 'react';
export default function  Navbar({lang}) {
const [menu, setMenu] = useState([]);

    // Fetch menu data when the component mounts
    useEffect(() => {  
        const fetchData = async () => {
            try {
                const response = await fetchMenu();
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMenu(data); // Handle the fetched menu data
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        };
        fetchData();
    }, []);


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
console.log("menu", menu);
   
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
                    {menu?.map(item => (
                        <NavbarLink key={item.id} href={item.href} className="nav-link" dropdown={item.children} parent={item.id} id={item.id}>
                            {item.name}
                        </NavbarLink>
                    ))}
                </ul>
               <Button><a href="https://visitbatumi.com/ka"> ეწვიე ბათუმს</a></Button>
               <NavbarLang className={styles.lang} lang={lang} />
                </div>
			</div>
		</nav>
        </>
	);
}