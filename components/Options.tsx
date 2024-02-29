import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Answer, Question } from '../Provider/AppProvider';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    gap: 12px;
    justify-content: flex-end;
`;

const Description = styled.View`
    margin: 10px 0;
`;

const DescriptionText = styled.Text`
    color: white;
    font-size: 14px;
`;

const OptionButton = styled(TouchableOpacity)<{ showCorrectStyle?: boolean; showIncorrectStyle?: boolean }>`
    padding: 10px;
    background-color: rgba(130, 130, 130, 0.9);
    ${(props) => props.showCorrectStyle && 'background-color: rgb(53, 159, 129);'}
    ${(props) => props.showIncorrectStyle && 'background-color: rgb(178, 60, 60);'}
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
`;

const TextButton = styled.Text`
    color: white;
    font-size: 16px;
    max-width: 80%;
`;

const ThumbImage = styled.Image`
    width: 50px;
    height: 50px;
`
const ThumbUpImage = styled(ThumbImage)`
    transform: scaleX(-1);
`
const ThumbDownImage = styled(ThumbImage)`
    transform: rotate(180deg);
`

type Props = {
    question: Question;
    answer: Answer;
};

const Options = ({ question, answer }: Props) => {
    const [userAnswer, setUserAnswer] = useState<string | null>(null);
    const isCorrect = userAnswer === answer.correct_options[0].id;

    const userHasAnswered = userAnswer !== null;

    const handleSelect = (id: string) => {
        if (userHasAnswered) return;
        setUserAnswer(id);
    };
    return (
        <Container>
            {question.options.map((option) => {
                const selectedByUser = userAnswer === option.id;
                const isTheRightOption = answer.correct_options[0].id === option.id;

                const showThumbUp = isTheRightOption && userHasAnswered && isCorrect;
                const showThumbDown = selectedByUser && !isCorrect;
                return (
                    <OptionButton
                        key={option.id}
                        onPress={() => handleSelect(option.id)}
                        showCorrectStyle={isTheRightOption && userHasAnswered}
                        showIncorrectStyle={showThumbDown}
                        disabled={userHasAnswered}>
                        <TextButton>{option.answer}</TextButton>
                        {showThumbUp && <ThumbUpImage source={require('../assets/correct.gif')} />}
                        {showThumbDown && <ThumbDownImage source={require('../assets/wrong.gif')} />}
                    </OptionButton>
                );
            })}
            <Description>
                <DescriptionText>{question.user.name}</DescriptionText>
                <DescriptionText>{question.description}</DescriptionText>
            </Description>
        </Container>
    );
};

export default React.memo(Options);
