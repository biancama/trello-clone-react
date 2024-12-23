import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: flex-start; /* Align Items Vertically */
    background: #33aaff;
`;

export const ColumnContainer = styled.div`
    width: 300px;
    min-height: 40px;
    margin: 10px 5px;
    padding: 8px 8px;
    background: #e0e0e0;
    border-radius: 3px;
`;

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
`;

export const CardContainer = styled.div`
    margin-top: 10px;
    padding: 6px 16px 12px;
    background: white;
    min-height: 32px;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<{$dark: boolean}>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${(props) => (props.$dark ? '#000' : '#fff')};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    width: 100%;

    transition: background 85ms ease-in;
    &:hover {
        background-color: #ffffff52;
    }
`;

export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

export const NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`;

export const NewItemButton = styled.button`
    border-radius: 3px;
    border: none;
    background: #5aac44;
    color: white;
    padding: 6px 12px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #00897b;
    }
`;
