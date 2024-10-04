import  {FC, useEffect, useState} from "react";
import {Cards} from "../components/cards";
import {INews} from "../interfaces";

export const AllNews: FC = () => {

    const [listNews, setListNews] = useState<INews[]>([])

    useEffect( () => {
        let cards = localStorage.getItem('news');
        let data = cards&&JSON.parse(cards);
        setListNews(data)
    }, [listNews])



    return(
        <>
            {
                listNews&&
                <Cards arrCard={listNews}/>
            }
        </>
    )

}
