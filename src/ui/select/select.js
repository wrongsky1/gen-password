import React from 'react';
// import cx from 'clsx';

import style from './select.module.css';

function Select({ options, onBlur }) {
    return (
        <select className={style} onBlur={onBlur}>
            {options &&
                options.map((option, index) => {
                return (
                    <option key={index}>{option}</option>
                )
            })}
        </select>
    )
}

export { Select };
