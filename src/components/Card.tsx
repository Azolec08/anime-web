import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardList from '../data/list.json'
import '../style/card.scss'
import { useState } from 'react'


const Cards = () => {

  const [play, setPlay ] = useState(false)

  const playOnClick = () =>{
    setPlay(!play)
  }

  return (
    <>
      {CardList.map((list,index) =>{
        const {title, img, year } = list
        return(
          <div key={index} className="card_container">
            <Card  style={{ width: '18rem' }} className="card_border">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{year}</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary"> somewhere</Button>
                <Button onClick={playOnClick} style={{marginLeft:"10px"}}>{play? "Pause": "Play"} Song</Button>
              </Card.Body>
            </Card>
          </div>

        )
      
      })}
    </>
  )
}

export default Cards