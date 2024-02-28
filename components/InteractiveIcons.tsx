import { Ionicons as Icons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';

const OuterContainer = styled.View`
    justify-content: flex-end;
    gap: 10px
`;

const Container = styled.View`
    align-items: center;
`;

const StyledText = styled.Text`
    color: white;
    font-size: 16px;
`;

const ICON_SIZE = 30;
const InteractiveIcons = () => {
    return (
        <OuterContainer>
            <Icons name='add-circle' size={ICON_SIZE * 1.3} color={'white'} />
            <Icon iconName="heart" text="87" />
            <Icon iconName="chatbubble-ellipses" text="2" />
            <Icon iconName="bookmarks" text="203" />
            <Icon iconName="arrow-redo" text="17" />
        </OuterContainer>
    );
};

const Icon = ({ iconName, text }: { iconName: keyof typeof Icons.glyphMap; text: string }) => {
    return (
        <Container>
            <Icons name={iconName} size={ICON_SIZE} color={'white'} />
            <StyledText>{text}</StyledText>
        </Container>
    );
};

export default InteractiveIcons;
