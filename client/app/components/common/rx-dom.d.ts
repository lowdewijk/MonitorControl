
declare module 'rx-dom/dist/rx.dom' {
  export function fromWebSocket(url:string, protocol:string, openObserver?, closingObserver?);
}

/*
 ///<reference path="../../../node_modules/angular2/typings/es6-shim/es6-shim.d.ts" /> ???
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer'

declare module RxDom {
  export interface AjaxSettings {
    async?: boolean;
    body?: string;
    // This options does not seem to be used in the code yet
    // contentType?: string;
    crossDomain?: boolean;
    headers?: any;
    method?: string;
    password?: string;
    progressObserver?: Observer<any>;
    responseType?: string;
    url?: string;
    user?: string;
  }

  export interface AjaxSuccessResponse {
    response: any;
    status: number;
    responseType: string;
    xhr: XMLHttpRequest;
    originalEvent: Event;
  }

  export interface AjaxErrorResponse {
    type: string;
    status: number;
    xhr: XMLHttpRequest;
    originalEvent: Event;
  }

  export interface JsonpSettings {
    async?: boolean;
    jsonp?: string;
    jsonpCallback?: string;
    url?: string;
  }

  export interface JsonpSuccessResponse {
    response: any;
    status: number;
    responseType: string;
    originalEvent: Event;
  }

  export interface JsonpErrorResponse {
    type: string;
    status: number;
    originalEvent: Event;
  }

  export interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
  }

  // Events
  function fromEvent(element:any, eventName:string, selector?:Function, useCapture?:boolean):Observable<any>;

  function ready():Observable<any>;

  // Event Shortcuts
  function blur(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function change(element:any, selector?:Function):Observable<any>;

  function click(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function contextmenu(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function dblclick(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function error(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function focus(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function focusin(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function focusout(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function keydown(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function keypress(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function keyup(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function load(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mousedown(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mouseenter(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mouseleave(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mousemove(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mouseout(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mouseover(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function mouseup(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function resize(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function scroll(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function select(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function submit(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function unload(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  // Pointer Events
  function pointerdown(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function pointerenter(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function pointerleave(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function pointermove(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function pointerout(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function pointerover(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function pointerup(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  // Touch Events
  function touchcancel(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function touchend(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function touchmove(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  function touchstart(element:any, selector?:Function, useCapture?:boolean):Observable<any>;

  // Ajax
  function ajax(url:string):Observable<AjaxSuccessResponse | AjaxErrorResponse>;
  function ajax(settings:AjaxSettings):Observable<AjaxSuccessResponse | AjaxErrorResponse>;

  function get(url:string):Observable<AjaxSuccessResponse | AjaxErrorResponse>;

  function getJSON(url:string):Observable<any>;

  function post(url:string, body:any):Observable<AjaxSuccessResponse | AjaxErrorResponse>;

  function jsonpRequest(url:string):Observable<any>;
  function jsonpRequest(settings:JsonpSettings):Observable<JsonpSuccessResponse | JsonpErrorResponse>;

  // Server-Sent Events
  function fromEventSource(url:string, openObservable?:Observer<any>):Observable<any>;

  // Web Sockets
    function fromWebSocket(url:string, protocol:string, openObserver?:Observer<any>, closingObserver?:Observer<any>):Subject<any>;

  // Web Workers
  function fromWebWorker(url:string):Subject<any>;

  // Mutation Observers
  function fromMutationObserver(target:Node, options:MutationObserverInit):Observable<any>;

  // Geolocation
  export module geolocation {
    function getCurrentPosition(geolocationOptions?:GeolocationOptions):Observable<any>;

    function watchPosition(geolocationOptions?:GeolocationOptions):Observable<any>;
  }
}
*/
