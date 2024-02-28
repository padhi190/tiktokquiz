import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useAppContext } from '../Provider/AppProvider';

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    margin: 0;
`;
const StyledText = styled.Text`
    color: white;
    font-size: 14px;
`;

const Timer = () => {
    const { minute } = useAppContext();
    return (
        <Container>
            <Ionicons name="stopwatch" color={'white'} size={20} />
            <StyledText>{minute}m</StyledText>
        </Container>
    );
};

export default Timer;
