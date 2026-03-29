"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!
let winner = null;
let winningType = "";
const size = BATTLEFIELD.length;

for (let i = 0; i < size; i++) {
    let firstValue = BATTLEFIELD[i][0];
    let same = true;

    if (firstValue === null) {
        same = false;
    } else {
        for (let j = 1; j < size; j++) {
            if (BATTLEFIELD[i][j] !== firstValue) {
                same = false;
            }
        }
    }

    if (same) {
        winner = firstValue;
        winningType = "horizontal";
    }
}

if(winner === null) {
    for (let i = 0; i < size; i++) {
        let firstValue = BATTLEFIELD[0][i];
        let same = true;
        if (firstValue === null) {
            same = false;
        } else {
            for (let j = 1; j < size; j++) {
                if (BATTLEFIELD[i][j] !== firstValue){
                    same = false;
                }
            }
        }
        if (same) {
            winner = firstValue;
            winningType = "vertical";
        }
    }
}

if (winner === null) {
    let firstValue = BATTLEFIELD[0][0];
    let same = true;
    if (firstValue === null) {
        same = false;
    } else {
        for (let i = 1; i < size; i++) {
            if (BATTLEFIELD[i][i] !== firstValue){
                same = false;
            }
        }
    }
    if (same) {
        winner = firstValue;
        winningType = "main diagonal";
    }
}

if (winner === null) {
    let firstValue = BATTLEFIELD[0][size -1];
    let same = true;
    if (firstValue === null) {
        same = false;
    } else {
        for (let i = 1; i < size; i++) {
            if (BATTLEFIELD[i][size - 1 - i] !== firstValue){
                same = false;
            }
        }
    }
    if (same) {
        winner = firstValue;
        winningType = "anti diagonal";
    }
}
if (winner !== null) {
    console.log(winner + " won the battle! Type: " + winningType);
} else {
    console.log("There is no winner.");
}