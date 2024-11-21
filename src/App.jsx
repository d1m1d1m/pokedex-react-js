import './App.css';
import { Fragment } from "react";
import logo from './assets/img/logo.png';
import Pokedex from './components/Pokedex';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <Fragment>
            <QueryClientProvider client={queryClient}>
                <div className='h-screen flex'>
                    <aside className='h-full w-fit flex flex-col shadow-md'>
                        <header className='flex items-center justify-center border p-2'>
                            <img className='size-12' src={logo} alt="" />
                        </header>
                    </aside>

                    <Pokedex />
                </div>
            </QueryClientProvider>
        </Fragment>
    );
}

export default App;