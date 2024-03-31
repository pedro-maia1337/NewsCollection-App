import { useEffect, useState } from "react"
import useRequest from "../hooks/useRequest"
import { useSearchParams } from "react-router-dom"

import NewsCard from "../components/NewsCard"
import Loader from '../components/Loader'

import './NewsContainer.css'

const newsURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [news, setNews] = useState([])
  const {getNews} = useRequest()
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  useEffect(() => {
    (async () => {
      const newsSearchURL = `${newsURL}everything?q=${query}&${apiKey}`
      const data = await getNews(newsSearchURL)
      setNews(data)
    })()
  }, [query])

  return (
    <>
      <h2 className="search-term">
        Resultados para: <span className="term">{query}</span>
      </h2>
      <div className="news-container">
        {news.length > 0 ? (
          news.map((news, index) => (
            news.urlToImage ? <NewsCard news={news} key={index}/> : null
          ))
        ) : <Loader/>}
      </div>
    </>
  )
}

export default Search