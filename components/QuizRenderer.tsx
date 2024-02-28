import { ImageBackground, SafeAreaView, Text, useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';
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
`;

const SafeArea = styled.View`
    padding: ${Constants.statusBarHeight + 20 + 'px'};
`;

const QuizRenderer = ({ data }: Props) => {
    const { height } = useWindowDimensions();

    return (
        <Container height={height}>
            <BackgroundImage source={{ uri: data.question.image }} resizeMode="cover">
                <SafeArea>
                    <Text>{data.question.question}</Text>
                </SafeArea>
            </BackgroundImage>
        </Container>
    );
};

export default QuizRenderer;
