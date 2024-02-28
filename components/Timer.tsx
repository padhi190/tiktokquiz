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
    font-size: 16px;
`;

const ONE_MINUTE = 1000 * 60;

const Timer = () => {
    const [minute, setMinute] = useState<number>(0);
    const { timeStarted } = useAppContext();

    useEffect(() => {
        const timer = setInterval(() => {
            const endTime = new Date().getTime();
            let timeDiff = endTime - timeStarted.getTime();
            timeDiff = Math.floor(timeDiff / ONE_MINUTE);
            setMinute(timeDiff);
        }, ONE_MINUTE);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <Ionicons name="stopwatch" color={'white'} size={25} />
            <StyledText>{minute}m</StyledText>
        </Container>
    );
};

export default Timer;
