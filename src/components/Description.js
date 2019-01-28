import React, { Component } from 'react';
import './description.css';

class Description extends Component {
    render() {
        return (
           <div className={'description'}>
               <h3>{this.props.title}</h3>
               <p>{this.props.text}</p>
           </div>
        );
    }
}

export default Description;