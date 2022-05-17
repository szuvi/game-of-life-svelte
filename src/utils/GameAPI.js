import { map } from "rxjs";
import Board from "./Board";
import LifeUpdater from "./LifeUpdater";

function GameOfLife(initialSize) {
  const myBoard = new Board(initialSize);
  const updater = new LifeUpdater(myBoard);

  const API = {
    getState: () => myBoard.getState(), // returns single current state of Board
    getBoardUpdates$: () =>
      myBoard.getBoardUpdates$().pipe(map((fields) => fields.flat())), // return observable that supplies board state everytime there is a change
    toggleAtPos: (pos) => myBoard.toggleAtPos(pos),
    wipeBoard: () => myBoard.killAll(),
    fillWholeBoard: () => myBoard.resurrectAll(),
    startUpdates: (intervalTime) => updater.start(intervalTime), // starts game of life updates
    endUpdates: () => updater.end(), // ends game of life updates
  };

  return API;
}

export default GameOfLife;
