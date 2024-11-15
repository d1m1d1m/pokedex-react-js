import './App.css';
import { Fragment } from "react";
import logo from './assets/logo.png';
import Pokedex from './components/Pokedex';

const App = () => {
    return (
        <Fragment>
            <div className='h-screen flex'>
                <aside className='h-full w-fit flex flex-col shadow-md'>
                    <header className='flex items-center justify-center border p-2'>
                        <img className='size-12' src={logo} alt="" />
                    </header>

                    <ul className='flex flex-col items-center p-2'>
                        <li className='my-2'>
                            <a href="#">Pokémon</a>
                        </li>
                        <li className='my-2'>
                            <a href="#">Items</a>
                        </li>
                        <li className='my-2'>
                            <a href="#">Moves</a>
                        </li>
                    </ul>
                </aside>

                <Pokedex/>
            </div>
        </Fragment>
    );
}

export default App;