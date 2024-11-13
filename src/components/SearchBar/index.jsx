import { XIcon, SearchIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/utils'; 

const SearchBar = ({ onSubmit, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [searchTerms, setSearchTerms] = useState('');
    
    const inputElmt = useRef(null);

    useEffect(() => {
        if(!focused) return;
        inputElmt.current.focus();
    }, [focused]);

    const clearSearchTerms = (e) => {
        setSearchTerms('');
        inputElmt.current.focus();
    };
    const submitSearchTerms = () => onSubmit(searchTerms);

    return (
        <label className={cn({
            "flex items-center bg-gray-100 w-1/3 p-2 rounded-xl": true,
            "ring-2 ring-red-300": focused,
            "active:ring-2 active:ring-red-300": true
        })}>
            <input
                className='bg-transparent outline-none px-6 w-full'
                placeholder='Rechercher sur PokéApi'
                type="text"
                {...props}

                ref={inputElmt}
                value={searchTerms}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setSearchTerms(e.target.value)}
            />

            {/* Bouton de réinitialisation */}
            <button
                className={cn({
                    'flex items-center justify-center cursor-pointer hover:opacity-50 m-2 disabled:pointer-events-none': true,
                    'disabled:opacity-0': true
                })}
                disabled={!searchTerms.length}
                title='Réinitialiser'

                onClick={clearSearchTerms}
            >
                <XIcon className='size-4'/>
            </button>
            
            {/* Bouton de recherche */}
            <button
                className='bg-pokered-500 hover:bg-pokered-300 text-white p-2 flex items-center justify-center rounded-lg cursor-pointer'
                disabled={!searchTerms.length}
                title='Rechercher'

                onClick={submitSearchTerms}
            >
                <SearchIcon className='size-5'/>
            </button>
        </label>
    );
};

export default SearchBar;