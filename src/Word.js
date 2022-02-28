import React, {useState} from 'react';
import quotes from './quotes.json'

const getRandom = () => Math.floor(Math.random() * quotes.length);

const Word = () => {

    const [word, setWord] = useState(quotes[getRandom()]);
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
        setWord(quotes[random]);
    };
    const color = colors[Math.floor(Math.random() * 6)]
    document.body.style = `background: ${color}`;

    return (
        <div style={{color: color}}>
            <h3>¡{word.quote}!</h3>
            <p>-{word.author}-</p>
          
            <button onClick={changePhrase}><i class="fa-solid fa-arrow-right-long"></i></button>
        <footer>  Made by Ariel F. G.</footer>
        </div>
    );
};

export default Word;