import Pokedex from './components/Pokedex';
import { usePokedexSearchContext } from './context/PokedexSearchProvider';

const App = () => {
    const { search, type } = usePokedexSearchContext();

    return (
        <>
            <main className='overflow-y-hidden flex h-screen'>
                <Pokedex />
            </main>
        </>
    );
};

export default App;