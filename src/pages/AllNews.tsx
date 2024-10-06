import  {FC, useEffect, useState} from "react";
import {INews} from "../interfaces";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {MyCard} from "../components/MyCard";
import {getNewsByLocalStorage} from "../utilites/filterArr.ts";

export const AllNews: FC = () => {

    const [listNews, setListNews] = useState<INews[]>([])


    const getNews = () => {
        let news = getNewsByLocalStorage()
        if (news !== null) {
            setListNews(news);
        }
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
            {
                <Box sx={{width: '100%', marginTop: 20}}>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        {
                            listNews &&
                            listNews
                                .sort((x, y) => y.pubDate.localeCompare(x.pubDate))
                                .map((item) =>
                                    <MyCard key={item.article_id} news={item} updNews={ setListNews}/>
                                )
                        }
                    </Grid>
                </Box>
            }
        </>
    )

}
