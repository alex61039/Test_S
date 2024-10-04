/*import React from 'react'*/
/*import {INews} from "../interfaces";*/
/*import {Input} from '@mui/material'*/
import {useParams} from 'react-router-dom'


export const EditNews = () => {
    let params = useParams()

    console.log("<<>>", params)


    return (
        <>

            <h2>Edit page</h2>
          {/*  <Input/>*/}
        </>
    )
}
