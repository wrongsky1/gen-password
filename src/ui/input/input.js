import React from 'react';
import cx from 'clsx';

import style from './input.module.css'

function Input({ type, placaholder, defaultValue, disabled, className, readonly }) {
    return (
        <input 
            type={type}
            placaholder={placaholder}
            defaultValue={defaultValue}
            disabled={disabled}
            className={cx(style['input'], className)}
            readonly={readonly}
        >
            
        </input>
    )
}

export { Input }
