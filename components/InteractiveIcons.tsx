import React from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import Heart from '../assets/heart.svg';
import Comment from '../assets/comment.svg';
import Bookmark from "../assets/bookmark.svg";
import Share from "../assets/share.svg";

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
            <Icon icon={Heart} text="87" />
            <Icon icon={Comment} text="2" />
            <Icon icon={Bookmark} text="203" />
            <Icon icon={Share} text="17" />
        </OuterContainer>
    );
};

const Icon = ({ icon: Icon, text }: { icon: React.JSXElementConstructor<{height: number}>; text: string }) => {
    return (
        <Container>
            <Icon height={ICON_SIZE} />
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
