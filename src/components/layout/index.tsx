import { ReactElement} from "react";
import {MyHeader} from "../header";

export const Layout = ({children}:{children:ReactElement}) => {

    return(
        <>
            <MyHeader/>
            {
                children
            }
        </>
    )



}
