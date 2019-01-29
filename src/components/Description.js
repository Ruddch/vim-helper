import React, { Component } from 'react';
import './description.css';

class Description extends Component {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        const chooseDescription = () =>
            this.props.text ? this.props.text
                : this.props.title ? defaultDescription
                  : 'press keys on your keyboard to see that they are doing in VIM';

        const defaultDescription = 'use :help for more information';
        return (
           <div className={'description'}>
               <h3>{this.props.title || 'VIM helper'}</h3>
               <p>{Description.capitalize(
                   chooseDescription()
               )}</p>
           </div>
        );
    }
}

export default Description;