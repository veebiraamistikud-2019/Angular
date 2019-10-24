import { Component, OnInit } from '@angular/core';
import { CellEnum } from '../cell/CellEnum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
  export class GameComponent implements OnInit {
  private currentPlayer: CellEnum;
  public board: CellEnum[][];
  private isGameOver: boolean;
  public statusMessage;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  get gameOver(): boolean {
    return this.isGameOver;
  }

  newGame() {
    this.board = [];
    for (let row = 0; row < 3; row++){
      this.board[row] = [];
      for (let col = 0; col < 3; col++){
        this.board[row][col] = CellEnum.EMPTY;
      }
    }
    this.currentPlayer = CellEnum.X;
    this.isGameOver = false;
    this.statusMessage = "Player "+ this.currentPlayer +"s turn";

  }

  move(row: number, col: number): void {
    if(!this.isGameOver && this.board[row][col] === CellEnum.EMPTY) {
      this.board[row][col] = this.currentPlayer;
      if(this.isDraw()) {
        this.statusMessage = "It's a Draw!"
        this.isGameOver = true;
      }
      else if (this.isWin()){
        this.statusMessage = "Player " + this.currentPlayer + " won!";
        this.isGameOver = true;
      }
      else {
        this.currentPlayer = this.currentPlayer === CellEnum.X ? CellEnum.O : CellEnum.X;
        this.statusMessage = "Player "+ this.currentPlayer +"s turn";
      }
    }
  }

  isDraw(): boolean {
    for(const columns of this.board){
      for (const col of columns) {
        if(col === CellEnum.EMPTY){
          return false;
        }
      }
    }
    return !this.isWin();
  }
  
  isWin(): boolean {
    for(const columns of this.board){
      if(columns[0] === columns[1] && columns[0] === columns[2] && columns[0] !== CellEnum.EMPTY){
        return true;
      }
    }
    for(let col = 0; col < this.board[0].length; col++){
      if(
        this.board[0][col] === this.board[1][col] &&
        this.board[0][col] === this.board[2][col] &&
        this.board[0][col] !== CellEnum.EMPTY
      ) {
        return true;
      }
    }
    if(
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0] !== CellEnum.EMPTY
    ) {
      return true;
    }

    if(
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0] &&
      this.board[0][2] !== CellEnum.EMPTY
    ) {
      return true;
    }

      return false;
  }
}
