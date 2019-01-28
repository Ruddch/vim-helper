import React, { Component } from 'react';
import Button from './Button';
import keys from '../data/keys';
import descriptions from '../data/description'
import Description from './Description';
import './keyboard.css';

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            key: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.renderButtonList = this.renderButtonList.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handlePress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handlePress);
    }

    static getChar(event) {
        if (event.which == null) { // IE
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode)
        }

        if (event.which !== 0 && event.charCode !== 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which);
        }

        return null;
    }

    handleClick(key) {
        this.setState({key});
    }

    handlePress(event) {
        console.log(Keyboard.getChar(event));
        this.setState({key: Keyboard.getChar(event)});
    }

    renderButtonList(data, key) {
        const buttons = data.map((v, i) =>
            <Button activeKey={this.state.key} onClick={this.handleClick} value={v} key={i}/>
        );
        return <ul key={key} className='buttonList'>
            {buttons}
        </ul>
    }
    render() {
        const parsedData = keys.map(this.renderButtonList);
        return (
            <div className={'wrapper'}>
                <div onKeyDown={this.handlePress} className='keyboard'>
                    {parsedData}
                </div>
                <Description title={this.state.key} text={descriptions[this.state.key]}/>
            </div>
        )
    }
}

export default Keyboard;
