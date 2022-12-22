import './css/pageN1.css'
import QueryBox from './components/queryBox';

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
        <div id="title-background">
            <div  id="n1-title">
                Queries
            </div>
        </div>
        <div id="flex-cards">
            {
                data.map((val,key)=>{
                    return(
                        <div>
                            <QueryBox ID={val.ID} Date={val.Date} Status={val.Status} Subject={val.Subject} />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default PageN1;