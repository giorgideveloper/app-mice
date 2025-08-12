import Link from 'next/link';
import styles from './NavbarLink.module.css';

const resolveTemplate = (tpl) => {
  if (tpl === 'blank_page') return 'article';
  if (tpl === 'venue') return 'venue';
  if (tpl === 'event') return 'event';
  if (tpl === 'media_blog.html') return '';
  return tpl || '';
};

const NavbarHover = ({ dropdown, setIsHovered, lang }) => {
  return (
    <ul
      className={`dropdown ${styles.dropdown}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container">
        <div className="row">
          {dropdown.map((item) => (
            <div className="col" key={item.id}>
              <div className={styles.mainTitle}>
                <Link href={`/${item.slug}`}>
                  <h4>{item.name}</h4>
                </Link>
              </div>

              <div className={styles.hoverItems}>
                {item?.children?.map((child) => {
                  const section = resolveTemplate(child.page_template);
                  const href = `/${lang}/${section}/${child.slug}`;
                  return (
                    <li className={styles.dropdownItem} key={child.id}>
                      <Link onClick={(e) => {
                        e.preventDefault();
                        window.location.href = href;
                      }} href={href}>{child.name}</Link>
                    </li>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default NavbarHover;
