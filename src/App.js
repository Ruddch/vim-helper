import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import 'reset-css';
import './App.css';
import ToggleButton from 'react-toggle-button'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           dark: false,
        };
    }
    render() {
        return (
            <div className="App">
                <main className={'App-main ' + (this.state.dark ? 'dark' : '')}>
                    <div>
                        <div className={'toggle-wrapper'}><ToggleButton
                            value={this.state.dark}
                            onToggle={(value) => {
                                this.setState({
                                    dark: !value,
                                })
                            }}
                            inactiveLabel={''}
                            activeLabel={''}
                            colors={{
                                activeThumb: {
                                    base: '#84fbe9',
                                },
                                inactiveThumb: {
                                    base: '#fff',
                                },
                                active: {
                                    base: '#4E7E78',
                                },
                                inactive: {
                                    base: '#fefefe',
                                }
                            }}
                            trackStyle={{
                                width: '40px',
                                height: '7px',
                            }}
                            thumbStyle={{
                                width: '20px',
                                height: '20px',
                                boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.15)',
                            }}
                            thumbAnimateRange={[0, 20]}
                        /><p> make me dark</p></div>
                        <Keyboard/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
