import {memo} from 'react'
import {INews} from '../../interfaces'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {DeleteOutlined, EditOutlined} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from 'react-router-dom'
import {filterArrById, getNewsByLocalStorage} from '../../utilites/filterArr.ts'
import jpg from '../../assets/271.jpg'


interface IPropsCard {
    news: INews,
    updNews: (arg: INews[])=> void
}
export const MyCard = memo(
    (props: IPropsCard) => {
        const {news, updNews} = props

        let navigation = useNavigate();

        var arrData = getNewsByLocalStorage()

        const deleteNews = (id: string) => {

            if (id !== null) {
                var deleteNews = filterArrById(id);
                var newList = arrData.filter((item) => item.article_id !== deleteNews?.article_id);
                localStorage.removeItem('news');
                localStorage.setItem('news', JSON.stringify(newList));

                const newData = getNewsByLocalStorage();
                updNews(newData);

            }
        }

        return (
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height: 450}}
                    image={news.image_url! ? news.image_url : jpg}
                    title={news.title}
                />
                <CardContent>
                    <Typography style={{fontSize: 12}}  component="div">
                        {news.pubDate}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {news.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {
                            news.description
                        }
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: "center", padding: 5, marginBottom: 5, alignContent: "flex-end"}}>
                    <IconButton onClick={() => deleteNews(news.article_id)}>
                        <DeleteOutlined />
                    </IconButton>
                    <IconButton onClick={() => {
                        navigation(`/EditNews/${news.article_id}`)
                    }}>
                        <EditOutlined />
                    </IconButton>

                </CardActions>
            </Card>
        );
    }
)




