import {useParams} from 'react-router-dom'
import {UpdateNews} from '../components/editNews'
import {Stack} from "@mui/material";



export const EditNews = () => {
    let params = useParams()

    return (
        <Stack>
           <UpdateNews id={params.id}></UpdateNews>
        </Stack>
    )
}
