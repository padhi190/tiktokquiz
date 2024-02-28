import { ImageBackground, SafeAreaView, Text, useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import React from 'react';
import { QA } from '../Provider/AppProvider';
import Timer from './Timer';
import ForYou from './ForYou';
import Search from './Search';
import Question from './Question';
import Options from './Options';
import Playlist from './Playlist';
import InteractiveIcons from './InteractiveIcons';

type Props = {
    data: QA;
};

const Container = styled.View<{ height: number }>`
    flex: 1;
    height: ${(props) => props.height - Constants.statusBarHeight - 20 + 'px'};
`;

const BackgroundImage = styled(ImageBackground)`
    flex: 1;
`;

const SafeArea = styled.View`
    padding-top: ${Constants.statusBarHeight + 20 + 'px'};
    padding-right: 10px;
    padding-left: 10px;
    flex: 1;
`;

const TopBarContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`;

const MainAreaContainer = styled.View`
    flex: 1;
    justify-content: space-between;
`;

const OptionsIconsContainer = styled.View`
    flex-direction: row;
`

const QuizRenderer = ({ data }: Props) => {
    const { height } = useWindowDimensions();

    return (
        <Container height={height}>
            <BackgroundImage source={{ uri: data.question.image }} resizeMode="cover">
                <SafeArea>
                    <TopBarContainer>
                        <Timer />
                        <ForYou />
                        <Search />
                    </TopBarContainer>
                    <MainAreaContainer>
                        <Question question={data.question} />
                        <OptionsIconsContainer>
                            <Options question={data.question} answer={data.answer} />
                            <InteractiveIcons />
                        </OptionsIconsContainer>
                    </MainAreaContainer>
                </SafeArea>
                <Playlist playlist={data.question.playlist} />

            </BackgroundImage>
        </Container>
    );
};

export default React.memo(QuizRenderer);
