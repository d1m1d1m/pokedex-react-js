import { useState, useEffect } from "react";
import RadioGroup from "./RadioGroup";
import { PokeApi } from "../utils/PokeApi";

const pokemonTypes = [
    { label: "Normal", value: "normal" },
    { label: "Fighting", value: "fighting" },
    { label: "Flying", value: "flying" },
    { label: "Poison", value: "poison" },
    { label: "Ground", value: "ground" },
    { label: "Rock", value: "rock" },
    { label: "Bug", value: "bug" },
    { label: "Ghost", value: "ghost" },
    { label: "Steel", value: "steel" },
    { label: "Fire", value: "fire" },
    { label: "Water", value: "water" },
    { label: "Grass", value: "grass" },
    { label: "Electric", value: "electric" },
    { label: "Psychic", value: "psychic" },
    { label: "Ice", value: "ice" },
    { label: "Dragon", value: "dragon" },
    { label: "Dark", value: "dark" },
    { label: "Fairy", value: "fairy" },
    { label: "Stellar", value: "stellar" },
    { label: "Unknown", value: "unknown" },
];

const Pokedex = () => {
    const [typeFilter, setTypeFilter] = useState('normal');
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        PokeApi.get(`https://pokeapi.co/api/v2/type/${typeFilter}`)
            .then(({ data }) => Promise.all(
                data.pokemon.map(
                    async (currentPokemon) => {
                        const pokemonReq = await PokeApi.get(currentPokemon.pokemon.url);
                        const speciesReq = await PokeApi.get(pokemonReq.data.species.url);

                        pokemonReq.data.species = speciesReq.data;
                        return pokemonReq.data;
                    }
                )
            ))
            .then((all) => {
                setPokemons(all);
            })
    }, [typeFilter]);

    return (
        <div className="overflow-hidden flex flex-col container mx-auto px-24">
            <div className="">
                <h1 className="text-2xl">Filtres</h1>

                <RadioGroup
                    name="types"
                    items={pokemonTypes}
                    value={typeFilter}
                    onChange={(nextType) => {
                        setTypeFilter(nextType);
                    }}
                />
            </div>

            {
                pokemons.length ?
                    <ul className="overflow-y-scroll w-full grid grid-cols-3 gap-6 auto">
                        {
                            pokemons.map(({ id, name, sprites, types, species }) => (
                                <li className="relative flex flex-col items-center shadow-md rounded-lg p-4 pt-10 mt-12 border">
                                    <img className="absolute drop-shadow-md -top-14" src={sprites.front_default} alt="" />

                                    

                                    <h2 className="flex flex-col-reverse items-center justify-between capitalize my-2">
                                        <span>{species.name}</span>
                                        <span className="font-bold bg-slate-100 text-slate-600 px-2 rounded-lg">#{id}</span>
                                    </h2>

                                    <ul className="flex">
                                        { types.map(({type}) => <li className="m-2 capitalize border px-4 text-sm rounded-md">{type.name}</li>) }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                    :
                    <p>Pas de pokémon avec le type {typeFilter}</p>
            }
        </div>
    );
}

export default Pokedex;