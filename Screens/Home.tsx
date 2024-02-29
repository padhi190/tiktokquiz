import { FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import React, { useMemo } from 'react';
import { useAppContext } from '../Provider/AppProvider';
import QuizRenderer from '../components/QuizRenderer';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
    flex: 1;
`;

const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Home = () => {
    const { data, getNData, isLoading } = useAppContext();
    const windowHeight = useMemo(() => Dimensions.get('window').height, []);

    if (data.length == 0 && isLoading) return (
        <LoadingContainer>
            <ActivityIndicator size={'large'} />
        </LoadingContainer>
    )

    return (
        <HomeContainer>
            <FlatList
                data={data}
                keyExtractor={() => Math.random().toString()}
                renderItem={({ item }) => <QuizRenderer data={item} />}
                onEndReached={() => getNData()}
                onEndReachedThreshold={0.8}
                snapToAlignment="start"
                decelerationRate={'fast'}
                snapToInterval={windowHeight - Constants.statusBarHeight - 20}
            />
        </HomeContainer>
    );
};

export default Home;
