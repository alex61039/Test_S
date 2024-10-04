//import React, {FC, useState, useEffect} from "react";
import {INews} from '../../interfaces'
import {useForm, SubmitHandler} from 'react-hook-form'
import {TextField, Button, Stack} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom'

export const NewItemNews = () => {
    const navigate = useNavigate()
    const arrNews = localStorage.getItem('news')
    if(arrNews !== null){
        var arr:INews[] = arrNews&&JSON.parse(arrNews);
    }

    let itemNews = {} as INews
    const {register, handleSubmit, formState:{isValid, errors}} = useForm<INews>({mode: "onBlur"});

    const onSubmit:SubmitHandler<INews> =  (data) => {
        if(isValid){
            itemNews.article_id = uuidv4()
            itemNews.title = data.title
            itemNews.description = data.description
            itemNews.pubDate = data.pubDate.toString()
            itemNews.category = data.category
            itemNews.image_url = data.image_url
            arr.push(itemNews);
            localStorage.removeItem('news');
            localStorage.setItem('news', JSON.stringify(arr))
            navigate('/')

        } else {
            alert("Error")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Typography
                    level="body-lg"
                    sx={{fontFamily: 'monospace'}}
                >Название новости</Typography>

                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите наименование'}
                           multiline={true}
                           maxRows={3}
                           style={{width: 500, marginBottom: 15}} type={'text'} autoFocus
                           {...register('title', {required: {value: true, message: "обязательное поле"}})}
                />
                {
                    errors.title ? (<span style={{color: "red"}}>{errors.title && errors.title?.message}</span>) : null
                }


                <Typography
                    level="body-lg"
                    sx={{fontFamily: 'monospace'}}
                >Дата</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите дату'}
                           style={{width: 500, marginBottom: 15}} type={'date'}
                           {...register('pubDate', {required: {value: true, message: "обязательное поле"}})}
                />
                {
                    errors.pubDate? (<span style={{color: "red"}}>{errors.pubDate&&errors.pubDate.message}</span>): null
                }

                <Typography
                    level="body-lg"
                    sx={{fontFamily: 'monospace'}}
                >Категория новости</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите категорию новости'}
                           style={{width: 500, marginBottom: 15}} type={'text'}

                           {...register('category', {required: false})}
                />

                <Typography
                    level="body-lg"
                    sx={{fontFamily: 'monospace'}}
                >Изображение</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите адрес изображения'}
                           style={{width: 500, marginBottom: 15}} type={'text'}
                           multiline={true}
                           maxRows={3}
                           {...register('image_url', {required: false})}
                />

                <Typography
                    level="body-lg"
                    sx={{fontFamily: 'monospace'}}
                >Общее описание новости</Typography>
                <Textarea
                    placeholder={"Введите описание новости"}
                    variant={'soft'}
                    style={{width: 500, marginBottom: 15, minHeight: 140}}
                    {...register('description', {required: {value: true, message: "обязательное поле"}})}
                />
                {
                    errors.description? (<span style={{color: "red"}}>{errors.description&&errors.description.message}</span>): null
                }
                <Button type={'submit'} disabled={!isValid} variant={'contained'}
                        style={{marginBottom: 15}}>Записать</Button>
                <Button type={'button'} variant={'contained'} onClick={() => {
                    navigate('/')
                }}>Отмена</Button>
            </Stack>
        </form>
    )
}
