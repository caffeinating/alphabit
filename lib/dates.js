'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toMillis = toMillis;
exports.isoText = isoText;
exports.isoDate = isoDate;
exports.parseSpan = parseSpan;
exports.todayMinus = todayMinus;

var _text = require('./text');

var T = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SPAN_REGEXP = /(\d+)([wdhms])/gi; // dates.es6  --  Date utilities

var NO_SPAN = "0";

function toMillis(n, u) {
    switch (u) {
        case 's':
            return n * 1000;
        case 'm':
            return n * 1000 * 60;
        case 'h':
            return n * 1000 * 60 * 60;
        case 'd':
            return n * 1000 * 60 * 60 * 24;
        case 'w':
            return n * 1000 * 60 * 60 * 24 * 7;
        default:
            return 0;
    }
}

function isoText(datetimeStr) {
    return T.empty(datetimeStr) ? "" : datetimeStr.slice(0, 10);
}

function isoDate(date) {
    return date.toISOString().slice(0, 10);
}

/**
 * Returns milliseconds represented by the text argument.
 * The argument's format: du[du]*
 * Where:
 *    d - a number
 *    u - a time span unit specifier: s:second, m:minute, h:hour, d:day, w:week
 * Example:
 *    10m = ten minutes
 *    4d2h15m = four days, two hours, fifteen minutes
 *
 * @param text a string,
 *
 * @returns {number} of milliseconds
 */
function parseSpan(text) {
    if (text == null || NO_SPAN == text) {
        return 0;
    }
    var m = void 0;
    var result = 0;
    while (m = SPAN_REGEXP.exec(text)) {
        var d = parseInt(m[1]);
        if (!isNaN(d)) {
            result += toMillis(d, m[2]);
        }
    }
    return result;
}

function todayMinus(span) {
    return new Date(Date.now() - parseSpan(span));
}