import {Link} from 'react-router-dom'

import './NewsCard.css'

const NewsCard = ({news}) => {
  return (
    <div className="infos-container">
        <Link to={news.url} target='blank'>
          <img src={news.urlToImage} alt={news.title} />
        </Link>
        <Link to={news.url} target='blank'>
        <h2>{news.title}</h2>
        </Link>
        <p><span>{news.author}</span></p>
        <p>{news.description}</p>
    </div>
  )
}

export default NewsCard