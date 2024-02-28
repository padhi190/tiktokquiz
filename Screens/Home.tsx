import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useAppContext } from '../Provider/AppProvider';

const Home = () => {
    const { data, getData } = useAppContext();

    useEffect(() => {
        getData();
    },[])
    return (
        <View>
            <Text>{JSON.stringify(data,null,2)}</Text>
        </View>
    );
};

export default Home;
