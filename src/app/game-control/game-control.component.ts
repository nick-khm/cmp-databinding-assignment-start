import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  public inc = 0;
  private ref;
  @Output() onCounterChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.ref = setInterval(() => {
      console.log('interval')
      this.inc++;
      this.onCounterChanged.emit(this.inc);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.ref);
  }

}
