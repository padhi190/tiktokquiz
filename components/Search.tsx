import React from 'react';
import styled from 'styled-components/native';
import SearchIcon from '../assets/search.svg';

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Search = () => {
    return (
        <Container>
            <SearchIcon width={25} />
        </Container>
    );
};

export default Search;
