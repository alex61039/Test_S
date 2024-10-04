import {useParams} from 'react-router-dom'
import {UpdateNews} from '../components/editNews'



export const EditNews = () => {
    let params = useParams()

    return (
        <>
            <h3 style={{marginTop:100}}>Редактирование</h3>
           <UpdateNews id={params.id}></UpdateNews>
        </>
    )
}
