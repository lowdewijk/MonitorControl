/// <reference path="../../../tools/typings/tsd/nouislider/nouislider.d.ts"/>

// link between internal and external module
// took me a bit of help to figure this out:
// http://stackoverflow.com/questions/34463905/how-to-load-an-external-typescript-module-that-is-defined-as-an-internal-module/
declare module 'noUiSlider/distribute/nouislider' {
  export = noUiSlider;
}
