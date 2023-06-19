import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import Card from 'react-bootstrap/Card';
import '../style/card.scss'
import { useState , useRef } from 'react'

type listType = {
    img:string,
    title:string,
    year:number,
    text:string,  
    song?:string,
    trailer:string
  
    
}   

 const CardComponents =  ({img,title,year,text,trailer,song} : listType) =>{

    
    const [playing, setPLaying] = useState(false)




    const inputRef = useRef<HTMLAudioElement>(null)

  
    const handlePlay = () =>{
     
            if(inputRef.current?.paused){
             
                inputRef.current?.play()
            }else{
               
                inputRef.current?.pause()
                                
            }
            setPLaying(!playing)

          }

        return(
          <div style={{margin:"5px 0 5px 0"}}>
            <Card  className="card_border ">
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

                  <ToggleButton  value={2} onClick={handlePlay} variant={playing? "danger" : "success"} className="card_btn">
                  {playing? "Pause": "Play"} Song
                  </ToggleButton>
                  <ToggleButton  value={3} variant="secondary" className="card_btn">
                    Info
                  </ToggleButton>
                </ToggleButtonGroup>
                {/* <div>
                <a href={trailer} target="_blank">
                    <Button className="card_btn" variant="primary">Anime Trailer</Button>    
                </a>
                    <audio ref={inputRef}>
                        <source src={song} type="audio/mp3"/>
                    </audio>
                <Button className="card_btn" variant={playing? "danger" : "success"} onClick={handlePlay} >{playing? "Pause": "Play"} Song</Button>
                </div> */}

              </Card.Body>
            </Card>
           
          </div>
        )
    }
export default CardComponents

