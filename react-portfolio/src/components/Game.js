import React from 'react'
import Blob from './Blob'
import Cactus from './Cactus'
import './Game.scss'

function Game(){
    // let isAlive = setInterval(function () {
    //     // get current dino Y position
    //     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      
    //     // get current cactus X position
    //     let cactusLeft = parseInt(
    //       window.getComputedStyle(cactus).getPropertyValue("left")
    //     );
      
    //     // detect collision
    //     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    //       // collision
    //       alert("Game Over!");
    //     }
    //   }, 10);

      
    return <div className="game">
        <Blob/>
        <Cactus/>
    </div>
}

export default Game