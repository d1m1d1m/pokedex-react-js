import { useState, useEffect } from "react";
import RadioGroup from "./RadioGroup";
import { PokeApi } from "../utils/PokeApi";
import PokemonList from "./PokemonList";
import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";

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
    const [searchTerms, setSearchTerms] = useState('');
    const [typeFilter, setTypeFilter] = useState('normal');

    const { isPending, error, data } = useQuery({
        queryKey: ['pokemon-by-types', typeFilter],
        queryFn: () =>
            PokeApi.get(`https://pokeapi.co/api/v2/type/${typeFilter}`).then((req) => {
                const allPokemonRequests = Promise.all(
                    req.data.pokemon.map(
                        async (currentPokemon) => {
                            const pokemonReq = await PokeApi.get(currentPokemon.pokemon.url);
                            return pokemonReq.data;
                        }
                    )
                ).then((debugPokemons) => debugPokemons.filter((p) => p.is_default));

                return allPokemonRequests;
            }),
    });

    return (
        <div className="overflow-hidden flex flex-col container mx-auto px-24">
            <header>
                <div>
                    <h1 className="text-2xl">Rechercher</h1>
                    <label className="flex border w-fit p-1 rounded-full pr-4 bg-slate-100" htmlFor="search">
                        <div className="bg-pokered-500 text-white p-2 rounded-full">
                            <SearchIcon className="size-5"/>
                        </div>
                        <input
                            id="search"
                            className="bg-transparent outline-none pl-3 pr-16"
                            type="text"
                            value={searchTerms}
                            onChange={(e) => setSearchTerms(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <h1 className="text-2xl">Filtres</h1>

                    <RadioGroup
                        name="types"
                        items={pokemonTypes}
                        value={typeFilter}
                        onChange={setTypeFilter}
                    />
                </div>
            </header>

            {error && "Erreur"}
            {isPending && "Chargement en cours ..."}
            {data && <PokemonList
                pokemons={data}
                filterName={searchTerms}
            />}
        </div>
    );
}

export default Pokedex;