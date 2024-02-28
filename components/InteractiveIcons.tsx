import { Ionicons as Icons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

const OuterContainer = styled.View`
    justify-content: flex-end;
    gap: 10px;
`;

const Container = styled.View`
    align-items: center;
`;

const AvatarContainer = styled.View`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid white;
    overflow: hidden;
    justify-content: baseline;
    align-items: center;
    margin-bottom: 10px;
`;

const AvatarImage = styled(ImageBackground)`
    width: 35px;
    height: 35px;
`;

const StyledText = styled.Text`
    color: white;
    font-size: 16px;
`;

const ICON_SIZE = 30;

type Props = {
    avatar: string;
};

const InteractiveIcons = ({ avatar }: Props) => {
    return (
        <OuterContainer>
            <Avatar avatar={avatar} />
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

const Avatar = ({ avatar }: { avatar: string }) => {
    return (
        <AvatarContainer>
            <AvatarImage source={{ uri: avatar }} resizeMode="cover" />
        </AvatarContainer>
    );
};

export default InteractiveIcons;
