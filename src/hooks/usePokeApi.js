import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { useEffect, useState } from "react";

// Axios and cahing setup
const PokeApi = setupCache(
    axios.create()
);

export const usePokeApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        const { data } = await PokeApi.get(url);
        setLoading(false);
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error
    };
};