import styles from './NavbarLink.module.css';

const NavbarHover = ({ dropdown, setIsHovered ,lang}) => {

    return (
        <ul className={`dropdown ${styles.dropdown}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="container">
                <div className="row">
                    {dropdown.map((item) => (
                        <div className="col" key={item.id}> 
                        <div className={styles.mainTitle}>
                            <a href={item.slug}><h4>{item.name}</h4></a>
                        </div>
                        <div className={styles.hoverItems}>
                           
                                {item?.children?.map((child,index) => (
                                      <li className={styles.dropdownItem} key={index}>
                                  <a id={child.id} href={`${lang}/article/${child.slug}`}>{child.name}  </a>
                                  </li>
                                ))}
                             
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </ul>
    );
};

export default NavbarHover;