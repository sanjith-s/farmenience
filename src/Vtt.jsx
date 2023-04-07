import React from 'react';
import { useEffect } from 'react';


const Vtt = () => {
    const fullAnotherSpeak = (text) => {
        alert(text)
        responsiveVoice.speak(text, "Tamil Male");
    }
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
       }
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
        document.body.appendChild(addScript);
        var addScript = document.createElement('script');
         addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
         document.body.appendChild(addScript);
         window.googleTranslateElementInit = googleTranslateElementInit;
      }, [])
    return (
        <div>
            <button onClick={()=>{fullAnotherSpeak("Hi")}}>
                Speak
            </button>
            <div onClick={(e)=>{
                fullAnotherSpeak(e.target.innerText)
            }}>
                Hi I am Navaneeth, I am Studying in CEG
            </div>
            <div id="google_translate_element"></div>
        </div>
    );
};

export default Vtt;