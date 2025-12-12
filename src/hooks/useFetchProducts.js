import { useEffect, useState } from "react"

const useFetchProducts = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Abort controller for cleaning up fetch request
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { signal });

                if(!response.ok) {
                    // Throw error for bad HTTP status codes
                    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
                }

                const result = await response.json();

                // Handle list endpoint (result.products) vs detail endpoint (result)
                setData(result.products || result);
            } catch(err) {
                if(err.name === 'AbortError') {
                    // Ignore the abort error
                    return;
                }
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function: aborts the fetch request
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetchProducts;