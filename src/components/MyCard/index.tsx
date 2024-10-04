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
import {filterArrById} from '../../utilites/filterArr.ts'
import jpg from '../../assets/271.jpg'

export const MyCard = memo(
    ({news}: { news: INews }) => {
        let navigation = useNavigate();
        var arrData = [] as INews[]
        let arrNews = localStorage.getItem('news');
        if (arrNews !== null) {
            arrData = arrNews && JSON.parse(arrNews);
        }

        const deleteHandle = (id: string) => {
            if (id !== null) {
                var deleteNews = filterArrById(id);
                var newList = arrData.filter((item) => item.article_id !== deleteNews?.article_id);
                localStorage.removeItem('news');
                localStorage.setItem('news', JSON.stringify(newList));
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
                    <IconButton>
                        <DeleteOutlined onClick={() => deleteHandle(news.article_id)}/>
                    </IconButton>
                    <IconButton>
                        <EditOutlined onClick={() => {
                            navigation(`/EditNews/${news.article_id}`)
                        }}/>
                    </IconButton>

                </CardActions>
            </Card>
        );
    }
)




