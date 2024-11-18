import { useEffect, useState } from "react";
import { PokeApi } from "../utils/PokeApi";

export const usePokeApi = (url, dataHandler) => {
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
        setLoading(true);

        PokeApi.get(url)
            .then(dataHandler)
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return {
        data,
        loading,
        error
    };
};