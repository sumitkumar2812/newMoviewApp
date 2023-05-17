import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const PageNotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>
      <Link to="/">
        <button className="go_to_button" type="button">
          Go to Home
        </button>
      </Link>
    </div>
  </>
)

export default PageNotFound
