import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppTemplate from '../../AppTemplate';
import Filters from './Filter';
import Sort from './Sort';
import Paginate from './pagination/Paginate';
import {CustomDiv,FlexColumn} from '../../../styledComponents/main';
import {BigBold,BigRegular} from '../../../styledComponents/fonts';
import {getCall} from '../../../utils/apiCalls';
import { colors } from '../../../styledComponents/colors';

class CarsIndex extends Component {

    componentWillMount(){
         // this.getCars()
    }

    getCars(){
        const {CurrentPage}= this.context.store.getState()
        var params= CurrentPage ? [{page: CurrentPage}]: []
        this.setState({loading: true})
        getCall('/cars',params).then(res=>{
            this.setState({loading: false})
            this.carsLength= res.totalPageCount
        })
        .catch(err=>{
            this.setState({loading:false, loadingError:true})
        })
    }

    render() {
        const {CarsLength}= this.context.store.getState()
        return (
            <AppTemplate>
                <CustomDiv className="float-left" width={'30%'} margin={'24px'} >
                    <Filters />
                </CustomDiv>
                <CustomDiv className="float-right" width={'60%'} margin={'24px 24px 80px 24px'} >
                    <FlexColumn>
                      <CustomDiv margin={'0 0 24px 0'} width={'95%'} >
                          <CustomDiv className="float-left" textAlign={'left'}>
                                <BigBold color={colors.dark_grey}>Available cars</BigBold>
                                <BigRegular color={colors.dark_grey}>Showing 10 of {CarsLength} results</BigRegular>
                          </CustomDiv>
                          <CustomDiv className="float-right">
                               <Sort />
                          </CustomDiv>
                      </CustomDiv>
                      <Paginate carsLength={this.handleCarLength} />
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