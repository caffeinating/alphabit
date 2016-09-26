"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;

/**
 * Return true if the arg is undefined, null or empty.
 */
function empty(arr) {
  return arr == null || arr.length == 0; // this works on strings and arrays; not objects
}