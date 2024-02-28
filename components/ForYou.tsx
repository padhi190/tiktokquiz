import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
`;
const Separator = styled.View`
    height: 5px;
    width: 30px;
    background-color: #fff;
`;

const StyledText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

const ForYou = () => {
    return (
        <Container>
            <StyledText>ForYou</StyledText>
            <Separator />
        </Container>
    );
};

export default ForYou;
