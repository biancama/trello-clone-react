import './App.css';
import AppStateProvider from './store/AppStateContext';
import Container from './components/Container';

function App() {
    return (
        <AppStateProvider>
            <Container />
        </AppStateProvider>
    );
}

export default App;
