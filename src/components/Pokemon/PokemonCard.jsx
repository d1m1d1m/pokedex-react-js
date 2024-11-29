import clsx from "clsx";
import PokeballIcon from "../../assets/PokeballIcon";
import PokemonTypesList from "./PokemonTypesList";
import { useInView, useScroll } from "motion/react";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";
import PokeballOriginalIcon from "../../assets/PokeballOriginalIcon";
import { useState } from "react";

const PokemonCard = ({ pokemon }) => {
    const [isCatched, setIsCatched] = useState(false);
    const PRIMARY_TYPE = pokemon.types[0].type.name;

    const toggleIsCatched = (e) => setIsCatched(!isCatched)

    return (
        <li
            onClick={toggleIsCatched}
            key={pokemon.name}
            className={clsx(
                "flex",
                "rounded-2xl shadow-lg outline py-3 px-6 overflow-clip",
                "group hover:cursor-pointer",
                {
                    "bg-grass outline-grass/30": PRIMARY_TYPE === 'grass',
                    "bg-fire outline-fire/30": PRIMARY_TYPE === 'fire',
                    "bg-water outline-water/30": PRIMARY_TYPE === 'water',
                    "bg-bug outline-bug/30": PRIMARY_TYPE === 'bug',
                    "bg-normal outline-normal/30": PRIMARY_TYPE === 'normal',
                    "bg-flying outline-flying/30": PRIMARY_TYPE === 'flying',
                    "bg-poison outline-poison/30": PRIMARY_TYPE === 'poison',
                    "bg-electric outline-electric/30": PRIMARY_TYPE === 'electric',
                    "bg-ground outline-ground/30": PRIMARY_TYPE === 'ground',
                    "bg-fairy outline-fairy/30": PRIMARY_TYPE === 'fairy',
                    "bg-fighting outline-fighting/30": PRIMARY_TYPE === 'fighting',
                    "bg-psychic outline-psychic/30": PRIMARY_TYPE === 'psychic',
                    "bg-rock outline-rock/30": PRIMARY_TYPE === 'rock',
                    "bg-ghost outline-ghost/30": PRIMARY_TYPE === 'ghost',
                    "bg-dragon outline-dragon/30": PRIMARY_TYPE === 'dragon',
                    "bg-dark outline-dark/30": PRIMARY_TYPE === 'dark',
                    "bg-ice outline-ice/30": PRIMARY_TYPE === 'ice',
                    "bg-steel outline-steel/30": PRIMARY_TYPE === 'steel'
                }
            )}
        >
            <div className="flex flex-col items-start text-slate-800">
                {/* Numéro du Pokémon */}
                <div className="font-semibold bg-black/30 text-white/75 w-fit pr-3 rounded-full flex items-center">
                    <PokeballOriginalIcon className={clsx("size-6",
                        {
                            "opacity-30": !isCatched,
                            "opacity-100": isCatched
                        }
                    )}/>
                    <span className="ml-2">{pokemon.id}</span>
                </div>

                {/* Nom du Pokémon */}
                <h2 className="uppercase font-semibold my-2 text-xl">
                    {pokemon.name}
                </h2>

                {/* Liste des types */}
                <PokemonTypesList types={pokemon.types} />
            </div>

            {/* Image et icône Pokéball */}
            <div className="relative flex justify-center items-center h-full ml-auto pl-10">
                <img
                    className="relative z-10 w-24 h-24 drop-shadow-md"
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={`Sprite of ${pokemon.name}`}
                />
                <PokeballIcon
                    className="absolute z-0 size-44 rotate-45 text-white/15"
                />
            </div>
        </li>
    );
};

export default PokemonCard;