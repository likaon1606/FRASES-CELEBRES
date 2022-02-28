import React, {useState} from 'react';
import words from './words.json'

const getRandom = () => Math.floor(Math.random() * words.length);

const Word = () => {

    const [word, setWord] = useState(words[getRandom()]);
    const colors = [
       "#FF5733",
       "#FFA833",
       "#DEECA4",
       "#A4C3EC",
       "#ECA4D6",
       "#EC3D58"
    ];
    const changePhrase = () =>{
        const random = getRandom();
        setWord(words[random]);
    };
    const color = colors[Math.floor(Math.random() * 6)]
    document.body.style = `background: ${color}`;

    return (
        <div style={{color: color}}>
            <h3>¡{word.cita}!</h3>
            <p>-{word.autor}-</p>
          
            <button onClick={changePhrase}><i class="fa-solid fa-arrow-right-long"></i></button>
        <footer>  Made by Ariel F. G.</footer>
        </div>
    );
};

export default Word;