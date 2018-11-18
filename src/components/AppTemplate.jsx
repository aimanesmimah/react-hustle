import React, { Component } from 'react';
import {Div} from '../styledComponents/main';
import Header from './layout/Header';
import Footer from './layout/Footer';

class AppTemplate extends Component {
    render() {
        return (
            <Div>
                <Header />
                <Div>
                    {this.props.children}
                </Div>
                <Footer />
            </Div>
        );
    }
}

export default AppTemplate;