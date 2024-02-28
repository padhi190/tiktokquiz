import { View, Text } from 'react-native';
import React from 'react';
import { Answer, Question } from '../Provider/AppProvider';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    gap: 4px;
`;

const Description = styled.View`
    margin: 10px 0;
`

const DescriptionText = styled.Text`
    color: white;
    font-size: 14px;
`

type Props = {
    question: Question;
    answer: Answer;
};

const Options = ({ question, answer }: Props) => {
    return (
        <Container>
            {question.options.map((option) => (
                <Text key={option.id}>{option.answer}</Text>
            ))}
            <Description>
                <DescriptionText>{question.user.name}</DescriptionText> 
                <DescriptionText>{question.description}</DescriptionText> 
            </Description>
        </Container>
    );
};

export default Options;
