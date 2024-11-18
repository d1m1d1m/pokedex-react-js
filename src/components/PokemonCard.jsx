const PokemonCard = ({ id, sprites, species, types }) => {
    return (
        <li className="relative flex flex-col items-center shadow-md rounded-lg p-4 pt-10 mt-12 border">
            <img className="absolute drop-shadow-md -top-14" src={sprites.front_default} alt="" />

            <h2 className="flex flex-col-reverse items-center justify-between capitalize my-2">
                <span>{species.name}</span>
                <span className="font-bold bg-slate-100 text-slate-600 px-2 rounded-lg">#{id}</span>
            </h2>

            <ul className="flex">
                {types.map(({ type }) => <li key={species.name + " " + type.name} className="m-2 capitalize border px-4 text-sm rounded-md">{type.name}</li>)}
            </ul>
        </li>
    );
}

export default PokemonCard;