"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lbl = lbl;
exports.txt = txt;

var _text = require("./text");

var T = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// first is IE, 2nd others.
// this is not always correct, as it may not reflect the current content.
// left 2, in case we get en-US, for example.
var lang = T.left(window.navigator.userLanguage || window.navigator.language, 2);

// Later, we will load bundles from a text file, specific to a tenant
var labelBundle = {
    en: {
        namePrefix: "Prefix"
    }
};

// Later, we will load bundles from a text file, specific to a tenant
var textBundle = {
    en: {
        hello: "Hello"
    },
    es: {
        hello: "Ola"
    }
};

/**
 * Labels reflect labels for named fields (other other things)
 * @param fieldName - often the field name.
 * @returns {string}
 */
function lbl(fieldName) {
    var result = labelBundle[lang][fieldName];
    return result || T.camelCaseToTitleCase(fieldName);
}

/**
 * Return localized text mapped for the value
 * @param value - the default value, or a known constant
 * @returns {string}
 */
function txt(value) {
    var result = textBundle[lang][value];
    return result || value;
}

exports.default = {
    lbl: lbl,
    txt: txt
};