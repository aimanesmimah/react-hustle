import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../../common/select/Select';
import {FilterSortContextConsumer} from './FilterSortContext';
import {CustomDiv, FlexColumn} from '../../../styledComponents/main';
import {AppButton} from '../../../styledComponents/controls';
import {colors} from '../../../styledComponents/colors';


class Filter extends Component {
    constructor(props){
        super(props)
        this.SelectItems= [{title: 'Color' }, {title: 'Manufacturer'}]
    }

    render() {
        return (
            <FilterSortContextConsumer>
                {
                    ({onFilter}) => (
                        <CustomDiv padding={'24px'} boxShadow={`0 0 1px 1px ${colors.light_grey}`} >
                            <FlexColumn >
                                {
                                    this.SelectItems.map((item,i)=> <Select key={i} {...item} /> )
                                }
                            </FlexColumn>
                            <CustomDiv height={'32px'} margin={'12px 0 12px 0'} >
                                <AppButton onClick={onFilter} className="float-right" color={colors.dark_orange} >Filter</AppButton>
                            </CustomDiv>
                        </CustomDiv>
                    )
                }
            </FilterSortContextConsumer>
        );
    }
}

Filter.contextTypes = {
    store : PropTypes.object
}

export default Filter;