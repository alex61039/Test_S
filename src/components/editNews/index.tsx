/*import React, {FC} from 'react'*/
import {INews} from "../../interfaces";
import {useForm, SubmitHandler} from 'react-hook-form'
import {filterArrById} from '../../utilites/filterArr.ts'
import { Button, Stack, TextField} from '@mui/material'
import Textarea from '@mui/joy/Textarea'
import Typography from '@mui/joy/Typography';
import {useNavigate} from 'react-router-dom'



export const UpdateNews = ({id}:{id:string | null | undefined}) => {

    const navigate = useNavigate()
    let arrNews = localStorage.getItem('news')
    if(arrNews !== null || undefined){
        var arrData:INews[] = arrNews&&JSON.parse(arrNews);
    }

    if(id !== null || undefined){
        var news: INews = filterArrById(id) as INews;
        if(news !== null){
            var newItem = news;
        }
    }


    const {register, handleSubmit, formState:{isValid, errors}} = useForm<INews>(
        {
            defaultValues: {
                article_id: news!.article_id,
                title: news!.title,
                description: news!.description,
                pubDate: news!.pubDate,
                image_url: news!.image_url,
                category: news!.category,
            },
            mode:"onBlur"
        },

    )

    const onSubmit:SubmitHandler<INews> = async (data) => {
        if(isValid){
            newItem.title = data.title
            newItem.image_url = data.image_url
            newItem.pubDate = data.pubDate
            newItem.category = data.category
            newItem.description = data.description

            var newList = arrData.filter( it => it.article_id !== news.article_id);
            newList.push(newItem);
            localStorage.removeItem('news');
            localStorage.setItem('news', JSON.stringify(newList));
            navigate('/')
        } else {
            alert("Error")
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Typography
                    level="body-lg"
                    sx={{ fontFamily: 'monospace' }}
                >Название новости</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите наименование'}
                           maxRows={3}
                           multiline={true}
                           style={{width: 500, marginBottom:15}} type={'text'} autoFocus
                           {...register('title', {required: {value: true, message: "обязательное поле"}})}
                />
                {
                    errors.title? (<span style={{color:'red'}}>{errors.title&&errors.title?.message}</span>): null
                }


                <Typography
                    level="body-lg"
                    sx={{ fontFamily: 'monospace' }}
                >Дата</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите дату'}
                           style={{width: 500, marginBottom:15}} type={'date'}
                           {...register('pubDate', {required: {value: true, message: "обязательное поле"}})}
                />
                {errors.pubDate?(<span style={{color:'red'}}>{errors.pubDate&&errors.pubDate.message}</span>): null}

                <Typography
                    level="body-lg"
                    sx={{ fontFamily: 'monospace' }}
                >Изображение</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите адрес изображения'}
                           maxRows={3}
                           multiline={true}
                           style={{width: 500, marginBottom:15}} type={'text'}
                           {...register('image_url', {required: false})}
                />
                {errors&&<span></span>}

                <Typography
                    level="body-lg"
                    sx={{ fontFamily: 'monospace' }}
                >Категория новости</Typography>
                <TextField id="outlined-basic"
                           variant={'outlined'}
                           placeholder={'Введите наименование категории'}
                           style={{width: 500, marginBottom:15}} type={'text'}
                           {...register('category', {required: false})}
                />
                {errors&&<span></span>}

                <Typography
                    level="body-lg"
                    sx={{ fontFamily: 'monospace' }}
                >Общее описание</Typography>
                <Textarea
                    variant={'soft'}
                    style={{width:500, minHeight:140, marginBottom:15}}
                    {...register('description', {required: {value: true, message: "обязательное поле"}})}  />
                {errors.description?(<span style={{color:'red'}}>{errors.description&&errors.description.message}</span>): null}

                <Stack style={{flexDirection: "column"}}>
                    <Button type={"submit"} disabled={!isValid} variant={'contained'} style={{marginBottom:15}}>Записать</Button>
                    <Button type={"button"} variant={'contained'} onClick={ () => {navigate('/')}}>Отмена</Button>

                </Stack>
            </Stack>

        </form>
    )
}
