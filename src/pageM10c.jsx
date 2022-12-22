import {CgProfile} from 'react-icons/cg'
import './css/pageM10c.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const PageM10c = () =>{
    return(
        <>
            <Card id="card-person">
                <div id="top-person">
                    <div id="text-name-add">
                        <Typography>
                            RAJA SINGH
                        </Typography>
                        <Typography>
                            KOYEMBEDU,CHENNAI
                        </Typography>
                    </div>
                    <div>
                        <CgProfile size={40}/>
                    </div>
                </div>
                <Typography id="text-profile">
                    Profile
                </Typography>
                <Typography id="text-profile">
                    Has been selling wheat ,rice,millets,etc for the past 45 years . Known for his fresh vegetables that is sold at a very reasonable rate
                </Typography>
            </Card>
        </>
    )
}

export default PageM10c;