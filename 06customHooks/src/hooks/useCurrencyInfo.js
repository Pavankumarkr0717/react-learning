import { useEffect, useState } from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        let ignore = false
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => {
            if (!res.ok) throw new Error(`Request failed: ${res.status}`)
            return res.json()
        })
        .then((res) => { if (!ignore) setData(res[currency] || {}) })
        .catch((err) => console.error(err))
        return () => { ignore = true }
    },[currency])
    return data
}

export default useCurrencyInfo;