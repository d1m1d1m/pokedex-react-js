import { useContext } from "react";
import { useState, createContext } from "react";

const TYPES = [
    { label: "Grass", value: "grass" },
    { label: "Fire", value: "fire" },
    { label: "Water", value: "water" },
    { label: "Normal", value: "normal" },
    { label: "Flying", value: "flying" }
];

const PokedexSearchContext = createContext({
    search: '',
    type: ''
});
export const usePokedexSearchContext = () => useContext(PokedexSearchContext);

export const PokedexSearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('normal');

    return (
        <PokedexSearchContext.Provider value={{
            search, type
        }}>
            <form action="#">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un pokemon"/>

                <div className="flex flex-col">
                    {TYPES.map((item, i) => (
                        <label key={item.name + String(i)}>
                            <span>{item.label}</span>
                            <input onChange={(e) => setType(e.target.value)} type="radio" name="type" id={item.value} value={item.value}/>
                        </label>
                    ))}
                </div>
            </form>

            {children}
        </PokedexSearchContext.Provider>
    );
};