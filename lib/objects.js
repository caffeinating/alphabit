
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toMap = toMap;
exports.equals = equals;
exports.emptyObject = emptyObject;
exports.empty = empty;
exports.removeIndex = removeIndex;
exports.containsText = containsText;
exports.find = find;
exports.cloneExcluding = cloneExcluding;
exports.resolve = resolve;

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toMap(o) {
    var map = Object.create(null);
    if (o != null) {
        var keys = Object.keys(o);
        for (var i = 0; i < keys.length; i++) {
            map[keys[i]] = o[keys[i]];
        }
        console.log('returning map');
        return map;
    }
}

function equals(o1, o2) {
    return (0, _deepEqual2.default)(o1, o2);
}

function emptyObject(o) {
    return o == null || Object.keys(o).length === 0;
}

function empty(o) {
    return o == null || o.length == 0; // this works on strings and arrays; not objects
}

/**
 * Returns a new array excluding the element at index
 * @param index
 * @param array
 */
function removeIndex(index, array) {
    // remove:       3
    // from  : 0,1,2,3,4,5
    // result: 0,1,2,4,5

    if (index < 0 || index >= array.length) {
        return array;
    }
    if (index == 0) {
        return array.slice(1);
    }
    if (index == array.length - 1) {
        return array.slice(0, index);
    }
    var one = array.slice(0, index);
    var two = array.slice(index + 1, array.length);
    Array.prototype.push.apply(one, two);
    return one;
}

/**
 * Return true if any of the object's own properties
 * contains the given text, ignoring case.
 * @param o
 * @param text
 */
function containsText(o, text) {
    var test = text.toLowerCase();
    var result = Object.keys(o).filter(function (each) {
        return typeof o[each] === "string";
    }).find(function (each) {
        return o[each].toLowerCase().includes(test);
    });
    return result != undefined;
}

/**
 * Return true if any of the object's own properties
 * contains the given text, ignoring case.
 * @param o
 * @param text
 */
function find(o, text) {
    var result = Object.keys(o).find(function (each) {
        return o[each].includes(test);
    });
    return result != undefined;
}

function cloneExcluding(obj) {
    var clone = Object.assign({}, obj);

    for (var _len = arguments.length, excludedProps = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        excludedProps[_key - 1] = arguments[_key];
    }

    excludedProps.forEach(function (p) {
        return delete clone[p];
    });
    return clone;
}

/**
 * From within 'state', find the value of its descendant
 * as implied by the path argument.
 *
 * @param state - an object with complex state
 * @param path - dotted path notation... e.g. grand.parent.child
 * @returns {*} - value from state[path]
 */
function resolve(state, path) {
    return path.split('.').reduce(function (o, i) {
        return o[i];
    }, state);
}