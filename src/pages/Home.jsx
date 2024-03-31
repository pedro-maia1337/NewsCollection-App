import { useState, useEffect } from 'react'
import useRequest from '../hooks/useRequest'

import NewsCard from '../components/NewsCard'

import './NewsContainer.css'

const newsURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import Loader from '../components/Loader'

const Home = () => {
  
  const [news, setNews] = useState([])
  const {getNews} = useRequest()

  useEffect(() => {
    (async () => {
      const topHeadlinesNewsUrl = `${newsURL}top-headlines?country=us&${apiKey}`
      const data = await getNews(topHeadlinesNewsUrl)
      setNews(data)
    })() 
  }, [])

  return (
    <div className="container">
      <h1 className="home-title">Breaking News</h1>
      <div className="news-container">
        {news.length > 0 ? (
          news.map((news, index) => (
            news.urlToImage ? <NewsCard news={news} key={index}/> : null
          ))
        ) : <Loader/>}
      </div>
    </div>
  )
}

export default Home