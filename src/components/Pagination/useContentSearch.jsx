import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useContentsearch(query, pageNumber) {
       const [image, setImage] = useState("cake");
  const clientId = "viyDF3eUM7UyGboYfR9ySQN7kxMVGdfngRyqLy5FNdg";
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [contents, setContents] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setContents([])
  }, [query])

  useEffect(() => {
   
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      console.log(res);
      setContents(prevcontents => {
        return [...new Set([...prevcontents, ...res.data.results.map(b => b)])]
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
      
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, contents, hasMore }
}