import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { QA } from '../Provider/AppProvider';
import styled from 'styled-components/native';
import PlaylistIcon from '../assets/playlist.svg';

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
`;

const PlaylistContainer = styled.View`
    flex-direction: row;
    padding: 10px;
    gap: 4px;
`;

const StyledText = styled.Text`
    color: white;
`;

type Props = {
    playlist: QA['question']['playlist'];
};

const Playlist = ({ playlist }: Props) => {
    return (
        <Container>
            <PlaylistContainer>
                <PlaylistIcon color={'white'} width={20} />
                <StyledText>Playlist - {playlist}</StyledText>
            </PlaylistContainer>
            <MaterialIcons color={'white'} size={20} name="chevron-right" />
        </Container>
    );
};

export default Playlist;
