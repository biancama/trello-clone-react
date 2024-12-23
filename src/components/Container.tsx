import {useAppState} from '../store/AppStateContext';
import {AppContainer} from '../styled';
import Column from './Column';

export default function Container() {
    const {list} = useAppState();
    return (
        <AppContainer>
            {list.map((tks, index) => (
                <Column
                    index={index}
                    key={'col-' + tks.id}
                    text={tks.text}
                    id={tks.id}
                />
            ))}
        </AppContainer>
    );
}
