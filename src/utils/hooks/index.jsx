import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      const response = await fetch(url)
      const data = response.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { isLoading, data }
}
