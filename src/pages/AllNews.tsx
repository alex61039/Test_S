import  {FC} from "react";
/*import {MyHeader} from "../components/header";*/


import {Cards} from "../components/cards";


export const AllNews: FC = () => {

    let cards = localStorage.getItem('news');
    const data = cards&&JSON.parse(cards);

    return(
        <>
          {/*  <MyHeader/>*/}
            {
                data&&
                <Cards arrCard={data}/>
            }

        </>
    )




}
