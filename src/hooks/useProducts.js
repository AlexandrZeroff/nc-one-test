import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
    const api_string = "https://testbackend.nc-one.com/image"

    /*    useEffect(() => {
            const fetchProducts = async () => {
                const rawProducts = await fetch(
                    api_string
                );
                const productsArray = await rawProducts.json();
                setProducts(productsArray);
            };
            fetchProducts();
        }, [setProducts]);
    
        return products;
    };
    */
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
            'Access-Control-Allow-Methods': '*'
        }
    }

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(api_string, config)
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [setData])

    return { data, error, loading }
}

export default useProducts