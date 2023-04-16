import React from 'react';
import { useEffect } from 'react';

function Voicetotext() {
    const fullSpeak = () =>
    {
        if ('speechSynthesis' in window) {
            let speakData = new SpeechSynthesisUtterance();
            speakData.volume = 1; // From 0 to 1
            speakData.rate = 1; // From 0.1 to 10
            speakData.pitch = 2; // From 0 to 2
            speakData.text = 'Hello I am Navaneeth';
            speakData.lang = 'en-US';
            speechSynthesis.speak(speakData);
        }
        else
        {

        }
    }
    return (
        <div>
             <button onClick={()=>{fullSpeak()}}>
                Speak
            </button>
        </div>
    );
}

export default Voicetotext;