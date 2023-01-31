import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/navBar/NavBar"
import { LoginPages } from "../components/pages/LoginPages"
import { HeroesRoutes } from "../routes/HeroesRoutes"



export const AppRouter=()=>{

    return(

        <>
             
            <Routes>

                
                <Route path ="login" element={<LoginPages/>} />

                <Route path ="/*" element={<HeroesRoutes />} />



            </Routes>
        </>
    )
    
}