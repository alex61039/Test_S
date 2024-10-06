import {Button} from "@mui/material";
import {Box} from "@mui/material";
import {useNavigate} from 'react-router-dom'


export const MyHeader = () => {
let navigate = useNavigate()

    return(
        <Box style={{
            backgroundColor: 'lightgray',
            minHeight: 40,
            padding:5,
            width: "100%",
            position: "fixed",
            top:0,
            left:0,
            zIndex:100,

        }}>
            <h2 >Свежие новости</h2>
            <Button variant={"text"}  onClick={() =>{navigate('/CreateNews')} }>Добавить новость</Button>

        </Box>
    )
}
