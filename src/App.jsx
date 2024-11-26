import Pokedex from './components/Pokedex';
import logo from "./assets/logo.png";
import PokemonGeneration from './constants/PokemonGenerations';
import RadioGroup from './components/RadioGroup';

const App = () => {
    return (
        <div className='flex flex-col overflow-hidden h-screen min-h-screen bg-slate-200'>
            <aside className='relative flex items-start bg-white shadow-md'>
                <div className='bg-white w-96'>
                    <img className='flex justify-center items-center size-16' src={logo} alt="" />
                </div>
            </aside>

            <main className='flex'>
                <Pokedex />
            </main>
        </div>
    );
};

export default App;