import React from 'react';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import Timer from './Timer';
import ForYou from './ForYou';
import Search from './Search';
import { MARGIN } from './QuizRenderer';

const TopBarContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 10px;
    margin-top: ${Constants.statusBarHeight + MARGIN + 'px'};
`;

const TopBar = () => {
    return (
        <TopBarContainer>
            <Timer />
            <ForYou />
            <Search />
        </TopBarContainer>
    );
};

export default TopBar;
