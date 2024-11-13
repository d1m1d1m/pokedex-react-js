import { useState } from "react";
import { CLIENTS } from "../utils/PokeApi";
import TypeFilter from "./TypeFilter";
import { Suspense } from "react";

// Pokemon entry === PokemonType

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchFilter, setSearchFilter] = useState('BY_POKEMON');

    return (
        <div>
            <TypeFilter
                onTypeFilterChange={(type) => {
                    CLIENTS.types.get(type).then(({ data }) => Promise.all(
                        data.pokemon.map(async ({ pokemon, slot }) => {
                            const req = await CLIENTS.pokemon.get(pokemon.name);
                            return req.data;
                        })
                    )).then(all => setPokemons(all))
                }}
            />

            <Suspense fallback={<p>Loading ...</p>}>
                <ul>
                    {
                        pokemons.map(({ id, name, sprites }) => (
                            <li>
                                <img src={sprites.front_default} alt="" />
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </Suspense>


        </div>
    );
}

export default Pokedex;