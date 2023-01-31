import { heroes } from "../data/heroes"

export const getHeroPage=(id)=>{

    return heroes.find(hero => hero.id === id)
}