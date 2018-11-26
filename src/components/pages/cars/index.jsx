import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppTemplate from '../../AppTemplate';
import Filters from './Filter';
import {FilterSortContextProvider} from './FilterSortContext';
import Sort from './Sort';
import Paginate from './pagination/Paginate';
import {CustomDiv,FlexColumn} from '../../../styledComponents/main';
import {BigBold,BigRegular} from '../../../styledComponents/fonts';
import { colors } from '../../../styledComponents/colors';

class CarsIndex extends Component {

    render() {
        const {PageCount,CurrentPage}= this.context.store.getState()
        return (
            <AppTemplate>
                <CustomDiv className="float-left" width={'30%'} margin={'24px'} >
                    <FilterSortContextProvider>
                        <Filters />
                    </FilterSortContextProvider>
                </CustomDiv>
                <CustomDiv className="float-right" width={'60%'} margin={'24px 24px 80px 24px'} >
                    <FlexColumn>
                      <CustomDiv margin={'0 0 24px 0'} >
                          <CustomDiv width={'40%'} className="float-left" textAlign={'left'}>
                                <BigBold color={colors.dark_grey}>Available cars</BigBold>
                                <BigRegular color={colors.dark_grey}>Showing {10*CurrentPage} of {PageCount*10} results</BigRegular>
                          </CustomDiv>
                          <CustomDiv width={'50%'} className="float-right">
                                <FilterSortContextProvider>
                                    <Sort />
                                </FilterSortContextProvider>
                          </CustomDiv>
                      </CustomDiv>
                      <Paginate />
                    </FlexColumn>
                </CustomDiv>
            </AppTemplate>
        );
    }
}

CarsIndex.contextTypes = {
    store : PropTypes.object
}

export default CarsIndex;