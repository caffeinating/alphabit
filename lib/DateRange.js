"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dates = require("./dates");

var D = _interopRequireWildcard(_dates);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateRange = function () {
    function DateRange() {
        var from = arguments.length <= 0 || arguments[0] === undefined ? Date.now() : arguments[0];
        var to = arguments.length <= 1 || arguments[1] === undefined ? from : arguments[1];

        _classCallCheck(this, DateRange);

        this.from = from;
        this.to = to;
    }

    _createClass(DateRange, [{
        key: "toString",
        value: function toString() {
            var from = new Date(this.from);
            var to = new Date(this.to);
            return D.isoDate(from) + "|" + D.isoDate(to);
        }
    }]);

    return DateRange;
}();

exports.default = DateRange;