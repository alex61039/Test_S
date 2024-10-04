import {Routes,  Route} from "react-router-dom";
import {AllNews} from '../../pages/AllNews.tsx'
import {EditNews} from '../../pages/EditNews.tsx'
import {CreateNews} from "../../pages/CreateNews.tsx";

export const AppRoute = () => {

    return (
        <Routes>

            <Route path={"/"} element={<AllNews/>}/>
            <Route path={"/EditNews/:id?"} element={<EditNews/>}/>
            <Route path={"/CreateNews"} element={<CreateNews/>}/>

        </Routes>


    )
}
