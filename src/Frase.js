import React, {useState} from 'react';
import frases from './frases.json'

const getRandom = () => Math.floor(Math.random() * frases.length);

const Frase = () => {

    const [frase, setFrase] = useState(frases[getRandom()]);
    const colors = [
       "#FF5733",
       "#FFA833",
       "#DEECA4",
       "#A4C3EC",
       "#ECA4D6",
       "#EC3D58"
    ];
    const changeFrase = () =>{
        const random = getRandom();
        setFrase(frases[random]);
    };
    const color = colors[Math.floor(Math.random() * 6)]
    document.body.style = `background: ${color}`;

    return (
        <div style={{color: color}}>
            <h3>¡{frase.cita}!</h3>
            <p>-{frase.autor}-</p>

            <button onClick={changeFrase}><i class="fa-solid fa-arrow-right-long"></i></button>
            
        </div>
    );
};

export default Frase;