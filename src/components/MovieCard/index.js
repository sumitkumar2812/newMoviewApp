import './index.css'

const MovieCard = props => {
  const {trendingMovieData} = props
  const {title} = trendingMovieData

  return (
    <li className="product-item">
      <h1 className="title">{title}</h1>
    </li>
  )
}
export default MovieCard
