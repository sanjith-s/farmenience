import {AiOutlineSearch, AiOutlineCamera} from 'react-icons/ai';
import {BsMic} from 'react-icons/bs';
import './css/pageM10a.css'

const PageM10a = () =>{
    return (
        <>
            <div id="search-bar">
                <div>
                    <AiOutlineSearch id="icon-style" size={30}/>
                    <input type="text" placeholder='Search for market' id=""></input>
                </div> 
                <div>
                    <BsMic id="icon-style" size={30}/>
                    <AiOutlineCamera id="icon-style" size={30}/>
                </div>
            </div>
        </>
    )
}
export default PageM10a;