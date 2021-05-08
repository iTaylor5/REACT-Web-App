import React from 'react';

import classes from './Button.module.css';
import './Button.module.css';

const Button = props => {
    return (
        <button type={props.type || 'button'} className={classes.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};


/*
*  This returns a buttpn -> type of button should be specified and passed through by props. The OR operator is there if it is not.
*   onClick method and details to be displayed on the button are also passed in through props.
*/

export default Button;