import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {

  private notifierIntervalHandler;

  counter = 0;
  oddNumber = 0;
  evenNumber = 0;

  gameStatus: GAME_STATUS;

  constructor() { }

  ngOnInit() {
    this.gameStatus = GAME_STATUS.PAUSED;
  }

  startGame() {
    this.gameStatus = GAME_STATUS.STARTED;
    this.notifierIntervalHandler = setInterval(() => this.notifyCounter(), 1000);
  }

  stopGame() {
    this.gameStatus = GAME_STATUS.PAUSED;
    clearInterval(this.notifierIntervalHandler);
  }

  isStarted () {
    return this.gameStatus === GAME_STATUS.STARTED;
  }

  isPaused () {
    return this.gameStatus === GAME_STATUS.PAUSED;
  }

  notifyCounter = function() {
    this.counter = this.counter + 1;
    if (0 === this.counter % 2) {
      this.oddNumber = this.counter;
    } else {
      this.evenNumber = this.counter;
    }
  };
}

enum GAME_STATUS {
  STARTED,
  PAUSED
}
