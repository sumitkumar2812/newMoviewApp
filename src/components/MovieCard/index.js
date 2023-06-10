import './index.css'

const MovieCard = props => {
  const {trendingMovieList} = props
  const {title, id, backdropPath, overview, posterPath} = trendingMovieList
  console.log(id)
  return (
    <li className="product-item">
      <img src={backdropPath} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {overview}</p>
      <div className="product-details">
        <img src={posterPath} alt="products" />
        <div className="rating-container">
          <p className="rating">{title}</p>
        </div>
      </div>
    </li>
  )
}
export default MovieCard
