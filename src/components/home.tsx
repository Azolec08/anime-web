import { useState } from 'react'
import '../style/home.scss'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';




const home = () => {

  const [style , setStyle] = useState("button")
  return (
  <>
   <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body className="accordion_body" style={{backgroundImage:"url(./cardimage/geass3.jpg)"}}>
          <img src="./cardimage/code.jpeg" alt="" />
          <img src="./cardimage/code2.jpeg" alt="" />
          <img src="./cardimage/geass2.jpg" alt="" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className="home-background">
      <div className="home-container">
        
        <div className="img_container">
          <img src="./cardimage/geass3.jpg" alt="" />
          <div className={style} style={{backgroundImage:"url(./cardimage/solo.jpeg"}} >
            <Link to="/card" className="link">
              Anime List
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default home