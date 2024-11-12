const PokemonItem = ({ id, name, types }) => {
    return (
        <li key={id + name}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" srcSet={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            {name}
            {id}
        </li>
    );
};

export default PokemonItem;