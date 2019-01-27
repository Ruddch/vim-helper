import React, { Component } from 'react';
import './keys.css';

class Button extends Component {
    render() {
        const {onClick, value:{up, down}} = this.props;
        return (
            <li className={'key ' + down}>
                <div onClick={() => onClick(up)}>
                    {up}
                </div>
                <div onClick={() => onClick(down)}>
                    {down}
                </div>
            </li>
        );
    }
}

export default Button;