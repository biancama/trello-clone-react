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
    min-height: auto;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`;
