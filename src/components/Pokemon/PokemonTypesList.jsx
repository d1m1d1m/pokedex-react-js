import PokemonTypeIcon from "./PokemonTypeIcon";

const PokemonTypeItem = ({ type }) => {
    return (
        <li className="flex items-center capitalize text-sm mr-2 bg-white/20 rounded-full pr-3">
            <span className="bg-white/50 p-1 rounded-full">
                <PokemonTypeIcon
                    className="size-4 text-black/60"
                    name={type.name}
                />
            </span>
            <span className="ml-2">
                {type.name}
            </span>
            
        </li>
    );
};

const PokemonTypesList = ({ types }) => {
    return (
        <ul className="flex">
            {types.map(({ type }) => <PokemonTypeItem key={type.name} type={type} />)}
        </ul>
    );
};

export default PokemonTypesList;