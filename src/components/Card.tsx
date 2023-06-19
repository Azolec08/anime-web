import  CardComponents  from "./cardComponents"
import CardList from '../data/list.json'
import '../style/card.scss'


const Cards = () => {

  return (
    <>
    <div className="card_container" >
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