import '../style/card.scss'
import { useState , useRef, useEffect, ChangeEvent } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import  {useUserStore}  from './zustand'

type listType = {
    img:string,
    title:string,
    year:number,
    text:string,  
    song?:string,
    trailer:string ,
    info:string,
    genre:string
    
}  

// type zustand = {
 
//   play:boolean,
//   playing:boolean,
//   setPlay: () => void,
//   setPlaying: () => void, 
//   handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
// }

 const CardComponents =  ({img,title,year,text,trailer,song,info,genre} : listType) =>{

    

    // const {play,playing, setPlay,setPlaying} = useUserStore((state)  : zustand => state)

    const [playing, setPlaying] = useState(false)

    const [play, setPlay] = useState(false)

    const inputRef = useRef<HTMLAudioElement>(null)

    

    useEffect(()=>{
      if(play){
          
        inputRef.current?.play()
      }else{
        
        inputRef.current?.pause()
      }
    },[play])

    const handlePlay = () =>{
      setPlay(!play)
      setPlaying(!playing)

    }
        
        
        

        
      return(
          <div style={{margin:"5px 0 5px 0"}}>
            <Card className="card_border" >
              <Card.Img variant="top" src={img} className="card_img" />
              <Card.Body className="card_body">
                <Card.Title className="card_title">{title}</Card.Title>
                <Card.Title className="card_title">{year}</Card.Title>
                <Card.Text  className="card_text">
                  {text}
                </Card.Text>
                <ToggleButtonGroup type="checkbox" >
                  <ToggleButton value={1} className="card_btn">
                    <a href={trailer} target="_blank">
                      Trailer
                    </a>
                  </ToggleButton>
                  <audio ref={inputRef}>
                        <source src={song} type="audio/mp3"/>
                  </audio>
                  <ToggleButton  value={2} onClick={ handlePlay} variant={playing? "danger" : "success"} className="card_btn">
                    {playing? "Pause": "Play"} Song
                  </ToggleButton>
                  <ToggleButton  value={3} variant="secondary" className="card_btn" >
                    {genre}
                  </ToggleButton>
                </ToggleButtonGroup>
              </Card.Body>
              <Accordion>
                <Accordion.Item eventKey="0" className="accordion_item">
                  <Accordion.Header className="accordion_header">Information</Accordion.Header>
                  <Accordion.Body className="accordion_info">
                    {info}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
           
          </div>
        )
    }
export default CardComponents

