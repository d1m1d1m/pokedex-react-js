import { useEffect } from "react";
import { useState } from "react";
import { getResource } from '../utils/PokeApi';
import { cn } from '../utils/utils';

const TypeFilter = ({ onTypeFilterChange }) => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('unknown');

    useEffect(() => {
        getResource('types').then(({ data }) => {
            setTypes(data.results);
            setSelectedType(data.results[0].name);
        });
    }, []);

    const onSelectedTypeChange = (e) => {
        const type = e.target.value;
        onTypeFilterChange(type);
        setSelectedType(type);
    }

    return (
        <form className="p-4" action="#">
            {/* <p>current value: {selectedType}</p> */}
            <h2 className="mb-2">Filtre : TYPES</h2>
            <ul className="flex flex-row flex-wrap gap-4">
                {
                    types.map(({ name, url }) => (
                        <li key={name + url} className="flex">
                            <label className={cn({
                                "bg-gray-200 py-2 px-4 rounded-full hover:cursor-pointer hover:opacity-50": true,
                                "bg-pokered-500": selectedType === name
                            })} htmlFor={name}>
                                <span className={cn({
                                    "capitalize text-white font-bold": true,
                                    "text-gray-600": !(selectedType === name)
                                })}>{name}</span>
                                <input
                                    className="hidden"
                                    id={name}
                                    type="radio"
                                    name="type"
                                    value={name}
                                    checked={selectedType === name}
                                    onChange={onSelectedTypeChange}
                                />
                            </label>
                        </li>
                    ))
                }
            </ul>


        </form>
    );
}

export default TypeFilter;