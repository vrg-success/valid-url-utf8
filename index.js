(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.validUrlUtf8 = factory());
}(this, function () { 'use strict';

  function validUrlUtf8(str) {
    // If contains dots more than 1 return false
    if (/^((ftp|http|https?):\/\/)?((?!www\.)|www\.)([^\(\)\;\.\\\/\`\'\"\!\~\{\}\(\)\s])+\.[^\;\:\\\/\`\'\"\!\~\{\}\(\)\s]{2,}(\.\.)/.test(str)) {
      return false;
    }
    return /^((ftp|http|https?):\/\/)?((?!www\.)|www\.)([^\(\)\;\.\\\/\`\'\"\!\~\{\}\(\)\s])+\.[^\;\:\\\/\`\'\"\!\~\{\}\(\)\s]{2,}(\/|$)/.test(str);
  }

  return validUrlUtf8;
}));