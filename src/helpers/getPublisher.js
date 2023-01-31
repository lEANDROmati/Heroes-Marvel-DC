import { heroes } from "../data/heroes"


export const getPublisher = (publisher) =>{

    return heroes.filter(heroe => heroe.publisher === publisher)
}