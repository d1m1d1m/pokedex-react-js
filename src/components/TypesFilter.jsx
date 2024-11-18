import { useEffect, useState } from "react";
import RadioGroup from "./RadioGroup";

const pokemonTypes = [
    { label: "Normal", value: "normal" },
    { label: "Fire", value: "fire" },
    { label: "Water", value: "water" },
    { label: "Grass", value: "grass" },
    { label: "Electric", value: "electric" },
];

const PokemonTypesFilter = ({ value, onChange }) => {
    const [selected, setSelected] = useState(value);

    return (
        <RadioGroup
            name='types'
            items={pokemonTypes}
            value={selected}
            onChange={(val) => {
                setSelected(val);
                onChange(val);
            }}
        />
    );
}
 
export default PokemonTypesFilter;