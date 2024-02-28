import { ImageBackground, Text, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import { QA } from '../Provider/AppProvider';

type Props = {
    data: QA;
};

const Container = styled.View<{ height: number }>`
    flex: 1;
    height: ${(props) => props.height + 'px'};
`;

const BackgroundImage = styled(ImageBackground)`
    flex: 1;
`

const QuizRenderer = ({ data }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Container height={height}>
            <BackgroundImage source={{ uri: data.question.image }} resizeMode='cover'>
                <Text>{data.question.question}</Text>
            </BackgroundImage>
        </Container>
    );
};

export default QuizRenderer;
