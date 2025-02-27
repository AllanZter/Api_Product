import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home/home';




export const Router = () =>{
   

    return(
        <div>
               

            <BrowserRouter>
            
                <Routes>
                    <Route index element ={<Home/>} />
                 
                </Routes>     
            </BrowserRouter>
        </div>
    )}