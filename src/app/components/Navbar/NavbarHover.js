import Link from 'next/link';
import styles from './NavbarLink.module.css';

const resolveTemplate = tpl => {
	if (tpl === 'blank_page') return 'article';
	if (tpl === 'venue') return 'venue';
	if (tpl === 'events') return 'events';
	if (tpl === 'media_blog') return '';
	if (tpl === 'about_batumi') return '';
	return tpl || '';
};

const resolveSlug = slug => {
	if (slug === 'cultural') return 'venues';
	if (slug === 'conference') return 'venues';
	if (slug === 'sport') return 'venues';
	if (slug === 'events') return '';
	return slug || '';
};

const NavbarHover = ({ dropdown, setIsHovered, lang }) => {
	return (
		<ul
			className={`dropdown ${styles.dropdown}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='container'>
				<div className='row'>
					{dropdown.map(item => {
						const section = resolveSlug(item.slug);
						const href = `/${lang}/${section}/${item.slug}`;
						return (
							<div className='col' key={item.id}>
								<div className={styles.mainTitle}>
									<Link
										onClick={e => {
											e.preventDefault();
											window.location.href = item.redirect ? item.redirect :  item.is_active === false ? "#" : href;
										}}
										href={item.redirect ? item.redirect : item.is_active === false ? "#" : href}
									>
										<h4>{item.name}</h4>
									</Link>
								</div>
								<div className={styles.hoverItems}>
									{item?.children?.map(child => {
										

									
										const section = resolveTemplate(child.page_template);
										const href = `/${lang}/${section}/${child.slug}`;
										return (
											<li className={styles.dropdownItem} key={child.id}>
												<Link
													onClick={e => {
														e.preventDefault();
														window.location.href = child.redirect ? child.redirect : href;
													}}
													href={child.redirect ? child.redirect : href}
												>
													{child.name}
												</Link>
											</li>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</ul>
	);
};

export default NavbarHover;
