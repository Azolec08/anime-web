import { useState } from 'react'
import  CardComponents  from "./cardComponents"
import CardList from '../data/list.json'
import '../style/card.scss'
import Switch from "react-switch";



const Cards = () => {

  const [dark , setDark] = useState("Light")
  return (
    <>
      <div id={dark} className="dark_mode">
        <span>{dark} Mode</span>
        <Switch onChange={() => setDark(dark === "Dark" ? "Light" : "Dark")} checked={dark === "Dark"} />
      </div>
      <h3 className="recom_header">100 Anime Recommendations</h3>
      <div className="card_container" id={dark} >
        {CardList.map((list,index) =>{
          return(
            <div key={index} >
              <CardComponents {...list}/>
            </div>
          )
        })}
        
      </div>
    </>
  )
}

export default Cards