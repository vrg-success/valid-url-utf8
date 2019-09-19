(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.validUrlUtf8 = factory());
}(this, function () { 'use strict';

  function validUrlUtf8(str) {
    return /^((ftp|http|https?):\/\/)?((?!www\.)|www\.)([^();\.\\\/`'"!~{}\(\) ])+\.[^;:\.\\\/`'"!~{}\(\) ]{2,}(\/|$)/.test(str);
  }

  return validUrlUtf8;
}));