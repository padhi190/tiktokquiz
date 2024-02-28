import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Search = () => {
    return (
        <Container>
            <Ionicons color={'white'} size={25} name="search" />
        </Container>
    );
};

export default Search;
