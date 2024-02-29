import { ImageBackground, useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import React from 'react';
import { QA } from '../Provider/AppProvider';
import Question from './Question';
import Options from './Options';
import Playlist from './Playlist';
import InteractiveIcons from './InteractiveIcons';

type Props = {
    data: QA;
};

export const MARGIN = 20;

const Container = styled.View<{ height: number }>`
    flex: 1;
    height: ${(props) => props.height - Constants.statusBarHeight - MARGIN + 'px'};
    background-color: black;
`;

const BackgroundImage = styled(ImageBackground)`
    flex: 1;
    opacity: 0.7;
`;

const SafeArea = styled.View`
    padding-top: ${Constants.statusBarHeight + MARGIN + 'px'};
    padding-right: 10px;
    padding-left: 10px;
    flex: 1;
`;

const MainAreaContainer = styled.View`
    flex: 1;
    margin-top: 50px;
    justify-content: space-between;
`;

const OptionsIconsContainer = styled.View`
    flex-direction: row;
    gap: 12px;
`;

const QuizRenderer = ({ data }: Props) => {
    const { height } = useWindowDimensions();

    return (
        <Container height={height}>
            <BackgroundImage source={{ uri: data.question.image }} resizeMode="cover">
                <SafeArea>
                    <MainAreaContainer>
                        <Question question={data.question} />
                        <OptionsIconsContainer>
                            <Options question={data.question} answer={data.answer} />
                            <InteractiveIcons avatar={data.question.user.avatar} />
                        </OptionsIconsContainer>
                    </MainAreaContainer>
                </SafeArea>
                <Playlist playlist={data.question.playlist} />
            </BackgroundImage>
        </Container>
    );
};

export default React.memo(QuizRenderer);
