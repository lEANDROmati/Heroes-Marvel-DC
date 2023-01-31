import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { HeroesCard } from "../heroesCard/HeroesCard";



export const SearchPages = () => {

   const navigate = useNavigate()
   const location = useLocation()

   const {q = ""} = queryString.parse(location.search)

 
    const onFormSubmit= ( event ) =>{
        event.preventDefault()

        const inputValue = event.target.add.value
        navigate(`?q=${inputValue.toLowerCase()}`)

        event.target.add.value=""       
  }

     const heroes = getHeroesByName(q)

  return (
    <>
      <h1>Search</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onFormSubmit}>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="add"
                autoComplete="off"
                
                
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            
            {
                (q === "") 
                ? <div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero </div>
                : (heroes.length === 0)
                && <div className="alert alert-danger animate__animated animate__fadeIn" >no hero with <b>{q}</b></div>
            }
           

           

                {
                    heroes.map(hero =>(
                        <HeroesCard key={hero.id} {...hero} />
                    ))
                }

          </div>
      </div>
      

    </>
  )
}