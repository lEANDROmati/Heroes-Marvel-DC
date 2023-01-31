import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/navBar/NavBar';
import { DcPages } from '../components/pages/DcPages';
import { HeroPage } from '../components/pages/HeroPage';
import { MarvelPages } from '../components/pages/MarvelPages';
import { SearchPages } from '../components/pages/SearchPages';


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">

        <div>
        <Routes>

            <Route path ="marvel" element={<MarvelPages />} />
            <Route path ="dc" element={<DcPages/>} />

            <Route path ="search" element={<SearchPages/>} />
            <Route path ="hero/:id" element={<HeroPage/>} />
            

            <Route path ="/" element={<Navigate to="/marvel" />} />



        </Routes>
        </div>



        </div>
        

    </>
  )
}