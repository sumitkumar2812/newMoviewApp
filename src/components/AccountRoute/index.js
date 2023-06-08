import Cookies from 'js-cookie'
import Footer from '../Footer'
import Header from '../Header'
import './index.css'

const AccountRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <Header />
      <h1>Account</h1>
      <hr />
      <div>
        <p>Member ship</p>
        <div>
          <p>rahul@gmail.com</p>
          <p>password: ***************</p>
        </div>
      </div>
      <hr />
      <div>
        <p>Plan Details</p>
        <div>
          <p>premium</p>
          <p>Ultra HD</p>
        </div>
      </div>
      <hr />

      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
      <Footer />
    </div>
  )
}
export default AccountRoute
