
/*import { styled } from '@mui/material/styles';*/
import Grid from '@mui/material/Grid2';
/*import Paper from '@mui/material/Paper';*/
import Box from '@mui/material/Box';
import {MyCard} from '../MyCard'
import {INews} from '../../interfaces'


/*const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));*/

export const  Cards = ({arrCard}:{arrCard:INews[]}) => {
    return (
        <Box sx={{ width: '100%', marginTop:20 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    arrCard&&
                    arrCard.map( (item) =>
                        <MyCard  key={item.article_id} news={item}/>
                    )
                }

            </Grid>
        </Box>
    );
}

