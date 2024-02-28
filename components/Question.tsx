import { Question as QuestionType } from '../Provider/AppProvider';
import styled from 'styled-components/native';

const Container = styled.View`
    margin-top: 50px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 10px;
`;

const QuestionText = styled.Text`
    color: white;
    font-size: 24px;
`;

type Props = {
    question: QuestionType;
};

const Question = ({ question }: Props) => {
    return (
        <Container>
            <QuestionText>{question.question}</QuestionText>
        </Container>
    );
};

export default Question;
