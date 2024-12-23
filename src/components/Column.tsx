import {ColumnContainer, ColumnTitle} from '../styled';
import {useAppState} from '../store/AppStateContext';
import {Card} from './Card';
import {AddNewItem} from './AddNewItem';

interface ColumnProps {
    index: number;
    id: string;
    text: string;
}
export const Column = ({text, index, id}: ColumnProps) => {
    const {list, addTask} = useAppState();

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {list[index].tasks.map((task) => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem
                onAdd={(text) => addTask(id, text)}
                toggleButtonText='+ Add another task'
                dark
            />
        </ColumnContainer>
    );
};

export default Column;
