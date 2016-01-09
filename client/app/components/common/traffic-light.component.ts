import {Component, Output, EventEmitter} from 'angular2/core';

export enum TrafficLightState {
  RED, ORANGE, GREEN
}

@Component({
  selector : 'traffic-light',
  template : `<div class="traffic-light">
    <div name="stopLight" (click)="setState(stateEnum.RED)" [class.selected]="stateEnum.RED === state"
      class="bulb bulb-red"></div>
    <div name="slowLight" (click)="setState(stateEnum.ORANGE)" [class.selected]="stateEnum.ORANGE === state"
      class="bulb bulb-orange"></div>
    <div name="goLight" (click)="setState(stateEnum.GREEN)" [class.selected]="stateEnum.GREEN === state"
      class="bulb bulb-green"></div>
  </div>`,
  styles : [`
  .traffic-light {
    height: 550px;
    width: 200px;
    float: left;
    background-color: #333;
    border-radius: 40px;
    margin: 30px 0;
    padding: 20px;
  }

  .bulb {
    height: 150px;
    width: 150px;
    background-color: #111;
    border-radius: 50%;
    margin: 25px auto;
    transition: background 500ms;
  }

  .bulb-red.selected {
    background-color: red
  }

  .bulb-orange.selected {
    background-color: orange
  }

  .bulb-green.selected {
    background-color: green
  }`]
})

export class TrafficLight {
  stateEnum = TrafficLightState; //To use the enum in the template it needs to be in the controller

  state = TrafficLightState.RED;

  @Output() change = new EventEmitter<TrafficLightState>();

  setState(newState: TrafficLightState) {
    this.state = newState;
    this.change.emit(this.state);
  }
}
