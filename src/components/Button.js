import React, { Component } from 'react';
import './keys.css';

class Button extends Component {
    render() {
        const {onClick, activeKey, value:{up, down}} = this.props;
        return (
            <li className={'key ' + up.toLowerCase()}>
                <div className={activeKey === up ? 'active' : ''} onClick={() => onClick(up)}>
                    {up}
                </div>
                <div className={activeKey === down ? 'active' : ''}  onClick={() => onClick(down)}>
                    {down}
                </div>
            </li>
        );
    }
}

export default Button;