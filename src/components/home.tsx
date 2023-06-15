import '../style/home.scss'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className="home-background">
      <div className="home-container">
        <div className="img_container">
          <img src="./images/backgroundylia.jpg" alt="" />
          <div className="button">
            <Link to="/card" className="link">
              Anime List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home