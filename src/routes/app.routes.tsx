import { Route, Routes} from "react-router-dom"
import App from '../App'
import Error404 from '../pages/Error/Error404'
import Login from "../pages/Login/Login"
import ElTiempo from "../pages/Weather/ElTiempo"
import RegisterForm from "../pages/Login/RegisterForm"
import { ProtectedRoutes } from './protected.routes';
import Educalco from "../pages/educalco/Educalco"
import Contact from "../pages/Contact/Contact"


export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/"element={<App />}/>
            <Route path="/contact"element={<Contact />}/>
            <Route path="/login"element={<Login/>}/> 
            <Route path="/registro"element={<RegisterForm />}/>
            <Route path="/eltiempo"element={<ElTiempo />}/>
            <Route element={<ProtectedRoutes/>}>
                {/* Aqui se incluyen las rutas con acceso por usuarios registrados */}
            </Route>
            <Route path="/educalco"element={<Educalco />}/>
            <Route path="*"element={<Error404 />}/>
        </Routes>
    )
}