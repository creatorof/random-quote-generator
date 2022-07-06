import { useState, useEffect } from "react";

function App(){
    const URL = 'https://animechan.vercel.app/api/random';
    const [quote, setQuote] = useState('');
    const [color, setColor] = useState('black');
    const [character, setCharacter] = useState('');

    const getRandomQuote = async () => {
        const response = await fetch(URL);
        const body = await response.json();
        setQuote(body.quote);
        setCharacter(body.character);
        const randomColorIndex = Math.floor(Math.random() * colorList.length);
        setColor(colorList[randomColorIndex]);

    }

    const href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +encodeURIComponent('"' + quote + '" ' + character);

    const colorList = [
        '#316650',
        '#66F10A',
        '#E7D0AA',
        '#8B4D21',
        '#D53032',
        '#BEBD7F',
        '#C2B078',
        '#1F3438',
        '#8F8F8F',
        '#8F98FC'
    ];

    const textStyles = {
        fontSize : 24,
        color: color
    }

    const characterStyles = {
        color:color,
        fontSize:16
    }

    const shareLinkStyles = {
        backgroundColor:color,
        color:'white',
        maxWidth:20,
        maxHeight:20,
        paddingRight:7,
        paddingLeft:7,
        borderRadius:3,
    }

    useEffect(()=>{
        getRandomQuote();
    },['']);

    return (
        <div className="wrapper" style={{backgroundColor:color}}>
            <div id="quote-box" >
                <div className="quote">
                    <p id="text" style={textStyles}>
                    <i className="fa-solid fa-quote-left"></i> {quote}
                    </p>
                    <p id="author" style={characterStyles}>
                        - {character}
                    </p>
                </div>
                
                <div className="utilities">
                    <div className="shareTool">
                        <a href={href} id="tweet-quote" style={shareLinkStyles}><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    <button id="new-quote" style={{backgroundColor:color}} onClick={getRandomQuote}>New Quote</button>
                </div>
            </div>
        </div>
        
    )
}

export default App;