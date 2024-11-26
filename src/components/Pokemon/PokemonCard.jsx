import clsx from "clsx";
import PokemonTypeIcon from "../TypeIcon/PokemonTypeIcon";
import PokeballIcon from "../../assets/PokeballIcon";

const PokemonCard = ({ pokemon }) => {
    const PRIMARY_TYPE = pokemon.types[0].type.name;

    return (
        <li
            key={pokemon.name}
            className={clsx(
                "group flex justify-between items-center rounded-2xl shadow-lg outline py-3 px-6 overflow-clip",
                "hover:cursor-pointer",
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
                    "bg-steel outline-steel/30": PRIMARY_TYPE === 'steel',
                }
            )}
        >
            <div className="flex flex-col text-slate-800">
                <div className="font-semibold bg-black/30 text-white/75 w-fit pr-3 rounded-full">
                    <span className="px-2 rounded-full">#</span>
                    <span>{pokemon.id}</span>
                </div>
                <h2 className="uppercase font-semibold my-2 text-xl">{pokemon.name}</h2>

                <ul className="flex">
                    {pokemon.types.map(({ type }) => (
                        <li key={pokemon.name + type.name} className="flex items-center capitalize text-sm mr-2 bg-white/20 rounded-full pr-3">
                            <span className="bg-white/50 p-1 rounded-full"><PokemonTypeIcon className="size-4 text-black/60" name={type.name}/></span>
                            <span className="ml-2">{type.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex justify-center items-center h-full">
                <img
                    className="relative z-10 w-24 h-24 drop-shadow-md"
                    src={pokemon.sprites.front_default}
                    alt={`Sprite of ${pokemon.name}`}
                />
                <PokeballIcon className="absolute z-0 size-44 rotate-45 -right-10 text-white/15"/>
            </div>
        </li>
    );
};

export default PokemonCard;