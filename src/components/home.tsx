import { useState } from 'react'
import '../style/home.scss'

import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'

const home = () => {

  return (
  <>
   <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body className="accordion_body" style={{backgroundImage:"url(./cardimage/shakugan.jpg"}} >
          <img src="./cardimage/shakugan5.jpg" alt="" />
          <img src="./cardimage/shakugan2.png" alt="" />
          <img src="./cardimage/shakugan7.jpg" alt="" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className="home-background">
      <div className="home-container">
        
        <div className="img_container">
          <img src="./cardimage/shakugan4.png" alt="" />
          <div className="button" style={{backgroundImage:"url(./cardimage/shakugan2.png"}} >
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