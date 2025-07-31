'use client';
import styles from './Button.module.css';
const Button = ({ children, onClick, className }) => {
    return (
        <button className={`btn ${styles.button} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;