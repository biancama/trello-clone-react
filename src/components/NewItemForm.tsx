import {useRef} from 'react';
import {NewItemFormContainer, NewItemButton, NewItemInput} from '../styled';

interface NewItemFormProps {
    onAdd(text: string): void;
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} />
            <NewItemButton onClick={() => onAdd(inputRef.current!.value)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    );
};
