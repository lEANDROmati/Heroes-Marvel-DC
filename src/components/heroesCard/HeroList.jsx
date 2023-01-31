import { heroes } from "../../data/heroes"
import { getPublisher } from "../../helpers/getPublisher"
import { HeroesCard } from "./HeroesCard"

export const HeroList=({publisher})=>{

    
 const heroes = getPublisher(publisher)
   
  
   
    return(

        <div className="row rows-cols-1 row-cols-md-3 g-3">
           {
            heroes.map(hero =>(

               <HeroesCard key={hero.id} {...hero}/>
            ))
           }
        </div>
    )
}