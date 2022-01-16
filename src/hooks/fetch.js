import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setStatus('feching Data');
                const response = await fetch(url, { mode: 'cors' });
                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
                setStatus('fetched');
            } catch (error) {
                setError(error);
            }
        };
        fetchData(url);
    }, [url]);

    return { data, loading, error, status };
};
