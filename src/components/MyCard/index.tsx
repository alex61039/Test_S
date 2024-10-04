/*import React, {FC} from 'react'*/
import {INews} from '../../interfaces'
/*import * as React from 'react';*/
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
/*import Button from '@mui/material/Button';*/
import Typography from '@mui/material/Typography';
import {DeleteOutline, EditOutlined} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from 'react-router-dom'

export const MyCard  = ({news}:{news:INews}) => {

    let navigation = useNavigate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 450 }}
                image={news.image_url!}
                title={news.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {news.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {
                        news.description
                    }
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent:"center", padding:5, marginBottom:5, alignContent:"flex-end"}}>
                <IconButton>
                    <DeleteOutline />
                </IconButton>
              <IconButton>
                  <EditOutlined onClick={ () => {navigation(`/EditNews/${news.article_id}`)}}/>
              </IconButton>


            </CardActions>
        </Card>
    );
}



