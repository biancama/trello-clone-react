import {PropsWithChildren} from 'react';
import {ColumnContainer, ColumnTitle} from '../styled';

interface ColumnProps {
    text: string;
}
export const Column = ({text, children}: PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    );
};

export default Column;
