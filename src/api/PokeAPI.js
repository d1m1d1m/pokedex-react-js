

export class Pokemon {
    static BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

    static fetch(start = 0, end = 25) {
        const TARGET_URL = new URL(BASE_URL);

        TARGET_URL.searchParams.set('offset', start);
        TARGET_URL.searchParams.set('limit', end);

        
    };
};