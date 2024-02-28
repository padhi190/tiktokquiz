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
    getNData: (number?: number) => void;
    isLoading: boolean;
    isError: boolean;
    timeStarted: Date;
};

const AppContext = createContext<ContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<QA[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const timeStarted = new Date();

    useEffect(() => {
        getNData();
    }, []);

    const getData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(`${BASE_URL}/for_you`);
            if (!response.ok) {
                throw new Error('Failed to fetch question');
            }
            const question = (await response.json()) as Question;
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

    const getNData = (numberOfData = 3) => {
        while (numberOfData > 0) {
            (async () => await getData())();
            numberOfData--;
        }

        /* Keep the list small, remove old data if it's more than 10 */
        if (data.length > 10) {
            const newData = [...data];
            newData.splice(0, 5);
            setData(newData);
        }
    };
    return (
        <AppContext.Provider value={{ data, getNData, isLoading, isError, timeStarted }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

export const useAppContext = () => {
    const value = useContext(AppContext);
    if (!value) throw new Error('App context can only be called from within AppContext Provider');

    return value;
};
