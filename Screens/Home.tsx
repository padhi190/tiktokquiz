import { View, Text, FlatList, SafeAreaView, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useAppContext } from '../Provider/AppProvider';
import QuizRenderer from '../components/QuizRenderer';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
    flex: 1;
`
const Separator = styled.View`
    height: 10px;
    background-color: white;
`
const Home = () => {
    const { data, getData } = useAppContext();

    useEffect(() => {
        getData();
    }, []);
    return (
        <HomeContainer>
            <FlatList
                data={data}
                keyExtractor={() => Math.random().toString()}
                renderItem={({ item }) => <QuizRenderer data={item} />}
                onEndReached={getData}
                onEndReachedThreshold={0.8}
                snapToAlignment='start'
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </HomeContainer>
    );
};

export default Home;
