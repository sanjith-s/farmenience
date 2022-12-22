import './css/pageM16.css'
import Negotiate from './components/negotitate_price'
import { Typography } from '@material-ui/core'


const PageM16 = () => {
    let content=[
        {
            'Name': 'Product 1',
            'Quantity': 24,
            'Type': 'Type 1',
            'Buyer': 'Harshit',
            'Address': 'Chennai',
            'Price': 123456789
        },
        {
            'Name': 'Product 2',
            'Quantity': 40,
            'Type': 'Type 2',
            'Buyer': 'Sanjith',
            'Address': 'Chennai',
            'Price': 425456789
        }
    ]
    return (
        <>
            <Typography id="title" variant='h3'>
                Negotiate Prices
            </Typography>
            {content.map((id,key)=>{
                return (
                    <>
                        <Negotiate Name={id.Name} Price={id.Price} Quantity={id.Quantity}
                        Buyer={id.Buyer} Type={id.Type} Address={id.Address} />
                    </>
                )
            })}

        </>
    )
}

export default PageM16