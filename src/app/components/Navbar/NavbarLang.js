'use client'
import Image from "next/image"
import ka from '../../../../public/language-ka.svg'
import en from '../../../../public/language-en.svg'
import ru from '../../../../public/language-ru.svg'
import styles from './NavbarLang.module.css'
import {  useState } from "react"

export default function NavbarLang({lang, className }) {
    const [isHovered, setIsHovered] = useState(false);
    const langMap = [
        {
            id: 1,
            lang: 'ka',
            image: ka
        },
        {
            id: 2,
            lang: 'en',
            image: en
        },
        {
            id: 3,
            lang: 'ru',
            image: ru
        }
    ]
        
    const langUrl = langMap.find(item => item.lang === lang)

    const reordered = [
        ...langMap.filter(item => item.lang === lang),
        ...langMap.filter(item => item.lang !== lang)
      ];
      
    return (
        <div className={className} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <a href={`/${langUrl.lang}`}><Image src={langUrl.image} alt="visit" width={24} height={24} /></a>
            <div className={styles.dropdownLang}> 
                { isHovered && (
                <ul className={styles.dropdownLangList}>
                    {reordered.map(item => (
                        <li key={item.id} className={styles.dropdownLangItem}>
                            <a href={`/${item.lang}`}><Image src={item.image} alt="visit" width={24} height={24} /></a>
                        </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    )
}