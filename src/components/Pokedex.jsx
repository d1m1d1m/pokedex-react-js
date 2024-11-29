import usePokeAPI from "../hooks/usePokeApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { throttle } from "lodash";
import { motion, AnimatePresence } from "motion/react";
import PokemonCard from "./Pokemon/PokemonCard";
import { useRef } from "react";

const Pokedex = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: async ({ pageParam }) => {
            const data = await fetch(pageParam).then((res) => res.json());
            const pokemonList = data.results;

            const pokemonDataPromises = pokemonList.map(
                (pokemonResource) => fetch(pokemonResource.url.replace('-species','')).then(res => res.json())
            );
            const pokemonData = await Promise.all(pokemonDataPromises)

            console.log(pokemonData)

            return { ...data, results: pokemonData.filter(p => p.is_default) };
        },
        initialPageParam: 'https://pokeapi.co/api/v2/pokemon-species',
        getNextPageParam: (lastPage) => lastPage.next,
    });

    const scrollIsDown = (e) => {
        const elmt = e.target;
        const isBottom = elmt.scrollHeight - elmt.scrollTop <= elmt.clientHeight;
        if (isBottom && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        };
    }

    if (status === 'pending') {
        return <p className="animate-bounce">Loading ...</p>
    }
    else if (status === 'error') {
        return <p>Error: {error.message}</p>
    }
    else {
        return (
            <div className="flex flex-col h-full">
                <ul onScroll={scrollIsDown} className="overflow-y-scroll h-full flex flex-col gap-6 p-6">
                    {data.pages.map((group) => group.results.map((r,i) => <PokemonCard pokemon={r}/>))}
                </ul>
            </div>
        );
    }
};

export default Pokedex;