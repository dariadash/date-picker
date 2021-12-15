import React from 'react'
import styled from 'styled-components';
import { Datapicker, RangeSelector } from '../features/dataPicker/view';
import { TopBar } from '../ui';

export const Mainpage = () => {
    return (
        <Wrapper>
            <TopBar>
                <RangeSelector />
            </TopBar>
            <Datapicker />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`