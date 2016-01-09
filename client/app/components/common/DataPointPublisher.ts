import {RxWebSocket, Observer} from './RxWebSocket';
import {ProviderDataPoint} from './ProviderDataPoint';

export class DataPointPublisher {

  private _observer: Observer<ProviderDataPoint<any>>;

  constructor() {
    const webSocket = RxWebSocket.create('ws://localhost:8080/api/controls/ws');
    this._observer = webSocket.in;
    webSocket.out.forEach(data => console.log(`Received ${data}`), this);
  }

  get observer() { return this._observer; }
}
