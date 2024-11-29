const useInfiniteScroll = (namedEndpoint) => {
    return useInfiniteQuery(
        {
            queryKey: ['pokemons'],
            queryFn: async ({ pageParam }) => {
                const data = await fetch(pageParam).then((res) => res.json());
                return data;
            },
            initialPageParam: 'https://pokeapi.co/api/v2/pokemon',
            getNextPageParam: (lastPage) => lastPage.next,
        }
    );
};