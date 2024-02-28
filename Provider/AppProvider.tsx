import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'https://cross-platform.rp.devfactory.com';

export type Question = {
    type: string;
    id: number;
    playlist: string;
    description: string;
    image: string;
    question: string;
    options: {
        id: string;
        answer: string;
    }[];
    user: {
        name: string;
        avatar: string;
    };
};

export type Answer = {
    id: number;
    correct_options: {
        id: string;
        answer: string;
    }[];
};

export type QA = {
    question: Question;
    answer: Answer;
};

export type ContextType = {
    data: QA[];
    getNData: (number?:number) => void;
    isLoading: boolean;
    isError: boolean;
    minute: number;
};

const AppContext = createContext<ContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<QA[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [minute, setMinute] = useState(0);
    useEffect(() => {
        const timerId = setInterval(() => {
            setMinute(min => min + 1);
        }, 1000 * 60);

        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        getNData();
    },[])

    const getData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            console.log('calling api...')
            const response = await fetch(`${BASE_URL}/for_you`);
            if (!response.ok) {
                throw new Error('Failed to fetch question');
            }
            const question = (await response.json()) as Question;
            console.log(`question: ${question.question}`)
            const answerResponse = await fetch(`${BASE_URL}/reveal?id=${question.id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch answer');
            }
            const answer = (await answerResponse.json()) as Answer;
            setData((prevData) => [...prevData, { question, answer }]);
        } catch (error) {
            setIsError(false);
        } finally {
            setIsLoading(false);
        }
    };

    const getNData = (numberOfData = 3 ) => {
        while (numberOfData > 0) {
            (async () => await getData())();
            numberOfData--;
        }
    }
    return <AppContext.Provider value={{ data, getNData, isLoading, isError, minute }}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useAppContext = () => {
    const value = useContext(AppContext);
    if (!value) throw new Error('App context can only be called from within AppContext Provider');

    return value;
};
