import React from 'react';
import cx from 'clsx';

import styles from "./button.module.css";

function Button ({ type, className, onClick, children }) {
    return (
        <button className={cx(styles['button'], className)} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button };