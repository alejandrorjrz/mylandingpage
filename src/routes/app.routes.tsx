import {Route, Routes} from "react-router-dom"
import App from '../App'
import Error404 from '../pages/Error404'

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/"element={<App/>} />
            <Route path="/"element={<Error404/>}/>
        </Routes>
    )
}