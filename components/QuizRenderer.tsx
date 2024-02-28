import { Text, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import { QA } from '../Provider/AppProvider';

type Props = {
    data: QA
}

const Container = styled.View<{height: number}>`
    flex: 1;
    height: ${props => props.height + 'px'};
`

const QuizRenderer = ({data}: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Container height={height}>
            <Text>{data.question.question}</Text>
        </Container>
    );
};

export default QuizRenderer;
