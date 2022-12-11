import React from "react";
import "./css/pageM18.css";


function Image() {

    const [file, setFile] = useState("");

    const SubmitLogin = () => {
        Axios.post('http://localhost:8080/upload').then((response) => {
            File: file
        });
    }

    return (
        <div>
            <div>
                <span className="title">Upload file</span>
            </div>
            <br></br><br></br><br></br><br></br>
            <div>
                <input type="file" placeholder='Enter value'
                    onChange={(event) => { setFile(event.target.value); }}></input>
            </div>
            <center><button class="buttons" onClick={SubmitLogin}>Submit Request</button></center>
            <br></br><br></br>
        </div>
    );
};

export default Image;
