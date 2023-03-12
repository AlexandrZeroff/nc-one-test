import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = (id) => {
    const api_string = process.env.REACT_APP_BASE_API_STRING
    const req_string = api_string + "/image"
    const req_params = id ? {
        id: id
    } : {}

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(req_string, { params: req_params })
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [req_string])

    return { data, error, loading }
}

export default useProducts