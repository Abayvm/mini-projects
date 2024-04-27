import React, { useState } from "react";
import '../styles/memorygame.css'; 

function Memorygame(){

    const [gameStartInstructions, setgameStartInstructions] = useState(false);
    const [startGame, setStartGame] = useState(false)
    let gameInstruction = "You have to remember the numbers that appear on your screen for only 3 seconds and fill the input with the number that appeared";

    function showInstro(){
        setgameStartInstructions(true);
    }

    function closeInstro(){
        setgameStartInstructions(false);
        setStartGame(true)
    }

    let nums = 4;

    function randomNumGenerator(){
        let theWords = [1,2,3,4,5,6,7,8,9,0,'a','q','w','e','r','t','y','u','i','o','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
        let randomNumArry = [];
        for(let i=0; i<nums; i++){
            let randIndex = Math.floor(Math.random() * 36) + 1;
            let randWord = theWords[randIndex];
            randomNumArry.push(randWord);
        }
        return randomNumArry;
    }

    return(
        <>
            <h1>Memory Game</h1>
            <div className="gameFeild">
                {(!gameStartInstructions && !startGame) && (
                    <div className="bttnContainer">
                        <button type="button" onClick={showInstro} className="startBttn">Start</button>
                    </div>
                )}
                <div className="instoContainer">
                    {gameStartInstructions ? (
                        <div className="instruct">
                            <h2>Game Instruction</h2>
                            <p>
                                {gameInstruction}
                                    <button type="button" onClick={closeInstro}>Ok</button>
                            </p>
                        </div>
                    ) : null}
                </div>
                {startGame && (
                    <>
                        {randomNumGenerator().map((num, index) => (
                            <div key={index}>{num}</div>
                        ))}
                    </>
                )}
            </div>
</>

    )
}

export default Memorygame;