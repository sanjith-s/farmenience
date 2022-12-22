import '../css/pageN1.css';

const QueryBox = (props) =>{
    return (
        <>
            <div id="card-n1">
                <table id="query-table" >
                    <tr>
                        <td id="left-column">Query ID <span id="semi-colon">:</span></td>
                        <td id="right-column">{props.ID}</td>
                    </tr>
                    <tr>
                        <td id="left-column" >Query Subject <span id="semi-colon"> :</span></td>
                        <td id="right-column">{props.Subject}</td>
                    </tr>
                    <tr>
                        <td id="left-column">Date of Query <span id="semi-colon"> :</span></td>
                        <td id="right-column">{props.Date}</td>
                    </tr>
                    <tr>
                        <td id="left-column">Status <span id="semi-colon">:</span></td>
                        <td id="right-column">{props.Status}</td>
                    </tr>
                </table>
                <div id="buttons-n1">
                    <button id="button-n1">
                        Display
                    </button>
                    <button id="button-n1">
                        Edit
                    </button>
                    <button id="button-n1">
                        Delete
                    </button>
                </div>
            </div>
        </>       
    )
}

export default QueryBox;