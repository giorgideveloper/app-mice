import styles from './NavbarLink.module.css';
const NavbarHover = ({ dropdown }) => {
    const dropdownItems = dropdown?.map((item) => (
    <li className={styles.dropdownItem} key={item.id}>
        <a href={item.href}>{item.title}  </a>
    </li>
));

    return (
        <ul className={`dropdown ${styles.dropdown}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {dropdownItems}
                    </div>
                </div>
            </div>
        </ul>
    );
};

export default NavbarHover;