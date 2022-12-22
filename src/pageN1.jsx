import './css/pageN1.css'
import QueryBox from './components/queryBox';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const PageN1 = () =>{
    const data=[
        {
            ID:'XXXXXXXXX',
            Subject: 'www.figma.com/queries/link',
            Date:'10/10/2022',
            Status: 'Not clarified'
        },
        {
            ID:'YYYYYYYYYY',
            Subject: 'www.figma.com/queries/link',
            Date:'10/10/2022',
            Status: 'Not clarified'
        },
        {
            ID:'ZZZZZZZZZZ',
            Subject: 'www.figma.com/queries/link',
            Date:'10/10/2022',
            Status: 'Not clarified'
        },
        {
            ID:'AAAAAAAAAA',
            Subject: 'www.figma.com/queries/link',
            Date:'10/10/2022',
            Status: 'Not clarified'
        }
    ]
    return (
        <>
        <Card id="title-background">
            <Typography variant="h5"  id="n1-title">
                Queries
            </Typography>
        </Card>
        <Box id="flex-cards">
            {
                data.map((val)=>{
                    return(
                        <div>
                            <QueryBox ID={val.ID} Date={val.Date} Status={val.Status} Subject={val.Subject} />
                        </div>
                    )
                })
            }
        </Box>
        </>
    )
}
export default PageN1;