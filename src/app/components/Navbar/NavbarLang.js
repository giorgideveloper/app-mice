'use client';
import Image from 'next/image';
import ka from '../../../../public/language-ka.svg';
import en from '../../../../public/language-en.svg';
import ru from '../../../../public/language-ru.svg';
import styles from './NavbarLang.module.css';
import { useState, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
	getTranslatedPath,
	getTranslatedPathDynamic,
} from '@/app/utils/languageUtils';

export default function NavbarLang({ lang, className }) {
	const [isHovered, setIsHovered] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const langMap = [
		{
			id: 1,
			lang: 'ka',
			image: ka,
		},
		{
			id: 2,
			lang: 'en',
			image: en,
		},
		{
			id: 3,
			lang: 'ru',
			image: ru,
		},
	];

	const langUrl = langMap.find(item => item.lang === lang);

	const reordered = [
		...langMap.filter(item => item.lang === lang),
		...langMap.filter(item => item.lang !== lang),
	];
	const buildSearch = useCallback(() => {
		const s = searchParams?.toString?.() || '';
		return s ? `?${s}` : '';
	}, [searchParams]);

	const generateLangUrl = targetLang => {
		// Fast sync URL for hover state; final click uses dynamic
		return getTranslatedPath(pathname, lang, targetLang) + buildSearch();
	};

	const handleLangClick = async (e, targetLang) => {
		e.preventDefault();
		const next = await getTranslatedPathDynamic(
			pathname,
			lang,
			targetLang,
			searchParams?.toString?.()
		);
		window.location.href = next;
	};

	return (
		<div
			className={className}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<a
				href={generateLangUrl(langUrl.lang)}
				onClick={e => handleLangClick(e, langUrl.lang)}
			>
				<Image src={langUrl.image} alt='visit' width={24} height={24} />
			</a>
			<div className={styles.dropdownLang}>
				{isHovered && (
					<ul className={styles.dropdownLangList}>
						{reordered.map(item => (
							<li key={item.id} className={styles.dropdownLangItem}>
								<a
									href={generateLangUrl(item.lang)}
									onClick={e => handleLangClick(e, item.lang)}
								>
									<Image src={item.image} alt='visit' width={24} height={24} />
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
