import React, { Component } from 'react';
import {CustomDiv} from '../../../styledComponents/main';
import Select from '../../common/select/Select';

class Sort extends Component {
    render() {
        return (
            <CustomDiv textAlign={'right'} >
                <Select noMarginTop={true} {...{title: 'Sort by'}} />
            </CustomDiv>
        );
    }
}

export default Sort;