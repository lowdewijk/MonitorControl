import {serveSPA} from '../../server/server';

export = function serverStart(gulp, plugins) {
  return function () {
    serveSPA();
  };
};
