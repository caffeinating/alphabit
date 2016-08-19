"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexByKey = exports.indexByID = exports.removeByKey = exports.findByKey = exports.findByID = exports.numericID = exports.nextID = exports.isCreating = exports.NEW = undefined;

var _objects = require("./objects");

var O = _interopRequireWildcard(_objects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var NEW = exports.NEW = "new";

/**
 * Is the entity being created?  True unless the _id of entity is a positive number,
 * which is what indicates a persistent entity.
 * 
 * @param entity
 */
var isCreating = exports.isCreating = function isCreating(entity) {
  return entity._id == null || entity._id <= 0;
};

/**
 * A simple generator of IDs that can be assigned to new objects,
 * until they are persisted.   Rezometry likes temporaries to be negative.
 */
var generatedID = -1;
var nextID = exports.nextID = function nextID() {
  return generatedID--;
};

var numericID = exports.numericID = function numericID(textID) {
  if (typeof textID === "number") {
    return textID;
  }
  if (typeof textID === "string") {
    try {
      return Number(textID);
    } catch (err) {
      console.warn("Invalid Entity ID: ", textID);
    }
  }
  return 0;
};

/**
 * Finds the entity in entities that has the given id.
 * the comparison is made to the entity's _id property.
 * @param entities
 * @param id
 */
var findByID = exports.findByID = function findByID(entities, id) {
  return entities.find(function (e) {
    return e._id == id;
  });
};

/**
 * Finds the token in tokens that has the given key.
 * the comparison is made to the entity's _id property.
 * @param tokens array of tokens (or summaries)
 * @param key of the token to be found
 * @returns the token
 */
var findByKey = exports.findByKey = function findByKey(tokens, key) {
  return tokens.find(function (e) {
    return e.key == key;
  });
};

/**
 * Returns an array that excludes the token with given key from tokens.
 * @param tokens array of tokens (or summaries)
 * @param key of the token to be found
 * @returns a new array
 */
var removeByKey = exports.removeByKey = function removeByKey(tokens, key) {
  var i = indexByKey(tokens, key);
  return O.removeIndex(i, tokens);
};

/**
 * Finds the index of the entity in entities that has the given id.
 * @param entities
 * @param id
 */
var indexByID = exports.indexByID = function indexByID(entities, id) {
  return entities.findIndex(function (e) {
    return e._id == id;
  });
};

/**
 * Finds the index of the tokens in entities that has the given id.
 * @param tokens
 * @param key
 */
var indexByKey = exports.indexByKey = function indexByKey(tokens, key) {
  return tokens.findIndex(function (e) {
    return e.key == key;
  });
};