import {nanoid} from 'nanoid';
import {createContext, useContext, useReducer} from 'react';

interface Task {
    id: string;
    text: string;
}

interface TaskList {
    id: string;
    text: string;
    tasks: Task[];
}

interface AppState {
    list: TaskList[];
}

export const initialContext: AppState = {
    list: [
        {
            id: '0',
            text: 'To Do',
            tasks: [{id: 'c0', text: 'Generate app scaffold'}],
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{id: 'c2', text: 'Learn Typescript'}],
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{id: 'c3', text: 'Begin to use static typing'}],
        },
    ],
};
type AppStateContextValue = AppState & {
    addList: (text: string) => void;
    addTask: (listId: string, text: string) => void;
};

const AppStateContext = createContext<AppStateContextValue | null>(null);

export const useAppState = () => {
    const appContext = useContext(AppStateContext);
    if (appContext === null) {
        throw new Error('AppContext is null -  this should not be the case!');
    }
    return appContext;
};

type Action =
    | {
          type: 'ADD_LIST';
          payload: string;
      }
    | {
          type: 'ADD_TASK';
          payload: {text: string; listId: string};
      };

function appStateReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'ADD_LIST':
            return {
                ...state,
                list: [
                    ...state.list,
                    {id: nanoid(), text: action.payload, tasks: []},
                ],
            };
        case 'ADD_TASK':
            const targetTaskIndex = state.list.findIndex(
                (tl) => tl.id === action.payload.listId,
            );
            state.list[targetTaskIndex].tasks.push({
                id: nanoid(),
                text: action.payload.text,
            });
            return {
                ...state,
            };
        default:
            return state;
    }
}
export default function AppStateProvider({
    children,
}: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(appStateReducer, initialContext);

    const ctx: AppStateContextValue = {
        list: state.list,
        addList: (text: string) => {
            dispatch({type: 'ADD_LIST', payload: text});
        },
        addTask: (listId: string, text: string) => {
            dispatch({type: 'ADD_TASK', payload: {listId: listId, text: text}});
        },
    };

    return (
        <AppStateContext.Provider value={ctx}>
            {children}
        </AppStateContext.Provider>
    );
}
