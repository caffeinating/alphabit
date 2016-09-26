"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.empty = empty;
exports.len = len;
exports.left = left;
exports.pipedList = pipedList;
exports.commaList = commaList;
exports.textValueExcludes = textValueExcludes;
exports.format = format;
function empty(s) {
    return s == null || s.length == 0; // this works on strings and arrays; not objects
}

function len(s) {
    return s == null ? 0 : s.length;
}

function left(s, len) {
    if (s == null) return "";
    if (s.length <= len) {
        return s;
    }
    return s.substr(0, len);
}

function pipedList(arr) {
    return arr.join("|");
}

function commaList(arr) {
    return arr.join(",");
}

var camelCaseToTitleCase = exports.camelCaseToTitleCase = function camelCaseToTitleCase(camelCase) {
    if (camelCase == null || camelCase == "") {
        return camelCase;
    }

    camelCase = camelCase.trim();
    var newText = "";
    for (var i = 0; i < camelCase.length; i++) {
        if (/[A-Z]/.test(camelCase[i]) && i != 0 && /[a-z]/.test(camelCase[i - 1])) {
            newText += " ";
        }
        if (i == 0 && /[a-z]/.test(camelCase[i])) {
            newText += camelCase[i].toUpperCase();
        } else {
            newText += camelCase[i];
        }
    }

    return newText;
};

function textValueExcludes(value, exclude) {
    return value && value.length > 0 && value !== exclude;
}

/**
 * Simple format function.  First arg is the string, subsequent
 * are values that replace placeholders in the string.
 *
 * Placeholders are numbered, like this {0}, {1}...
 *
 * @returns {String}
 */
function format() {
    var formatted = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + (i - 1) + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
}