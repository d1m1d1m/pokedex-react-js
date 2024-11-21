import PokemonCardConfig from "../constants/PokemonCardConfig";

const PokemonTypeList = ({ types }) => {
    const primaryType = types[0].type.name;
    const cardConfig = PokemonCardConfig[primaryType];

    return(
        <ul className="flex">
            {types.map(
                ({ type }, index) => (
                    <li
                        key={type.name + index}
                        className="flex items-center m-2 capitalize border-2 border-opacity-10 py-1 px-2 text-sm rounded-md bg-normal-type-300 bg-opacity-30"
                    >
                        <div>{PokemonCardConfig[type.name].icon}</div>
                        <span className="ml-1">{type.name}</span>
                    </li>
                )
            )}
        </ul>
    );
};

const PokemonCard = ({ id, sprites, species, types }) => {
    const cardConfig = PokemonCardConfig[types[0].type.name];

    return (
        <li className={`flex flex-col items-center shadow-md rounded-lg p-4 pt-10 mt-12 border ${cardConfig.background}`}>
            <img
                className="drop-shadow-md -top-14 w-24 h-24"
                src={sprites.front_default}
                onError={(e) => console.log(e)}
            />
            
            <h2 className="flex flex-col-reverse items-center justify-between capitalize my-2">
                <span>{species.name}</span>
                <span className="font-bold bg-slate-100 text-slate-600 px-2 rounded-lg">#{id}</span>
            </h2>

            <PokemonTypeList types={types}/>
        </li>
    );
};

export default PokemonCard;