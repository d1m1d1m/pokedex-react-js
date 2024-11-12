import { XIcon } from 'lucide-react';
import './style.css';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const SearchBar = ({ onSubmit, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [searchTerms, setSearchTerms] = useState('');
    
    const inputElmt = useRef(null);

    useEffect(() => {
        if(!focused) return;
        inputElmt.current.focus();
    }, [focused]);

    const onSearchTermsChange = (e) => setSearchTerms(e.target.value);
    const clearSearchTerms = (e) => {
        setSearchTerms('');
        inputElmt.current.focus();
    };
    const submitSearchTerms = () => onSubmit(searchTerms);

    return (
        <label className={`searchbar ${focused ? 'searchbar--focused' : ''}`}>
            <input
                ref={inputElmt}
                className='searchbar__input'
                placeholder='Rechercher sur PokéApi'
                type="text"
                value={searchTerms}
                
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={onSearchTermsChange}
                {...props}
            />

            <button
                className='searchbar__reset'
                disabled={!searchTerms.length}
                title='Réinitialiser'

                onClick={clearSearchTerms}
            >
                <XIcon/>
            </button>

            <button
                className='searchbar__submit'
                disabled={!searchTerms.length}
                title='Rechercher'

                onClick={submitSearchTerms}
            >
                <SearchIcon/>
            </button>
        </label>
    );
};

export default SearchBar;