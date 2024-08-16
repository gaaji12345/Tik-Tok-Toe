import React from 'react';
import './TicTacToe.css'
import circle_icon from '../Accets/circle.png'
import cross_icon from '../Accets/cross.png'
function TicTactoe(props) {
    return (
        <div className="container">
          <h1 className="title"> Tic Tac Toe game in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row2">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row3">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>

            </div>
            <button className="rest">Rest</button>
        </div>
    );
}

export default TicTactoe;