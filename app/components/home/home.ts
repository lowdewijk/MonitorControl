import {Component} from 'angular2/core';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';
import {fromWebSocket} from 'rx-dom/dist/rx.dom';

@Component({
  selector: 'home',
  directives: [NoUiSliderCmp],
  template: `<no-ui-slider orientation="vertical" size="300" (change)="onSlideChange($event)"></no-ui-slider>`,
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }

  onSlideChange($event) {
    console.log('on change', $event);

/*
    var openObserver = Observer.create(function(e) {
      console.info('socket open');

      // Now it is safe to send a message
      socket.onNext('test');
    });

// an observer for when the socket is about to close
    var closingObserver = Observer.create(function() {
      console.log('socket is about to close');
    });
*/

/*
    const socket = fromWebSocket(
      'ws://echo.websockets.org',
      null); // no protocol*!/
*/
/*
      openObserver,
      closingObserver);
*/

// subscribing creates the underlying socket and will emit a stream of incoming
// message events
/*
    socket.subscribe(
      function(e) {
        console.log('message: %s', e.data);
      },
      function(e) {
        // errors and "unclean" closes land here
        console.error('error: %s', e);
      },
      function() {
        // the socket has been closed
        console.info('socket closed');
      }
    );
*/
  }
}
