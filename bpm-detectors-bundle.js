(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/fast-unique-numbers/build/es5/bundle.js
  var require_bundle = __commonJS({
    "node_modules/fast-unique-numbers/build/es5/bundle.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.fastUniqueNumbers = {}));
      })(exports, (function(exports2) {
        "use strict";
        var createAddUniqueNumber = function createAddUniqueNumber2(generateUniqueNumber3) {
          return function(set) {
            var number = generateUniqueNumber3(set);
            set.add(number);
            return number;
          };
        };
        var createCache = function createCache2(lastNumberWeakMap) {
          return function(collection, nextNumber) {
            lastNumberWeakMap.set(collection, nextNumber);
            return nextNumber;
          };
        };
        var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
        var TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
        var TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
        var createGenerateUniqueNumber = function createGenerateUniqueNumber2(cache2, lastNumberWeakMap) {
          return function(collection) {
            var lastNumber = lastNumberWeakMap.get(collection);
            var nextNumber = lastNumber === void 0 ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
            if (!collection.has(nextNumber)) {
              return cache2(collection, nextNumber);
            }
            if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
              while (collection.has(nextNumber)) {
                nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
              }
              return cache2(collection, nextNumber);
            }
            if (collection.size > MAX_SAFE_INTEGER) {
              throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
            }
            while (collection.has(nextNumber)) {
              nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
            }
            return cache2(collection, nextNumber);
          };
        };
        var LAST_NUMBER_WEAK_MAP = /* @__PURE__ */ new WeakMap();
        var cache = createCache(LAST_NUMBER_WEAK_MAP);
        var generateUniqueNumber2 = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);
        var addUniqueNumber = createAddUniqueNumber(generateUniqueNumber2);
        exports2.addUniqueNumber = addUniqueNumber;
        exports2.generateUniqueNumber = generateUniqueNumber2;
      }));
    }
  });

  // node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n, i, u, a = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return arrayLikeToArray(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
        }
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(r, e) {
        return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS({
    "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
      function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toPrimitive.js
  var require_toPrimitive = __commonJS({
    "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != _typeof(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toPropertyKey.js
  var require_toPropertyKey = __commonJS({
    "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      var toPrimitive = require_toPrimitive();
      function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
      }
      module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      var toPropertyKey = require_toPropertyKey();
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
        }
      }
      function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
          writable: false
        }), e;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/automation-events/build/es5/bundle.js
  var require_bundle2 = __commonJS({
    "node_modules/automation-events/build/es5/bundle.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_slicedToArray(), require_classCallCheck(), require_createClass()) : typeof define === "function" && define.amd ? define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.automationEvents = {}, global2._slicedToArray, global2._classCallCheck, global2._createClass));
      })(exports, (function(exports2, _slicedToArray, _classCallCheck, _createClass) {
        "use strict";
        var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetValueAutomationEvent2 = function createSetValueAutomationEvent3(value, startTime) {
          return {
            startTime,
            type: "setValue",
            value
          };
        };
        var createSetValueCurveAutomationEvent2 = function createSetValueCurveAutomationEvent3(values, startTime, duration) {
          return {
            duration,
            startTime,
            type: "setValueCurve",
            values
          };
        };
        var getTargetValueAtTime = function getTargetValueAtTime2(time, valueAtStartTime, _ref) {
          var startTime = _ref.startTime, target = _ref.target, timeConstant = _ref.timeConstant;
          return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
        };
        var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "exponentialRampToValue";
        };
        var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "linearRampToValue";
        };
        var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent2(automationEvent) {
          return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
        };
        var isSetValueAutomationEvent = function isSetValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValue";
        };
        var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValueCurve";
        };
        var _getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime(automationEvents, index, time, defaultValue) {
          var automationEvent = automationEvents[index];
          return automationEvent === void 0 ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
        };
        var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent2(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
          return currentAutomationEvent === void 0 ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
        };
        var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelAndHold";
        };
        var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelScheduledValues";
        };
        var getEventTime = function getEventTime2(automationEvent) {
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            return automationEvent.cancelTime;
          }
          if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
            return automationEvent.endTime;
          }
          return automationEvent.startTime;
        };
        var getExponentialRampValueAtTime = function getExponentialRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          if (valueAtStartTime === value) {
            return value;
          }
          if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
            return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
          }
          return 0;
        };
        var getLinearRampValueAtTime = function getLinearRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
        };
        var interpolateValue = function interpolateValue2(values, theoreticIndex) {
          var lowerIndex = Math.floor(theoreticIndex);
          var upperIndex = Math.ceil(theoreticIndex);
          if (lowerIndex === upperIndex) {
            return values[lowerIndex];
          }
          return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
        };
        var getValueCurveValueAtTime = function getValueCurveValueAtTime2(time, _ref) {
          var duration = _ref.duration, startTime = _ref.startTime, values = _ref.values;
          var theoreticIndex = (time - startTime) / duration * (values.length - 1);
          return interpolateValue(values, theoreticIndex);
        };
        var isSetTargetAutomationEvent = function isSetTargetAutomationEvent2(automationEvent) {
          return automationEvent.type === "setTarget";
        };
        var AutomationEventList2 = /* @__PURE__ */ (function() {
          function AutomationEventList3(defaultValue) {
            _classCallCheck(this, AutomationEventList3);
            this._automationEvents = [];
            this._currenTime = 0;
            this._defaultValue = defaultValue;
          }
          return _createClass(AutomationEventList3, [{
            key: Symbol.iterator,
            value: function value() {
              return this._automationEvents[Symbol.iterator]();
            }
          }, {
            key: "add",
            value: function add(automationEvent) {
              var eventTime = getEventTime(automationEvent);
              if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
                var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                    return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
                  }
                  return getEventTime(currentAutomationEvent) >= eventTime;
                });
                var removedAutomationEvent = this._automationEvents[index];
                if (index !== -1) {
                  this._automationEvents = this._automationEvents.slice(0, index);
                }
                if (isCancelAndHoldAutomationEvent(automationEvent)) {
                  var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
                  if (removedAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                    if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                      throw new Error("The internal list is malformed.");
                    }
                    var startTime = lastAutomationEvent === void 0 ? removedAutomationEvent.insertTime : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                    var startValue = lastAutomationEvent === void 0 ? this._defaultValue : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                    var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                    var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                    this._automationEvents.push(truncatedAutomationEvent);
                  }
                  if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                    this._automationEvents.push(createSetValueAutomationEvent2(this.getValue(eventTime), eventTime));
                  }
                  if (lastAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                    var duration = eventTime - lastAutomationEvent.startTime;
                    var ratio = (lastAutomationEvent.values.length - 1) / lastAutomationEvent.duration;
                    var length = Math.max(2, 1 + Math.ceil(duration * ratio));
                    var fraction = duration / (length - 1) * ratio;
                    var values = lastAutomationEvent.values.slice(0, length);
                    if (fraction < 1) {
                      for (var i = 1; i < length; i += 1) {
                        var factor = fraction * i % 1;
                        values[i] = lastAutomationEvent.values[i - 1] * (1 - factor) + lastAutomationEvent.values[i] * factor;
                      }
                    }
                    this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent2(values, lastAutomationEvent.startTime, duration);
                  }
                }
              } else {
                var _index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  return getEventTime(currentAutomationEvent) > eventTime;
                });
                var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
                if (previousAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
                  return false;
                }
                var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
                if (_index === -1) {
                  this._automationEvents.push(persistentAutomationEvent);
                } else {
                  if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                    return false;
                  }
                  this._automationEvents.splice(_index, 0, persistentAutomationEvent);
                }
              }
              return true;
            }
          }, {
            key: "flush",
            value: function flush(time) {
              var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                return getEventTime(currentAutomationEvent) > time;
              });
              if (index > 1) {
                var remainingAutomationEvents = this._automationEvents.slice(index - 1);
                var firstRemainingAutomationEvent = remainingAutomationEvents[0];
                if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
                  remainingAutomationEvents.unshift(createSetValueAutomationEvent2(_getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
                }
                this._automationEvents = remainingAutomationEvents;
              }
            }
          }, {
            key: "getValue",
            value: function getValue(time) {
              if (this._automationEvents.length === 0) {
                return this._defaultValue;
              }
              var indexOfNextEvent = this._automationEvents.findIndex(function(automationEvent) {
                return getEventTime(automationEvent) > time;
              });
              var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
              var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
              var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
              if (currentAutomationEvent !== void 0 && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
                return getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
              }
              if (currentAutomationEvent !== void 0 && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (currentAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
                if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
                  return getValueCurveValueAtTime(time, currentAutomationEvent);
                }
                return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
              }
              if (currentAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (nextAutomationEvent !== void 0 && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf2 = _slicedToArray(_getEndTimeAndValueOf, 2), startTime = _getEndTimeAndValueOf2[0], value = _getEndTimeAndValueOf2[1];
                return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
              }
              if (nextAutomationEvent !== void 0 && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf4 = _slicedToArray(_getEndTimeAndValueOf3, 2), _startTime = _getEndTimeAndValueOf4[0], _value = _getEndTimeAndValueOf4[1];
                return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
              }
              return this._defaultValue;
            }
          }]);
        })();
        var createCancelAndHoldAutomationEvent2 = function createCancelAndHoldAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelAndHold"
          };
        };
        var createCancelScheduledValuesAutomationEvent2 = function createCancelScheduledValuesAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelScheduledValues"
          };
        };
        var createExponentialRampToValueAutomationEvent2 = function createExponentialRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createLinearRampToValueAutomationEvent2 = function createLinearRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetTargetAutomationEvent2 = function createSetTargetAutomationEvent3(target, startTime, timeConstant) {
          return {
            startTime,
            target,
            timeConstant,
            type: "setTarget"
          };
        };
        exports2.AutomationEventList = AutomationEventList2;
        exports2.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent2;
        exports2.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent2;
        exports2.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent2;
        exports2.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent2;
        exports2.createSetTargetAutomationEvent = createSetTargetAutomationEvent2;
        exports2.createSetValueAutomationEvent = createSetValueAutomationEvent2;
        exports2.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent2;
      }));
    }
  });

  // node_modules/sliding-window-max/src/SlidingWindowMax.js
  var require_SlidingWindowMax = __commonJS({
    "node_modules/sliding-window-max/src/SlidingWindowMax.js"(exports, module) {
      var DEFAULT_COMPARATOR = (a, b) => b - a;
      var SlidingWindowMax = class {
        constructor(windowSize, options = {}) {
          this.i = 0;
          this.list = [];
          this.windowSize = windowSize;
          this.waitFullRange = options.hasOwnProperty("waitFullRange") ? options.waitFullRange : true;
          const comparator = options.comparator ? options.comparator : DEFAULT_COMPARATOR;
          this.lowerThan = (a, b) => comparator(a, b) > 0;
        }
        add(value) {
          const cur = value;
          const list = this.list;
          const i = this.i;
          const windowSize = this.windowSize;
          const lowerThan = this.lowerThan;
          const waitFullRange = this.waitFullRange;
          while (list.length > 0 && lowerThan(list[list.length - 1].val, cur)) {
            list.pop();
          }
          if (list.length > 0 && list[0].i < i - windowSize + 1) {
            list.shift();
          }
          list.push({ i, val: cur });
          this.i++;
          if (i >= windowSize - 1) {
            return list[0].val;
          }
          return waitFullRange ? null : list[0].val;
        }
      };
      module.exports = SlidingWindowMax;
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/events/events.js"(exports, module) {
      "use strict";
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;
      if (R && typeof R.ownKeys === "function") {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn) console.warn(warning);
      }
      var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
        return value !== value;
      };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function() {
          return defaultMaxListeners;
        },
        set: function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this._maxListeners = n;
        return this;
      };
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter.prototype.emit = function emit(type) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er;
          if (args.length > 0)
            er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler2 = events[type];
        if (handler2 === void 0)
          return false;
        if (typeof handler2 === "function") {
          ReflectApply(handler2, this, args);
        } else {
          var len = handler2.length;
          var listeners = arrayClone(handler2, len);
          for (var i = 0; i < len; ++i)
            ReflectApply(listeners[i], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit(
              "newListener",
              type,
              listener.listener ? listener.listener : listener
            );
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: void 0, target, type, listener };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      EventEmitter.prototype.once = function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i)
          copy[i] = arr[i];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }
        return ret;
      }
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          }
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
          }
        });
      }
      function addErrorHandlerIfEventEmitter(emitter, handler2, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler2, flags);
        }
      }
      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          });
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
    }
  });

  // node_modules/readable-stream/lib/internal/streams/stream-browser.js
  var require_stream_browser = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports, module) {
      module.exports = require_events().EventEmitter;
    }
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer2;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer2.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this)) return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer2.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this)) return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function Buffer2(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer2.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer2.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b) return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer2.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer2, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer2.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer2.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer2.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer2.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer2.alloc(+length);
      }
      Buffer2.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer2.prototype;
      };
      Buffer2.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
        if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b) return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer2.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer2.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer2.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer2.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer2.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer2.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding) encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer2.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer2.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer2.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer2.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
      Buffer2.prototype.equals = function equals(b) {
        if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return Buffer2.compare(this, b) === 0;
      };
      Buffer2.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
      }
      Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer2.from(target, target.offset, target.byteLength);
        }
        if (!Buffer2.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0) return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;
          else return -1;
        }
        if (typeof val === "string") {
          val = Buffer2.from(val, encoding);
        }
        if (Buffer2.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer2.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0) encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer2.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer2.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer2.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer2.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val) val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = (function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      })();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // (disabled):util
  var require_util = __commonJS({
    "(disabled):util"() {
    }
  });

  // node_modules/readable-stream/lib/internal/streams/buffer_list.js
  var require_buffer_list = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var _require = require_buffer();
      var Buffer2 = _require.Buffer;
      var _require2 = require_util();
      var inspect = _require2.inspect;
      var custom = inspect && inspect.custom || "inspect";
      function copyBuffer(src, target, offset) {
        Buffer2.prototype.copy.call(src, target, offset);
      }
      module.exports = /* @__PURE__ */ (function() {
        function BufferList() {
          _classCallCheck(this, BufferList);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        _createClass(BufferList, [{
          key: "push",
          value: function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0) this.tail.next = entry;
            else this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        }, {
          key: "unshift",
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0) this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0) return;
            var ret = this.head.data;
            if (this.length === 1) this.head = this.tail = null;
            else this.head = this.head.next;
            --this.length;
            return ret;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        }, {
          key: "join",
          value: function join(s) {
            if (this.length === 0) return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) ret += s + p.data;
            return ret;
          }
        }, {
          key: "concat",
          value: function concat(n) {
            if (this.length === 0) return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
          // Consumes a specified amount of bytes or characters from the buffered data.
        }, {
          key: "consume",
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        }, {
          key: "first",
          value: function first() {
            return this.head.data;
          }
          // Consumes a specified amount of characters from the buffered data.
        }, {
          key: "_getString",
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length) ret += str;
              else ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
          // Consumes a specified amount of bytes from the buffered data.
        }, {
          key: "_getBuffer",
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
          // Make sure the linked list only shows the minimal necessary information.
        }, {
          key: custom,
          value: function value(_, options) {
            return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
              // Only inspect one level.
              depth: 0,
              // It should not recurse.
              customInspect: false
            }));
          }
        }]);
        return BufferList;
      })();
    }
  });

  // node_modules/readable-stream/lib/internal/streams/destroy.js
  var require_destroy = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
      "use strict";
      function destroy(err, cb) {
        var _this = this;
        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;
        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err) {
            if (!this._writableState) {
              process.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              process.nextTick(emitErrorNT, this, err);
            }
          }
          return this;
        }
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(err || null, function(err2) {
          if (!cb && err2) {
            if (!_this._writableState) {
              process.nextTick(emitErrorAndCloseNT, _this, err2);
            } else if (!_this._writableState.errorEmitted) {
              _this._writableState.errorEmitted = true;
              process.nextTick(emitErrorAndCloseNT, _this, err2);
            } else {
              process.nextTick(emitCloseNT, _this);
            }
          } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        });
        return this;
      }
      function emitErrorAndCloseNT(self2, err) {
        emitErrorNT(self2, err);
        emitCloseNT(self2);
      }
      function emitCloseNT(self2) {
        if (self2._writableState && !self2._writableState.emitClose) return;
        if (self2._readableState && !self2._readableState.emitClose) return;
        self2.emit("close");
      }
      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finalCalled = false;
          this._writableState.prefinished = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }
      function emitErrorNT(self2, err) {
        self2.emit("error", err);
      }
      function errorOrDestroy(stream, err) {
        var rState = stream._readableState;
        var wState = stream._writableState;
        if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
        else stream.emit("error", err);
      }
      module.exports = {
        destroy,
        undestroy,
        errorOrDestroy
      };
    }
  });

  // node_modules/readable-stream/errors-browser.js
  var require_errors_browser = __commonJS({
    "node_modules/readable-stream/errors-browser.js"(exports, module) {
      "use strict";
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      var codes = {};
      function createErrorType(code, message, Base) {
        if (!Base) {
          Base = Error;
        }
        function getMessage(arg1, arg2, arg3) {
          if (typeof message === "string") {
            return message;
          } else {
            return message(arg1, arg2, arg3);
          }
        }
        var NodeError = /* @__PURE__ */ (function(_Base) {
          _inheritsLoose(NodeError2, _Base);
          function NodeError2(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
          }
          return NodeError2;
        })(Base);
        NodeError.prototype.name = Base.name;
        NodeError.prototype.code = code;
        codes[code] = NodeError;
      }
      function oneOf(expected, thing) {
        if (Array.isArray(expected)) {
          var len = expected.length;
          expected = expected.map(function(i) {
            return String(i);
          });
          if (len > 2) {
            return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
          } else if (len === 2) {
            return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
          } else {
            return "of ".concat(thing, " ").concat(expected[0]);
          }
        } else {
          return "of ".concat(thing, " ").concat(String(expected));
        }
      }
      function startsWith(str, search, pos) {
        return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
      }
      function endsWith(str, search, this_len) {
        if (this_len === void 0 || this_len > str.length) {
          this_len = str.length;
        }
        return str.substring(this_len - search.length, this_len) === search;
      }
      function includes(str, search, start) {
        if (typeof start !== "number") {
          start = 0;
        }
        if (start + search.length > str.length) {
          return false;
        } else {
          return str.indexOf(search, start) !== -1;
        }
      }
      createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
        return 'The value "' + value + '" is invalid for option "' + name + '"';
      }, TypeError);
      createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
        var determiner;
        if (typeof expected === "string" && startsWith(expected, "not ")) {
          determiner = "must not be";
          expected = expected.replace(/^not /, "");
        } else {
          determiner = "must be";
        }
        var msg;
        if (endsWith(name, " argument")) {
          msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
        } else {
          var type = includes(name, ".") ? "property" : "argument";
          msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
        }
        msg += ". Received type ".concat(typeof actual);
        return msg;
      }, TypeError);
      createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
      createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
        return "The " + name + " method is not implemented";
      });
      createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
      createErrorType("ERR_STREAM_DESTROYED", function(name) {
        return "Cannot call " + name + " after a stream was destroyed";
      });
      createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
      createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
      createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
      createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
      createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
        return "Unknown encoding: " + arg;
      }, TypeError);
      createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
      module.exports.codes = codes;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/state.js
  var require_state = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
      "use strict";
      var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
      function highWaterMarkFrom(options, isDuplex, duplexKey) {
        return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
      }
      function getHighWaterMark(state, options, duplexKey, isDuplex) {
        var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
        if (hwm != null) {
          if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
          }
          return Math.floor(hwm);
        }
        return state.objectMode ? 16 : 16 * 1024;
      }
      module.exports = {
        getHighWaterMark
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/util-deprecate/browser.js
  var require_browser = __commonJS({
    "node_modules/util-deprecate/browser.js"(exports, module) {
      module.exports = deprecate;
      function deprecate(fn, msg) {
        if (config("noDeprecation")) {
          return fn;
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (config("throwDeprecation")) {
              throw new Error(msg);
            } else if (config("traceDeprecation")) {
              console.trace(msg);
            } else {
              console.warn(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      }
      function config(name) {
        try {
          if (!global.localStorage) return false;
        } catch (_) {
          return false;
        }
        var val = global.localStorage[name];
        if (null == val) return false;
        return String(val).toLowerCase() === "true";
      }
    }
  });

  // node_modules/readable-stream/lib/_stream_writable.js
  var require_stream_writable = __commonJS({
    "node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
      "use strict";
      module.exports = Writable;
      function CorkedRequest(state) {
        var _this = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
          onCorkedFinish(_this, state);
        };
      }
      var Duplex;
      Writable.WritableState = WritableState;
      var internalUtil = {
        deprecate: require_browser()
      };
      var Stream = require_stream_browser();
      var Buffer2 = require_buffer().Buffer;
      var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var destroyImpl = require_destroy();
      var _require = require_state();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors_browser().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
      var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
      var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      require_inherits_browser()(Writable, Stream);
      function nop() {
      }
      function WritableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(er) {
          onwrite(stream, er);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
          out.push(current);
          current = current.next;
        }
        return out;
      };
      (function() {
        try {
          Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (_) {
        }
      })();
      var realHasInstance;
      if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
          }
        });
      } else {
        realHasInstance = function realHasInstance2(object) {
          return object instanceof this;
        };
      }
      function Writable(options) {
        Duplex = Duplex || require_stream_duplex();
        var isDuplex = this instanceof Duplex;
        if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        this.writable = true;
        if (options) {
          if (typeof options.write === "function") this._write = options.write;
          if (typeof options.writev === "function") this._writev = options.writev;
          if (typeof options.destroy === "function") this._destroy = options.destroy;
          if (typeof options.final === "function") this._final = options.final;
        }
        Stream.call(this);
      }
      Writable.prototype.pipe = function() {
        errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
      };
      function writeAfterEnd(stream, cb) {
        var er = new ERR_STREAM_WRITE_AFTER_END();
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
      }
      function validChunk(stream, state, chunk, cb) {
        var er;
        if (chunk === null) {
          er = new ERR_STREAM_NULL_VALUES();
        } else if (typeof chunk !== "string" && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
        }
        if (er) {
          errorOrDestroy(stream, er);
          process.nextTick(cb, er);
          return false;
        }
        return true;
      }
      Writable.prototype.write = function(chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;
        var isBuf = !state.objectMode && _isUint8Array(chunk);
        if (isBuf && !Buffer2.isBuffer(chunk)) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (isBuf) encoding = "buffer";
        else if (!encoding) encoding = state.defaultEncoding;
        if (typeof cb !== "function") cb = nop;
        if (state.ending) writeAfterEnd(this, cb);
        else if (isBuf || validChunk(this, state, chunk, cb)) {
          state.pendingcb++;
          ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
        }
        return ret;
      };
      Writable.prototype.cork = function() {
        this._writableState.corked++;
      };
      Writable.prototype.uncork = function() {
        var state = this._writableState;
        if (state.corked) {
          state.corked--;
          if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
        }
      };
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        if (typeof encoding === "string") encoding = encoding.toLowerCase();
        if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
          chunk = Buffer2.from(chunk, encoding);
        }
        return chunk;
      }
      Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
        if (!isBuf) {
          var newChunk = decodeChunk(state, chunk, encoding);
          if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
          }
        }
        var len = state.objectMode ? 1 : chunk.length;
        state.length += len;
        var ret = state.length < state.highWaterMark;
        if (!ret) state.needDrain = true;
        if (state.writing || state.corked) {
          var last = state.lastBufferedRequest;
          state.lastBufferedRequest = {
            chunk,
            encoding,
            isBuf,
            callback: cb,
            next: null
          };
          if (last) {
            last.next = state.lastBufferedRequest;
          } else {
            state.bufferedRequest = state.lastBufferedRequest;
          }
          state.bufferedRequestCount += 1;
        } else {
          doWrite(stream, state, false, len, chunk, encoding, cb);
        }
        return ret;
      }
      function doWrite(stream, state, writev, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
        else if (writev) stream._writev(chunk, state.onwrite);
        else stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
      }
      function onwriteError(stream, state, sync, er, cb) {
        --state.pendingcb;
        if (sync) {
          process.nextTick(cb, er);
          process.nextTick(finishMaybe, stream, state);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
        } else {
          cb(er);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
          finishMaybe(stream, state);
        }
      }
      function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
      }
      function onwrite(stream, er) {
        var state = stream._writableState;
        var sync = state.sync;
        var cb = state.writecb;
        if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
        onwriteStateUpdate(state);
        if (er) onwriteError(stream, state, sync, er, cb);
        else {
          var finished = needFinish(state) || stream.destroyed;
          if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
          }
          if (sync) {
            process.nextTick(afterWrite, stream, state, finished, cb);
          } else {
            afterWrite(stream, state, finished, cb);
          }
        }
      }
      function afterWrite(stream, state, finished, cb) {
        if (!finished) onwriteDrain(stream, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream, state);
      }
      function onwriteDrain(stream, state) {
        if (state.length === 0 && state.needDrain) {
          state.needDrain = false;
          stream.emit("drain");
        }
      }
      function clearBuffer(stream, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;
        if (stream._writev && entry && entry.next) {
          var l = state.bufferedRequestCount;
          var buffer = new Array(l);
          var holder = state.corkedRequestsFree;
          holder.entry = entry;
          var count = 0;
          var allBuffers = true;
          while (entry) {
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
          }
          buffer.allBuffers = allBuffers;
          doWrite(stream, state, true, state.length, buffer, "", holder.finish);
          state.pendingcb++;
          state.lastBufferedRequest = null;
          if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
          } else {
            state.corkedRequestsFree = new CorkedRequest(state);
          }
          state.bufferedRequestCount = 0;
        } else {
          while (entry) {
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            if (state.writing) {
              break;
            }
          }
          if (entry === null) state.lastBufferedRequest = null;
        }
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
      }
      Writable.prototype._write = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
      };
      Writable.prototype._writev = null;
      Writable.prototype.end = function(chunk, encoding, cb) {
        var state = this._writableState;
        if (typeof chunk === "function") {
          cb = chunk;
          chunk = null;
          encoding = null;
        } else if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
        if (state.corked) {
          state.corked = 1;
          this.uncork();
        }
        if (!state.ending) endWritable(this, state, cb);
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function needFinish(state) {
        return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
      }
      function callFinal(stream, state) {
        stream._final(function(err) {
          state.pendingcb--;
          if (err) {
            errorOrDestroy(stream, err);
          }
          state.prefinished = true;
          stream.emit("prefinish");
          finishMaybe(stream, state);
        });
      }
      function prefinish(stream, state) {
        if (!state.prefinished && !state.finalCalled) {
          if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
          } else {
            state.prefinished = true;
            stream.emit("prefinish");
          }
        }
      }
      function finishMaybe(stream, state) {
        var need = needFinish(state);
        if (need) {
          prefinish(stream, state);
          if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
              var rState = stream._readableState;
              if (!rState || rState.autoDestroy && rState.endEmitted) {
                stream.destroy();
              }
            }
          }
        }
        return need;
      }
      function endWritable(stream, state, cb) {
        state.ending = true;
        finishMaybe(stream, state);
        if (cb) {
          if (state.finished) process.nextTick(cb);
          else stream.once("finish", cb);
        }
        state.ended = true;
        stream.writable = false;
      }
      function onCorkedFinish(corkReq, state, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while (entry) {
          var cb = entry.callback;
          state.pendingcb--;
          cb(err);
          entry = entry.next;
        }
        state.corkedRequestsFree.next = corkReq;
      }
      Object.defineProperty(Writable.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._writableState === void 0) {
            return false;
          }
          return this._writableState.destroyed;
        },
        set: function set(value) {
          if (!this._writableState) {
            return;
          }
          this._writableState.destroyed = value;
        }
      });
      Writable.prototype.destroy = destroyImpl.destroy;
      Writable.prototype._undestroy = destroyImpl.undestroy;
      Writable.prototype._destroy = function(err, cb) {
        cb(err);
      };
    }
  });

  // node_modules/readable-stream/lib/_stream_duplex.js
  var require_stream_duplex = __commonJS({
    "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
      "use strict";
      var objectKeys = Object.keys || function(obj) {
        var keys2 = [];
        for (var key in obj) keys2.push(key);
        return keys2;
      };
      module.exports = Duplex;
      var Readable = require_stream_readable();
      var Writable = require_stream_writable();
      require_inherits_browser()(Duplex, Readable);
      {
        keys = objectKeys(Writable.prototype);
        for (v = 0; v < keys.length; v++) {
          method = keys[v];
          if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
        }
      }
      var keys;
      var method;
      var v;
      function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
        Readable.call(this, options);
        Writable.call(this, options);
        this.allowHalfOpen = true;
        if (options) {
          if (options.readable === false) this.readable = false;
          if (options.writable === false) this.writable = false;
          if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
          }
        }
      }
      Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      Object.defineProperty(Duplex.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      Object.defineProperty(Duplex.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function onend() {
        if (this._writableState.ended) return;
        process.nextTick(onEndNT, this);
      }
      function onEndNT(self2) {
        self2.end();
      }
      Object.defineProperty(Duplex.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(value) {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return;
          }
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });
    }
  });

  // node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS({
    "node_modules/safe-buffer/index.js"(exports, module) {
      var buffer = require_buffer();
      var Buffer2 = buffer.Buffer;
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer2(arg, encodingOrOffset, length);
      }
      SafeBuffer.prototype = Object.create(Buffer2.prototype);
      copyProps(Buffer2, SafeBuffer);
      SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer2(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function(size, fill, encoding) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer2(size);
        if (fill !== void 0) {
          if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer2(size);
      };
      SafeBuffer.allocUnsafeSlow = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer.SlowBuffer(size);
      };
    }
  });

  // node_modules/string_decoder/lib/string_decoder.js
  var require_string_decoder = __commonJS({
    "node_modules/string_decoder/lib/string_decoder.js"(exports) {
      "use strict";
      var Buffer2 = require_safe_buffer().Buffer;
      var isEncoding = Buffer2.isEncoding || function(encoding) {
        encoding = "" + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      function _normalizeEncoding(enc) {
        if (!enc) return "utf8";
        var retried;
        while (true) {
          switch (enc) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return enc;
            default:
              if (retried) return;
              enc = ("" + enc).toLowerCase();
              retried = true;
          }
        }
      }
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
        return nenc || enc;
      }
      exports.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
          case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
          case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
          case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer2.allocUnsafe(nb);
      }
      StringDecoder.prototype.write = function(buf) {
        if (buf.length === 0) return "";
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === void 0) return "";
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || "";
      };
      StringDecoder.prototype.end = utf8End;
      StringDecoder.prototype.text = utf8Text;
      StringDecoder.prototype.fillLast = function(buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };
      function utf8CheckByte(byte) {
        if (byte <= 127) return 0;
        else if (byte >> 5 === 6) return 2;
        else if (byte >> 4 === 14) return 3;
        else if (byte >> 3 === 30) return 4;
        return byte >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(self2, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self2.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self2.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2) nb = 0;
            else self2.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }
      function utf8CheckExtraBytes(self2, buf, p) {
        if ((buf[0] & 192) !== 128) {
          self2.lastNeed = 0;
          return "\uFFFD";
        }
        if (self2.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 192) !== 128) {
            self2.lastNeed = 1;
            return "\uFFFD";
          }
          if (self2.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
              self2.lastNeed = 2;
              return "\uFFFD";
            }
          }
        }
      }
      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== void 0) return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString("utf8", i, end);
      }
      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) return r + "\uFFFD";
        return r;
      }
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString("utf16le", i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString("utf16le", i, buf.length - 1);
      }
      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString("utf16le", 0, end);
        }
        return r;
      }
      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString("base64", i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString("base64", i, buf.length - n);
      }
      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return r;
      }
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }
      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
      }
    }
  });

  // node_modules/readable-stream/lib/internal/streams/end-of-stream.js
  var require_end_of_stream = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
      "use strict";
      var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
      function once(callback) {
        var called = false;
        return function() {
          if (called) return;
          called = true;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          callback.apply(this, args);
        };
      }
      function noop() {
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function eos(stream, opts, callback) {
        if (typeof opts === "function") return eos(stream, null, opts);
        if (!opts) opts = {};
        callback = once(callback || noop);
        var readable = opts.readable || opts.readable !== false && stream.readable;
        var writable = opts.writable || opts.writable !== false && stream.writable;
        var onlegacyfinish = function onlegacyfinish2() {
          if (!stream.writable) onfinish();
        };
        var writableEnded = stream._writableState && stream._writableState.finished;
        var onfinish = function onfinish2() {
          writable = false;
          writableEnded = true;
          if (!readable) callback.call(stream);
        };
        var readableEnded = stream._readableState && stream._readableState.endEmitted;
        var onend = function onend2() {
          readable = false;
          readableEnded = true;
          if (!writable) callback.call(stream);
        };
        var onerror = function onerror2(err) {
          callback.call(stream, err);
        };
        var onclose = function onclose2() {
          var err;
          if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
          if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
        };
        var onrequest = function onrequest2() {
          stream.req.on("finish", onfinish);
        };
        if (isRequest(stream)) {
          stream.on("complete", onfinish);
          stream.on("abort", onclose);
          if (stream.req) onrequest();
          else stream.on("request", onrequest);
        } else if (writable && !stream._writableState) {
          stream.on("end", onlegacyfinish);
          stream.on("close", onlegacyfinish);
        }
        stream.on("end", onend);
        stream.on("finish", onfinish);
        if (opts.error !== false) stream.on("error", onerror);
        stream.on("close", onclose);
        return function() {
          stream.removeListener("complete", onfinish);
          stream.removeListener("abort", onclose);
          stream.removeListener("request", onrequest);
          if (stream.req) stream.req.removeListener("finish", onfinish);
          stream.removeListener("end", onlegacyfinish);
          stream.removeListener("close", onlegacyfinish);
          stream.removeListener("finish", onfinish);
          stream.removeListener("end", onend);
          stream.removeListener("error", onerror);
          stream.removeListener("close", onclose);
        };
      }
      module.exports = eos;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/async_iterator.js
  var require_async_iterator = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
      "use strict";
      var _Object$setPrototypeO;
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var finished = require_end_of_stream();
      var kLastResolve = Symbol("lastResolve");
      var kLastReject = Symbol("lastReject");
      var kError = Symbol("error");
      var kEnded = Symbol("ended");
      var kLastPromise = Symbol("lastPromise");
      var kHandlePromise = Symbol("handlePromise");
      var kStream = Symbol("stream");
      function createIterResult(value, done) {
        return {
          value,
          done
        };
      }
      function readAndResolve(iter) {
        var resolve = iter[kLastResolve];
        if (resolve !== null) {
          var data = iter[kStream].read();
          if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
          }
        }
      }
      function onReadable(iter) {
        process.nextTick(readAndResolve, iter);
      }
      function wrapForNext(lastPromise, iter) {
        return function(resolve, reject) {
          lastPromise.then(function() {
            if (iter[kEnded]) {
              resolve(createIterResult(void 0, true));
              return;
            }
            iter[kHandlePromise](resolve, reject);
          }, reject);
        };
      }
      var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
      });
      var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
        get stream() {
          return this[kStream];
        },
        next: function next() {
          var _this = this;
          var error = this[kError];
          if (error !== null) {
            return Promise.reject(error);
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult(void 0, true));
          }
          if (this[kStream].destroyed) {
            return new Promise(function(resolve, reject) {
              process.nextTick(function() {
                if (_this[kError]) {
                  reject(_this[kError]);
                } else {
                  resolve(createIterResult(void 0, true));
                }
              });
            });
          }
          var lastPromise = this[kLastPromise];
          var promise;
          if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
          } else {
            var data = this[kStream].read();
            if (data !== null) {
              return Promise.resolve(createIterResult(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
          }
          this[kLastPromise] = promise;
          return promise;
        }
      }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
      }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2[kStream].destroy(null, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(createIterResult(void 0, true));
          });
        });
      }), _Object$setPrototypeO), AsyncIteratorPrototype);
      var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
        var _Object$create;
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
          value: stream,
          writable: true
        }), _defineProperty(_Object$create, kLastResolve, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kLastReject, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kError, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kEnded, {
          value: stream._readableState.endEmitted,
          writable: true
        }), _defineProperty(_Object$create, kHandlePromise, {
          value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult(data, false));
            } else {
              iterator[kLastResolve] = resolve;
              iterator[kLastReject] = reject;
            }
          },
          writable: true
        }), _Object$create));
        iterator[kLastPromise] = null;
        finished(stream, function(err) {
          if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            if (reject !== null) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              reject(err);
            }
            iterator[kError] = err;
            return;
          }
          var resolve = iterator[kLastResolve];
          if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(void 0, true));
          }
          iterator[kEnded] = true;
        });
        stream.on("readable", onReadable.bind(null, iterator));
        return iterator;
      };
      module.exports = createReadableStreamAsyncIterator;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/from-browser.js
  var require_from_browser = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/from-browser.js"(exports, module) {
      module.exports = function() {
        throw new Error("Readable.from is not available in the browser");
      };
    }
  });

  // node_modules/readable-stream/lib/_stream_readable.js
  var require_stream_readable = __commonJS({
    "node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
      "use strict";
      module.exports = Readable;
      var Duplex;
      Readable.ReadableState = ReadableState;
      var EE = require_events().EventEmitter;
      var EElistenerCount = function EElistenerCount2(emitter, type) {
        return emitter.listeners(type).length;
      };
      var Stream = require_stream_browser();
      var Buffer2 = require_buffer().Buffer;
      var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var debugUtil = require_util();
      var debug;
      if (debugUtil && debugUtil.debuglog) {
        debug = debugUtil.debuglog("stream");
      } else {
        debug = function debug2() {
        };
      }
      var BufferList = require_buffer_list();
      var destroyImpl = require_destroy();
      var _require = require_state();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors_browser().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      var StringDecoder;
      var createReadableStreamAsyncIterator;
      var from;
      require_inherits_browser()(Readable, Stream);
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
      function prependListener(emitter, event, fn) {
        if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
        else emitter._events[event] = [fn, emitter._events[event]];
      }
      function ReadableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.paused = true;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.destroyed = false;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
          if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
          this.decoder = new StringDecoder(options.encoding);
          this.encoding = options.encoding;
        }
      }
      function Readable(options) {
        Duplex = Duplex || require_stream_duplex();
        if (!(this instanceof Readable)) return new Readable(options);
        var isDuplex = this instanceof Duplex;
        this._readableState = new ReadableState(options, this, isDuplex);
        this.readable = true;
        if (options) {
          if (typeof options.read === "function") this._read = options.read;
          if (typeof options.destroy === "function") this._destroy = options.destroy;
        }
        Stream.call(this);
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0) {
            return false;
          }
          return this._readableState.destroyed;
        },
        set: function set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      });
      Readable.prototype.destroy = destroyImpl.destroy;
      Readable.prototype._undestroy = destroyImpl.undestroy;
      Readable.prototype._destroy = function(err, cb) {
        cb(err);
      };
      Readable.prototype.push = function(chunk, encoding) {
        var state = this._readableState;
        var skipChunkCheck;
        if (!state.objectMode) {
          if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
              chunk = Buffer2.from(chunk, encoding);
              encoding = "";
            }
            skipChunkCheck = true;
          }
        } else {
          skipChunkCheck = true;
        }
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
      };
      Readable.prototype.unshift = function(chunk) {
        return readableAddChunk(this, chunk, null, true, false);
      };
      function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
        debug("readableAddChunk", chunk);
        var state = stream._readableState;
        if (chunk === null) {
          state.reading = false;
          onEofChunk(stream, state);
        } else {
          var er;
          if (!skipChunkCheck) er = chunkInvalid(state, chunk);
          if (er) {
            errorOrDestroy(stream, er);
          } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
              chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
              if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
              else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
              errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state.destroyed) {
              return false;
            } else {
              state.reading = false;
              if (state.decoder && !encoding) {
                chunk = state.decoder.write(chunk);
                if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                else maybeReadMore(stream, state);
              } else {
                addChunk(stream, state, chunk, false);
              }
            }
          } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
          }
        }
        return !state.ended && (state.length < state.highWaterMark || state.length === 0);
      }
      function addChunk(stream, state, chunk, addToFront) {
        if (state.flowing && state.length === 0 && !state.sync) {
          state.awaitDrain = 0;
          stream.emit("data", chunk);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);
          else state.buffer.push(chunk);
          if (state.needReadable) emitReadable(stream);
        }
        maybeReadMore(stream, state);
      }
      function chunkInvalid(state, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
        return er;
      }
      Readable.prototype.isPaused = function() {
        return this._readableState.flowing === false;
      };
      Readable.prototype.setEncoding = function(enc) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        var decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        var p = this._readableState.buffer.head;
        var content = "";
        while (p !== null) {
          content += decoder.write(p.data);
          p = p.next;
        }
        this._readableState.buffer.clear();
        if (content !== "") this._readableState.buffer.push(content);
        this._readableState.length = content.length;
        return this;
      };
      var MAX_HWM = 1073741824;
      function computeNewHighWaterMark(n) {
        if (n >= MAX_HWM) {
          n = MAX_HWM;
        } else {
          n--;
          n |= n >>> 1;
          n |= n >>> 2;
          n |= n >>> 4;
          n |= n >>> 8;
          n |= n >>> 16;
          n++;
        }
        return n;
      }
      function howMuchToRead(n, state) {
        if (n <= 0 || state.length === 0 && state.ended) return 0;
        if (state.objectMode) return 1;
        if (n !== n) {
          if (state.flowing && state.length) return state.buffer.head.data.length;
          else return state.length;
        }
        if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
        if (n <= state.length) return n;
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        }
        return state.length;
      }
      Readable.prototype.read = function(n) {
        debug("read", n);
        n = parseInt(n, 10);
        var state = this._readableState;
        var nOrig = n;
        if (n !== 0) state.emittedReadable = false;
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
          debug("read: emitReadable", state.length, state.ended);
          if (state.length === 0 && state.ended) endReadable(this);
          else emitReadable(this);
          return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
          if (state.length === 0) endReadable(this);
          return null;
        }
        var doRead = state.needReadable;
        debug("need readable", doRead);
        if (state.length === 0 || state.length - n < state.highWaterMark) {
          doRead = true;
          debug("length less than watermark", doRead);
        }
        if (state.ended || state.reading) {
          doRead = false;
          debug("reading or ended", doRead);
        } else if (doRead) {
          debug("do read");
          state.reading = true;
          state.sync = true;
          if (state.length === 0) state.needReadable = true;
          this._read(state.highWaterMark);
          state.sync = false;
          if (!state.reading) n = howMuchToRead(nOrig, state);
        }
        var ret;
        if (n > 0) ret = fromList(n, state);
        else ret = null;
        if (ret === null) {
          state.needReadable = state.length <= state.highWaterMark;
          n = 0;
        } else {
          state.length -= n;
          state.awaitDrain = 0;
        }
        if (state.length === 0) {
          if (!state.ended) state.needReadable = true;
          if (nOrig !== n && state.ended) endReadable(this);
        }
        if (ret !== null) this.emit("data", ret);
        return ret;
      };
      function onEofChunk(stream, state) {
        debug("onEofChunk");
        if (state.ended) return;
        if (state.decoder) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
          }
        }
        state.ended = true;
        if (state.sync) {
          emitReadable(stream);
        } else {
          state.needReadable = false;
          if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
          }
        }
      }
      function emitReadable(stream) {
        var state = stream._readableState;
        debug("emitReadable", state.needReadable, state.emittedReadable);
        state.needReadable = false;
        if (!state.emittedReadable) {
          debug("emitReadable", state.flowing);
          state.emittedReadable = true;
          process.nextTick(emitReadable_, stream);
        }
      }
      function emitReadable_(stream) {
        var state = stream._readableState;
        debug("emitReadable_", state.destroyed, state.length, state.ended);
        if (!state.destroyed && (state.length || state.ended)) {
          stream.emit("readable");
          state.emittedReadable = false;
        }
        state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
        flow(stream);
      }
      function maybeReadMore(stream, state) {
        if (!state.readingMore) {
          state.readingMore = true;
          process.nextTick(maybeReadMore_, stream, state);
        }
      }
      function maybeReadMore_(stream, state) {
        while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
          var len = state.length;
          debug("maybeReadMore read 0");
          stream.read(0);
          if (len === state.length)
            break;
        }
        state.readingMore = false;
      }
      Readable.prototype._read = function(n) {
        errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
      };
      Readable.prototype.pipe = function(dest, pipeOpts) {
        var src = this;
        var state = this._readableState;
        switch (state.pipesCount) {
          case 0:
            state.pipes = dest;
            break;
          case 1:
            state.pipes = [state.pipes, dest];
            break;
          default:
            state.pipes.push(dest);
            break;
        }
        state.pipesCount += 1;
        debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
        var endFn = doEnd ? onend : unpipe;
        if (state.endEmitted) process.nextTick(endFn);
        else src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
          debug("onunpipe");
          if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
              unpipeInfo.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          debug("onend");
          dest.end();
        }
        var ondrain = pipeOnDrain(src);
        dest.on("drain", ondrain);
        var cleanedUp = false;
        function cleanup() {
          debug("cleanup");
          dest.removeListener("close", onclose);
          dest.removeListener("finish", onfinish);
          dest.removeListener("drain", ondrain);
          dest.removeListener("error", onerror);
          dest.removeListener("unpipe", onunpipe);
          src.removeListener("end", onend);
          src.removeListener("end", unpipe);
          src.removeListener("data", ondata);
          cleanedUp = true;
          if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
        }
        src.on("data", ondata);
        function ondata(chunk) {
          debug("ondata");
          var ret = dest.write(chunk);
          debug("dest.write", ret);
          if (ret === false) {
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
              debug("false write response, pause", state.awaitDrain);
              state.awaitDrain++;
            }
            src.pause();
          }
        }
        function onerror(er) {
          debug("onerror", er);
          unpipe();
          dest.removeListener("error", onerror);
          if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
        }
        prependListener(dest, "error", onerror);
        function onclose() {
          dest.removeListener("finish", onfinish);
          unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
          debug("onfinish");
          dest.removeListener("close", onclose);
          unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
          debug("unpipe");
          src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (!state.flowing) {
          debug("pipe resume");
          src.resume();
        }
        return dest;
      };
      function pipeOnDrain(src) {
        return function pipeOnDrainFunctionResult() {
          var state = src._readableState;
          debug("pipeOnDrain", state.awaitDrain);
          if (state.awaitDrain) state.awaitDrain--;
          if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
          }
        };
      }
      Readable.prototype.unpipe = function(dest) {
        var state = this._readableState;
        var unpipeInfo = {
          hasUnpiped: false
        };
        if (state.pipesCount === 0) return this;
        if (state.pipesCount === 1) {
          if (dest && dest !== state.pipes) return this;
          if (!dest) dest = state.pipes;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          if (dest) dest.emit("unpipe", this, unpipeInfo);
          return this;
        }
        if (!dest) {
          var dests = state.pipes;
          var len = state.pipesCount;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
          return this;
        }
        var index = indexOf(state.pipes, dest);
        if (index === -1) return this;
        state.pipes.splice(index, 1);
        state.pipesCount -= 1;
        if (state.pipesCount === 1) state.pipes = state.pipes[0];
        dest.emit("unpipe", this, unpipeInfo);
        return this;
      };
      Readable.prototype.on = function(ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
        var state = this._readableState;
        if (ev === "data") {
          state.readableListening = this.listenerCount("readable") > 0;
          if (state.flowing !== false) this.resume();
        } else if (ev === "readable") {
          if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) {
              emitReadable(this);
            } else if (!state.reading) {
              process.nextTick(nReadingNextTick, this);
            }
          }
        }
        return res;
      };
      Readable.prototype.addListener = Readable.prototype.on;
      Readable.prototype.removeListener = function(ev, fn) {
        var res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      Readable.prototype.removeAllListeners = function(ev) {
        var res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === void 0) {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      function updateReadableListening(self2) {
        var state = self2._readableState;
        state.readableListening = self2.listenerCount("readable") > 0;
        if (state.resumeScheduled && !state.paused) {
          state.flowing = true;
        } else if (self2.listenerCount("data") > 0) {
          self2.resume();
        }
      }
      function nReadingNextTick(self2) {
        debug("readable nexttick read 0");
        self2.read(0);
      }
      Readable.prototype.resume = function() {
        var state = this._readableState;
        if (!state.flowing) {
          debug("resume");
          state.flowing = !state.readableListening;
          resume(this, state);
        }
        state.paused = false;
        return this;
      };
      function resume(stream, state) {
        if (!state.resumeScheduled) {
          state.resumeScheduled = true;
          process.nextTick(resume_, stream, state);
        }
      }
      function resume_(stream, state) {
        debug("resume", state.reading);
        if (!state.reading) {
          stream.read(0);
        }
        state.resumeScheduled = false;
        stream.emit("resume");
        flow(stream);
        if (state.flowing && !state.reading) stream.read(0);
      }
      Readable.prototype.pause = function() {
        debug("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
          debug("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        this._readableState.paused = true;
        return this;
      };
      function flow(stream) {
        var state = stream._readableState;
        debug("flow", state.flowing);
        while (state.flowing && stream.read() !== null) ;
      }
      Readable.prototype.wrap = function(stream) {
        var _this = this;
        var state = this._readableState;
        var paused = false;
        stream.on("end", function() {
          debug("wrapped end");
          if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
          }
          _this.push(null);
        });
        stream.on("data", function(chunk) {
          debug("wrapped data");
          if (state.decoder) chunk = state.decoder.write(chunk);
          if (state.objectMode && (chunk === null || chunk === void 0)) return;
          else if (!state.objectMode && (!chunk || !chunk.length)) return;
          var ret = _this.push(chunk);
          if (!ret) {
            paused = true;
            stream.pause();
          }
        });
        for (var i in stream) {
          if (this[i] === void 0 && typeof stream[i] === "function") {
            this[i] = /* @__PURE__ */ (function methodWrap(method) {
              return function methodWrapReturnFunction() {
                return stream[method].apply(stream, arguments);
              };
            })(i);
          }
        }
        for (var n = 0; n < kProxyEvents.length; n++) {
          stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
        }
        this._read = function(n2) {
          debug("wrapped _read", n2);
          if (paused) {
            paused = false;
            stream.resume();
          }
        };
        return this;
      };
      if (typeof Symbol === "function") {
        Readable.prototype[Symbol.asyncIterator] = function() {
          if (createReadableStreamAsyncIterator === void 0) {
            createReadableStreamAsyncIterator = require_async_iterator();
          }
          return createReadableStreamAsyncIterator(this);
        };
      }
      Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      });
      Object.defineProperty(Readable.prototype, "readableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState && this._readableState.buffer;
        }
      });
      Object.defineProperty(Readable.prototype, "readableFlowing", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState.flowing;
        },
        set: function set(state) {
          if (this._readableState) {
            this._readableState.flowing = state;
          }
        }
      });
      Readable._fromList = fromList;
      Object.defineProperty(Readable.prototype, "readableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState.length;
        }
      });
      function fromList(n, state) {
        if (state.length === 0) return null;
        var ret;
        if (state.objectMode) ret = state.buffer.shift();
        else if (!n || n >= state.length) {
          if (state.decoder) ret = state.buffer.join("");
          else if (state.buffer.length === 1) ret = state.buffer.first();
          else ret = state.buffer.concat(state.length);
          state.buffer.clear();
        } else {
          ret = state.buffer.consume(n, state.decoder);
        }
        return ret;
      }
      function endReadable(stream) {
        var state = stream._readableState;
        debug("endReadable", state.endEmitted);
        if (!state.endEmitted) {
          state.ended = true;
          process.nextTick(endReadableNT, state, stream);
        }
      }
      function endReadableNT(state, stream) {
        debug("endReadableNT", state.endEmitted, state.length);
        if (!state.endEmitted && state.length === 0) {
          state.endEmitted = true;
          stream.readable = false;
          stream.emit("end");
          if (state.autoDestroy) {
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
              stream.destroy();
            }
          }
        }
      }
      if (typeof Symbol === "function") {
        Readable.from = function(iterable, opts) {
          if (from === void 0) {
            from = require_from_browser();
          }
          return from(Readable, iterable, opts);
        };
      }
      function indexOf(xs, x) {
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) return i;
        }
        return -1;
      }
    }
  });

  // node_modules/readable-stream/lib/_stream_transform.js
  var require_stream_transform = __commonJS({
    "node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
      "use strict";
      module.exports = Transform;
      var _require$codes = require_errors_browser().codes;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
      var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
      var Duplex = require_stream_duplex();
      require_inherits_browser()(Transform, Duplex);
      function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
        var cb = ts.writecb;
        if (cb === null) {
          return this.emit("error", new ERR_MULTIPLE_CALLBACK());
        }
        ts.writechunk = null;
        ts.writecb = null;
        if (data != null)
          this.push(data);
        cb(er);
        var rs = this._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
          this._read(rs.highWaterMark);
        }
      }
      function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
        Duplex.call(this, options);
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null
        };
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (options) {
          if (typeof options.transform === "function") this._transform = options.transform;
          if (typeof options.flush === "function") this._flush = options.flush;
        }
        this.on("prefinish", prefinish);
      }
      function prefinish() {
        var _this = this;
        if (typeof this._flush === "function" && !this._readableState.destroyed) {
          this._flush(function(er, data) {
            done(_this, er, data);
          });
        } else {
          done(this, null, null);
        }
      }
      Transform.prototype.push = function(chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      };
      Transform.prototype._transform = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
      };
      Transform.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
      };
      Transform.prototype._read = function(n) {
        var ts = this._transformState;
        if (ts.writechunk !== null && !ts.transforming) {
          ts.transforming = true;
          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          ts.needTransform = true;
        }
      };
      Transform.prototype._destroy = function(err, cb) {
        Duplex.prototype._destroy.call(this, err, function(err2) {
          cb(err2);
        });
      };
      function done(stream, er, data) {
        if (er) return stream.emit("error", er);
        if (data != null)
          stream.push(data);
        if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
        if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
        return stream.push(null);
      }
    }
  });

  // node_modules/readable-stream/lib/_stream_passthrough.js
  var require_stream_passthrough = __commonJS({
    "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
      "use strict";
      module.exports = PassThrough;
      var Transform = require_stream_transform();
      require_inherits_browser()(PassThrough, Transform);
      function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
        Transform.call(this, options);
      }
      PassThrough.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
      };
    }
  });

  // node_modules/readable-stream/lib/internal/streams/pipeline.js
  var require_pipeline = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
      "use strict";
      var eos;
      function once(callback) {
        var called = false;
        return function() {
          if (called) return;
          called = true;
          callback.apply(void 0, arguments);
        };
      }
      var _require$codes = require_errors_browser().codes;
      var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      function noop(err) {
        if (err) throw err;
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function destroyer(stream, reading, writing, callback) {
        callback = once(callback);
        var closed = false;
        stream.on("close", function() {
          closed = true;
        });
        if (eos === void 0) eos = require_end_of_stream();
        eos(stream, {
          readable: reading,
          writable: writing
        }, function(err) {
          if (err) return callback(err);
          closed = true;
          callback();
        });
        var destroyed = false;
        return function(err) {
          if (closed) return;
          if (destroyed) return;
          destroyed = true;
          if (isRequest(stream)) return stream.abort();
          if (typeof stream.destroy === "function") return stream.destroy();
          callback(err || new ERR_STREAM_DESTROYED("pipe"));
        };
      }
      function call(fn) {
        fn();
      }
      function pipe(from, to) {
        return from.pipe(to);
      }
      function popCallback(streams) {
        if (!streams.length) return noop;
        if (typeof streams[streams.length - 1] !== "function") return noop;
        return streams.pop();
      }
      function pipeline() {
        for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
          streams[_key] = arguments[_key];
        }
        var callback = popCallback(streams);
        if (Array.isArray(streams[0])) streams = streams[0];
        if (streams.length < 2) {
          throw new ERR_MISSING_ARGS("streams");
        }
        var error;
        var destroys = streams.map(function(stream, i) {
          var reading = i < streams.length - 1;
          var writing = i > 0;
          return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
          });
        });
        return streams.reduce(pipe);
      }
      module.exports = pipeline;
    }
  });

  // node_modules/readable-stream/readable-browser.js
  var require_readable_browser = __commonJS({
    "node_modules/readable-stream/readable-browser.js"(exports, module) {
      exports = module.exports = require_stream_readable();
      exports.Stream = exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
      exports.finished = require_end_of_stream();
      exports.pipeline = require_pipeline();
    }
  });

  // node_modules/through2/through2.js
  var require_through2 = __commonJS({
    "node_modules/through2/through2.js"(exports, module) {
      var Transform = require_readable_browser().Transform;
      var inherits = require_inherits_browser();
      function DestroyableTransform(opts) {
        Transform.call(this, opts);
        this._destroyed = false;
      }
      inherits(DestroyableTransform, Transform);
      DestroyableTransform.prototype.destroy = function(err) {
        if (this._destroyed) return;
        this._destroyed = true;
        var self2 = this;
        process.nextTick(function() {
          if (err)
            self2.emit("error", err);
          self2.emit("close");
        });
      };
      function noop(chunk, enc, callback) {
        callback(null, chunk);
      }
      function through2(construct) {
        return function(options, transform, flush) {
          if (typeof options == "function") {
            flush = transform;
            transform = options;
            options = {};
          }
          if (typeof transform != "function")
            transform = noop;
          if (typeof flush != "function")
            flush = null;
          return construct(options, transform, flush);
        };
      }
      module.exports = through2(function(options, transform, flush) {
        var t2 = new DestroyableTransform(options);
        t2._transform = transform;
        if (flush)
          t2._flush = flush;
        return t2;
      });
      module.exports.ctor = through2(function(options, transform, flush) {
        function Through2(override) {
          if (!(this instanceof Through2))
            return new Through2(override);
          this.options = Object.assign({}, options, override);
          DestroyableTransform.call(this, this.options);
        }
        inherits(Through2, DestroyableTransform);
        Through2.prototype._transform = transform;
        if (flush)
          Through2.prototype._flush = flush;
        return Through2;
      });
      module.exports.obj = through2(function(options, transform, flush) {
        var t2 = new DestroyableTransform(Object.assign({ objectMode: true, highWaterMark: 16 }, options));
        t2._transform = transform;
        if (flush)
          t2._flush = flush;
        return t2;
      });
    }
  });

  // node_modules/fili/src/iirCoeffs.js
  var require_iirCoeffs = __commonJS({
    "node_modules/fili/src/iirCoeffs.js"(exports, module) {
      "use strict";
      var IirCoeffs = function() {
        var preCalc = function(params, coeffs) {
          var Q = params.Q;
          var Fc = params.Fc;
          var Fs = params.Fs;
          var pre = {};
          var w = 2 * Math.PI * Fc / Fs;
          if (params.BW) {
            pre.alpha = Math.sin(w) * Math.sinh(Math.log(2) / 2 * params.BW * w / Math.sin(w));
          } else {
            pre.alpha = Math.sin(w) / (2 * Q);
          }
          pre.cw = Math.cos(w);
          pre.a0 = 1 + pre.alpha;
          coeffs.a0 = pre.a0;
          coeffs.a.push(-2 * pre.cw / pre.a0);
          coeffs.k = 1;
          coeffs.a.push((1 - pre.alpha) / pre.a0);
          return pre;
        };
        var preCalcGain = function(params) {
          var Q = params.Q;
          var Fc = params.Fc;
          var Fs = params.Fs;
          var pre = {};
          var w = 2 * Math.PI * Fc / Fs;
          pre.alpha = Math.sin(w) / (2 * Q);
          pre.cw = Math.cos(w);
          pre.A = Math.pow(10, params.gain / 40);
          return pre;
        };
        var initCoeffs = function() {
          var coeffs = {};
          coeffs.z = [0, 0];
          coeffs.a = [];
          coeffs.b = [];
          return coeffs;
        };
        var self2 = {
          fromPZ: function(params) {
            var coeffs = initCoeffs();
            coeffs.a0 = 1;
            coeffs.b.push(1);
            coeffs.b.push(-params.z0.re - params.z1.re);
            coeffs.b.push(params.z0.re * params.z1.re - params.z0.im * params.z1.im);
            coeffs.a.push(-params.p0.re - params.p1.re);
            coeffs.a.push(params.p0.re * params.p1.re - params.p0.im * params.p1.im);
            if (params.type === "lowpass") {
              coeffs.k = (1 + coeffs.a[0] + coeffs.a[1]) / (1 + coeffs.b[1] + coeffs.b[2]);
            } else {
              coeffs.k = (1 - coeffs.a[0] + coeffs.a[1]) / (1 - coeffs.b[1] + coeffs.b[2]);
            }
            return coeffs;
          },
          // lowpass matched-z transform: H(s) = 1/(1+a's/w_c+b's^2/w_c)
          lowpassMZ: function(params) {
            var coeffs = initCoeffs();
            coeffs.a0 = 1;
            var as = params.as;
            var bs = params.bs;
            var w = 2 * Math.PI * params.Fc / params.Fs;
            var s = -(as / (2 * bs));
            coeffs.a.push(-Math.pow(Math.E, s * w) * 2 * Math.cos(-w * Math.sqrt(Math.abs(Math.pow(as, 2) / (4 * Math.pow(bs, 2)) - 1 / bs))));
            coeffs.a.push(Math.pow(Math.E, 2 * s * w));
            if (!params.preGain) {
              coeffs.b.push(coeffs.a0 + coeffs.a[0] + coeffs.a[1]);
              coeffs.k = 1;
            } else {
              coeffs.b.push(1);
              coeffs.k = coeffs.a0 + coeffs.a[0] + coeffs.a[1];
            }
            coeffs.b.push(0);
            coeffs.b.push(0);
            return coeffs;
          },
          // Bessel-Thomson: H(s) = 3/(s^2+3*s+3)
          lowpassBT: function(params) {
            var coeffs = initCoeffs();
            params.Q = 1;
            coeffs.wp = Math.tan(2 * Math.PI * params.Fc / (2 * params.Fs));
            coeffs.wp2 = coeffs.wp * coeffs.wp;
            if (params.BW) {
              delete params.BW;
            }
            coeffs.k = 1;
            coeffs.a0 = 3 * coeffs.wp + 3 * coeffs.wp2 + 1;
            coeffs.b.push(3 * coeffs.wp2 * params.Q / coeffs.a0);
            coeffs.b.push(2 * coeffs.b[0]);
            coeffs.b.push(coeffs.b[0]);
            coeffs.a.push((6 * coeffs.wp2 - 2) / coeffs.a0);
            coeffs.a.push((3 * coeffs.wp2 - 3 * coeffs.wp + 1) / coeffs.a0);
            return coeffs;
          },
          highpassBT: function(params) {
            var coeffs = initCoeffs();
            params.Q = 1;
            coeffs.wp = Math.tan(2 * Math.PI * params.Fc / (2 * params.Fs));
            coeffs.wp2 = coeffs.wp * coeffs.wp;
            if (params.BW) {
              delete params.BW;
            }
            coeffs.k = 1;
            coeffs.a0 = coeffs.wp + coeffs.wp2 + 3;
            coeffs.b.push(3 * params.Q / coeffs.a0);
            coeffs.b.push(2 * coeffs.b[0]);
            coeffs.b.push(coeffs.b[0]);
            coeffs.a.push((2 * coeffs.wp2 - 6) / coeffs.a0);
            coeffs.a.push((coeffs.wp2 - coeffs.wp + 3) / coeffs.a0);
            return coeffs;
          },
          /*
           * Formulas from http://www.musicdsp.org/files/Audio-EQ-Cookbook.txt
           */
          // H(s) = 1 / (s^2 + s/Q + 1)
          lowpass: function(params) {
            var coeffs = initCoeffs();
            if (params.BW) {
              delete params.BW;
            }
            var p = preCalc(params, coeffs);
            if (params.preGain) {
              coeffs.k = (1 - p.cw) * 0.5;
              coeffs.b.push(1 / p.a0);
            } else {
              coeffs.k = 1;
              coeffs.b.push((1 - p.cw) / (2 * p.a0));
            }
            coeffs.b.push(2 * coeffs.b[0]);
            coeffs.b.push(coeffs.b[0]);
            return coeffs;
          },
          // H(s) = s^2 / (s^2 + s/Q + 1)
          highpass: function(params) {
            var coeffs = initCoeffs();
            if (params.BW) {
              delete params.BW;
            }
            var p = preCalc(params, coeffs);
            if (params.preGain) {
              coeffs.k = (1 + p.cw) * 0.5;
              coeffs.b.push(1 / p.a0);
            } else {
              coeffs.k = 1;
              coeffs.b.push((1 + p.cw) / (2 * p.a0));
            }
            coeffs.b.push(-2 * coeffs.b[0]);
            coeffs.b.push(coeffs.b[0]);
            return coeffs;
          },
          // H(s) = (s^2 - s/Q + 1) / (s^2 + s/Q + 1)
          allpass: function(params) {
            var coeffs = initCoeffs();
            if (params.BW) {
              delete params.BW;
            }
            var p = preCalc(params, coeffs);
            coeffs.k = 1;
            coeffs.b.push((1 - p.alpha) / p.a0);
            coeffs.b.push(-2 * p.cw / p.a0);
            coeffs.b.push((1 + p.alpha) / p.a0);
            return coeffs;
          },
          // H(s) = s / (s^2 + s/Q + 1)
          bandpassQ: function(params) {
            var coeffs = initCoeffs();
            var p = preCalc(params, coeffs);
            coeffs.k = 1;
            coeffs.b.push(p.alpha * params.Q / p.a0);
            coeffs.b.push(0);
            coeffs.b.push(-coeffs.b[0]);
            return coeffs;
          },
          // H(s) = (s/Q) / (s^2 + s/Q + 1)
          bandpass: function(params) {
            var coeffs = initCoeffs();
            var p = preCalc(params, coeffs);
            coeffs.k = 1;
            coeffs.b.push(p.alpha / p.a0);
            coeffs.b.push(0);
            coeffs.b.push(-coeffs.b[0]);
            return coeffs;
          },
          // H(s) = (s^2 + 1) / (s^2 + s/Q + 1)
          bandstop: function(params) {
            var coeffs = initCoeffs();
            var p = preCalc(params, coeffs);
            coeffs.k = 1;
            coeffs.b.push(1 / p.a0);
            coeffs.b.push(-2 * p.cw / p.a0);
            coeffs.b.push(coeffs.b[0]);
            return coeffs;
          },
          // H(s) = (s^2 + s*(A/Q) + 1) / (s^2 + s/(A*Q) + 1)
          peak: function(params) {
            var coeffs = initCoeffs();
            var p = preCalcGain(params);
            coeffs.k = 1;
            coeffs.a0 = 1 + p.alpha / p.A;
            coeffs.a.push(-2 * p.cw / coeffs.a0);
            coeffs.a.push((1 - p.alpha / p.A) / coeffs.a0);
            coeffs.b.push((1 + p.alpha * p.A) / coeffs.a0);
            coeffs.b.push(-2 * p.cw / coeffs.a0);
            coeffs.b.push((1 - p.alpha * p.A) / coeffs.a0);
            return coeffs;
          },
          // H(s) = A * (s^2 + (sqrt(A)/Q)*s + A)/(A*s^2 + (sqrt(A)/Q)*s + 1)
          lowshelf: function(params) {
            var coeffs = initCoeffs();
            if (params.BW) {
              delete params.BW;
            }
            var p = preCalcGain(params);
            coeffs.k = 1;
            var sa = 2 * Math.sqrt(p.A) * p.alpha;
            coeffs.a0 = p.A + 1 + (p.A - 1) * p.cw + sa;
            coeffs.a.push(-2 * (p.A - 1 + (p.A + 1) * p.cw) / coeffs.a0);
            coeffs.a.push((p.A + 1 + (p.A - 1) * p.cw - sa) / coeffs.a0);
            coeffs.b.push(p.A * (p.A + 1 - (p.A - 1) * p.cw + sa) / coeffs.a0);
            coeffs.b.push(2 * p.A * (p.A - 1 - (p.A + 1) * p.cw) / coeffs.a0);
            coeffs.b.push(p.A * (p.A + 1 - (p.A - 1) * p.cw - sa) / coeffs.a0);
            return coeffs;
          },
          // H(s) = A * (A*s^2 + (sqrt(A)/Q)*s + 1)/(s^2 + (sqrt(A)/Q)*s + A)
          highshelf: function(params) {
            var coeffs = initCoeffs();
            if (params.BW) {
              delete params.BW;
            }
            var p = preCalcGain(params);
            coeffs.k = 1;
            var sa = 2 * Math.sqrt(p.A) * p.alpha;
            coeffs.a0 = p.A + 1 - (p.A - 1) * p.cw + sa;
            coeffs.a.push(2 * (p.A - 1 - (p.A + 1) * p.cw) / coeffs.a0);
            coeffs.a.push((p.A + 1 - (p.A - 1) * p.cw - sa) / coeffs.a0);
            coeffs.b.push(p.A * (p.A + 1 + (p.A - 1) * p.cw + sa) / coeffs.a0);
            coeffs.b.push(-2 * p.A * (p.A - 1 + (p.A + 1) * p.cw) / coeffs.a0);
            coeffs.b.push(p.A * (p.A + 1 + (p.A - 1) * p.cw - sa) / coeffs.a0);
            return coeffs;
          },
          // taken from: Design of digital filters for frequency weightings (A and C) required for risk assessments of workers exposed to noise
          // use Butterworth one stage IIR filter to get the results from the paper
          aweighting: function(params) {
            var coeffs = initCoeffs();
            coeffs.k = 1;
            var wo = 2 * Math.PI * params.Fc / params.Fs;
            var w = 2 * Math.tan(wo / 2);
            var Q = params.Q;
            var wsq = Math.pow(w, 2);
            coeffs.a0 = 4 * Q + wsq * Q + 2 * w;
            coeffs.a.push(2 * wsq * Q - 8 * Q);
            coeffs.a.push(4 * Q + wsq * Q - 2 * w);
            coeffs.b.push(wsq * Q);
            coeffs.b.push(2 * wsq * Q);
            coeffs.b.push(wsq * Q);
            return coeffs;
          }
        };
        return self2;
      };
      module.exports = IirCoeffs;
    }
  });

  // node_modules/fili/src/calcCascades.js
  var require_calcCascades = __commonJS({
    "node_modules/fili/src/calcCascades.js"(exports, module) {
      "use strict";
      var IirCoeffs = require_iirCoeffs();
      var getCoeffs = new IirCoeffs();
      var table = {
        // values from https://gist.github.com/endolith/4982787#file-all-values-txt
        bessel: {
          q: [
            [0.57735026919],
            [0.805538281842, 0.521934581669],
            [1.02331395383, 0.611194546878, 0.510317824749],
            [1.22566942541, 0.710852074442, 0.559609164796, 0.505991069397],
            [1.41530886916, 0.809790964842, 0.620470155556, 0.537552151325, 0.503912727276],
            [1.59465693507, 0.905947107025, 0.684008068137, 0.579367238641, 0.525936202016, 0.502755558204],
            [1.76552743493, 0.998998442993, 0.747625068271, 0.624777082395, 0.556680772868, 0.519027293158, 0.502045428643],
            [1.9292718407, 1.08906376917, 0.810410302962, 0.671382379377, 0.591144659703, 0.542678365981, 0.514570953471, 0.501578400482],
            [2.08691792612, 1.17637337045, 0.872034231424, 0.718163551101, 0.627261751983, 0.569890924765, 0.533371782078, 0.511523796759, 0.50125489338],
            [2.23926560629, 1.26117120993, 0.932397288146, 0.764647810579, 0.664052481472, 0.598921924986, 0.555480327396, 0.526848630061, 0.509345928377, 0.501021580965],
            [2.38695091667, 1.34368488961, 0.991497755204, 0.81060830488, 0.701011199665, 0.628878390935, 0.57943181849, 0.545207253735, 0.52208637596, 0.507736060535, 0.500847111042],
            [2.53048919562, 1.42411783481, 1.04937620183, 0.85593899901, 0.737862159044, 0.659265671705, 0.604435823473, 0.565352679646, 0.537608804383, 0.51849505465, 0.506508536474, 0.500715908905]
          ],
          f3dB: [
            [1.27201964951],
            [1.60335751622, 1.43017155999],
            [1.9047076123, 1.68916826762, 1.60391912877],
            [2.18872623053, 1.95319575902, 1.8320926012, 1.77846591177],
            [2.45062684305, 2.20375262593, 2.06220731793, 1.98055310881, 1.94270419166],
            [2.69298925084, 2.43912611431, 2.28431825401, 2.18496722634, 2.12472538477, 2.09613322542],
            [2.91905714471, 2.66069088948, 2.49663434571, 2.38497976939, 2.30961462222, 2.26265746534, 2.24005716132],
            [3.13149167404, 2.87016099416, 2.69935018044, 2.57862945683, 2.49225505119, 2.43227707449, 2.39427710712, 2.37582307687],
            [3.33237300564, 3.06908580184, 2.89318259511, 2.76551588399, 2.67073340527, 2.60094950474, 2.55161764546, 2.52001358804, 2.50457164552],
            [3.52333123464, 3.25877569704, 3.07894353744, 2.94580435024, 2.84438325189, 2.76691082498, 2.70881411245, 2.66724655259, 2.64040228249, 2.62723439989],
            [3.70566068548, 3.44032173223, 3.2574059854, 3.11986367838, 3.01307175388, 2.92939234605, 2.86428726094, 2.81483068055, 2.77915465405, 2.75596888377, 2.74456638588],
            [3.88040469682, 3.61463243697, 3.4292654707, 3.28812274966, 3.17689762788, 3.08812364257, 3.01720732972, 2.96140104561, 2.91862858495, 2.88729479473, 2.8674198668, 2.8570800015]
          ],
          f1dB: [
            [2.16477559371],
            [2.70320928596, 2.41122332505],
            [3.25676581436, 2.88822569572, 2.74246238837],
            [3.76153580353, 3.35675411406, 3.14862673032, 3.05646412475],
            [4.22174260104, 3.79644757806, 3.55260471864, 3.41193742197, 3.34673435508],
            [4.64584812552, 4.20789257981, 3.94082363122, 3.76942681446, 3.66549975744, 3.61617359345],
            [5.04060395196, 4.5944592201, 4.3111677248, 4.11836351827, 3.98822359814, 3.90713836715, 3.86811234525],
            [5.41107948467, 4.95951159709, 4.66435804468, 4.45575796102, 4.30650679478, 4.20286750045, 4.13720522991, 4.10531748119],
            [5.76110791853, 5.30592898465, 5.00182215701, 4.7811081045, 4.61724509926, 4.49660100894, 4.41131378918, 4.35667671372, 4.32997951075],
            [6.09364309488, 5.63609116014, 5.32506930789, 5.09480346139, 4.91939504255, 4.78540258409, 4.68493280536, 4.61302286993, 4.56661931366, 4.54382759952],
            [6.41100731543, 5.95195558182, 5.63550073656, 5.39754464742, 5.21278891332, 5.06801430334, 4.95539684456, 4.8697869429, 4.80814951843, 4.76793469612, 4.74828032403],
            [6.71506056052, 6.25514029778, 5.9343616072, 5.69011422355, 5.49763642361, 5.34401973764, 5.22125973611, 5.12485045619, 5.05037962112, 4.99699982231, 4.96155789635, 4.94441828777]
          ]
        }
      };
      var tiTable = {
        bessel: {
          as: [
            [1.3617],
            [1.3397, 0.7743],
            [1.2217, 0.9686, 0.5131],
            [1.1112, 0.9754, 0.7202, 0.3728],
            [1.0215, 0.9393, 0.7815, 0.5604, 0.2883]
          ],
          bs: [
            [0.618],
            [0.4889, 0.389],
            [0.3887, 0.3505, 0.2756],
            [0.3162, 0.2979, 0.2621, 0.2087],
            [0.265, 0.2549, 0.2351, 0.2059, 0.1665]
          ]
        },
        butterworth: {
          as: [
            [1.4142],
            [1.8478, 0.7654],
            [1.9319, 1.4142, 0.5176],
            [1.9616, 1.6629, 1.1111, 0.3902],
            [1.9754, 1.782, 1.4142, 0.908, 0.3129]
          ],
          bs: [
            [1],
            [1, 1],
            [1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1]
          ]
        },
        tschebyscheff05: {
          as: [
            [1.3614],
            [2.6282, 0.3648],
            [3.8645, 0.7528, 0.1589],
            [5.1117, 1.0639, 0.3439, 0.0885],
            [6.3648, 1.3582, 0.4822, 0.1994, 0.0563]
          ],
          bs: [
            [1.3827],
            [3.4341, 1.1509],
            [6.9797, 1.8573, 1.0711],
            [11.9607, 2.9365, 1.4206, 1.0407],
            [18.3695, 4.3453, 1.944, 1.252, 1.0263]
          ]
        },
        tschebyscheff1: {
          as: [
            [1.3022],
            [2.5904, 0.3039],
            [3.8437, 0.6292, 0.1296],
            [5.1019, 0.8916, 0.2806, 0.0717],
            [6.3634, 1.1399, 0.3939, 0.1616, 0.0455]
          ],
          bs: [
            [1.5515],
            [4.1301, 1.1697],
            [8.5529, 1.9124, 1.0766],
            [14.7608, 3.0426, 1.4334, 1.0432],
            [22.7468, 4.5167, 1.9665, 1.2569, 1.0277]
          ]
        },
        tschebyscheff2: {
          as: [
            [1.1813],
            [2.4025, 0.2374],
            [3.588, 0.4925, 0.0995],
            [4.7743, 0.6991, 0.2153, 0.0547],
            [5.9618, 0.8947, 0.3023, 0.1233, 0.0347]
          ],
          bs: [
            [1.7775],
            [4.9862, 1.1896],
            [10.4648, 1.9622, 1.0826],
            [18.151, 3.1353, 1.4449, 1.0461],
            [28.0376, 4.6644, 1.9858, 1.2614, 1.0294]
          ]
        },
        tschebyscheff3: {
          as: [
            [1.065],
            [2.1853, 0.1964],
            [3.2721, 0.4077, 0.0815],
            [4.3583, 0.5791, 0.1765, 0.0448],
            [5.4449, 0.7414, 0.2479, 0.1008, 0.0283]
          ],
          bs: [
            [1.9305],
            [5.5339, 1.2009],
            [11.6773, 1.9873, 1.0861],
            [20.2948, 3.1808, 1.4507, 1.0478],
            [31.3788, 4.7363, 1.9952, 1.2638, 1.0304]
          ]
        },
        allpass: {
          as: [
            [1.6278],
            [2.337, 1.3506],
            [2.6117, 2.0706, 1.0967],
            [2.7541, 2.4174, 1.785, 0.9239],
            [2.8406, 2.612, 2.1733, 1.5583, 0.8018]
          ],
          bs: [
            [0.8832],
            [1.4878, 1.1837],
            [1.7763, 1.6015, 1.2596],
            [1.942, 1.83, 1.6101, 1.2822],
            [2.049, 1.9714, 1.8184, 1.5923, 1.2877]
          ]
        }
      };
      var calcCoeffs = function(params, behavior) {
        var filter = [];
        var cnt = 0;
        if (behavior !== "fromPZ") {
          if (params.order > 12) {
            params.order = 12;
          }
          for (cnt = 0; cnt < params.order; cnt++) {
            var q2, f, fd;
            if (params.transform === "matchedZ") {
              filter.push(getCoeffs["lowpassMZ"]({
                Fs: params.Fs,
                Fc: params.Fc,
                preGain: params.preGain,
                as: tiTable[params.characteristic].as[params.order - 1][cnt],
                bs: tiTable[params.characteristic].bs[params.order - 1][cnt]
              }));
            } else {
              if (params.characteristic === "butterworth") {
                q2 = 0.5 / Math.sin(Math.PI / (params.order * 2) * (cnt + 0.5));
                f = 1;
              } else {
                q2 = table[params.characteristic].q[params.order - 1][cnt];
                if (params.oneDb) {
                  f = table[params.characteristic].f1dB[params.order - 1][cnt];
                } else {
                  f = table[params.characteristic].f3dB[params.order - 1][cnt];
                }
              }
              if (behavior === "highpass") {
                fd = params.Fc / f;
              } else {
                fd = params.Fc * f;
              }
              if (behavior === "bandpass" || behavior === "bandstop") {
                if (params.characteristic === "bessel") {
                  fd = Math.sqrt(params.order) * fd / params.order;
                }
              }
              filter.push(getCoeffs[behavior]({
                Fs: params.Fs,
                Fc: fd,
                Q: q2,
                BW: params.BW || 0,
                gain: params.gain || 0,
                preGain: params.preGain || false
              }));
            }
          }
        } else {
          for (cnt = 0; cnt < params.length; cnt++) {
            filter.push(getCoeffs[behavior](params[cnt]));
          }
        }
        return filter;
      };
      var initCalcCoeffs = function(behavior) {
        return function(params) {
          return calcCoeffs(params, behavior);
        };
      };
      var self2 = {};
      var CalcCascades = function() {
        var available = [];
        for (var k in getCoeffs) {
          self2[k] = initCalcCoeffs(k);
          available.push(k);
        }
        self2.available = function() {
          return available;
        };
        return self2;
      };
      module.exports = CalcCascades;
    }
  });

  // node_modules/fili/src/fft.js
  var require_fft = __commonJS({
    "node_modules/fili/src/fft.js"(exports, module) {
      "use strict";
      var Fft = function(radix) {
        var isPowerOfTwo = function(value) {
          if (!(value & value - 1)) {
            return true;
          }
          return false;
        };
        if (!isPowerOfTwo(radix)) {
          return false;
        }
        var fft = {};
        fft.length = radix;
        fft.buffer = new Float64Array(radix);
        fft.re = new Float64Array(radix);
        fft.im = new Float64Array(radix);
        fft.reI = new Float64Array(radix);
        fft.imI = new Float64Array(radix);
        fft.twiddle = new Int32Array(radix);
        fft.sinTable = new Float64Array(radix - 1);
        fft.cosTable = new Float64Array(radix - 1);
        var TPI = 2 * Math.PI;
        var bits = Math.floor(Math.log(radix) / Math.LN2);
        for (i = fft.sinTable.length; i--; ) {
          fft.sinTable[i] = Math.sin(TPI * (i / radix));
          fft.cosTable[i] = Math.cos(TPI * (i / radix));
        }
        var nh = radix >> 1;
        var i = 0;
        var j = 0;
        for (; ; ) {
          fft.twiddle[i] = j;
          if (++i >= radix) {
            break;
          }
          bits = nh;
          while (bits <= j) {
            j -= bits;
            bits >>= 1;
          }
          j += bits;
        }
        var PI = Math.PI;
        var PI2 = Math.PI * 2;
        var abs = Math.abs;
        var pow = Math.pow;
        var cos = Math.cos;
        var sin = Math.sin;
        var sinc = function(x) {
          return sin(PI * x) / (PI * x);
        };
        var E = Math.E;
        var windowCalculation = {
          rectangular: {
            calc: function() {
              return 1;
            },
            values: [],
            correction: 1
          },
          none: {
            calc: function() {
              return 1;
            },
            values: [],
            correction: 1
          },
          hanning: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.5 * (1 - cos(z));
            },
            values: [],
            correction: 2
          },
          hamming: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.54 - 0.46 * cos(z);
            },
            values: [],
            correction: 1.8518999946875638
          },
          tukery: {
            calc: function(n, N, a) {
              if (n < a * (N - 1) / 2) {
                return 0.5 * (1 + cos(PI * (2 * n / (a * (N - 1)) - 1)));
              } else if ((N - 1) * (1 - a / 2) < n) {
                return 0.5 * (1 + cos(PI * (2 * n / (a * (N - 1)) - 2 / a + 1)));
              } else {
                return 1;
              }
            },
            values: [],
            correction: 4 / 3
          },
          cosine: {
            calc: function(n, N) {
              return sin(PI * n / (N - 1));
            },
            values: [],
            correction: 1.570844266360796
          },
          lanczos: {
            calc: function(n, N) {
              return sinc(2 * n / (N - 1) - 1);
            },
            values: [],
            correction: 1.6964337576195783
          },
          triangular: {
            calc: function(n, N) {
              return 2 / (N + 1) * ((N + 1) / 2 - abs(n - (N - 1) / 2));
            },
            values: [],
            correction: 2
          },
          bartlett: {
            calc: function(n, N) {
              return 2 / (N - 1) * ((N - 1) / 2 - abs(n - (N - 1) / 2));
            },
            values: [],
            correction: 2
          },
          gaussian: {
            calc: function(n, N, a) {
              return pow(E, -0.5 * pow((n - (N - 1) / 2) / (a * (N - 1) / 2), 2));
            },
            values: [],
            correction: 5 / 3
          },
          bartlettHanning: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.62 - 0.48 * abs(n / (N - 1) - 0.5) - 0.38 * cos(z);
            },
            values: [],
            correction: 2
          },
          blackman: {
            calc: function(n, N, a) {
              var a0 = (1 - a) / 2;
              var a1 = 0.5;
              var a2 = a / 2;
              var z = PI2 * n / (N - 1);
              return a0 - a1 * cos(z) + a2 * cos(2 * z);
            },
            values: [],
            correction: 4 / 3
          },
          blackmanHarris: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.35875 - 0.48829 * cos(z) + 0.14128 * cos(2 * z) - 0.01168 * cos(3 * z);
            },
            values: [],
            correction: 1.5594508635
          },
          nuttall3: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.375 - 0.5 * cos(z) + 0.125 * cos(2 * z);
            },
            values: [],
            correction: 1.56
          },
          nuttall3a: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.40897 - 0.5 * cos(z) + 0.09103 * cos(2 * z);
            },
            values: [],
            correction: 1.692
          },
          nuttall3b: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.4243801 - 0.4973406 * cos(z) + 0.078793 * cos(2 * z);
            },
            values: [],
            correction: 1.7372527
          },
          nuttall4: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.3125 - 0.46875 * cos(z) + 0.1875 * cos(2 * z) - 0.03125 * cos(3 * z);
            },
            values: [],
            correction: 1.454543
          },
          nuttall4a: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.338946 - 0.481973 * cos(z) + 0.161054 * cos(2 * z) - 0.018027 * cos(3 * z);
            },
            values: [],
            correction: 1.512732763
          },
          nuttall4b: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.355768 - 0.481973 * cos(z) + 0.144232 * cos(2 * z) - 0.012604 * cos(3 * z);
            },
            values: [],
            correction: 1.55223262
          },
          nuttall4c: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.3635819 - 0.4891775 * cos(z) + 0.1365995 * cos(2 * z) - 0.0106411 * cos(3 * z);
            },
            values: [],
            correction: 1.57129067
          },
          // fast decaying flat top
          sft3f: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.26526 - 0.5 * cos(z) + 0.23474 * cos(2 * z);
            },
            values: [],
            correction: 1.3610238
          },
          sft4f: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.21706 - 0.42103 * cos(z) + 0.28294 * cos(2 * z) - 0.07897 * cos(3 * z);
            },
            values: [],
            correction: 1.2773573
          },
          sft5f: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.1881 - 0.36923 * cos(z) + 0.28702 * cos(2 * z) - 0.13077 * cos(3 * z) + 0.02488 * cos(4 * z);
            },
            values: [],
            correction: 1.23167769
          },
          // minimum sidelobe flat top
          sft3m: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.28235 - 0.52105 * cos(z) + 0.19659 * cos(2 * z);
            },
            values: [],
            correction: 1.39343451
          },
          sft4m: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.241906 - 0.460841 * cos(z) + 0.2552381 * cos(2 * z) - 0.041872 * cos(3 * z);
            },
            values: [],
            correction: 1.3190596
          },
          sft5m: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.209671 - 0.407331 * cos(z) + 0.281225 * cos(2 * z) - 0.092669 * cos(3 * z) + 91036e-7 * cos(4 * z);
            },
            values: [],
            correction: 1.26529456464
          },
          nift: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return 0.2810639 - 0.5208972 * cos(z) + 0.1980399 * cos(2 * z);
            },
            values: [],
            correction: 1.39094182
          },
          hpft: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.912510941 * cos(z) + 1.079173272 * cos(2 * z) - 0.1832630879 * cos(3 * z)) / N;
            },
            values: [],
            correction: 1
          },
          srft: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.93 * cos(z) + 1.29 * cos(2 * z) - 0.388 * cos(3 * z) + 0.028 * cos(4 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft70: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.90796 * cos(z) + 1.07349 * cos(2 * z) - 0.18199 * cos(3 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft95: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.9383379 * cos(z) + 1.3045202 * cos(2 * z) - 0.402827 * cos(3 * z) + 0.0350665 * cos(4 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft90d: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.942604 * cos(z) + 1.340318 * cos(2 * z) - 0.440811 * cos(3 * z) + 0.043097 * cos(4 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft116d: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.9575375 * cos(z) + 1.4780705 * cos(2 * z) - 0.6367431 * cos(3 * z) + 0.1228389 * cos(4 * z) - 66288e-7 * cos(5 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft144d: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.96760033 * cos(z) + 1.57983607 * cos(2 * z) - 0.81123644 * cos(3 * z) + 0.22583558 * cos(4 * z) - 0.02773848 * cos(5 * z) + 9036e-7 * cos(6 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft196d: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.97441842 * cos(z) + 1.65409888 * cos(2 * z) - 0.95788186 * cos(3 * z) + 0.3367342 * cos(4 * z) - 0.06364621 * cos(5 * z) + 521942e-8 * cos(6 * z) - 10599e-8 * cos(7 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft223d: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.98298997309 * cos(z) + 1.75556083063 * cos(2 * z) - 1.19037717712 * cos(3 * z) + 0.56155440797 * cos(4 * z) - 0.17296769663 * cos(5 * z) + 0.03233247087 * cos(6 * z) - 0.00324954578 * cos(7 * z) + 1380104e-10 * cos(8 * z) - 132725e-11 * cos(9 * z)) / N;
            },
            values: [],
            correction: 1
          },
          hft248d: {
            calc: function(n, N) {
              var z = PI2 * n / (N - 1);
              return (1 - 1.985844164102 * cos(z) + 1.791176438506 * cos(2 * z) - 1.282075284005 * cos(3 * z) + 0.667777530266 * cos(4 * z) - 0.240160796576 * cos(5 * z) + 0.056656381764 * cos(6 * z) - 0.008134974479 * cos(7 * z) + 62454465e-11 * cos(8 * z) - 19808998e-12 * cos(9 * z) + 132974e-12 * cos(10 * z)) / N;
            },
            values: [],
            correction: 1
          }
        };
        var windowFunctions = function(params) {
          if (windowCalculation[params.name].values.length !== params.N) {
            if (params.n === 0) {
              windowCalculation[params.name].values.length = 0;
            }
            windowCalculation[params.name].values[params.n] = windowCalculation[params.name].correction * windowCalculation[params.name].calc(params.n, params.N, params.a);
            return windowCalculation[params.name].values[params.n];
          }
          return windowCalculation[params.name].values;
        };
        var self2 = {
          forward: function(b, window3) {
            var i2, j2, n, k, k2, h, d, c, s, ik, dx, dy;
            n = fft.buffer.length;
            var winFunction = {
              name: window3,
              N: n,
              a: 0.5,
              n: 0
            };
            var w = windowFunctions(winFunction);
            if (typeof w === "number") {
              for (i2 = 0; i2 < n; ++i2) {
                winFunction.n = i2;
                fft.buffer[i2] = b[i2] * windowFunctions(winFunction);
              }
            } else {
              for (i2 = 0; i2 < n; ++i2) {
                fft.buffer[i2] = b[i2] * w[i2];
              }
            }
            for (i2 = n; i2--; ) {
              fft.re[i2] = fft.buffer[fft.twiddle[i2]];
              fft.im[i2] = 0;
            }
            for (k = 1; k < n; k = k2) {
              h = 0;
              k2 = k + k;
              d = n / k2;
              for (j2 = 0; j2 < k; j2++) {
                c = fft.cosTable[h];
                s = fft.sinTable[h];
                for (i2 = j2; i2 < n; i2 += k2) {
                  ik = i2 + k;
                  dx = s * fft.im[ik] + c * fft.re[ik];
                  dy = c * fft.im[ik] - s * fft.re[ik];
                  fft.re[ik] = fft.re[i2] - dx;
                  fft.re[i2] += dx;
                  fft.im[ik] = fft.im[i2] - dy;
                  fft.im[i2] += dy;
                }
                h += d;
              }
            }
            return {
              re: fft.re,
              im: fft.im
            };
          },
          inverse: function(re, im) {
            var i2, j2, n, k, k2, h, d, c, s, ik, dx, dy;
            n = re.length;
            for (i2 = n; i2--; ) {
              j2 = fft.twiddle[i2];
              fft.reI[i2] = re[j2];
              fft.imI[i2] = -im[j2];
            }
            for (k = 1; k < n; k = k2) {
              h = 0;
              k2 = k + k;
              d = n / k2;
              for (j2 = 0; j2 < k; j2++) {
                c = fft.cosTable[h];
                s = fft.sinTable[h];
                for (i2 = j2; i2 < n; i2 += k2) {
                  ik = i2 + k;
                  dx = s * fft.imI[ik] + c * fft.reI[ik];
                  dy = c * fft.imI[ik] - s * fft.reI[ik];
                  fft.reI[ik] = fft.reI[i2] - dx;
                  fft.reI[i2] += dx;
                  fft.imI[ik] = fft.imI[i2] - dy;
                  fft.imI[i2] += dy;
                }
                h += d;
              }
            }
            for (i2 = n; i2--; ) {
              fft.buffer[i2] = fft.reI[i2] / n;
            }
            return fft.buffer;
          },
          magnitude: function(params) {
            var ret = [];
            for (var cnt = 0; cnt < params.re.length; cnt++) {
              ret.push(Math.sqrt(params.re[cnt] * params.re[cnt] + params.im[cnt] * params.im[cnt]));
            }
            return ret;
          },
          magToDb: function(b) {
            var ret = [];
            for (var cnt = 0; cnt < b.length; cnt++) {
              ret.push(20 * Math.log(b[cnt]) * Math.LOG10E);
            }
            return ret;
          },
          phase: function(params) {
            var ret = [];
            for (var cnt = 0; cnt < params.re.length; cnt++) {
              ret.push(Math.atan2(params.im[cnt], params.re[cnt]));
            }
            return ret;
          },
          windows: function() {
            var winFuncs = [];
            for (var k in windowCalculation) {
              winFuncs.push(k);
            }
            return winFuncs;
          }
        };
        return self2;
      };
      module.exports = Fft;
    }
  });

  // node_modules/fili/src/firCoeffs.js
  var require_firCoeffs = __commonJS({
    "node_modules/fili/src/firCoeffs.js"(exports, module) {
      "use strict";
      var FirCoeffs = function() {
        var calcKImpulseResponse = function(params) {
          var Fs = params.Fs;
          var Fa = params.Fa;
          var Fb = params.Fb;
          var o = params.order || 51;
          var alpha = params.Att || 100;
          var ino = function(val) {
            var d = 0;
            var ds = 1;
            var s = 1;
            while (ds > s * 1e-6) {
              d += 2;
              ds *= val * val / (d * d);
              s += ds;
            }
            return s;
          };
          if (o / 2 - Math.floor(o / 2) === 0) {
            o++;
          }
          var Np = (o - 1) / 2;
          var A = [];
          var beta = 0;
          var cnt = 0;
          var inoBeta;
          var ret = [];
          A[0] = 2 * (Fb - Fa) / Fs;
          for (cnt = 1; cnt <= Np; cnt++) {
            A[cnt] = (Math.sin(2 * cnt * Math.PI * Fb / Fs) - Math.sin(2 * cnt * Math.PI * Fa / Fs)) / (cnt * Math.PI);
          }
          if (alpha < 21) {
            beta = 0;
          } else if (alpha > 50) {
            beta = 0.1102 * (alpha - 8.7);
          } else {
            beta = 0.5842 * Math.pow(alpha - 21, 0.4) + 0.07886 * (alpha - 21);
          }
          inoBeta = ino(beta);
          for (cnt = 0; cnt <= Np; cnt++) {
            ret[Np + cnt] = A[cnt] * ino(beta * Math.sqrt(1 - cnt * cnt / (Np * Np))) / inoBeta;
          }
          for (cnt = 0; cnt < Np; cnt++) {
            ret[cnt] = ret[o - 1 - cnt];
          }
          return ret;
        };
        var calcImpulseResponse = function(params) {
          var Fs = params.Fs;
          var Fc = params.Fc;
          var o = params.order;
          var omega = 2 * Math.PI * Fc / Fs;
          var cnt = 0;
          var dc = 0;
          var ret = [];
          for (cnt = 0; cnt <= o; cnt++) {
            if (cnt - o / 2 === 0) {
              ret[cnt] = omega;
            } else {
              ret[cnt] = Math.sin(omega * (cnt - o / 2)) / (cnt - o / 2);
              ret[cnt] *= 0.54 - 0.46 * Math.cos(2 * Math.PI * cnt / o);
            }
            dc = dc + ret[cnt];
          }
          for (cnt = 0; cnt <= o; cnt++) {
            ret[cnt] /= dc;
          }
          return ret;
        };
        var invert = function(h) {
          var cnt;
          for (cnt = 0; cnt < h.length; cnt++) {
            h[cnt] = -h[cnt];
          }
          h[(h.length - 1) / 2]++;
          return h;
        };
        var bs = function(params) {
          var lp = calcImpulseResponse({
            order: params.order,
            Fs: params.Fs,
            Fc: params.F2
          });
          var hp = invert(calcImpulseResponse({
            order: params.order,
            Fs: params.Fs,
            Fc: params.F1
          }));
          var out = [];
          for (var i = 0; i < lp.length; i++) {
            out.push(lp[i] + hp[i]);
          }
          return out;
        };
        var self2 = {
          lowpass: function(params) {
            return calcImpulseResponse(params);
          },
          highpass: function(params) {
            return invert(calcImpulseResponse(params));
          },
          bandstop: function(params) {
            return bs(params);
          },
          bandpass: function(params) {
            return invert(bs(params));
          },
          kbFilter: function(params) {
            return calcKImpulseResponse(params);
          },
          available: function() {
            return ["lowpass", "highpass", "bandstop", "bandpass", "kbFilter"];
          }
        };
        return self2;
      };
      module.exports = FirCoeffs;
    }
  });

  // node_modules/fili/src/utils.js
  var require_utils = __commonJS({
    "node_modules/fili/src/utils.js"(exports) {
      "use strict";
      exports.evaluatePhase = function(res) {
        var xcnt = 0;
        var cnt = 0;
        var pi = Math.PI;
        var tpi = 2 * pi;
        var phase = [];
        for (cnt = 0; cnt < res.length; cnt++) {
          phase.push(res[cnt].phase);
        }
        res[0].unwrappedPhase = res[0].phase;
        res[0].groupDelay = 0;
        for (cnt = 1; cnt < phase.length; cnt++) {
          var diff = phase[cnt] - phase[cnt - 1];
          if (diff > pi) {
            for (xcnt = cnt; xcnt < phase.length; xcnt++) {
              phase[xcnt] -= tpi;
            }
          } else if (diff < -pi) {
            for (xcnt = cnt; xcnt < phase.length; xcnt++) {
              phase[xcnt] += tpi;
            }
          }
          if (phase[cnt] < 0) {
            res[cnt].unwrappedPhase = -phase[cnt];
          } else {
            res[cnt].unwrappedPhase = phase[cnt];
          }
          res[cnt].phaseDelay = res[cnt].unwrappedPhase / (cnt / res.length);
          res[cnt].groupDelay = (res[cnt].unwrappedPhase - res[cnt - 1].unwrappedPhase) / (pi / res.length);
          if (res[cnt].groupDelay < 0) {
            res[cnt].groupDelay = -res[cnt].groupDelay;
          }
        }
        if (res[0].magnitude !== 0) {
          res[0].phaseDelay = res[1].phaseDelay;
          res[0].groupDelay = res[1].groupDelay;
        } else {
          res[0].phaseDelay = res[2].phaseDelay;
          res[0].groupDelay = res[2].groupDelay;
          res[1].phaseDelay = res[2].phaseDelay;
          res[1].groupDelay = res[2].groupDelay;
        }
      };
      exports.runMultiFilter = function(input, d, doStep, overwrite) {
        var out = [];
        if (overwrite) {
          out = input;
        }
        var i;
        for (i = 0; i < input.length; i++) {
          out[i] = doStep(input[i], d);
        }
        return out;
      };
      exports.runMultiFilterReverse = function(input, d, doStep, overwrite) {
        var out = [];
        if (overwrite) {
          out = input;
        }
        var i;
        for (i = input.length - 1; i >= 0; i--) {
          out[i] = doStep(input[i], d);
        }
        return out;
      };
      var factorial = function(n, a) {
        if (!a) {
          a = 1;
        }
        if (n !== Math.floor(n) || a !== Math.floor(a)) {
          return 1;
        }
        if (n === 0 || n === 1) {
          return a;
        } else {
          return factorial(n - 1, a * n);
        }
      };
      exports.besselFactors = function(n) {
        var res = [];
        for (var k = 0; k < n + 1; k++) {
          var p = factorial(2 * n - k);
          var q2 = Math.pow(2, n - k) * factorial(k) * factorial(n - k);
          res.unshift(Math.floor(p / q2));
        }
        return res;
      };
      var fractionToFp = function(fraction, fractionBits) {
        var fpFraction = 0;
        for (var cnt = 0; cnt < fractionBits; cnt++) {
          var bitVal = 1 / Math.pow(2, cnt + 1);
          if (fraction > bitVal) {
            fraction -= bitVal;
            fpFraction += bitVal;
          }
        }
        return fpFraction;
      };
      var numberToFp = function(number, numberBits) {
        return number & Math.pow(2, numberBits);
      };
      var valueToFp = function(value, numberBits, fractionBits) {
        var number = Math.abs(value);
        var fraction = value - number;
        var fpNumber = {
          number: numberToFp(number, numberBits).toString(),
          fraction: fractionToFp(fraction, fractionBits).toString(),
          numberBits,
          fractionBits
        };
        return fpNumber;
      };
      exports.fixedPoint = {
        convert: function(value, numberBits, fractionBits) {
          return valueToFp(value, numberBits, fractionBits);
        },
        add: function(fpVal1, fpVal2) {
        },
        sub: function(fpVal1, fpVal2) {
        },
        mul: function(fpVal1, fpVal2) {
        },
        div: function(fpVal1, fpVal2) {
        }
      };
      exports.complex = {
        div: function(p, q2) {
          var a = p.re;
          var b = p.im;
          var c = q2.re;
          var d = q2.im;
          var n = c * c + d * d;
          var x = {
            re: (a * c + b * d) / n,
            im: (b * c - a * d) / n
          };
          return x;
        },
        mul: function(p, q2) {
          var a = p.re;
          var b = p.im;
          var c = q2.re;
          var d = q2.im;
          var x = {
            re: a * c - b * d,
            im: (a + b) * (c + d) - a * c - b * d
          };
          return x;
        },
        add: function(p, q2) {
          var x = {
            re: p.re + q2.re,
            im: p.im + q2.im
          };
          return x;
        },
        sub: function(p, q2) {
          var x = {
            re: p.re - q2.re,
            im: p.im - q2.im
          };
          return x;
        },
        phase: function(n) {
          return Math.atan2(n.im, n.re);
        },
        magnitude: function(n) {
          return Math.sqrt(n.re * n.re + n.im * n.im);
        }
      };
    }
  });

  // node_modules/fili/src/firFilter.js
  var require_firFilter = __commonJS({
    "node_modules/fili/src/firFilter.js"(exports, module) {
      "use strict";
      var {
        runMultiFilter,
        runMultiFilterReverse,
        complex,
        evaluatePhase
      } = require_utils();
      var FirFilter = function(filter) {
        var f = filter;
        var b = [];
        var cnt = 0;
        for (cnt = 0; cnt < f.length; cnt++) {
          b[cnt] = {
            re: f[cnt],
            im: 0
          };
        }
        var initZero = function(cnt2) {
          var r = [];
          var i;
          for (i = 0; i < cnt2; i++) {
            r.push(0);
          }
          return {
            buf: r,
            pointer: 0
          };
        };
        var z = initZero(f.length - 1);
        var doStep = function(input, d) {
          d.buf[d.pointer] = input;
          var out = 0;
          for (cnt = 0; cnt < d.buf.length; cnt++) {
            out += f[cnt] * d.buf[(d.pointer + cnt) % d.buf.length];
          }
          d.pointer = (d.pointer + 1) % d.buf.length;
          return out;
        };
        var calcInputResponse = function(input) {
          var tempF = initZero(f.length - 1);
          return runMultiFilter(input, tempF, doStep);
        };
        var calcResponse = function(params) {
          var Fs = params.Fs;
          var Fr = params.Fr;
          var theta = -Math.PI * (Fr / Fs) * 2;
          var h = {
            re: 0,
            im: 0
          };
          for (var i = 0; i < f.length - 1; i++) {
            h = complex.add(h, complex.mul(b[i], {
              re: Math.cos(theta * i),
              im: Math.sin(theta * i)
            }));
          }
          var m = complex.magnitude(h);
          var res = {
            magnitude: m,
            phase: complex.phase(h),
            dBmagnitude: 20 * Math.log(m) * Math.LOG10E
          };
          return res;
        };
        var self2 = {
          responsePoint: function(params) {
            return calcResponse(params);
          },
          response: function(resolution) {
            resolution = resolution || 100;
            var res = [];
            var cnt2 = 0;
            var r = resolution * 2;
            for (cnt2 = 0; cnt2 < resolution; cnt2++) {
              res[cnt2] = calcResponse({
                Fs: r,
                Fr: cnt2
              });
            }
            evaluatePhase(res);
            return res;
          },
          simulate: function(input) {
            return calcInputResponse(input);
          },
          singleStep: function(input) {
            return doStep(input, z);
          },
          multiStep: function(input, overwrite) {
            return runMultiFilter(input, z, doStep, overwrite);
          },
          filtfilt: function(input, overwrite) {
            return runMultiFilterReverse(runMultiFilter(
              input,
              z,
              doStep,
              overwrite
            ), z, doStep, true);
          },
          reinit: function() {
            z = initZero(f.length - 1);
          }
        };
        return self2;
      };
      module.exports = FirFilter;
    }
  });

  // node_modules/fili/src/iirFilter.js
  var require_iirFilter = __commonJS({
    "node_modules/fili/src/iirFilter.js"(exports, module) {
      "use strict";
      var {
        complex,
        runMultiFilter,
        runMultiFilterReverse,
        evaluatePhase
      } = require_utils();
      var IirFilter = function(filter) {
        var f = filter;
        var cone = {
          re: 1,
          im: 0
        };
        var cf = [];
        var cc = [];
        for (var cnt = 0; cnt < f.length; cnt++) {
          cf[cnt] = {};
          var s = f[cnt];
          cf[cnt].b0 = {
            re: s.b[0],
            im: 0
          };
          cf[cnt].b1 = {
            re: s.b[1],
            im: 0
          };
          cf[cnt].b2 = {
            re: s.b[2],
            im: 0
          };
          cf[cnt].a1 = {
            re: s.a[0],
            im: 0
          };
          cf[cnt].a2 = {
            re: s.a[1],
            im: 0
          };
          cf[cnt].k = {
            re: s.k,
            im: 0
          };
          cf[cnt].z = [0, 0];
          cc[cnt] = {};
          cc[cnt].b1 = s.b[1] / s.b[0];
          cc[cnt].b2 = s.b[2] / s.b[0];
          cc[cnt].a1 = s.a[0];
          cc[cnt].a2 = s.a[1];
        }
        var runStage = function(s2, input) {
          var temp = input * s2.k.re - s2.a1.re * s2.z[0] - s2.a2.re * s2.z[1];
          var out = s2.b0.re * temp + s2.b1.re * s2.z[0] + s2.b2.re * s2.z[1];
          s2.z[1] = s2.z[0];
          s2.z[0] = temp;
          return out;
        };
        var doStep = function(input, coeffs) {
          var out = input;
          var cnt2 = 0;
          for (cnt2 = 0; cnt2 < coeffs.length; cnt2++) {
            out = runStage(coeffs[cnt2], out);
          }
          return out;
        };
        var biquadResponse = function(params, s2) {
          var Fs = params.Fs;
          var Fr = params.Fr;
          var theta = -Math.PI * (Fr / Fs) * 2;
          var z = {
            re: Math.cos(theta),
            im: Math.sin(theta)
          };
          var p = complex.mul(s2.k, complex.add(s2.b0, complex.mul(z, complex.add(s2.b1, complex.mul(s2.b2, z)))));
          var q2 = complex.add(cone, complex.mul(z, complex.add(s2.a1, complex.mul(s2.a2, z))));
          var h = complex.div(p, q2);
          var res = {
            magnitude: complex.magnitude(h),
            phase: complex.phase(h)
          };
          return res;
        };
        var calcResponse = function(params) {
          var cnt2 = 0;
          var res = {
            magnitude: 1,
            phase: 0
          };
          for (cnt2 = 0; cnt2 < cf.length; cnt2++) {
            var r = biquadResponse(params, cf[cnt2]);
            res.magnitude *= r.magnitude;
            res.phase += r.phase;
          }
          res.dBmagnitude = 20 * Math.log(res.magnitude) * Math.LOG10E;
          return res;
        };
        var reinit = function() {
          var tempF = [];
          for (var cnt2 = 0; cnt2 < f.length; cnt2++) {
            tempF[cnt2] = {
              b0: {
                re: s.b[0],
                im: 0
              },
              b1: {
                re: s.b[1],
                im: 0
              },
              b2: {
                re: s.b[2],
                im: 0
              },
              a1: {
                re: s.a[0],
                im: 0
              },
              a2: {
                re: s.a[1],
                im: 0
              },
              k: {
                re: s.k,
                im: 0
              },
              z: [0, 0]
            };
          }
          return tempF;
        };
        var calcInputResponse = function(input) {
          var tempF = reinit();
          return runMultiFilter(input, tempF, doStep);
        };
        var predefinedResponse = function(def, length) {
          var ret = {};
          var input = [];
          var cnt2 = 0;
          for (cnt2 = 0; cnt2 < length; cnt2++) {
            input.push(def(cnt2));
          }
          ret.out = calcInputResponse(input);
          var maxFound = false;
          var minFound = false;
          for (cnt2 = 0; cnt2 < length - 1; cnt2++) {
            if (ret.out[cnt2] > ret.out[cnt2 + 1] && !maxFound) {
              maxFound = true;
              ret.max = {
                sample: cnt2,
                value: ret.out[cnt2]
              };
            }
            if (maxFound && !minFound && ret.out[cnt2] < ret.out[cnt2 + 1]) {
              minFound = true;
              ret.min = {
                sample: cnt2,
                value: ret.out[cnt2]
              };
              break;
            }
          }
          return ret;
        };
        var getComplRes = function(n1, n2) {
          var innerSqrt = Math.pow(n1 / 2, 2) - n2;
          if (innerSqrt < 0) {
            return [{
              re: -n1 / 2,
              im: Math.sqrt(Math.abs(innerSqrt))
            }, {
              re: -n1 / 2,
              im: -Math.sqrt(Math.abs(innerSqrt))
            }];
          } else {
            return [{
              re: -n1 / 2 + Math.sqrt(innerSqrt),
              im: 0
            }, {
              re: -n1 / 2 - Math.sqrt(innerSqrt),
              im: 0
            }];
          }
        };
        var getPZ = function() {
          var res = [];
          for (var cnt2 = 0; cnt2 < cc.length; cnt2++) {
            res[cnt2] = {};
            res[cnt2].z = getComplRes(cc[cnt2].b1, cc[cnt2].b2);
            res[cnt2].p = getComplRes(cc[cnt2].a1, cc[cnt2].a2);
          }
          return res;
        };
        var self2 = {
          singleStep: function(input) {
            return doStep(input, cf);
          },
          multiStep: function(input, overwrite) {
            return runMultiFilter(input, cf, doStep, overwrite);
          },
          filtfilt: function(input, overwrite) {
            return runMultiFilterReverse(runMultiFilter(
              input,
              cf,
              doStep,
              overwrite
            ), cf, doStep, true);
          },
          simulate: function(input) {
            return calcInputResponse(input);
          },
          stepResponse: function(length) {
            return predefinedResponse(function() {
              return 1;
            }, length);
          },
          impulseResponse: function(length) {
            return predefinedResponse(function(val) {
              if (val === 0) {
                return 1;
              } else {
                return 0;
              }
            }, length);
          },
          responsePoint: function(params) {
            return calcResponse(params);
          },
          response: function(resolution) {
            resolution = resolution || 100;
            var res = [];
            var cnt2 = 0;
            var r = resolution * 2;
            for (cnt2 = 0; cnt2 < resolution; cnt2++) {
              res[cnt2] = calcResponse({
                Fs: r,
                Fr: cnt2
              });
            }
            evaluatePhase(res);
            return res;
          },
          polesZeros: function() {
            return getPZ();
          },
          reinit: function() {
            for (cnt = 0; cnt < cf.length; cnt++) {
              cf[cnt].z = [0, 0];
            }
          }
        };
        return self2;
      };
      module.exports = IirFilter;
    }
  });

  // node_modules/fili/src/testFilter.js
  var require_testFilter = __commonJS({
    "node_modules/fili/src/testFilter.js"(exports, module) {
      "use strict";
      var TestFilter = function(filter) {
        var f = filter;
        var simData = [];
        var cnt;
        var randomValues = function(params) {
          for (cnt = 0; cnt < params.steps; cnt++) {
            simData.push(f.singleStep((Math.random() - 0.5) * params.pp + params.offset));
          }
        };
        var stepValues = function(params) {
          var max = params.offset + params.pp;
          var min = params.offset - params.pp;
          for (cnt = 0; cnt < params.steps; cnt++) {
            if (cnt % 200 < 100) {
              simData.push(f.singleStep(max));
            } else {
              simData.push(f.singleStep(min));
            }
          }
        };
        var impulseValues = function(params) {
          var max = params.offset + params.pp;
          var min = params.offset - params.pp;
          for (cnt = 0; cnt < params.steps; cnt++) {
            if (cnt % 100 === 0) {
              simData.push(f.singleStep(max));
            } else {
              simData.push(f.singleStep(min));
            }
          }
        };
        var rampValues = function(params) {
          var max = params.offset + params.pp;
          var min = params.offset - params.pp;
          var val = min;
          var diff = (max - min) / 100;
          for (cnt = 0; cnt < params.steps; cnt++) {
            if (cnt % 200 < 100) {
              val += diff;
            } else {
              val -= diff;
            }
            simData.push(f.singleStep(val));
          }
        };
        var self2 = {
          randomStability: function(params) {
            f.reinit();
            simData.length = 0;
            randomValues(params);
            for (cnt = params.setup; cnt < simData.length; cnt++) {
              if (simData[cnt] > params.maxStable || simData[cnt] < params.minStable) {
                return simData[cnt];
              }
            }
            return true;
          },
          directedRandomStability: function(params) {
            f.reinit();
            simData.length = 0;
            var i;
            for (i = 0; i < params.tests; i++) {
              var choose = Math.random();
              if (choose < 0.25) {
                randomValues(params);
              } else if (choose < 0.5) {
                stepValues(params);
              } else if (choose < 0.75) {
                impulseValues(params);
              } else {
                rampValues(params);
              }
            }
            randomValues(params);
            for (cnt = params.setup; cnt < simData.length; cnt++) {
              if (simData[cnt] > params.maxStable || simData[cnt] < params.minStable) {
                return simData[cnt];
              }
            }
            return true;
          },
          evaluateBehavior: function() {
          }
        };
        return self2;
      };
      module.exports = TestFilter;
    }
  });

  // node_modules/fili/index.js
  var require_fili = __commonJS({
    "node_modules/fili/index.js"(exports, module) {
      "use strict";
      module.exports = {
        CalcCascades: require_calcCascades(),
        Fft: require_fft(),
        FirCoeffs: require_firCoeffs(),
        FirFilter: require_firFilter(),
        IirCoeffs: require_iirCoeffs(),
        IirFilter: require_iirFilter(),
        TestFilter: require_testFilter()
      };
    }
  });

  // node_modules/music-beat-detector/src/MusicBeatDetector.js
  var require_MusicBeatDetector = __commonJS({
    "node_modules/music-beat-detector/src/MusicBeatDetector.js"(exports, module) {
      var SlidingWindowMax = require_SlidingWindowMax();
      var through = require_through2();
      var Fili = require_fili();
      var FREQ = 44100;
      var SAMPLES_WINDOW = FREQ * 1.5;
      var MIN_PEAK_DISTANCE = FREQ / 5;
      var MAX_INT16 = Math.pow(2, 16) / 2 - 1;
      var MAX_UINT32 = Math.pow(2, 32) - 1;
      var MusicBeatDetector = class {
        constructor(options = {}) {
          this.threshold = MAX_INT16;
          this.lastPeakDistance = MAX_UINT32;
          this.slidingWindowMax = new SlidingWindowMax(SAMPLES_WINDOW, { waitFullRange: false });
          this.pos = 0;
          this.sensitivity = options.sensitivity || 0.6;
          this.debugFilter = options.debugFilter;
          this.plotter = options.plotter;
          this.scheduler = options.scheduler;
          this.minThreashold = options.minThreashold || MAX_INT16 * 0.05;
          this.leftFilter = this._getBandFilter();
          this.rightFilter = this._getBandFilter();
          const analyzeBuffer = this._analyzeBuffer.bind(this);
          this.through = through(function(packet, enc, cb) {
            const stream = this;
            analyzeBuffer(stream, packet, cb);
          });
        }
        getAnalyzer() {
          return this.through;
        }
        _analyzeBuffer(stream, packet, done) {
          for (let i = 0; i < packet.length; i += 4) {
            const left = packet.readInt16LE(i);
            const filteredLeft = this.leftFilter.singleStep(left);
            if (this._isPeak(filteredLeft)) {
              let ms = Math.round(this.pos / (FREQ / 1e3));
              stream.emit("peak-detected", ms, this.bpm);
              if (this.scheduler) this.scheduler(ms);
            }
            if (this.debugFilter) {
              const right = packet.readInt16LE(i + 2);
              const filteredRight = this.rightFilter.singleStep(right);
              packet.writeInt16LE(filteredLeft, i);
              packet.writeInt16LE(filteredRight, i + 2);
            }
          }
          stream.push(packet);
          done();
        }
        _isPeak(sample) {
          let isPeak = false;
          this.threshold = Math.max(
            this.slidingWindowMax.add(sample) * this.sensitivity,
            this.minThreashold
          );
          const overThreshold = sample >= this.threshold;
          const enoughTimeSinceLastPeak = this.lastPeakDistance > MIN_PEAK_DISTANCE;
          if (overThreshold && enoughTimeSinceLastPeak) {
            this.bpm = Math.round(60 * FREQ / this.lastPeakDistance);
            this.lastPeakDistance = 0;
            return true;
          }
          if (this.plotter) {
            this.plotter({ sample, threshold: this.threshold, lastPeakDistance: this.lastPeakDistance });
          }
          this.pos++;
          this.lastPeakDistance++;
          if (this.lastPeakDistance > MAX_UINT32) this.lastPeakDistance = MAX_UINT32;
          return false;
        }
        _getBandFilter() {
          const firCalculator = new Fili.FirCoeffs();
          const firFilterCoeffs = firCalculator.lowpass({
            order: 100,
            Fs: FREQ,
            Fc: 350
          });
          return new Fili.FirFilter(firFilterCoeffs);
        }
      };
      module.exports = MusicBeatDetector;
    }
  });

  // node_modules/music-beat-detector/src/MusicGraph.js
  var require_MusicGraph = __commonJS({
    "node_modules/music-beat-detector/src/MusicGraph.js"(exports, module) {
      var FREQ = 44100;
      var MAX_INT = 32768;
      var COLORS = {
        BACKGROUND: "#3e3e40",
        SAMPLE: "#009290",
        THRESHOLD: "#bd93f9",
        PEAK: "#6bf26e",
        SECS: "#d8d8d8"
      };
      var MusicGraph = class {
        constructor(secondWidth = 100, secondHeight = 300) {
          this.renderer = renderer(secondWidth, secondHeight);
          this.pos = 1;
          this.addRecord = this.addRecord.bind(this);
        }
        getPlotter() {
          return this.addRecord;
        }
        addRecord(record) {
          this.renderer.addRecord(this.pos, record);
          this.pos++;
        }
        getSVG() {
          const root = this.renderer.getSVG();
          return stringify(root);
          function stringify({ type, children = [], ...params }) {
            const _params = Object.keys(params).map((param) => `${param}="${params[param]}"`).join(" ");
            if (children.length === 0) return `<${type} ${_params}/>`;
            const _children = Array.isArray(children) ? children.map(stringify).join("") : stringify(children);
            return `<${type} ${_params}>${_children}</${type}>`;
          }
        }
      };
      function renderer(secondWidth, secondHeight) {
        const scaleY = (y) => y / MAX_INT * secondHeight;
        const scaleX = (pos) => {
          const main = Math.floor(pos / FREQ) * secondWidth;
          const sub = Math.floor(pos % FREQ / FREQ * secondWidth);
          return main + sub;
        };
        const _samplesRenderer = samplesRenderer(scaleX, scaleY);
        const _thresholdRenderer = thresholdRenderer(scaleX, scaleY);
        const _peaksRenderer = peaksRenderer(scaleX, scaleY);
        const _secsRenderer = secsRenderer(scaleX, scaleY);
        let curPos = void 0;
        return {
          addRecord(pos, record) {
            _samplesRenderer.addRecord(pos, record);
            _thresholdRenderer.addRecord(pos, record);
            _peaksRenderer.addRecord(pos, record);
            _secsRenderer.addRecord(pos, record);
            curPos = pos;
          },
          getSVG() {
            const width = Math.ceil(curPos / FREQ) * secondWidth;
            return {
              type: "svg",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: `0 0 ${width} ${secondHeight}`,
              width,
              height: secondHeight,
              "shape-rendering": "crisp-edges",
              children: [
                {
                  type: "rect",
                  x: 0,
                  y: 0,
                  width,
                  height: secondHeight,
                  fill: COLORS.BACKGROUND
                },
                {
                  type: "g",
                  transform: `translate(0, ${secondHeight / 2}) scale(1, -1)`,
                  children: [
                    _secsRenderer.getSVG(),
                    _samplesRenderer.getSVG(),
                    _thresholdRenderer.getSVG(),
                    _peaksRenderer.getSVG()
                  ]
                }
              ]
            };
          }
        };
      }
      function samplesRenderer(scaleX, scaleY) {
        let segments = {};
        return {
          addRecord(pos, record) {
            const x = scaleX(pos);
            if (segments[x]) {
              segments[x].min = Math.min(segments[x].min, record.sample);
              segments[x].max = Math.max(segments[x].max, record.sample);
            } else {
              segments[x] = {
                min: record.sample,
                max: record.sample
              };
            }
          },
          getSVG() {
            return {
              type: "g",
              "stroke-width": 1.1,
              stroke: COLORS.SAMPLE,
              children: Object.values(segments).map(({ max, min }, index) => ({
                type: "line",
                x1: index,
                y1: scaleY(max),
                x2: index,
                y2: scaleY(min)
              }))
            };
          }
        };
      }
      function thresholdRenderer(scaleX, scaleY) {
        let curThreshold = 0;
        let curPos = 0;
        let lines = [];
        let points = `M${scaleX(0)} ${scaleY(curThreshold)} `;
        return {
          addRecord(pos, record) {
            const threshold = record.threshold;
            if (threshold === curThreshold) {
              pos++;
              return;
            }
            points += `L${scaleX(pos)} ${scaleY(threshold)} `;
            curThreshold = threshold;
            curPos = pos;
          },
          getSVG() {
            points += `L${scaleX(curPos)} ${scaleY(curThreshold)}`;
            return {
              type: "g",
              stroke: COLORS.THRESHOLD,
              fill: "none",
              children: {
                type: "path",
                d: points
              }
            };
          }
        };
      }
      function secsRenderer(scaleX, scaleY) {
        let secsPos = [];
        return {
          addRecord(pos, record) {
            if (pos % FREQ > 0) return;
            secsPos.push(pos);
          },
          getSVG() {
            return {
              type: "g",
              "stroke-width": 1,
              "stroke-opacity": 0.3,
              stroke: COLORS.SECS,
              children: secsPos.map((pos) => ({
                type: "line",
                x1: scaleX(pos),
                y1: scaleY(-MAX_INT),
                x2: scaleX(pos),
                y2: scaleY(MAX_INT)
              }))
            };
          }
        };
      }
      function peaksRenderer(scaleX, scaleY) {
        const LINE_HEIGHT = 0.8;
        let peaksPos = [];
        return {
          addRecord(pos, record) {
            if (record.lastPeakDistance > 0) return;
            peaksPos.push({ pos, sample: record.sample });
          },
          getSVG() {
            return {
              type: "g",
              "stroke-width": 0,
              transform: "translate(0, 30)",
              stroke: COLORS.PEAK,
              fill: COLORS.PEAK,
              children: peaksPos.map(({ pos, sample }) => ({
                type: "circle",
                cx: scaleX(pos),
                cy: scaleY(sample),
                r: 4
              }))
            };
          }
        };
      }
      module.exports = MusicGraph;
    }
  });

  // node_modules/music-beat-detector/src/MusicBeatScheduler.js
  var require_MusicBeatScheduler = __commonJS({
    "node_modules/music-beat-detector/src/MusicBeatScheduler.js"(exports, module) {
      var MusicBeatScheduler = class {
        constructor(cb) {
          this.scheduled = [];
          this.started = false;
          this.running = false;
          this.startTime = 0;
          this.cb = cb;
          this.schedule = this.schedule.bind(this);
        }
        getScheduler() {
          return this.schedule;
        }
        start() {
          this.started = true;
          this.startTime = Date.now();
          if (this.scheduled.length === 0) return;
          this.running = true;
          let next = Math.max(0, this.scheduled[0]);
          setTimeout(this._do.bind(this), next.pos);
        }
        schedule(pos) {
          this.scheduled.push({ pos });
          if (this.running || !this.started) return;
          const waitTimer = Math.max(0, pos - (Date.now() - this.startTime));
          setTimeout(this._do.bind(this), waitTimer);
          this.running = true;
        }
        _do() {
          const cur = this.scheduled.shift();
          this.cb(cur.pos);
          if (this.scheduled.length === 0) {
            this.running = false;
            return;
          }
          const next = this.scheduled[0];
          const waitTime = Math.max(0, next.pos - (Date.now() - this.startTime));
          setTimeout(this._do.bind(this), waitTime);
        }
      };
      module.exports = MusicBeatScheduler;
    }
  });

  // node_modules/music-beat-detector/index.js
  var require_music_beat_detector = __commonJS({
    "node_modules/music-beat-detector/index.js"(exports, module) {
      module.exports = {
        MusicBeatDetector: require_MusicBeatDetector(),
        MusicGraph: require_MusicGraph(),
        MusicBeatScheduler: require_MusicBeatScheduler()
      };
    }
  });

  // node_modules/realtime-bpm-analyzer/dist/index.esm.js
  var T = "realtime-bpm-processor";
  var g = `"use strict";(()=>{var x="realtime-bpm-processor";async function p(r,o=.2,e=.95,s=.05){let t=e;do if(t-=s,await r(t))break;while(t>o)}function y(r=.2,o=.95,e=.05){let s={},t=o;do t-=e,s[t.toString()]=[];while(t>r);return s}function v(r=.2,o=.95,e=.05){let s={},t=o;do t-=e,s[t.toString()]=0;while(t>r);return s}function m(){let o=0,e=new Float32Array(0);function s(){o=0,e=new Float32Array(0)}function t(){return o===4096}function i(){s()}return function(n){t()&&i();let a=new Float32Array(e.length+n.length);return a.set(e,0),a.set(n,e.length),e=a,o+=n.length,{isBufferFull:t(),buffer:e,bufferSize:4096}}}function B(r,o){return Math.round(r*o)}function b({audioSampleRate:r,data:o,threshold:e,offset:s=0}){let t=[],i=B(.25,r),{length:n}=o;for(let a=s;a<n;a+=1)o[a]>e&&(t.push(a),a+=i);return{peaks:t,threshold:e}}async function I({audioSampleRate:r,data:o}){let e=15,s=!1,t=.2;if(await p(async i=>s?!0:(o[i].length>e&&(s=!0,t=i),!1)),s&&t){let i=O(o[t]),n=S({audioSampleRate:r,intervalCounts:i});return{bpm:C(n),threshold:t}}return{bpm:[],threshold:t}}function C(r,o=5){return r.sort((e,s)=>s.count-e.count).splice(0,o)}function O(r){let o=[];for(let e=0;e<r.length;e++)for(let s=0;s<10;s++){let t=r[e],i=e+s,n=r[i]-t;if(!o.some(l=>l.interval===n?(l.count+=1,l.count):!1)){let l={interval:n,count:1};o.push(l)}}return o}function S({audioSampleRate:r,intervalCounts:o}){let e=[];for(let s of o){if(s.interval===0)continue;s.interval=Math.abs(s.interval);let t=60/(s.interval/r);for(;t<90;)t*=2;for(;t>180;)t/=2;if(t=Math.round(t),!e.some(n=>n.tempo===t?(n.count+=s.count,n.count):!1)){let n={tempo:t,count:s.count,confidence:0};e.push(n)}}return e}var d={minValidThreshold:()=>.2,validPeaks:()=>y(),nextIndexPeaks:()=>v(),skipIndexes:()=>1,effectiveBufferTime:()=>0},f=class{constructor(o={}){this.options={continuousAnalysis:!1,stabilizationTime:2e4,muteTimeInIndexes:1e4,debug:!1};this.minValidThreshold=d.minValidThreshold();this.validPeaks=d.validPeaks();this.nextIndexPeaks=d.nextIndexPeaks();this.skipIndexes=d.skipIndexes();this.effectiveBufferTime=d.effectiveBufferTime();this.computedStabilizationTimeInSeconds=0;Object.assign(this.options,o),this.updateComputedValues()}updateComputedValues(){this.computedStabilizationTimeInSeconds=this.options.stabilizationTime/1e3}reset(){this.minValidThreshold=d.minValidThreshold(),this.validPeaks=d.validPeaks(),this.nextIndexPeaks=d.nextIndexPeaks(),this.skipIndexes=d.skipIndexes(),this.effectiveBufferTime=d.effectiveBufferTime()}async clearValidPeaks(o){this.minValidThreshold=Number.parseFloat(o.toFixed(2)),await p(async e=>(e<o&&this.validPeaks[e]!==void 0&&(delete this.validPeaks[e],delete this.nextIndexPeaks[e]),!1))}async analyzeChunck({audioSampleRate:o,channelData:e,bufferSize:s,postMessage:t}){this.options.debug&&t({message:"ANALYZE_CHUNK",data:e}),this.effectiveBufferTime+=s;let i=s*this.skipIndexes,n=i-s;await this.findPeaks({audioSampleRate:o,channelData:e,bufferSize:s,currentMinIndex:n,currentMaxIndex:i,postMessage:t}),this.skipIndexes++;let a=await I({audioSampleRate:o,data:this.validPeaks}),{threshold:l}=a;t({message:"BPM",data:a}),this.minValidThreshold<l&&(t({message:"BPM_STABLE",data:a}),await this.clearValidPeaks(l)),this.options.continuousAnalysis&&this.effectiveBufferTime/o>this.computedStabilizationTimeInSeconds&&(this.reset(),t({message:"ANALYZER_RESETED"}))}async findPeaks({audioSampleRate:o,channelData:e,bufferSize:s,currentMinIndex:t,currentMaxIndex:i,postMessage:n}){await p(async a=>{if(this.nextIndexPeaks[a]>=i)return!1;let l=this.nextIndexPeaks[a]%s,{peaks:c,threshold:h}=b({audioSampleRate:o,data:e,threshold:a,offset:l});if(c.length===0)return!1;for(let F of c){let k=t+F;this.nextIndexPeaks[h]=k+this.options.muteTimeInIndexes,this.validPeaks[h].push(k),this.options.debug&&n({message:"VALID_PEAK",data:{threshold:h,index:k}})}return!1},this.minValidThreshold)}};var A=class extends AudioWorkletProcessor{constructor(e){super(e);this.stopped=!1;this.aggregate=m(),this.realTimeBpmAnalyzer=new f(e.processorOptions),this.port.addEventListener("message",this.onMessage.bind(this)),this.port.start()}onMessage(e){e.data.message==="RESET"&&(console.log("[processor.onMessage] RESET"),this.aggregate=m(),this.stopped=!1,this.realTimeBpmAnalyzer.reset()),e.data.message==="STOP"&&(console.log("[processor.onMessage] STOP"),this.aggregate=m(),this.stopped=!0,this.realTimeBpmAnalyzer.reset())}process(e,s,t){let i=e[0][0];if(this.stopped||!i)return!0;let{isBufferFull:n,buffer:a,bufferSize:l}=this.aggregate(i);return n&&this.realTimeBpmAnalyzer.analyzeChunck({audioSampleRate:sampleRate,channelData:a,bufferSize:l,postMessage:c=>{this.port.postMessage(c)}}).catch(c=>{console.error(c)}),!0}};registerProcessor(x,A);var L={};})();
//# sourceMappingURL=realtime-bpm-processor.js.map
`;
  async function Z(o, s) {
    let e = await q(o, T, s);
    return await o.resume(), e;
  }
  async function q(o, s, e) {
    let n = new Blob([g], { type: "application/javascript" }), t = URL.createObjectURL(n);
    return await o.audioWorklet.addModule(t), new AudioWorkletNode(o, s, { processorOptions: e });
  }

  // node_modules/web-audio-beat-detector/build/es2019/module.js
  var module_exports = {};
  __export(module_exports, {
    analyze: () => analyze,
    guess: () => guess
  });

  // node_modules/broker-factory/build/es2019/module.js
  var import_fast_unique_numbers = __toESM(require_bundle());

  // node_modules/broker-factory/build/es2019/guards/message-port.js
  var isMessagePort = (sender) => {
    return typeof sender.start === "function";
  };

  // node_modules/broker-factory/build/es2019/helpers/port-map.js
  var PORT_MAP = /* @__PURE__ */ new WeakMap();

  // node_modules/broker-factory/build/es2019/helpers/extend-broker-implementation.js
  var extendBrokerImplementation = (partialBrokerImplementation) => ({
    ...partialBrokerImplementation,
    connect: ({ call }) => {
      return async () => {
        const { port1, port2 } = new MessageChannel();
        const portId = await call("connect", { port: port1 }, [port1]);
        PORT_MAP.set(port2, portId);
        return port2;
      };
    },
    disconnect: ({ call }) => {
      return async (port) => {
        const portId = PORT_MAP.get(port);
        if (portId === void 0) {
          throw new Error("The given port is not connected.");
        }
        await call("disconnect", { portId });
      };
    },
    isSupported: ({ call }) => {
      return () => call("isSupported");
    }
  });

  // node_modules/broker-factory/build/es2019/module.js
  var ONGOING_REQUESTS = /* @__PURE__ */ new WeakMap();
  var createOrGetOngoingRequests = (sender) => {
    if (ONGOING_REQUESTS.has(sender)) {
      return ONGOING_REQUESTS.get(sender);
    }
    const ongoingRequests = /* @__PURE__ */ new Map();
    ONGOING_REQUESTS.set(sender, ongoingRequests);
    return ongoingRequests;
  };
  var createBroker = (brokerImplementation) => {
    const fullBrokerImplementation = extendBrokerImplementation(brokerImplementation);
    return (sender) => {
      const ongoingRequests = createOrGetOngoingRequests(sender);
      sender.addEventListener("message", (({ data: message }) => {
        const { id } = message;
        if (id !== null && ongoingRequests.has(id)) {
          const { reject, resolve } = ongoingRequests.get(id);
          ongoingRequests.delete(id);
          if (message.error === void 0) {
            resolve(message.result);
          } else {
            reject(new Error(message.error.message));
          }
        }
      }));
      if (isMessagePort(sender)) {
        sender.start();
      }
      const call = (method, params = null, transferables = []) => {
        return new Promise((resolve, reject) => {
          const id = (0, import_fast_unique_numbers.generateUniqueNumber)(ongoingRequests);
          ongoingRequests.set(id, { reject, resolve });
          if (params === null) {
            sender.postMessage({ id, method }, transferables);
          } else {
            sender.postMessage({ id, method, params }, transferables);
          }
        });
      };
      const notify = (method, params, transferables = []) => {
        sender.postMessage({ id: null, method, params }, transferables);
      };
      let functions = {};
      for (const [key, handler2] of Object.entries(fullBrokerImplementation)) {
        functions = { ...functions, [key]: handler2({ call, notify }) };
      }
      return { ...functions };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/module.js
  var import_automation_events2 = __toESM(require_bundle2());

  // node_modules/standardized-audio-context/build/es2019/factories/abort-error.js
  var createAbortError = () => new DOMException("", "AbortError");

  // node_modules/standardized-audio-context/build/es2019/factories/add-active-input-connection-to-audio-node.js
  var createAddActiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
      insertElementInSet2(activeInputs[input], [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-node-connections.js
  var createAddAudioNodeConnections = (audioNodeConnectionsStore) => {
    return (audioNode, audioNodeRenderer, nativeAudioNode) => {
      const activeInputs = [];
      for (let i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        activeInputs.push(/* @__PURE__ */ new Set());
      }
      audioNodeConnectionsStore.set(audioNode, {
        activeInputs,
        outputs: /* @__PURE__ */ new Set(),
        passiveInputs: /* @__PURE__ */ new WeakMap(),
        renderer: audioNodeRenderer
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-param-connections.js
  var createAddAudioParamConnections = (audioParamConnectionsStore) => {
    return (audioParam, audioParamRenderer) => {
      audioParamConnectionsStore.set(audioParam, { activeInputs: /* @__PURE__ */ new Set(), passiveInputs: /* @__PURE__ */ new WeakMap(), renderer: audioParamRenderer });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/globals.js
  var ACTIVE_AUDIO_NODE_STORE = /* @__PURE__ */ new WeakSet();
  var AUDIO_NODE_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_NODE_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_STORE = /* @__PURE__ */ new WeakMap();
  var CONTEXT_STORE = /* @__PURE__ */ new WeakMap();
  var EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
  var CYCLE_COUNTERS = /* @__PURE__ */ new WeakMap();
  var NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS = /* @__PURE__ */ new WeakMap();
  var NODE_TO_PROCESSOR_MAPS = /* @__PURE__ */ new WeakMap();

  // node_modules/standardized-audio-context/build/es2019/helpers/is-constructible.js
  var handler = {
    construct() {
      return handler;
    }
  };
  var isConstructible = (constructible) => {
    try {
      const proxy = new Proxy(constructible, handler);
      new proxy();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/split-import-statements.js
  var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/;
  var splitImportStatements = (source, url) => {
    const importStatements = [];
    let sourceWithoutImportStatements = source.replace(/^[\s]+/, "");
    let result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    while (result !== null) {
      const unresolvedUrl = result[1].slice(1, -1);
      const importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, "").replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
      importStatements.push(importStatementWithResolvedUrl);
      sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, "");
      result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    }
    return [importStatements.join(";"), sourceWithoutImportStatements];
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-worklet-module.js
  var verifyParameterDescriptors = (parameterDescriptors) => {
    if (parameterDescriptors !== void 0 && !Array.isArray(parameterDescriptors)) {
      throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
    }
  };
  var verifyProcessorCtor = (processorCtor) => {
    if (!isConstructible(processorCtor)) {
      throw new TypeError("The given value for processorCtor should be a constructor.");
    }
    if (processorCtor.prototype === null || typeof processorCtor.prototype !== "object") {
      throw new TypeError("The given value for processorCtor should have a prototype.");
    }
  };
  var createAddAudioWorkletModule = (cacheTestResult2, createNotSupportedError2, evaluateSource, exposeCurrentFrameAndCurrentTime2, fetchSource, getNativeContext2, getOrCreateBackupOfflineAudioContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport, window3) => {
    let index = 0;
    return (context, moduleURL, options = { credentials: "omit" }) => {
      const resolvedRequestsOfContext = resolvedRequests.get(context);
      if (resolvedRequestsOfContext !== void 0 && resolvedRequestsOfContext.has(moduleURL)) {
        return Promise.resolve();
      }
      const ongoingRequestsOfContext = ongoingRequests.get(context);
      if (ongoingRequestsOfContext !== void 0) {
        const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
        if (promiseOfOngoingRequest !== void 0) {
          return promiseOfOngoingRequest;
        }
      }
      const nativeContext = getNativeContext2(context);
      const promise = nativeContext.audioWorklet === void 0 ? fetchSource(moduleURL).then(([source, absoluteUrl]) => {
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const wrappedSource = `${importStatements};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${sourceWithoutImportStatements}
})})(window,'_AWGS')`;
        return evaluateSource(wrappedSource);
      }).then(() => {
        const evaluateAudioWorkletGlobalScope = window3._AWGS.pop();
        if (evaluateAudioWorkletGlobalScope === void 0) {
          throw new SyntaxError();
        }
        exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => evaluateAudioWorkletGlobalScope(class AudioWorkletProcessor {
        }, void 0, (name, processorCtor) => {
          if (name.trim() === "") {
            throw createNotSupportedError2();
          }
          const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
          if (nodeNameToProcessorConstructorMap !== void 0) {
            if (nodeNameToProcessorConstructorMap.has(name)) {
              throw createNotSupportedError2();
            }
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            nodeNameToProcessorConstructorMap.set(name, processorCtor);
          } else {
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(nativeContext, /* @__PURE__ */ new Map([[name, processorCtor]]));
          }
        }, nativeContext.sampleRate, void 0, void 0));
      }) : Promise.all([
        fetchSource(moduleURL),
        Promise.resolve(cacheTestResult2(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
      ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
        const currentIndex = index + 1;
        index = currentIndex;
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const patchedAudioWorkletProcessor = isSupportingPostMessage ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}";
        const memberDefinition = isSupportingPostMessage ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));";
        const bufferRegistration = isSupportingPostMessage ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));";
        const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${currentIndex}',class extends AudioWorkletProcessor{process(){return !1}})`;
        const blob = new Blob([wrappedSource], { type: "application/javascript; charset=utf-8" });
        const url = URL.createObjectURL(blob);
        return nativeContext.audioWorklet.addModule(url, options).then(() => {
          if (isNativeOfflineAudioContext2(nativeContext)) {
            return nativeContext;
          }
          const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext2(nativeContext);
          return backupOfflineAudioContext.audioWorklet.addModule(url, options).then(() => backupOfflineAudioContext);
        }).then((nativeContextOrBackupOfflineAudioContext) => {
          if (nativeAudioWorkletNodeConstructor2 === null) {
            throw new SyntaxError();
          }
          try {
            new nativeAudioWorkletNodeConstructor2(nativeContextOrBackupOfflineAudioContext, `__sac${currentIndex}`);
          } catch {
            throw new SyntaxError();
          }
        }).finally(() => URL.revokeObjectURL(url));
      });
      if (ongoingRequestsOfContext === void 0) {
        ongoingRequests.set(context, /* @__PURE__ */ new Map([[moduleURL, promise]]));
      } else {
        ongoingRequestsOfContext.set(moduleURL, promise);
      }
      promise.then(() => {
        const updatedResolvedRequestsOfContext = resolvedRequests.get(context);
        if (updatedResolvedRequestsOfContext === void 0) {
          resolvedRequests.set(context, /* @__PURE__ */ new Set([moduleURL]));
        } else {
          updatedResolvedRequestsOfContext.add(moduleURL);
        }
      }).finally(() => {
        const updatedOngoingRequestsOfContext = ongoingRequests.get(context);
        if (updatedOngoingRequestsOfContext !== void 0) {
          updatedOngoingRequestsOfContext.delete(moduleURL);
        }
      });
      return promise;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-value-for-key.js
  var getValueForKey = (map, key) => {
    const value = map.get(key);
    if (value === void 0) {
      throw new Error("A value with the given key could not be found.");
    }
    return value;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/pick-element-from-set.js
  var pickElementFromSet = (set, predicate) => {
    const matchingElements = Array.from(set).filter(predicate);
    if (matchingElements.length > 1) {
      throw Error("More than one element was found.");
    }
    if (matchingElements.length === 0) {
      throw Error("No element was found.");
    }
    const [matchingElement] = matchingElements;
    set.delete(matchingElement);
    return matchingElement;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-node.js
  var deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-event-listeners-of-audio-node.js
  var getEventListenersOfAudioNode = (audioNode) => {
    return getValueForKey(EVENT_LISTENERS, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-active.js
  var setInternalStateToActive = (audioNode) => {
    if (ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is already stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.add(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(true));
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-worklet-node.js
  var isAudioWorkletNode = (audioNode) => {
    return "port" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive.js
  var setInternalStateToPassive = (audioNode) => {
    if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is not stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive-when-necessary.js
  var setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-connection-to-audio-node.js
  var createAddConnectionToAudioNode = (addActiveInputConnectionToAudioNode2, addPassiveInputConnectionToAudioNode2, connectNativeAudioNodeToNativeAudioNode2, deleteActiveInputConnectionToAudioNode2, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getAudioNodeTailTime2, getEventListenersOfAudioNode2, getNativeAudioNode2, insertElementInSet2, isActiveAudioNode2, isPartOfACycle2, isPassiveAudioNode2) => {
    const tailTimeTimeoutIds = /* @__PURE__ */ new WeakMap();
    return (source, destination, output, input, isOffline) => {
      const { activeInputs, passiveInputs } = getAudioNodeConnections2(destination);
      const { outputs } = getAudioNodeConnections2(source);
      const eventListeners = getEventListenersOfAudioNode2(source);
      const eventListener = (isActive) => {
        const nativeDestinationAudioNode = getNativeAudioNode2(destination);
        const nativeSourceAudioNode = getNativeAudioNode2(source);
        if (isActive) {
          const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
          addActiveInputConnectionToAudioNode2(activeInputs, source, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          if (isPassiveAudioNode2(destination)) {
            setInternalStateToActive(destination);
          }
        } else {
          const partialConnection = deleteActiveInputConnectionToAudioNode2(activeInputs, source, output, input);
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          const tailTime = getAudioNodeTailTime2(destination);
          if (tailTime === 0) {
            if (isActiveAudioNode2(destination)) {
              setInternalStateToPassiveWhenNecessary(destination, activeInputs);
            }
          } else {
            const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);
            if (tailTimeTimeoutId !== void 0) {
              clearTimeout(tailTimeTimeoutId);
            }
            tailTimeTimeoutIds.set(destination, setTimeout(() => {
              if (isActiveAudioNode2(destination)) {
                setInternalStateToPassiveWhenNecessary(destination, activeInputs);
              }
            }, tailTime * 1e3));
          }
        }
      };
      if (insertElementInSet2(outputs, [destination, output, input], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input, true)) {
        eventListeners.add(eventListener);
        if (isActiveAudioNode2(source)) {
          addActiveInputConnectionToAudioNode2(activeInputs, source, [output, input, eventListener], true);
        } else {
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, [source, output, eventListener], true);
        }
        return true;
      }
      return false;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-passive-input-connection-to-audio-node.js
  var createAddPassiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
      const passiveInputConnections = passiveInputs.get(source);
      if (passiveInputConnections === void 0) {
        passiveInputs.set(source, /* @__PURE__ */ new Set([[output, input, eventListener]]));
      } else {
        insertElementInSet2(passiveInputConnections, [output, input, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input, ignoreDuplicates);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-silent-connection.js
  var createAddSilentConnection = (createNativeGainNode2) => {
    return (nativeContext, nativeAudioScheduledSourceNode) => {
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnect = () => {
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnect);
        nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      nativeAudioScheduledSourceNode.addEventListener("ended", disconnect);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-unrendered-audio-worklet-node.js
  var createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).add(audioWorkletNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/analyser-node-constructor.js
  var DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
  };
  var createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer2, createIndexSizeError2, createNativeAnalyserNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class AnalyserNode extends audionNodeConstructor {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
        const nativeAnalyserNode = createNativeAnalyserNode2(nativeContext, mergedOptions);
        const analyserNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createAnalyserNodeRenderer2() : null;
        super(context, false, nativeAnalyserNode, analyserNodeRenderer);
        this._nativeAnalyserNode = nativeAnalyserNode;
      }
      get fftSize() {
        return this._nativeAnalyserNode.fftSize;
      }
      set fftSize(value) {
        this._nativeAnalyserNode.fftSize = value;
      }
      get frequencyBinCount() {
        return this._nativeAnalyserNode.frequencyBinCount;
      }
      get maxDecibels() {
        return this._nativeAnalyserNode.maxDecibels;
      }
      set maxDecibels(value) {
        const maxDecibels = this._nativeAnalyserNode.maxDecibels;
        this._nativeAnalyserNode.maxDecibels = value;
        if (!(value > this._nativeAnalyserNode.minDecibels)) {
          this._nativeAnalyserNode.maxDecibels = maxDecibels;
          throw createIndexSizeError2();
        }
      }
      get minDecibels() {
        return this._nativeAnalyserNode.minDecibels;
      }
      set minDecibels(value) {
        const minDecibels = this._nativeAnalyserNode.minDecibels;
        this._nativeAnalyserNode.minDecibels = value;
        if (!(this._nativeAnalyserNode.maxDecibels > value)) {
          this._nativeAnalyserNode.minDecibels = minDecibels;
          throw createIndexSizeError2();
        }
      }
      get smoothingTimeConstant() {
        return this._nativeAnalyserNode.smoothingTimeConstant;
      }
      set smoothingTimeConstant(value) {
        this._nativeAnalyserNode.smoothingTimeConstant = value;
      }
      getByteFrequencyData(array) {
        this._nativeAnalyserNode.getByteFrequencyData(array);
      }
      getByteTimeDomainData(array) {
        this._nativeAnalyserNode.getByteTimeDomainData(array);
      }
      getFloatFrequencyData(array) {
        this._nativeAnalyserNode.getFloatFrequencyData(array);
      }
      getFloatTimeDomainData(array) {
        this._nativeAnalyserNode.getFloatTimeDomainData(array);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-owned-by-context.js
  var isOwnedByContext = (nativeAudioNode, nativeContext) => {
    return nativeAudioNode.context === nativeContext;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/analyser-node-renderer-factory.js
  var createAnalyserNodeRendererFactory = (createNativeAnalyserNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAnalyserNodes = /* @__PURE__ */ new WeakMap();
      const createAnalyserNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAnalyserNode = getNativeAudioNode2(proxy);
        const nativeAnalyserNodeIsOwnedByContext = isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext);
        if (!nativeAnalyserNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAnalyserNode.channelCount,
            channelCountMode: nativeAnalyserNode.channelCountMode,
            channelInterpretation: nativeAnalyserNode.channelInterpretation,
            fftSize: nativeAnalyserNode.fftSize,
            maxDecibels: nativeAnalyserNode.maxDecibels,
            minDecibels: nativeAnalyserNode.minDecibels,
            smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
          };
          nativeAnalyserNode = createNativeAnalyserNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
        return nativeAnalyserNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAnalyserNode !== void 0) {
            return Promise.resolve(renderedNativeAnalyserNode);
          }
          return createAnalyserNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support.js
  var testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
    try {
      nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/index-size-error.js
  var createIndexSizeError = () => new DOMException("", "IndexSizeError");

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-get-channel-data-method.js
  var wrapAudioBufferGetChannelDataMethod = (audioBuffer) => {
    audioBuffer.getChannelData = /* @__PURE__ */ ((getChannelData) => {
      return (channel) => {
        try {
          return getChannelData.call(audioBuffer, channel);
        } catch (err) {
          if (err.code === 12) {
            throw createIndexSizeError();
          }
          throw err;
        }
      };
    })(audioBuffer.getChannelData);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-constructor.js
  var DEFAULT_OPTIONS2 = {
    numberOfChannels: 1
  };
  var createAudioBufferConstructor = (audioBufferStore2, cacheTestResult2, createNotSupportedError2, nativeAudioBufferConstructor2, nativeOfflineAudioContextConstructor2, testNativeAudioBufferConstructorSupport, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    let nativeOfflineAudioContext = null;
    return class AudioBuffer {
      constructor(options) {
        if (nativeOfflineAudioContextConstructor2 === null) {
          throw new Error("Missing the native OfflineAudioContext constructor.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS2, ...options };
        if (nativeOfflineAudioContext === null) {
          nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
        }
        const audioBuffer = nativeAudioBufferConstructor2 !== null && cacheTestResult2(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor2({ length, numberOfChannels, sampleRate }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate);
        if (audioBuffer.numberOfChannels === 0) {
          throw createNotSupportedError2();
        }
        if (typeof audioBuffer.copyFromChannel !== "function") {
          wrapAudioBufferCopyChannelMethods2(audioBuffer);
          wrapAudioBufferGetChannelDataMethod(audioBuffer);
        } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer))) {
          wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
        }
        audioBufferStore2.add(audioBuffer);
        return audioBuffer;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === AudioBuffer.prototype || audioBufferStore2.has(instance);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/constants.js
  var MOST_NEGATIVE_SINGLE_FLOAT = -34028234663852886e22;
  var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

  // node_modules/standardized-audio-context/build/es2019/helpers/is-active-audio-node.js
  var isActiveAudioNode = (audioNode) => ACTIVE_AUDIO_NODE_STORE.has(audioNode);

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-constructor.js
  var DEFAULT_OPTIONS3 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    // Bug #149: Safari does not yet support the detune AudioParam.
    loop: false,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
  };
  var createAudioBufferSourceNodeConstructor = (audioNodeConstructor2, createAudioBufferSourceNodeRenderer2, createAudioParam2, createInvalidStateError2, createNativeAudioBufferSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class AudioBufferSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS3, ...options };
        const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer2() : null;
        super(context, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
        this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
        this._isBufferNullified = false;
        this._isBufferSet = mergedOptions.buffer !== null;
        this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
        this._onended = null;
        this._playbackRate = createAudioParam2(this, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(value) {
        this._nativeAudioBufferSourceNode.buffer = value;
        if (value !== null) {
          if (this._isBufferSet) {
            throw createInvalidStateError2();
          }
          this._isBufferSet = true;
        }
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(value) {
        this._nativeAudioBufferSourceNode.loop = value;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(value) {
        this._nativeAudioBufferSourceNode.loopEnd = value;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(value) {
        this._nativeAudioBufferSourceNode.loopStart = value;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioBufferSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(when = 0, offset = 0, duration) {
        this._nativeAudioBufferSourceNode.start(when, offset, duration);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.start = duration === void 0 ? [when, offset] : [when, offset, duration];
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeAudioBufferSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeAudioBufferSourceNode.stop(when);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-renderer-factory.js
  var createAudioBufferSourceNodeRendererFactory = (connectAudioParam2, createNativeAudioBufferSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioBufferSourceNodes = /* @__PURE__ */ new WeakMap();
      let start = null;
      let stop = null;
      const createAudioBufferSourceNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioBufferSourceNode = getNativeAudioNode2(proxy);
        const nativeAudioBufferSourceNodeIsOwnedByContext = isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          const options = {
            buffer: nativeAudioBufferSourceNode.buffer,
            channelCount: nativeAudioBufferSourceNode.channelCount,
            channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
            channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
            // Bug #149: Safari does not yet support the detune AudioParam.
            loop: nativeAudioBufferSourceNode.loop,
            loopEnd: nativeAudioBufferSourceNode.loopEnd,
            loopStart: nativeAudioBufferSourceNode.loopStart,
            playbackRate: nativeAudioBufferSourceNode.playbackRate.value
          };
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, options);
          if (start !== null) {
            nativeAudioBufferSourceNode.start(...start);
          }
          if (stop !== null) {
            nativeAudioBufferSourceNode.stop(stop);
          }
        }
        renderedNativeAudioBufferSourceNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        return nativeAudioBufferSourceNode;
      };
      return {
        set start(value) {
          start = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioBufferSourceNode = renderedNativeAudioBufferSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioBufferSourceNode !== void 0) {
            return Promise.resolve(renderedNativeAudioBufferSourceNode);
          }
          return createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-buffer-source-node.js
  var isAudioBufferSourceNode = (audioNode) => {
    return "playbackRate" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/biquad-filter-node.js
  var isBiquadFilterNode = (audioNode) => {
    return "frequency" in audioNode && "gain" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/constant-source-node.js
  var isConstantSourceNode = (audioNode) => {
    return "offset" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/gain-node.js
  var isGainNode = (audioNode) => {
    return !("frequency" in audioNode) && "gain" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/oscillator-node.js
  var isOscillatorNode = (audioNode) => {
    return "detune" in audioNode && "frequency" in audioNode && !("gain" in audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/guards/stereo-panner-node.js
  var isStereoPannerNode = (audioNode) => {
    return "pan" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-node-connections.js
  var getAudioNodeConnections = (audioNode) => {
    return getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-param-connections.js
  var getAudioParamConnections = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_CONNECTIONS_STORE, audioParam);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/deactivate-active-audio-node-input-connections.js
  var deactivateActiveAudioNodeInputConnections = (audioNode, trace) => {
    const { activeInputs } = getAudioNodeConnections(audioNode);
    activeInputs.forEach((connections) => connections.forEach(([source]) => {
      if (!trace.includes(audioNode)) {
        deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
      }
    }));
    const audioParams = isAudioBufferSourceNode(audioNode) ? [
      // Bug #149: Safari does not yet support the detune AudioParam.
      audioNode.playbackRate
    ] : isAudioWorkletNode(audioNode) ? Array.from(audioNode.parameters.values()) : isBiquadFilterNode(audioNode) ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain] : isConstantSourceNode(audioNode) ? [audioNode.offset] : isGainNode(audioNode) ? [audioNode.gain] : isOscillatorNode(audioNode) ? [audioNode.detune, audioNode.frequency] : isStereoPannerNode(audioNode) ? [audioNode.pan] : [];
    for (const audioParam of audioParams) {
      const audioParamConnections = getAudioParamConnections(audioParam);
      if (audioParamConnections !== void 0) {
        audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
      }
    }
    if (isActiveAudioNode(audioNode)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/deactivate-audio-graph.js
  var deactivateAudioGraph = (context) => {
    deactivateActiveAudioNodeInputConnections(context.destination, []);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-valid-latency-hint.js
  var isValidLatencyHint = (latencyHint) => {
    return latencyHint === void 0 || typeof latencyHint === "number" || typeof latencyHint === "string" && (latencyHint === "balanced" || latencyHint === "interactive" || latencyHint === "playback");
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-context-constructor.js
  var createAudioContextConstructor = (baseAudioContextConstructor2, createInvalidStateError2, createNotSupportedError2, createUnknownError2, mediaElementAudioSourceNodeConstructor2, mediaStreamAudioDestinationNodeConstructor2, mediaStreamAudioSourceNodeConstructor2, mediaStreamTrackAudioSourceNodeConstructor2, nativeAudioContextConstructor2) => {
    return class AudioContext extends baseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : (
          /*
           * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
           * ScriptProcessorNode.
           */
          Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate
        );
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      createMediaElementSource(mediaElement) {
        return new mediaElementAudioSourceNodeConstructor2(this, { mediaElement });
      }
      createMediaStreamDestination() {
        return new mediaStreamAudioDestinationNodeConstructor2(this);
      }
      createMediaStreamSource(mediaStream) {
        return new mediaStreamAudioSourceNodeConstructor2(this, { mediaStream });
      }
      createMediaStreamTrackSource(mediaStreamTrack) {
        return new mediaStreamTrackAudioSourceNodeConstructor2(this, { mediaStreamTrack });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-constructor.js
  var createAudioDestinationNodeConstructor = (audioNodeConstructor2, createAudioDestinationNodeRenderer2, createIndexSizeError2, createInvalidStateError2, createNativeAudioDestinationNode, getNativeContext2, isNativeOfflineAudioContext2, renderInputsOfAudioNode2) => {
    return class AudioDestinationNode extends audioNodeConstructor2 {
      constructor(context, channelCount) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
        const audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer2(renderInputsOfAudioNode2) : null;
        super(context, false, nativeAudioDestinationNode, audioDestinationNodeRenderer);
        this._isNodeOfNativeOfflineAudioContext = isOffline;
        this._nativeAudioDestinationNode = nativeAudioDestinationNode;
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        if (value > this._nativeAudioDestinationNode.maxChannelCount) {
          throw createIndexSizeError2();
        }
        this._nativeAudioDestinationNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        this._nativeAudioDestinationNode.channelCountMode = value;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-renderer-factory.js
  var createAudioDestinationNodeRenderer = (renderInputsOfAudioNode2) => {
    const renderedNativeAudioDestinationNodes = /* @__PURE__ */ new WeakMap();
    const createAudioDestinationNode = async (proxy, nativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
      renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
      await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
      return nativeAudioDestinationNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioDestinationNode !== void 0) {
          return Promise.resolve(renderedNativeAudioDestinationNode);
        }
        return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-listener-factory.js
  var createAudioListenerFactory = (createAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeScriptProcessorNode2, createNotSupportedError2, getFirstSample2, isNativeOfflineAudioContext2, overwriteAccessors2) => {
    return (context, nativeContext) => {
      const nativeListener = nativeContext.listener;
      const createFakeAudioParams = () => {
        const buffer = new Float32Array(1);
        const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 9
        });
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        let isScriptProcessorNodeCreated = false;
        let lastOrientation = [0, 0, -1, 0, 1, 0];
        let lastPosition = [0, 0, 0];
        const createScriptProcessorNode = () => {
          if (isScriptProcessorNodeCreated) {
            return;
          }
          isScriptProcessorNodeCreated = true;
          const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 9, 0);
          scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
            const orientation = [
              getFirstSample2(inputBuffer, buffer, 0),
              getFirstSample2(inputBuffer, buffer, 1),
              getFirstSample2(inputBuffer, buffer, 2),
              getFirstSample2(inputBuffer, buffer, 3),
              getFirstSample2(inputBuffer, buffer, 4),
              getFirstSample2(inputBuffer, buffer, 5)
            ];
            if (orientation.some((value, index) => value !== lastOrientation[index])) {
              nativeListener.setOrientation(...orientation);
              lastOrientation = orientation;
            }
            const positon = [
              getFirstSample2(inputBuffer, buffer, 6),
              getFirstSample2(inputBuffer, buffer, 7),
              getFirstSample2(inputBuffer, buffer, 8)
            ];
            if (positon.some((value, index) => value !== lastPosition[index])) {
              nativeListener.setPosition(...positon);
              lastPosition = positon;
            }
          };
          channelMergerNode.connect(scriptProcessorNode);
        };
        const createSetOrientation = (index) => (value) => {
          if (value !== lastOrientation[index]) {
            lastOrientation[index] = value;
            nativeListener.setOrientation(...lastOrientation);
          }
        };
        const createSetPosition = (index) => (value) => {
          if (value !== lastPosition[index]) {
            lastPosition[index] = value;
            nativeListener.setPosition(...lastPosition);
          }
        };
        const createFakeAudioParam = (input, initialValue, setValue) => {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: initialValue
          });
          constantSourceNode.connect(channelMergerNode, 0, input);
          constantSourceNode.start();
          Object.defineProperty(constantSourceNode.offset, "defaultValue", {
            get() {
              return initialValue;
            }
          });
          const audioParam = createAudioParam2({ context }, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
          overwriteAccessors2(audioParam, "value", (get) => () => get.call(audioParam), (set) => (value) => {
            try {
              set.call(audioParam, value);
            } catch (err) {
              if (err.code !== 9) {
                throw err;
              }
            }
            createScriptProcessorNode();
            if (isOffline) {
              setValue(value);
            }
          });
          audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelAndHoldAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelAndHoldAtTime);
          audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelScheduledValues.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelScheduledValues);
          audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = exponentialRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.exponentialRampToValueAtTime);
          audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = linearRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.linearRampToValueAtTime);
          audioParam.setTargetAtTime = ((setTargetAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setTargetAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setTargetAtTime);
          audioParam.setValueAtTime = ((setValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueAtTime);
          audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueCurveAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueCurveAtTime);
          return audioParam;
        };
        return {
          forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
          forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
          forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
          positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
          positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
          positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
          upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
          upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
          upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
        };
      };
      const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } = nativeListener.forwardX === void 0 ? createFakeAudioParams() : nativeListener;
      return {
        get forwardX() {
          return forwardX;
        },
        get forwardY() {
          return forwardY;
        },
        get forwardZ() {
          return forwardZ;
        },
        get positionX() {
          return positionX;
        },
        get positionY() {
          return positionY;
        },
        get positionZ() {
          return positionZ;
        },
        get upX() {
          return upX;
        },
        get upY() {
          return upY;
        },
        get upZ() {
          return upZ;
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-node.js
  var isAudioNode = (audioNodeOrAudioParam) => {
    return "context" in audioNodeOrAudioParam;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-node-output-connection.js
  var isAudioNodeOutputConnection = (outputConnection) => {
    return isAudioNode(outputConnection[0]);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/insert-element-in-set.js
  var insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
    for (const lmnt of set) {
      if (predicate(lmnt)) {
        if (ignoreDuplicates) {
          return false;
        }
        throw Error("The set contains at least one similar element.");
      }
    }
    set.add(element);
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/add-active-input-connection-to-audio-param.js
  var addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
    insertElementInSet(activeInputs, [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/add-passive-input-connection-to-audio-param.js
  var addPassiveInputConnectionToAudioParam = (passiveInputs, [source, output, eventListener], ignoreDuplicates) => {
    const passiveInputConnections = passiveInputs.get(source);
    if (passiveInputConnections === void 0) {
      passiveInputs.set(source, /* @__PURE__ */ new Set([[output, eventListener]]));
    } else {
      insertElementInSet(passiveInputConnections, [output, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output, ignoreDuplicates);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/guards/native-audio-node-faker.js
  var isNativeAudioNodeFaker = (nativeAudioNodeOrNativeAudioNodeFaker) => {
    return "inputs" in nativeAudioNodeOrNativeAudioNodeFaker;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/connect-native-audio-node-to-native-audio-node.js
  var connectNativeAudioNodeToNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      const fakeNativeDestinationAudioNode = nativeDestinationAudioNode.inputs[input];
      nativeSourceAudioNode.connect(fakeNativeDestinationAudioNode, output, 0);
      return [fakeNativeDestinationAudioNode, output, 0];
    }
    nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);
    return [nativeDestinationAudioNode, output, input];
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection.js
  var deleteActiveInputConnection = (activeInputConnections, source, output) => {
    for (const activeInputConnection of activeInputConnections) {
      if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
        activeInputConnections.delete(activeInputConnection);
        return activeInputConnection;
      }
    }
    return null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection-to-audio-param.js
  var deleteActiveInputConnectionToAudioParam = (activeInputs, source, output) => {
    return pickElementFromSet(activeInputs, (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-event-listeners-of-audio-node.js
  var deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);
    if (!eventListeners.delete(eventListener)) {
      throw new Error("Missing the expected event listener.");
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-param.js
  var deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/disconnect-native-audio-node-from-native-audio-node.js
  var disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
    } else {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-node.js
  var getNativeAudioNode = (audioNode) => {
    return getValueForKey(AUDIO_NODE_STORE, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-param.js
  var getNativeAudioParam = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-part-of-a-cycle.js
  var isPartOfACycle = (audioNode) => {
    return CYCLE_COUNTERS.has(audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-passive-audio-node.js
  var isPassiveAudioNode = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-node-disconnect-method-support.js
  var testAudioNodeDisconnectMethodSupport = (nativeAudioContext, nativeAudioWorkletNodeConstructor2) => {
    return new Promise((resolve) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        resolve(true);
      } else {
        const analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
        const dummy = nativeAudioContext.createGain();
        const ones = nativeAudioContext.createBuffer(1, 2, 44100);
        const channelData = ones.getChannelData(0);
        channelData[0] = 1;
        channelData[1] = 1;
        const source = nativeAudioContext.createBufferSource();
        source.buffer = ones;
        source.loop = true;
        source.connect(analyzer).connect(nativeAudioContext.destination);
        source.connect(dummy);
        source.disconnect(dummy);
        analyzer.onaudioprocess = (event) => {
          const chnnlDt = event.inputBuffer.getChannelData(0);
          if (Array.prototype.some.call(chnnlDt, (sample) => sample === 1)) {
            resolve(true);
          } else {
            resolve(false);
          }
          source.stop();
          analyzer.onaudioprocess = null;
          source.disconnect(analyzer);
          analyzer.disconnect(nativeAudioContext.destination);
        };
        source.start();
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/visit-each-audio-node-once.js
  var visitEachAudioNodeOnce = (cycles, visitor) => {
    const counts = /* @__PURE__ */ new Map();
    for (const cycle of cycles) {
      for (const audioNode of cycle) {
        const count = counts.get(audioNode);
        counts.set(audioNode, count === void 0 ? 1 : count + 1);
      }
    }
    counts.forEach((count, audioNode) => visitor(audioNode, count));
  };

  // node_modules/standardized-audio-context/build/es2019/guards/native-audio-node.js
  var isNativeAudioNode = (nativeAudioNodeOrAudioParam) => {
    return "context" in nativeAudioNodeOrAudioParam;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-node-disconnect-method.js
  var wrapAudioNodeDisconnectMethod = (nativeAudioNode) => {
    const connections = /* @__PURE__ */ new Map();
    nativeAudioNode.connect = /* @__PURE__ */ ((connect) => {
      return (destination, output = 0, input = 0) => {
        const returnValue = isNativeAudioNode(destination) ? connect(destination, output, input) : connect(destination, output);
        const connectionsToDestination = connections.get(destination);
        if (connectionsToDestination === void 0) {
          connections.set(destination, [{ input, output }]);
        } else {
          if (connectionsToDestination.every((connection) => connection.input !== input || connection.output !== output)) {
            connectionsToDestination.push({ input, output });
          }
        }
        return returnValue;
      };
    })(nativeAudioNode.connect.bind(nativeAudioNode));
    nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect) => {
      return (destinationOrOutput, output, input) => {
        disconnect.apply(nativeAudioNode);
        if (destinationOrOutput === void 0) {
          connections.clear();
        } else if (typeof destinationOrOutput === "number") {
          for (const [destination, connectionsToDestination] of connections) {
            const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== destinationOrOutput);
            if (filteredConnections.length === 0) {
              connections.delete(destination);
            } else {
              connections.set(destination, filteredConnections);
            }
          }
        } else if (connections.has(destinationOrOutput)) {
          if (output === void 0) {
            connections.delete(destinationOrOutput);
          } else {
            const connectionsToDestination = connections.get(destinationOrOutput);
            if (connectionsToDestination !== void 0) {
              const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== output && (connection.input !== input || input === void 0));
              if (filteredConnections.length === 0) {
                connections.delete(destinationOrOutput);
              } else {
                connections.set(destinationOrOutput, filteredConnections);
              }
            }
          }
        }
        for (const [destination, connectionsToDestination] of connections) {
          connectionsToDestination.forEach((connection) => {
            if (isNativeAudioNode(destination)) {
              nativeAudioNode.connect(destination, connection.output, connection.input);
            } else {
              nativeAudioNode.connect(destination, connection.output);
            }
          });
        }
      };
    })(nativeAudioNode.disconnect);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-node-constructor.js
  var addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode(source);
    const eventListener = (isActive) => {
      const nativeAudioNode = getNativeAudioNode(source);
      const nativeAudioParam = getNativeAudioParam(destination);
      if (isActive) {
        const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
        addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.connect(nativeAudioParam, output);
        }
      } else {
        const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
        addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.disconnect(nativeAudioParam, output);
        }
      }
    };
    if (insertElementInSet(outputs, [destination, output], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output, true)) {
      eventListeners.add(eventListener);
      if (isActiveAudioNode(source)) {
        addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
      } else {
        addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
      }
      return true;
    }
    return false;
  };
  var deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
      return [passiveInputConnection[2], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputConnectionOfAudioParam = (source, destination, output) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
      return [passiveInputConnection[1], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
    const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
      }
    }
    if (isActiveAudioNode(destination)) {
      const { activeInputs } = getAudioNodeConnections(destination);
      setInternalStateToPassiveWhenNecessary(destination, activeInputs);
    }
  };
  var deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
    const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
      }
    }
  };
  var deleteAnyConnection = (source, isOffline) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      destinations.push(outputConnection[0]);
    }
    audioNodeConnectionsOfSource.outputs.clear();
    return destinations;
  };
  var deleteConnectionAtOutput = (source, isOffline, output) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (outputConnection[1] === output) {
        if (isAudioNodeOutputConnection(outputConnection)) {
          deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        } else {
          deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        destinations.push(outputConnection[0]);
        audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      }
    }
    return destinations;
  };
  var deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    return Array.from(audioNodeConnectionsOfSource.outputs).filter((outputConnection) => outputConnection[0] === destination && (output === void 0 || outputConnection[1] === output) && (input === void 0 || outputConnection[2] === input)).map((outputConnection) => {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      return outputConnection[0];
    });
  };
  var createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, cacheTestResult2, createIncrementCycleCounter, createIndexSizeError2, createInvalidAccessError2, createNotSupportedError2, decrementCycleCounter, detectCycles, eventTargetConstructor2, getNativeContext2, isNativeAudioContext2, isNativeAudioNode3, isNativeAudioParam2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2) => {
    return class AudioNode extends eventTargetConstructor2 {
      constructor(context, isActive, nativeAudioNode, audioNodeRenderer) {
        super(nativeAudioNode);
        this._context = context;
        this._nativeAudioNode = nativeAudioNode;
        const nativeContext = getNativeContext2(context);
        if (isNativeAudioContext2(nativeContext) && true !== cacheTestResult2(testAudioNodeDisconnectMethodSupport, () => {
          return testAudioNodeDisconnectMethodSupport(nativeContext, nativeAudioWorkletNodeConstructor2);
        })) {
          wrapAudioNodeDisconnectMethod(nativeAudioNode);
        }
        AUDIO_NODE_STORE.set(this, nativeAudioNode);
        EVENT_LISTENERS.set(this, /* @__PURE__ */ new Set());
        if (context.state !== "closed" && isActive) {
          setInternalStateToActive(this);
        }
        addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(value) {
        this._nativeAudioNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(value) {
        this._nativeAudioNode.channelCountMode = value;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(value) {
        this._nativeAudioNode.channelInterpretation = value;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      // tslint:disable-next-line:invalid-void
      connect(destination, output = 0, input = 0) {
        if (output < 0 || output >= this._nativeAudioNode.numberOfOutputs) {
          throw createIndexSizeError2();
        }
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (isNativeAudioNode3(destination) || isNativeAudioParam2(destination)) {
          throw createInvalidAccessError2();
        }
        if (isAudioNode(destination)) {
          const nativeDestinationAudioNode = getNativeAudioNode(destination);
          try {
            const connection = connectNativeAudioNodeToNativeAudioNode(this._nativeAudioNode, nativeDestinationAudioNode, output, input);
            const isPassive = isPassiveAudioNode(this);
            if (isOffline || isPassive) {
              this._nativeAudioNode.disconnect(...connection);
            }
            if (this.context.state !== "closed" && !isPassive && isPassiveAudioNode(destination)) {
              setInternalStateToActive(destination);
            }
          } catch (err) {
            if (err.code === 12) {
              throw createInvalidAccessError2();
            }
            throw err;
          }
          const isNewConnectionToAudioNode = addConnectionToAudioNode(this, destination, output, input, isOffline);
          if (isNewConnectionToAudioNode) {
            const cycles = detectCycles([this], destination);
            visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
          }
          return destination;
        }
        const nativeAudioParam = getNativeAudioParam(destination);
        if (nativeAudioParam.name === "playbackRate" && nativeAudioParam.maxValue === 1024) {
          throw createNotSupportedError2();
        }
        try {
          this._nativeAudioNode.connect(nativeAudioParam, output);
          if (isOffline || isPassiveAudioNode(this)) {
            this._nativeAudioNode.disconnect(nativeAudioParam, output);
          }
        } catch (err) {
          if (err.code === 12) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
        if (isNewConnectionToAudioParam) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
        }
      }
      disconnect(destinationOrOutput, output, input) {
        let destinations;
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (destinationOrOutput === void 0) {
          destinations = deleteAnyConnection(this, isOffline);
        } else if (typeof destinationOrOutput === "number") {
          if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
        } else {
          if (output !== void 0 && (output < 0 || output >= this.numberOfOutputs)) {
            throw createIndexSizeError2();
          }
          if (isAudioNode(destinationOrOutput) && input !== void 0 && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
          if (destinations.length === 0) {
            throw createInvalidAccessError2();
          }
        }
        for (const destination of destinations) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, decrementCycleCounter);
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-param-factory.js
  var import_automation_events = __toESM(require_bundle2());
  var createAudioParamFactory = (addAudioParamConnections, audioParamAudioNodeStore2, audioParamStore, createAudioParamRenderer2, createCancelAndHoldAutomationEvent2, createCancelScheduledValuesAutomationEvent2, createExponentialRampToValueAutomationEvent2, createLinearRampToValueAutomationEvent2, createSetTargetAutomationEvent2, createSetValueAutomationEvent2, createSetValueCurveAutomationEvent2, nativeAudioContextConstructor2, setValueAtTimeUntilPossible2) => {
    return (audioNode, isAudioParamOfOfflineAudioContext, nativeAudioParam, maxValue = null, minValue = null) => {
      const defaultValue = nativeAudioParam.value;
      const automationEventList = new import_automation_events.AutomationEventList(defaultValue);
      const audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer2(automationEventList) : null;
      const audioParam = {
        get defaultValue() {
          return defaultValue;
        },
        get maxValue() {
          return maxValue === null ? nativeAudioParam.maxValue : maxValue;
        },
        get minValue() {
          return minValue === null ? nativeAudioParam.minValue : minValue;
        },
        get value() {
          return nativeAudioParam.value;
        },
        set value(value) {
          nativeAudioParam.value = value;
          audioParam.setValueAtTime(value, audioNode.context.currentTime);
        },
        cancelAndHoldAtTime(cancelTime) {
          if (typeof nativeAudioParam.cancelAndHoldAtTime === "function") {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            nativeAudioParam.cancelAndHoldAtTime(cancelTime);
          } else {
            const previousLastEvent = Array.from(automationEventList).pop();
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            const currentLastEvent = Array.from(automationEventList).pop();
            nativeAudioParam.cancelScheduledValues(cancelTime);
            if (previousLastEvent !== currentLastEvent && currentLastEvent !== void 0) {
              if (currentLastEvent.type === "exponentialRampToValue") {
                nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "linearRampToValue") {
                nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "setValue") {
                nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
              } else if (currentLastEvent.type === "setValueCurve") {
                nativeAudioParam.setValueCurveAtTime(currentLastEvent.values, currentLastEvent.startTime, currentLastEvent.duration);
              }
            }
          }
          return audioParam;
        },
        cancelScheduledValues(cancelTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelScheduledValuesAutomationEvent2(cancelTime));
          nativeAudioParam.cancelScheduledValues(cancelTime);
          return audioParam;
        },
        exponentialRampToValueAtTime(value, endTime) {
          if (value === 0) {
            throw new RangeError();
          }
          if (!Number.isFinite(endTime) || endTime < 0) {
            throw new RangeError();
          }
          const currentTime = audioNode.context.currentTime;
          if (audioParamRenderer === null) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createExponentialRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.exponentialRampToValueAtTime(value, endTime);
          return audioParam;
        },
        linearRampToValueAtTime(value, endTime) {
          const currentTime = audioNode.context.currentTime;
          if (audioParamRenderer === null) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createLinearRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.linearRampToValueAtTime(value, endTime);
          return audioParam;
        },
        setTargetAtTime(target, startTime, timeConstant) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetTargetAutomationEvent2(target, startTime, timeConstant));
          nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);
          return audioParam;
        },
        setValueAtTime(value, startTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueAutomationEvent2(value, startTime));
          nativeAudioParam.setValueAtTime(value, startTime);
          return audioParam;
        },
        setValueCurveAtTime(values, startTime, duration) {
          const convertedValues = values instanceof Float32Array ? values : new Float32Array(values);
          if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
            const endTime = startTime + duration;
            const sampleRate = audioNode.context.sampleRate;
            const firstSample = Math.ceil(startTime * sampleRate);
            const lastSample = Math.floor(endTime * sampleRate);
            const numberOfInterpolatedValues = lastSample - firstSample;
            const interpolatedValues = new Float32Array(numberOfInterpolatedValues);
            for (let i = 0; i < numberOfInterpolatedValues; i += 1) {
              const theoreticIndex = (convertedValues.length - 1) / duration * ((firstSample + i) / sampleRate - startTime);
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              interpolatedValues[i] = lowerIndex === upperIndex ? convertedValues[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * convertedValues[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * convertedValues[upperIndex];
            }
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(interpolatedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(interpolatedValues, startTime, duration);
            const timeOfLastSample = lastSample / sampleRate;
            if (timeOfLastSample < endTime) {
              setValueAtTimeUntilPossible2(audioParam, interpolatedValues[interpolatedValues.length - 1], timeOfLastSample);
            }
            setValueAtTimeUntilPossible2(audioParam, convertedValues[convertedValues.length - 1], endTime);
          } else {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(convertedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(convertedValues, startTime, duration);
          }
          return audioParam;
        }
      };
      audioParamStore.set(audioParam, nativeAudioParam);
      audioParamAudioNodeStore2.set(audioParam, audioNode);
      addAudioParamConnections(audioParam, audioParamRenderer);
      return audioParam;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-param-renderer.js
  var createAudioParamRenderer = (automationEventList) => {
    return {
      replay(audioParam) {
        for (const automationEvent of automationEventList) {
          if (automationEvent.type === "exponentialRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.exponentialRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "linearRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.linearRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "setTarget") {
            const { startTime, target, timeConstant } = automationEvent;
            audioParam.setTargetAtTime(target, startTime, timeConstant);
          } else if (automationEvent.type === "setValue") {
            const { startTime, value } = automationEvent;
            audioParam.setValueAtTime(value, startTime);
          } else if (automationEvent.type === "setValueCurve") {
            const { duration, startTime, values } = automationEvent;
            audioParam.setValueCurveAtTime(values, startTime, duration);
          } else {
            throw new Error("Can't apply an unknown automation.");
          }
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/read-only-map.js
  var ReadOnlyMap = class {
    constructor(parameters) {
      this._map = new Map(parameters);
    }
    get size() {
      return this._map.size;
    }
    entries() {
      return this._map.entries();
    }
    forEach(callback, thisArg = null) {
      return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
    }
    get(name) {
      return this._map.get(name);
    }
    has(name) {
      return this._map.has(name);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-constructor.js
  var DEFAULT_OPTIONS4 = {
    channelCount: 2,
    // Bug #61: The channelCountMode should be 'max' according to the spec but is set to 'explicit' to achieve consistent behavior.
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
  };
  var createAudioWorkletNodeConstructor = (addUnrenderedAudioWorkletNode2, audioNodeConstructor2, createAudioParam2, createAudioWorkletNodeRenderer2, createNativeAudioWorkletNode2, getAudioNodeConnections2, getBackupOfflineAudioContext2, getNativeContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, sanitizeAudioWorkletNodeOptions2, setActiveAudioWorkletNodeInputs2, testAudioWorkletNodeOptionsClonability2, wrapEventListener2) => {
    return class AudioWorkletNode extends audioNodeConstructor2 {
      constructor(context, name, options) {
        var _a;
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = sanitizeAudioWorkletNodeOptions2({ ...DEFAULT_OPTIONS4, ...options });
        testAudioWorkletNodeOptionsClonability2(mergedOptions);
        const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
        const processorConstructor = nodeNameToProcessorConstructorMap === null || nodeNameToProcessorConstructorMap === void 0 ? void 0 : nodeNameToProcessorConstructorMap.get(name);
        const nativeContextOrBackupOfflineAudioContext = isOffline || nativeContext.state !== "closed" ? nativeContext : (_a = getBackupOfflineAudioContext2(nativeContext)) !== null && _a !== void 0 ? _a : nativeContext;
        const nativeAudioWorkletNode = createNativeAudioWorkletNode2(nativeContextOrBackupOfflineAudioContext, isOffline ? null : context.baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, mergedOptions);
        const audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer2(name, mergedOptions, processorConstructor) : null;
        super(context, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);
        const parameters = [];
        nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
          const audioParam = createAudioParam2(this, isOffline, nativeAudioParam);
          parameters.push([nm, audioParam]);
        });
        this._nativeAudioWorkletNode = nativeAudioWorkletNode;
        this._onprocessorerror = null;
        this._parameters = new ReadOnlyMap(parameters);
        if (isOffline) {
          addUnrenderedAudioWorkletNode2(nativeContext, this);
        }
        const { activeInputs } = getAudioNodeConnections2(this);
        setActiveAudioWorkletNodeInputs2(nativeAudioWorkletNode, activeInputs);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
        const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
      }
      get parameters() {
        if (this._parameters === null) {
          return this._nativeAudioWorkletNode.parameters;
        }
        return this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/copy-from-channel.js
  function copyFromChannel(audioBuffer, parent, key, channelNumber, bufferOffset) {
    if (typeof audioBuffer.copyFromChannel === "function") {
      if (parent[key].byteLength === 0) {
        parent[key] = new Float32Array(128);
      }
      audioBuffer.copyFromChannel(parent[key], channelNumber, bufferOffset);
    } else {
      const channelData = audioBuffer.getChannelData(channelNumber);
      if (parent[key].byteLength === 0) {
        parent[key] = channelData.slice(bufferOffset, bufferOffset + 128);
      } else {
        const slicedInput = new Float32Array(channelData.buffer, bufferOffset * Float32Array.BYTES_PER_ELEMENT, 128);
        parent[key].set(slicedInput);
      }
    }
  }

  // node_modules/standardized-audio-context/build/es2019/helpers/copy-to-channel.js
  var copyToChannel = (audioBuffer, parent, key, channelNumber, bufferOffset) => {
    if (typeof audioBuffer.copyToChannel === "function") {
      if (parent[key].byteLength !== 0) {
        audioBuffer.copyToChannel(parent[key], channelNumber, bufferOffset);
      }
    } else {
      if (parent[key].byteLength !== 0) {
        audioBuffer.getChannelData(channelNumber).set(parent[key], bufferOffset);
      }
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-nested-arrays.js
  var createNestedArrays = (x, y) => {
    const arrays = [];
    for (let i = 0; i < x; i += 1) {
      const array = [];
      const length = typeof y === "number" ? y : y[i];
      for (let j = 0; j < length; j += 1) {
        array.push(new Float32Array(128));
      }
      arrays.push(array);
    }
    return arrays;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-worklet-processor.js
  var getAudioWorkletProcessor = (nativeOfflineAudioContext, proxy) => {
    const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
    const nativeAudioWorkletNode = getNativeAudioNode(proxy);
    return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-renderer-factory.js
  var processBuffer = async (proxy, renderedBuffer, nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2) => {
    const length = renderedBuffer === null ? Math.ceil(proxy.context.length / 128) * 128 : renderedBuffer.length;
    const numberOfInputChannels = options.channelCount * options.numberOfInputs;
    const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
    const processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, nativeOfflineAudioContext.sampleRate);
    if (processorConstructor === void 0) {
      throw new Error("Missing the processor constructor.");
    }
    const audioNodeConnections = getAudioNodeConnections(proxy);
    const audioWorkletProcessor = await getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);
    const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
    const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
    const parameters = Array.from(proxy.parameters.keys()).reduce((prmtrs, name) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
    for (let i = 0; i < length; i += 128) {
      if (options.numberOfInputs > 0 && renderedBuffer !== null) {
        for (let j = 0; j < options.numberOfInputs; j += 1) {
          for (let k = 0; k < options.channelCount; k += 1) {
            copyFromChannel(renderedBuffer, inputs[j], k, k, i);
          }
        }
      }
      if (processorConstructor.parameterDescriptors !== void 0 && renderedBuffer !== null) {
        processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
          copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
        });
      }
      for (let j = 0; j < options.numberOfInputs; j += 1) {
        for (let k = 0; k < outputChannelCount[j]; k += 1) {
          if (outputs[j][k].byteLength === 0) {
            outputs[j][k] = new Float32Array(128);
          }
        }
      }
      try {
        const potentiallyEmptyInputs = inputs.map((input, index) => {
          if (audioNodeConnections.activeInputs[index].size === 0) {
            return [];
          }
          return input;
        });
        const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(i / nativeOfflineAudioContext.sampleRate, nativeOfflineAudioContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
        if (processedBuffer !== null) {
          for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
            for (let k = 0; k < outputChannelCount[j]; k += 1) {
              copyToChannel(processedBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[j];
          }
        }
        if (!activeSourceFlag) {
          break;
        }
      } catch (error) {
        proxy.dispatchEvent(new ErrorEvent("processorerror", {
          colno: error.colno,
          filename: error.filename,
          lineno: error.lineno,
          message: error.message
        }));
        break;
      }
    }
    return processedBuffer;
  };
  var createAudioWorkletNodeRendererFactory = (connectAudioParam2, connectMultipleOutputs2, createNativeAudioBufferSourceNode2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, deleteUnrenderedAudioWorkletNode2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getNativeAudioNode2, nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (name, options, processorConstructor) => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let processedBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioWorkletNode = getNativeAudioNode2(proxy);
        let nativeOutputNodes = null;
        const nativeAudioWorkletNodeIsOwnedByContext = isOwnedByContext(nativeAudioWorkletNode, nativeOfflineAudioContext);
        const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
        if (nativeAudioWorkletNodeConstructor2 === null) {
          const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
          const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, {
            channelCount: Math.max(1, numberOfOutputChannels),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, numberOfOutputChannels)
          });
          const outputChannelMergerNodes = [];
          for (let i = 0; i < proxy.numberOfOutputs; i += 1) {
            outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: outputChannelCount[i]
            }));
          }
          const outputGainNode = createNativeGainNode2(nativeOfflineAudioContext, {
            channelCount: options.channelCount,
            channelCountMode: options.channelCountMode,
            channelInterpretation: options.channelInterpretation,
            gain: 1
          });
          outputGainNode.connect = connectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          outputGainNode.disconnect = disconnectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          nativeOutputNodes = [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode];
        } else if (!nativeAudioWorkletNodeIsOwnedByContext) {
          nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeOfflineAudioContext, name);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeOutputNodes === null ? nativeAudioWorkletNode : nativeOutputNodes[2]);
        if (nativeOutputNodes !== null) {
          if (processedBufferPromise === null) {
            if (processorConstructor === void 0) {
              throw new Error("Missing the processor constructor.");
            }
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
            const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
            const numberOfChannels = numberOfInputChannels + numberOfParameters;
            const renderBuffer = async () => {
              const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
                numberOfChannels,
                // Ceil the length to the next full render quantum.
                // Bug #17: Safari does not yet expose the length.
                Math.ceil(proxy.context.length / 128) * 128,
                nativeOfflineAudioContext.sampleRate
              );
              const gainNodes = [];
              const inputChannelSplitterNodes = [];
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes.push(createNativeGainNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: options.channelCountMode,
                  channelInterpretation: options.channelInterpretation,
                  gain: 1
                }));
                inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: options.channelCount
                }));
              }
              const constantSourceNodes = await Promise.all(Array.from(proxy.parameters.values()).map(async (audioParam) => {
                const constantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: audioParam.value
                });
                await renderAutomation2(partialOfflineAudioContext, audioParam, constantSourceNode.offset);
                return constantSourceNode;
              }));
              const inputChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
              });
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes[i].connect(inputChannelSplitterNodes[i]);
                for (let j = 0; j < options.channelCount; j += 1) {
                  inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
                }
              }
              for (const [index, constantSourceNode] of constantSourceNodes.entries()) {
                constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                constantSourceNode.start(0);
              }
              inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
              await Promise.all(gainNodes.map((gainNode) => renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, gainNode)));
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            };
            processedBufferPromise = processBuffer(proxy, numberOfChannels === 0 ? null : await renderBuffer(), nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2);
          }
          const processedBuffer = await processedBufferPromise;
          const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
          const [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode] = nativeOutputNodes;
          if (processedBuffer !== null) {
            audioBufferSourceNode.buffer = processedBuffer;
            audioBufferSourceNode.start(0);
          }
          audioBufferSourceNode.connect(outputChannelSplitterNode);
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < proxy.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
          return outputGainNode;
        }
        if (!nativeAudioWorkletNodeIsOwnedByContext) {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await renderAutomation2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
        } else {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await connectAudioParam2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioWorkletNode);
        return nativeAudioWorkletNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          deleteUnrenderedAudioWorkletNode2(nativeOfflineAudioContext, proxy);
          const renderedNativeAudioWorkletNodeOrGainNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioWorkletNodeOrGainNode !== void 0) {
            return Promise.resolve(renderedNativeAudioWorkletNodeOrGainNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/base-audio-context-constructor.js
  var createBaseAudioContextConstructor = (addAudioWorkletModule2, analyserNodeConstructor2, audioBufferConstructor2, audioBufferSourceNodeConstructor2, biquadFilterNodeConstructor2, channelMergerNodeConstructor2, channelSplitterNodeConstructor2, constantSourceNodeConstructor2, convolverNodeConstructor2, decodeAudioData2, delayNodeConstructor2, dynamicsCompressorNodeConstructor2, gainNodeConstructor2, iIRFilterNodeConstructor2, minimalBaseAudioContextConstructor2, oscillatorNodeConstructor2, pannerNodeConstructor2, periodicWaveConstructor2, stereoPannerNodeConstructor2, waveShaperNodeConstructor2) => {
    return class BaseAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext, numberOfChannels);
        this._nativeContext = _nativeContext;
        this._audioWorklet = addAudioWorkletModule2 === void 0 ? void 0 : {
          addModule: (moduleURL, options) => {
            return addAudioWorkletModule2(this, moduleURL, options);
          }
        };
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new analyserNodeConstructor2(this);
      }
      createBiquadFilter() {
        return new biquadFilterNodeConstructor2(this);
      }
      createBuffer(numberOfChannels, length, sampleRate) {
        return new audioBufferConstructor2({ length, numberOfChannels, sampleRate });
      }
      createBufferSource() {
        return new audioBufferSourceNodeConstructor2(this);
      }
      createChannelMerger(numberOfInputs = 6) {
        return new channelMergerNodeConstructor2(this, { numberOfInputs });
      }
      createChannelSplitter(numberOfOutputs = 6) {
        return new channelSplitterNodeConstructor2(this, { numberOfOutputs });
      }
      createConstantSource() {
        return new constantSourceNodeConstructor2(this);
      }
      createConvolver() {
        return new convolverNodeConstructor2(this);
      }
      createDelay(maxDelayTime = 1) {
        return new delayNodeConstructor2(this, { maxDelayTime });
      }
      createDynamicsCompressor() {
        return new dynamicsCompressorNodeConstructor2(this);
      }
      createGain() {
        return new gainNodeConstructor2(this);
      }
      createIIRFilter(feedforward, feedback) {
        return new iIRFilterNodeConstructor2(this, { feedback, feedforward });
      }
      createOscillator() {
        return new oscillatorNodeConstructor2(this);
      }
      createPanner() {
        return new pannerNodeConstructor2(this);
      }
      createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
        return new periodicWaveConstructor2(this, { ...constraints, imag, real });
      }
      createStereoPanner() {
        return new stereoPannerNodeConstructor2(this);
      }
      createWaveShaper() {
        return new waveShaperNodeConstructor2(this);
      }
      decodeAudioData(audioData, successCallback, errorCallback) {
        return decodeAudioData2(this._nativeContext, audioData).then((audioBuffer) => {
          if (typeof successCallback === "function") {
            successCallback(audioBuffer);
          }
          return audioBuffer;
        }, (err) => {
          if (typeof errorCallback === "function") {
            errorCallback(err);
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-constructor.js
  var DEFAULT_OPTIONS5 = {
    Q: 1,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    frequency: 350,
    gain: 0,
    type: "lowpass"
  };
  var createBiquadFilterNodeConstructor = (audioNodeConstructor2, createAudioParam2, createBiquadFilterNodeRenderer2, createInvalidAccessError2, createNativeBiquadFilterNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class BiquadFilterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS5, ...options };
        const nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer2() : null;
        super(context, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
        this._Q = createAudioParam2(this, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._detune = createAudioParam2(this, isOffline, nativeBiquadFilterNode.detune, 1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT));
        this._frequency = createAudioParam2(this, isOffline, nativeBiquadFilterNode.frequency, context.sampleRate / 2, 0);
        this._gain = createAudioParam2(this, isOffline, nativeBiquadFilterNode.gain, 40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT), MOST_NEGATIVE_SINGLE_FLOAT);
        this._nativeBiquadFilterNode = nativeBiquadFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get gain() {
        return this._gain;
      }
      get Q() {
        return this._Q;
      }
      get type() {
        return this._nativeBiquadFilterNode.type;
      }
      set type(value) {
        this._nativeBiquadFilterNode.type = value;
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        try {
          this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        } catch (err) {
          if (err.code === 11) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError2();
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-renderer-factory.js
  var createBiquadFilterNodeRendererFactory = (connectAudioParam2, createNativeBiquadFilterNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeBiquadFilterNodes = /* @__PURE__ */ new WeakMap();
      const createBiquadFilterNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeBiquadFilterNode = getNativeAudioNode2(proxy);
        const nativeBiquadFilterNodeIsOwnedByContext = isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          const options = {
            Q: nativeBiquadFilterNode.Q.value,
            channelCount: nativeBiquadFilterNode.channelCount,
            channelCountMode: nativeBiquadFilterNode.channelCountMode,
            channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
            detune: nativeBiquadFilterNode.detune.value,
            frequency: nativeBiquadFilterNode.frequency.value,
            gain: nativeBiquadFilterNode.gain.value,
            type: nativeBiquadFilterNode.type
          };
          nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
        return nativeBiquadFilterNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
          if (renderedNativeBiquadFilterNode !== void 0) {
            return Promise.resolve(renderedNativeBiquadFilterNode);
          }
          return createBiquadFilterNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/cache-test-result.js
  var createCacheTestResult = (ongoingTests, testResults) => {
    return (tester, test) => {
      const cachedTestResult = testResults.get(tester);
      if (cachedTestResult !== void 0) {
        return cachedTestResult;
      }
      const ongoingTest = ongoingTests.get(tester);
      if (ongoingTest !== void 0) {
        return ongoingTest;
      }
      try {
        const synchronousTestResult = test();
        if (synchronousTestResult instanceof Promise) {
          ongoingTests.set(tester, synchronousTestResult);
          return synchronousTestResult.catch(() => false).then((finalTestResult) => {
            ongoingTests.delete(tester);
            testResults.set(tester, finalTestResult);
            return finalTestResult;
          });
        }
        testResults.set(tester, synchronousTestResult);
        return synchronousTestResult;
      } catch {
        testResults.set(tester, false);
        return false;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-constructor.js
  var DEFAULT_OPTIONS6 = {
    channelCount: 1,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 6
  };
  var createChannelMergerNodeConstructor = (audioNodeConstructor2, createChannelMergerNodeRenderer2, createNativeChannelMergerNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class ChannelMergerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS6, ...options };
        const nativeChannelMergerNode = createNativeChannelMergerNode2(nativeContext, mergedOptions);
        const channelMergerNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelMergerNodeRenderer2() : null;
        super(context, false, nativeChannelMergerNode, channelMergerNodeRenderer);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-renderer-factory.js
  var createChannelMergerNodeRendererFactory = (createNativeChannelMergerNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfInputs: nativeAudioNode.numberOfInputs
          };
          nativeAudioNode = createNativeChannelMergerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-constructor.js
  var DEFAULT_OPTIONS7 = {
    channelCount: 6,
    channelCountMode: "explicit",
    channelInterpretation: "discrete",
    numberOfOutputs: 6
  };
  var createChannelSplitterNodeConstructor = (audioNodeConstructor2, createChannelSplitterNodeRenderer2, createNativeChannelSplitterNode2, getNativeContext2, isNativeOfflineAudioContext2, sanitizeChannelSplitterOptions2) => {
    return class ChannelSplitterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = sanitizeChannelSplitterOptions2({ ...DEFAULT_OPTIONS7, ...options });
        const nativeChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, mergedOptions);
        const channelSplitterNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelSplitterNodeRenderer2() : null;
        super(context, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-renderer-factory.js
  var createChannelSplitterNodeRendererFactory = (createNativeChannelSplitterNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfOutputs: nativeAudioNode.numberOfOutputs
          };
          nativeAudioNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connect-audio-param.js
  var createConnectAudioParam = (renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connect-multiple-outputs.js
  var createConnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destination, output = 0, input = 0) => {
      const outputAudioNode = outputAudioNodes[output];
      if (outputAudioNode === void 0) {
        throw createIndexSizeError2();
      }
      if (isNativeAudioNode(destination)) {
        return outputAudioNode.connect(destination, 0, input);
      }
      return outputAudioNode.connect(destination, 0);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connected-native-audio-buffer-source-node-factory.js
  var createConnectedNativeAudioBufferSourceNodeFactory = (createNativeAudioBufferSourceNode2) => {
    return (nativeContext, nativeAudioNode) => {
      const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const nativeAudioBuffer = nativeContext.createBuffer(1, 2, 44100);
      nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
      nativeAudioBufferSourceNode.loop = true;
      nativeAudioBufferSourceNode.connect(nativeAudioNode);
      nativeAudioBufferSourceNode.start();
      return () => {
        nativeAudioBufferSourceNode.stop();
        nativeAudioBufferSourceNode.disconnect(nativeAudioNode);
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-constructor.js
  var DEFAULT_OPTIONS8 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1
  };
  var createConstantSourceNodeConstructor = (audioNodeConstructor2, createAudioParam2, createConstantSourceNodeRendererFactory2, createNativeConstantSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class ConstantSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS8, ...options };
        const nativeConstantSourceNode = createNativeConstantSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory2() : null;
        super(context, false, nativeConstantSourceNode, constantSourceNodeRenderer);
        this._constantSourceNodeRenderer = constantSourceNodeRenderer;
        this._nativeConstantSourceNode = nativeConstantSourceNode;
        this._offset = createAudioParam2(this, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._onended = null;
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeConstantSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeConstantSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      start(when = 0) {
        this._nativeConstantSourceNode.start(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeConstantSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeConstantSourceNode.stop(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-renderer-factory.js
  var createConstantSourceNodeRendererFactory = (connectAudioParam2, createNativeConstantSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConstantSourceNodes = /* @__PURE__ */ new WeakMap();
      let start = null;
      let stop = null;
      const createConstantSourceNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeConstantSourceNode = getNativeAudioNode2(proxy);
        const nativeConstantSourceNodeIsOwnedByContext = isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeConstantSourceNode.channelCount,
            channelCountMode: nativeConstantSourceNode.channelCountMode,
            channelInterpretation: nativeConstantSourceNode.channelInterpretation,
            offset: nativeConstantSourceNode.offset.value
          };
          nativeConstantSourceNode = createNativeConstantSourceNode2(nativeOfflineAudioContext, options);
          if (start !== null) {
            nativeConstantSourceNode.start(start);
          }
          if (stop !== null) {
            nativeConstantSourceNode.stop(stop);
          }
        }
        renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);
        return nativeConstantSourceNode;
      };
      return {
        set start(value) {
          start = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConstantSourceNode !== void 0) {
            return Promise.resolve(renderedNativeConstantSourceNode);
          }
          return createConstantSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convert-number-to-unsigned-long.js
  var createConvertNumberToUnsignedLong = (unit32Array) => {
    return (value) => {
      unit32Array[0] = value;
      return unit32Array[0];
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convolver-node-constructor.js
  var DEFAULT_OPTIONS9 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    disableNormalization: false
  };
  var createConvolverNodeConstructor = (audioNodeConstructor2, createConvolverNodeRenderer2, createNativeConvolverNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class ConvolverNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS9, ...options };
        const nativeConvolverNode = createNativeConvolverNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const convolverNodeRenderer = isOffline ? createConvolverNodeRenderer2() : null;
        super(context, false, nativeConvolverNode, convolverNodeRenderer);
        this._isBufferNullified = false;
        this._nativeConvolverNode = nativeConvolverNode;
        if (mergedOptions.buffer !== null) {
          setAudioNodeTailTime2(this, mergedOptions.buffer.duration);
        }
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeConvolverNode.buffer;
      }
      set buffer(value) {
        this._nativeConvolverNode.buffer = value;
        if (value === null && this._nativeConvolverNode.buffer !== null) {
          const nativeContext = this._nativeConvolverNode.context;
          this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, nativeContext.sampleRate);
          this._isBufferNullified = true;
          setAudioNodeTailTime2(this, 0);
        } else {
          this._isBufferNullified = false;
          setAudioNodeTailTime2(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
        }
      }
      get normalize() {
        return this._nativeConvolverNode.normalize;
      }
      set normalize(value) {
        this._nativeConvolverNode.normalize = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convolver-node-renderer-factory.js
  var createConvolverNodeRendererFactory = (createNativeConvolverNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConvolverNodes = /* @__PURE__ */ new WeakMap();
      const createConvolverNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeConvolverNode = getNativeAudioNode2(proxy);
        const nativeConvolverNodeIsOwnedByContext = isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext);
        if (!nativeConvolverNodeIsOwnedByContext) {
          const options = {
            buffer: nativeConvolverNode.buffer,
            channelCount: nativeConvolverNode.channelCount,
            channelCountMode: nativeConvolverNode.channelCountMode,
            channelInterpretation: nativeConvolverNode.channelInterpretation,
            disableNormalization: !nativeConvolverNode.normalize
          };
          nativeConvolverNode = createNativeConvolverNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
        if (isNativeAudioNodeFaker(nativeConvolverNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode);
        }
        return nativeConvolverNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConvolverNode !== void 0) {
            return Promise.resolve(renderedNativeConvolverNode);
          }
          return createConvolverNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/create-native-offline-audio-context.js
  var createCreateNativeOfflineAudioContext = (createNotSupportedError2, nativeOfflineAudioContextConstructor2) => {
    return (numberOfChannels, length, sampleRate) => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      try {
        return new nativeOfflineAudioContextConstructor2(numberOfChannels, length, sampleRate);
      } catch (err) {
        if (err.name === "SyntaxError") {
          throw createNotSupportedError2();
        }
        throw err;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/data-clone-error.js
  var createDataCloneError = () => new DOMException("", "DataCloneError");

  // node_modules/standardized-audio-context/build/es2019/helpers/detach-array-buffer.js
  var detachArrayBuffer = (arrayBuffer) => {
    const { port1, port2 } = new MessageChannel();
    return new Promise((resolve) => {
      const closeAndResolve = () => {
        port2.onmessage = null;
        port1.close();
        port2.close();
        resolve();
      };
      port2.onmessage = () => closeAndResolve();
      try {
        port1.postMessage(arrayBuffer, [arrayBuffer]);
      } catch {
      } finally {
        closeAndResolve();
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/decode-audio-data.js
  var createDecodeAudioData = (audioBufferStore2, cacheTestResult2, createDataCloneError2, createEncodingError2, detachedArrayBuffers, getNativeContext2, isNativeContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, testPromiseSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (anyContext, audioData) => {
      const nativeContext = isNativeContext2(anyContext) ? anyContext : getNativeContext2(anyContext);
      if (detachedArrayBuffers.has(audioData)) {
        const err = createDataCloneError2();
        return Promise.reject(err);
      }
      try {
        detachedArrayBuffers.add(audioData);
      } catch {
      }
      if (cacheTestResult2(testPromiseSupport2, () => testPromiseSupport2(nativeContext))) {
        return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
          detachArrayBuffer(audioData).catch(() => {
          });
          if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
            wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
          }
          audioBufferStore2.add(audioBuffer);
          return audioBuffer;
        });
      }
      return new Promise((resolve, reject) => {
        const complete = async () => {
          try {
            await detachArrayBuffer(audioData);
          } catch {
          }
        };
        const fail = (err) => {
          reject(err);
          complete();
        };
        try {
          nativeContext.decodeAudioData(audioData, (audioBuffer) => {
            if (typeof audioBuffer.copyFromChannel !== "function") {
              wrapAudioBufferCopyChannelMethods2(audioBuffer);
              wrapAudioBufferGetChannelDataMethod(audioBuffer);
            }
            audioBufferStore2.add(audioBuffer);
            complete().then(() => resolve(audioBuffer));
          }, (err) => {
            if (err === null) {
              fail(createEncodingError2());
            } else {
              fail(err);
            }
          });
        } catch (err) {
          fail(err);
        }
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/decrement-cycle-counter.js
  var createDecrementCycleCounter = (connectNativeAudioNodeToNativeAudioNode2, cycleCounters, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, getNativeContext2, isActiveAudioNode2, isNativeOfflineAudioContext2) => {
    return (audioNode, count) => {
      const cycleCounter = cycleCounters.get(audioNode);
      if (cycleCounter === void 0) {
        throw new Error("Missing the expected cycle count.");
      }
      const nativeContext = getNativeContext2(audioNode.context);
      const isOffline = isNativeOfflineAudioContext2(nativeContext);
      if (cycleCounter === count) {
        cycleCounters.delete(audioNode);
        if (!isOffline && isActiveAudioNode2(audioNode)) {
          const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
          const { outputs } = getAudioNodeConnections2(audioNode);
          for (const output of outputs) {
            if (isAudioNodeOutputConnection(output)) {
              const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
              connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
            } else {
              const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
              nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
            }
          }
        }
      } else {
        cycleCounters.set(audioNode, cycleCounter - count);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delay-node-constructor.js
  var DEFAULT_OPTIONS10 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    delayTime: 0,
    maxDelayTime: 1
  };
  var createDelayNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDelayNodeRenderer2, createNativeDelayNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DelayNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS10, ...options };
        const nativeDelayNode = createNativeDelayNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const delayNodeRenderer = isOffline ? createDelayNodeRenderer2(mergedOptions.maxDelayTime) : null;
        super(context, false, nativeDelayNode, delayNodeRenderer);
        this._delayTime = createAudioParam2(this, isOffline, nativeDelayNode.delayTime);
        setAudioNodeTailTime2(this, mergedOptions.maxDelayTime);
      }
      get delayTime() {
        return this._delayTime;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delay-node-renderer-factory.js
  var createDelayNodeRendererFactory = (connectAudioParam2, createNativeDelayNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return (maxDelayTime) => {
      const renderedNativeDelayNodes = /* @__PURE__ */ new WeakMap();
      const createDelayNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeDelayNode = getNativeAudioNode2(proxy);
        const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);
        if (!nativeDelayNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeDelayNode.channelCount,
            channelCountMode: nativeDelayNode.channelCountMode,
            channelInterpretation: nativeDelayNode.channelInterpretation,
            delayTime: nativeDelayNode.delayTime.value,
            maxDelayTime
          };
          nativeDelayNode = createNativeDelayNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
        if (!nativeDelayNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDelayNode);
        return nativeDelayNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDelayNode !== void 0) {
            return Promise.resolve(renderedNativeDelayNode);
          }
          return createDelayNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delete-active-input-connection-to-audio-node.js
  var createDeleteActiveInputConnectionToAudioNode = (pickElementFromSet2) => {
    return (activeInputs, source, output, input) => {
      return pickElementFromSet2(activeInputs[input], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delete-unrendered-audio-worklet-node.js
  var createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).delete(audioWorkletNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/delay-node.js
  var isDelayNode = (audioNode) => {
    return "delayTime" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/detect-cycles.js
  var createDetectCycles = (audioParamAudioNodeStore2, getAudioNodeConnections2, getValueForKey2) => {
    return function detectCycles(chain, nextLink) {
      const audioNode = isAudioNode(nextLink) ? nextLink : getValueForKey2(audioParamAudioNodeStore2, nextLink);
      if (isDelayNode(audioNode)) {
        return [];
      }
      if (chain[0] === audioNode) {
        return [chain];
      }
      if (chain.includes(audioNode)) {
        return [];
      }
      const { outputs } = getAudioNodeConnections2(audioNode);
      return Array.from(outputs).map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0])).reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/disconnect-multiple-outputs.js
  var getOutputAudioNodeAtIndex = (createIndexSizeError2, outputAudioNodes, output) => {
    const outputAudioNode = outputAudioNodes[output];
    if (outputAudioNode === void 0) {
      throw createIndexSizeError2();
    }
    return outputAudioNode;
  };
  var createDisconnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destinationOrOutput = void 0, output = void 0, input = 0) => {
      if (destinationOrOutput === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect());
      }
      if (typeof destinationOrOutput === "number") {
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, destinationOrOutput).disconnect();
      }
      if (isNativeAudioNode(destinationOrOutput)) {
        if (output === void 0) {
          return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
        }
        if (input === void 0) {
          return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
        }
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0, input);
      }
      if (output === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
      }
      return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-constructor.js
  var DEFAULT_OPTIONS11 = {
    attack: 3e-3,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  };
  var createDynamicsCompressorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDynamicsCompressorNodeRenderer2, createNativeDynamicsCompressorNode2, createNotSupportedError2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DynamicsCompressorNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS11, ...options };
        const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer2() : null;
        super(context, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);
        this._attack = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.attack);
        this._knee = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.knee);
        this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
        this._ratio = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.ratio);
        this._release = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.release);
        this._threshold = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.threshold);
        setAudioNodeTailTime2(this, 6e-3);
      }
      get attack() {
        return this._attack;
      }
      // Bug #108: Safari allows a channelCount of three and above which is why the getter and setter needs to be overwritten here.
      get channelCount() {
        return this._nativeDynamicsCompressorNode.channelCount;
      }
      set channelCount(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
        this._nativeDynamicsCompressorNode.channelCount = value;
        if (value > 2) {
          this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      /*
       * Bug #109: Only Chrome and Firefox disallow a channelCountMode of 'max' yet which is why the getter and setter needs to be
       * overwritten here.
       */
      get channelCountMode() {
        return this._nativeDynamicsCompressorNode.channelCountMode;
      }
      set channelCountMode(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
        this._nativeDynamicsCompressorNode.channelCountMode = value;
        if (value === "max") {
          this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      get knee() {
        return this._knee;
      }
      get ratio() {
        return this._ratio;
      }
      get reduction() {
        if (typeof this._nativeDynamicsCompressorNode.reduction.value === "number") {
          return this._nativeDynamicsCompressorNode.reduction.value;
        }
        return this._nativeDynamicsCompressorNode.reduction;
      }
      get release() {
        return this._release;
      }
      get threshold() {
        return this._threshold;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-renderer-factory.js
  var createDynamicsCompressorNodeRendererFactory = (connectAudioParam2, createNativeDynamicsCompressorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeDynamicsCompressorNodes = /* @__PURE__ */ new WeakMap();
      const createDynamicsCompressorNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeDynamicsCompressorNode = getNativeAudioNode2(proxy);
        const nativeDynamicsCompressorNodeIsOwnedByContext = isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          const options = {
            attack: nativeDynamicsCompressorNode.attack.value,
            channelCount: nativeDynamicsCompressorNode.channelCount,
            channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
            channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
            knee: nativeDynamicsCompressorNode.knee.value,
            ratio: nativeDynamicsCompressorNode.ratio.value,
            release: nativeDynamicsCompressorNode.release.value,
            threshold: nativeDynamicsCompressorNode.threshold.value
          };
          nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await renderAutomation2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await renderAutomation2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await renderAutomation2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await renderAutomation2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        return nativeDynamicsCompressorNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDynamicsCompressorNode !== void 0) {
            return Promise.resolve(renderedNativeDynamicsCompressorNode);
          }
          return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/encoding-error.js
  var createEncodingError = () => new DOMException("", "EncodingError");

  // node_modules/standardized-audio-context/build/es2019/factories/evaluate-source.js
  var createEvaluateSource = (window3) => {
    return (source) => new Promise((resolve, reject) => {
      if (window3 === null) {
        reject(new SyntaxError());
        return;
      }
      const head = window3.document.head;
      if (head === null) {
        reject(new SyntaxError());
      } else {
        const script = window3.document.createElement("script");
        const blob = new Blob([source], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);
        const originalOnErrorHandler = window3.onerror;
        const removeErrorEventListenerAndRevokeUrl = () => {
          window3.onerror = originalOnErrorHandler;
          URL.revokeObjectURL(url);
        };
        window3.onerror = (message, src, lineno, colno, error) => {
          if (src === url || src === window3.location.href && lineno === 1 && colno === 1) {
            removeErrorEventListenerAndRevokeUrl();
            reject(error);
            return false;
          }
          if (originalOnErrorHandler !== null) {
            return originalOnErrorHandler(message, src, lineno, colno, error);
          }
        };
        script.onerror = () => {
          removeErrorEventListenerAndRevokeUrl();
          reject(new SyntaxError());
        };
        script.onload = () => {
          removeErrorEventListenerAndRevokeUrl();
          resolve();
        };
        script.src = url;
        script.type = "module";
        head.appendChild(script);
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/event-target-constructor.js
  var createEventTargetConstructor = (wrapEventListener2) => {
    return class EventTarget {
      constructor(_nativeEventTarget) {
        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = /* @__PURE__ */ new WeakMap();
      }
      addEventListener(type, listener, options) {
        if (listener !== null) {
          let wrappedEventListener = this._listeners.get(listener);
          if (wrappedEventListener === void 0) {
            wrappedEventListener = wrapEventListener2(this, listener);
            if (typeof listener === "function") {
              this._listeners.set(listener, wrappedEventListener);
            }
          }
          this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }
      dispatchEvent(event) {
        return this._nativeEventTarget.dispatchEvent(event);
      }
      removeEventListener(type, listener, options) {
        const wrappedEventListener = listener === null ? void 0 : this._listeners.get(listener);
        this._nativeEventTarget.removeEventListener(type, wrappedEventListener === void 0 ? null : wrappedEventListener, options);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/expose-current-frame-and-current-time.js
  var createExposeCurrentFrameAndCurrentTime = (window3) => {
    return (currentTime, sampleRate, fn) => {
      Object.defineProperties(window3, {
        currentFrame: {
          configurable: true,
          get() {
            return Math.round(currentTime * sampleRate);
          }
        },
        currentTime: {
          configurable: true,
          get() {
            return currentTime;
          }
        }
      });
      try {
        return fn();
      } finally {
        if (window3 !== null) {
          delete window3.currentFrame;
          delete window3.currentTime;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/fetch-source.js
  var createFetchSource = (createAbortError2) => {
    return async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return [await response.text(), response.url];
        }
      } catch {
      }
      throw createAbortError2();
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/gain-node-constructor.js
  var DEFAULT_OPTIONS12 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    gain: 1
  };
  var createGainNodeConstructor = (audioNodeConstructor2, createAudioParam2, createGainNodeRenderer2, createNativeGainNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class GainNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS12, ...options };
        const nativeGainNode = createNativeGainNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const gainNodeRenderer = isOffline ? createGainNodeRenderer2() : null;
        super(context, false, nativeGainNode, gainNodeRenderer);
        this._gain = createAudioParam2(this, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get gain() {
        return this._gain;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/gain-node-renderer-factory.js
  var createGainNodeRendererFactory = (connectAudioParam2, createNativeGainNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeGainNodes = /* @__PURE__ */ new WeakMap();
      const createGainNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeGainNode = getNativeAudioNode2(proxy);
        const nativeGainNodeIsOwnedByContext = isOwnedByContext(nativeGainNode, nativeOfflineAudioContext);
        if (!nativeGainNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeGainNode.channelCount,
            channelCountMode: nativeGainNode.channelCountMode,
            channelInterpretation: nativeGainNode.channelInterpretation,
            gain: nativeGainNode.gain.value
          };
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
        if (!nativeGainNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeGainNode);
        return nativeGainNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNode !== void 0) {
            return Promise.resolve(renderedNativeGainNode);
          }
          return createGainNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-active-audio-worklet-node-inputs.js
  var createGetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2, getValueForKey2) => {
    return (nativeAudioWorkletNode) => getValueForKey2(activeAudioWorkletNodeInputsStore2, nativeAudioWorkletNode);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-renderer.js
  var createGetAudioNodeRenderer = (getAudioNodeConnections2) => {
    return (audioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      if (audioNodeConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
      }
      return audioNodeConnections.renderer;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-tail-time.js
  var createGetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode) => {
      var _a;
      return (_a = audioNodeTailTimeStore2.get(audioNode)) !== null && _a !== void 0 ? _a : 0;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-param-renderer.js
  var createGetAudioParamRenderer = (getAudioParamConnections2) => {
    return (audioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      if (audioParamConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
      }
      return audioParamConnections.renderer;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-backup-offline-audio-context.js
  var createGetBackupOfflineAudioContext = (backupOfflineAudioContextStore2) => {
    return (nativeContext) => {
      return backupOfflineAudioContextStore2.get(nativeContext);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/invalid-state-error.js
  var createInvalidStateError = () => new DOMException("", "InvalidStateError");

  // node_modules/standardized-audio-context/build/es2019/factories/get-native-context.js
  var createGetNativeContext = (contextStore) => {
    return (context) => {
      const nativeContext = contextStore.get(context);
      if (nativeContext === void 0) {
        throw createInvalidStateError();
      }
      return nativeContext;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-or-create-backup-offline-audio-context.js
  var createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore2, nativeOfflineAudioContextConstructor2) => {
    return (nativeContext) => {
      let backupOfflineAudioContext = backupOfflineAudioContextStore2.get(nativeContext);
      if (backupOfflineAudioContext !== void 0) {
        return backupOfflineAudioContext;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      backupOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      backupOfflineAudioContextStore2.set(nativeContext, backupOfflineAudioContext);
      return backupOfflineAudioContext;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-unrendered-audio-worklet-nodes.js
  var createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore2) => {
    return (nativeContext) => {
      const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore2.get(nativeContext);
      if (unrenderedAudioWorkletNodes === void 0) {
        throw new Error("The context has no set of AudioWorkletNodes.");
      }
      return unrenderedAudioWorkletNodes;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/invalid-access-error.js
  var createInvalidAccessError = () => new DOMException("", "InvalidAccessError");

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-iir-filter-node-get-frequency-response-method.js
  var wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
    nativeIIRFilterNode.getFrequencyResponse = /* @__PURE__ */ ((getFrequencyResponse) => {
      return (frequencyHz, magResponse, phaseResponse) => {
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError();
        }
        return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
      };
    })(nativeIIRFilterNode.getFrequencyResponse);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-constructor.js
  var DEFAULT_OPTIONS13 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers"
  };
  var createIIRFilterNodeConstructor = (audioNodeConstructor2, createNativeIIRFilterNode2, createIIRFilterNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class IIRFilterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = { ...DEFAULT_OPTIONS13, ...options };
        const nativeIIRFilterNode = createNativeIIRFilterNode2(nativeContext, isOffline ? null : context.baseLatency, mergedOptions);
        const iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer2(mergedOptions.feedback, mergedOptions.feedforward) : null;
        super(context, false, nativeIIRFilterNode, iirFilterNodeRenderer);
        wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
        this._nativeIIRFilterNode = nativeIIRFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/filter-buffer.js
  var filterBuffer = (feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) => {
    const inputLength = input.length;
    let i = bufferIndex;
    for (let j = 0; j < inputLength; j += 1) {
      let y = feedforward[0] * input[j];
      for (let k = 1; k < minLength; k += 1) {
        const x = i - k & bufferLength - 1;
        y += feedforward[k] * xBuffer[x];
        y -= feedback[k] * yBuffer[x];
      }
      for (let k = minLength; k < feedforwardLength; k += 1) {
        y += feedforward[k] * xBuffer[i - k & bufferLength - 1];
      }
      for (let k = minLength; k < feedbackLength; k += 1) {
        y -= feedback[k] * yBuffer[i - k & bufferLength - 1];
      }
      xBuffer[i] = input[j];
      yBuffer[i] = y;
      i = i + 1 & bufferLength - 1;
      output[j] = y;
    }
    return i;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-renderer-factory.js
  var filterFullBuffer = (renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) => {
    const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
    const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
    const feedbackLength = convertedFeedback.length;
    const feedforwardLength = convertedFeedforward.length;
    const minLength = Math.min(feedbackLength, feedforwardLength);
    if (convertedFeedback[0] !== 1) {
      for (let i = 0; i < feedbackLength; i += 1) {
        convertedFeedforward[i] /= convertedFeedback[0];
      }
      for (let i = 1; i < feedforwardLength; i += 1) {
        convertedFeedback[i] /= convertedFeedback[0];
      }
    }
    const bufferLength = 32;
    const xBuffer = new Float32Array(bufferLength);
    const yBuffer = new Float32Array(bufferLength);
    const filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
    const numberOfChannels = renderedBuffer.numberOfChannels;
    for (let i = 0; i < numberOfChannels; i += 1) {
      const input = renderedBuffer.getChannelData(i);
      const output = filteredBuffer.getChannelData(i);
      xBuffer.fill(0);
      yBuffer.fill(0);
      filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
    }
    return filteredBuffer;
  };
  var createIIRFilterNodeRendererFactory = (createNativeAudioBufferSourceNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (feedback, feedforward) => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let filteredBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioBufferSourceNode = null;
        let nativeIIRFilterNode = getNativeAudioNode2(proxy);
        const nativeIIRFilterNodeIsOwnedByContext = isOwnedByContext(nativeIIRFilterNode, nativeOfflineAudioContext);
        if (nativeOfflineAudioContext.createIIRFilter === void 0) {
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
        } else if (!nativeIIRFilterNodeIsOwnedByContext) {
          nativeIIRFilterNode = nativeOfflineAudioContext.createIIRFilter(feedforward, feedback);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode === null ? nativeIIRFilterNode : nativeAudioBufferSourceNode);
        if (nativeAudioBufferSourceNode !== null) {
          if (filteredBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
              // Bug #47: The AudioDestinationNode in Safari gets not initialized correctly.
              proxy.context.destination.channelCount,
              // Bug #17: Safari does not yet expose the length.
              proxy.context.length,
              nativeOfflineAudioContext.sampleRate
            );
            filteredBufferPromise = (async () => {
              await renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);
              const renderedBuffer = await renderNativeOfflineAudioContext2(partialOfflineAudioContext);
              return filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
            })();
          }
          const filteredBuffer = await filteredBufferPromise;
          nativeAudioBufferSourceNode.buffer = filteredBuffer;
          nativeAudioBufferSourceNode.start(0);
          return nativeAudioBufferSourceNode;
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);
        return nativeIIRFilterNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/increment-cycle-counter-factory.js
  var createIncrementCycleCounterFactory = (cycleCounters, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, isActiveAudioNode2) => {
    return (isOffline) => {
      return (audioNode, count) => {
        const cycleCounter = cycleCounters.get(audioNode);
        if (cycleCounter === void 0) {
          if (!isOffline && isActiveAudioNode2(audioNode)) {
            const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
            const { outputs } = getAudioNodeConnections2(audioNode);
            for (const output of outputs) {
              if (isAudioNodeOutputConnection(output)) {
                const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
                disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
              } else {
                const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
                nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
              }
            }
          }
          cycleCounters.set(audioNode, count);
        } else {
          cycleCounters.set(audioNode, cycleCounter + count);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-context.js
  var createIsAnyAudioContext = (contextStore, isNativeAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeAudioContext2(nativeContext) || isNativeAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-node.js
  var createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode3) => {
    return (anything) => audioNodeStore.has(anything) || isNativeAudioNode3(anything);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-param.js
  var createIsAnyAudioParam = (audioParamStore, isNativeAudioParam2) => {
    return (anything) => audioParamStore.has(anything) || isNativeAudioParam2(anything);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-offline-audio-context.js
  var createIsAnyOfflineAudioContext = (contextStore, isNativeOfflineAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeOfflineAudioContext2(nativeContext) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-context.js
  var createIsNativeAudioContext = (nativeAudioContextConstructor2) => {
    return (anything) => {
      return nativeAudioContextConstructor2 !== null && anything instanceof nativeAudioContextConstructor2;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-node.js
  var createIsNativeAudioNode = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioNode === "function" && anything instanceof window3.AudioNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-param.js
  var createIsNativeAudioParam = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioParam === "function" && anything instanceof window3.AudioParam;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-context.js
  var createIsNativeContext = (isNativeAudioContext2, isNativeOfflineAudioContext2) => {
    return (anything) => {
      return isNativeAudioContext2(anything) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-offline-audio-context.js
  var createIsNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor2) => {
    return (anything) => {
      return nativeOfflineAudioContextConstructor2 !== null && anything instanceof nativeOfflineAudioContextConstructor2;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-secure-context.js
  var createIsSecureContext = (window3) => window3 !== null && window3.isSecureContext;

  // node_modules/standardized-audio-context/build/es2019/factories/media-element-audio-source-node-constructor.js
  var createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaElementAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaElementAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw TypeError();
        }
        super(context, true, nativeMediaElementAudioSourceNode, null);
        this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-destination-node-constructor.js
  var DEFAULT_OPTIONS14 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  };
  var createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioDestinationNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioDestinationNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        const mergedOptions = { ...DEFAULT_OPTIONS14, ...options };
        const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode2(nativeContext, mergedOptions);
        super(context, false, nativeMediaStreamAudioDestinationNode, null);
        this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
      }
      get stream() {
        return this._nativeMediaStreamAudioDestinationNode.stream;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-source-node-constructor.js
  var createMediaStreamAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        super(context, true, nativeMediaStreamAudioSourceNode, null);
        this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-track-audio-source-node-constructor.js
  var createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamTrackAudioSourceNode2, getNativeContext2) => {
    return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode2(nativeContext, options);
        super(context, true, nativeMediaStreamTrackAudioSourceNode, null);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-audio-context-constructor.js
  var createMinimalAudioContextConstructor = (createInvalidStateError2, createNotSupportedError2, createUnknownError2, minimalBaseAudioContextConstructor2, nativeAudioContextConstructor2) => {
    return class MinimalAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : (
          /*
           * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
           * ScriptProcessorNode.
           */
          Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate
        );
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-base-audio-context-constructor.js
  var createMinimalBaseAudioContextConstructor = (audioDestinationNodeConstructor2, createAudioListener2, eventTargetConstructor2, isNativeOfflineAudioContext2, unrenderedAudioWorkletNodeStore2, wrapEventListener2) => {
    return class MinimalBaseAudioContext extends eventTargetConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext);
        this._nativeContext = _nativeContext;
        CONTEXT_STORE.set(this, _nativeContext);
        if (isNativeOfflineAudioContext2(_nativeContext)) {
          unrenderedAudioWorkletNodeStore2.set(_nativeContext, /* @__PURE__ */ new Set());
        }
        this._destination = new audioDestinationNodeConstructor2(this, numberOfChannels);
        this._listener = createAudioListener2(this, _nativeContext);
        this._onstatechange = null;
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeContext.onstatechange = wrappedListener;
        const nativeOnStateChange = this._nativeContext.onstatechange;
        this._onstatechange = nativeOnStateChange !== null && nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-promise-support.js
  var testPromiseSupport = (nativeContext) => {
    const uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
    try {
      const promise = nativeContext.decodeAudioData(uint32Array.buffer, () => {
      });
      if (promise === void 0) {
        return false;
      }
      promise.catch(() => {
      });
      return true;
    } catch {
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-offline-audio-context-constructor.js
  var DEFAULT_OPTIONS15 = {
    numberOfChannels: 1
  };
  var createMinimalOfflineAudioContextConstructor = (cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, minimalBaseAudioContextConstructor2, startRendering2) => {
    return class MinimalOfflineAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options) {
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS15, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", /* @__PURE__ */ (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/monitor-connections.js
  var createMonitorConnections = (insertElementInSet2, isNativeAudioNode3) => {
    return (nativeAudioNode, whenConnected, whenDisconnected) => {
      const connections = /* @__PURE__ */ new Set();
      nativeAudioNode.connect = /* @__PURE__ */ ((connect) => {
        return (destination, output = 0, input = 0) => {
          const wasDisconnected = connections.size === 0;
          if (isNativeAudioNode3(destination)) {
            connect.call(nativeAudioNode, destination, output, input);
            insertElementInSet2(connections, [destination, output, input], (connection) => connection[0] === destination && connection[1] === output && connection[2] === input, true);
            if (wasDisconnected) {
              whenConnected();
            }
            return destination;
          }
          connect.call(nativeAudioNode, destination, output);
          insertElementInSet2(connections, [destination, output], (connection) => connection[0] === destination && connection[1] === output, true);
          if (wasDisconnected) {
            whenConnected();
          }
          return;
        };
      })(nativeAudioNode.connect);
      nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect) => {
        return (destinationOrOutput, output, input) => {
          const wasConnected = connections.size > 0;
          if (destinationOrOutput === void 0) {
            disconnect.apply(nativeAudioNode);
            connections.clear();
          } else if (typeof destinationOrOutput === "number") {
            disconnect.call(nativeAudioNode, destinationOrOutput);
            for (const connection of connections) {
              if (connection[1] === destinationOrOutput) {
                connections.delete(connection);
              }
            }
          } else {
            if (isNativeAudioNode3(destinationOrOutput)) {
              disconnect.call(nativeAudioNode, destinationOrOutput, output, input);
            } else {
              disconnect.call(nativeAudioNode, destinationOrOutput, output);
            }
            for (const connection of connections) {
              if (connection[0] === destinationOrOutput && (output === void 0 || connection[1] === output) && (input === void 0 || connection[2] === input)) {
                connections.delete(connection);
              }
            }
          }
          const isDisconnected = connections.size === 0;
          if (wasConnected && isDisconnected) {
            whenDisconnected();
          }
        };
      })(nativeAudioNode.disconnect);
      return nativeAudioNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-option.js
  var assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
    const value = options[option];
    if (value !== void 0 && value !== nativeAudioNode[option]) {
      nativeAudioNode[option] = value;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-options.js
  var assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCount");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCountMode");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelInterpretation");
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-analyser-node-get-float-time-domain-data-method-support.js
  var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = (nativeAnalyserNode) => {
    return typeof nativeAnalyserNode.getFloatTimeDomainData === "function";
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-analyser-node-get-float-time-domain-data-method.js
  var wrapAnalyserNodeGetFloatTimeDomainDataMethod = (nativeAnalyserNode) => {
    nativeAnalyserNode.getFloatTimeDomainData = (array) => {
      const byteTimeDomainData = new Uint8Array(array.length);
      nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
      const length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);
      for (let i = 0; i < length; i += 1) {
        array[i] = (byteTimeDomainData[i] - 128) * 78125e-7;
      }
      return array;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-analyser-node-factory.js
  var createNativeAnalyserNodeFactory = (cacheTestResult2, createIndexSizeError2) => {
    return (nativeContext, options) => {
      const nativeAnalyserNode = nativeContext.createAnalyser();
      assignNativeAudioNodeOptions(nativeAnalyserNode, options);
      if (!(options.maxDecibels > options.minDecibels)) {
        throw createIndexSizeError2();
      }
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "fftSize");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "maxDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "minDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "smoothingTimeConstant");
      if (!cacheTestResult2(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode))) {
        wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
      }
      return nativeAnalyserNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-constructor.js
  var createNativeAudioBufferConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioBuffer")) {
      return window3.AudioBuffer;
    }
    return null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-audio-param-value.js
  var assignNativeAudioNodeAudioParamValue = (nativeAudioNode, options, audioParam) => {
    const value = options[audioParam];
    if (value !== void 0 && value !== nativeAudioNode[audioParam].value) {
      nativeAudioNode[audioParam].value = value;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-consecutive-calls.js
  var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = /* @__PURE__ */ ((start) => {
      let isScheduled = false;
      return (when = 0, offset = 0, duration) => {
        if (isScheduled) {
          throw createInvalidStateError();
        }
        start.call(nativeAudioBufferSourceNode, when, offset, duration);
        isScheduled = true;
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-start-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.start = /* @__PURE__ */ ((start) => {
      return (when = 0, offset = 0, duration) => {
        if (typeof duration === "number" && duration < 0 || offset < 0 || when < 0) {
          throw new RangeError("The parameters can't be negative.");
        }
        start.call(nativeAudioScheduledSourceNode, when, offset, duration);
      };
    })(nativeAudioScheduledSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      return (when = 0) => {
        if (when < 0) {
          throw new RangeError("The parameter can't be negative.");
        }
        stop.call(nativeAudioScheduledSourceNode, when);
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-source-node-factory.js
  var createNativeAudioBufferSourceNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioBufferSourceNodeStartMethodOffsetClampling, wrapAudioBufferSourceNodeStopMethodNullifiedBuffer, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
      assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "playbackRate");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "buffer");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loop");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopEnd");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopStart");
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, () => testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, () => testAudioBufferSourceNodeStartMethodOffsetClampingSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodOffsetClampling(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, () => testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStopMethodNullifiedBuffer(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      addSilentConnection2(nativeContext, nativeAudioBufferSourceNode);
      return nativeAudioBufferSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-context-constructor.js
  var createNativeAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioContext")) {
      return window3.AudioContext;
    }
    return window3.hasOwnProperty("webkitAudioContext") ? window3.webkitAudioContext : null;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-destination-node.js
  var createNativeAudioDestinationNodeFactory = (createNativeGainNode2, overwriteAccessors2) => {
    return (nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeContext.destination;
      if (nativeAudioDestinationNode.channelCount !== channelCount) {
        try {
          nativeAudioDestinationNode.channelCount = channelCount;
        } catch {
        }
      }
      if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== "explicit") {
        nativeAudioDestinationNode.channelCountMode = "explicit";
      }
      if (nativeAudioDestinationNode.maxChannelCount === 0) {
        Object.defineProperty(nativeAudioDestinationNode, "maxChannelCount", {
          value: channelCount
        });
      }
      const gainNode = createNativeGainNode2(nativeContext, {
        channelCount,
        channelCountMode: nativeAudioDestinationNode.channelCountMode,
        channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
        gain: 1
      });
      overwriteAccessors2(gainNode, "channelCount", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        try {
          nativeAudioDestinationNode.channelCount = value;
        } catch (err) {
          if (value > nativeAudioDestinationNode.maxChannelCount) {
            throw err;
          }
        }
      });
      overwriteAccessors2(gainNode, "channelCountMode", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelCountMode = value;
      });
      overwriteAccessors2(gainNode, "channelInterpretation", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelInterpretation = value;
      });
      Object.defineProperty(gainNode, "maxChannelCount", {
        get: () => nativeAudioDestinationNode.maxChannelCount
      });
      gainNode.connect(nativeAudioDestinationNode);
      return gainNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-constructor.js
  var createNativeAudioWorkletNodeConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    return window3.hasOwnProperty("AudioWorkletNode") ? window3.AudioWorkletNode : null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-clonability-of-audio-worklet-node-options.js
  var testClonabilityOfAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    const { port1 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-factory.js
  var createNativeAudioWorkletNodeFactory = (createInvalidStateError2, createNativeAudioWorkletNodeFaker2, createNativeGainNode2, createNotSupportedError2, monitorConnections2) => {
    return (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, options) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        try {
          const nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeContext, name, options);
          const patchedEventListeners = /* @__PURE__ */ new Map();
          let onprocessorerror = null;
          Object.defineProperties(nativeAudioWorkletNode, {
            /*
             * Bug #61: Overwriting the property accessors for channelCount and channelCountMode is necessary as long as some
             * browsers have no native implementation to achieve a consistent behavior.
             */
            channelCount: {
              get: () => options.channelCount,
              set: () => {
                throw createInvalidStateError2();
              }
            },
            channelCountMode: {
              get: () => "explicit",
              set: () => {
                throw createInvalidStateError2();
              }
            },
            // Bug #156: Chrome and Edge do not yet fire an ErrorEvent.
            onprocessorerror: {
              get: () => onprocessorerror,
              set: (value) => {
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.removeEventListener("processorerror", onprocessorerror);
                }
                onprocessorerror = typeof value === "function" ? value : null;
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.addEventListener("processorerror", onprocessorerror);
                }
              }
            }
          });
          nativeAudioWorkletNode.addEventListener = /* @__PURE__ */ ((addEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
                if (unpatchedEventListener !== null) {
                  const patchedEventListener = patchedEventListeners.get(args[1]);
                  if (patchedEventListener !== void 0) {
                    args[1] = patchedEventListener;
                  } else {
                    args[1] = (event) => {
                      if (event.type === "error") {
                        Object.defineProperties(event, {
                          type: { value: "processorerror" }
                        });
                        unpatchedEventListener(event);
                      } else {
                        unpatchedEventListener(new ErrorEvent(args[0], { ...event }));
                      }
                    };
                    patchedEventListeners.set(unpatchedEventListener, args[1]);
                  }
                }
              }
              addEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return addEventListener.call(nativeAudioWorkletNode, ...args);
            };
          })(nativeAudioWorkletNode.addEventListener);
          nativeAudioWorkletNode.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const patchedEventListener = patchedEventListeners.get(args[1]);
                if (patchedEventListener !== void 0) {
                  patchedEventListeners.delete(args[1]);
                  args[1] = patchedEventListener;
                }
              }
              removeEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return removeEventListener.call(nativeAudioWorkletNode, args[0], args[1], args[2]);
            };
          })(nativeAudioWorkletNode.removeEventListener);
          if (options.numberOfOutputs !== 0) {
            const nativeGainNode = createNativeGainNode2(nativeContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
            });
            nativeAudioWorkletNode.connect(nativeGainNode).connect(nativeContext.destination);
            const whenConnected = () => nativeGainNode.disconnect();
            const whenDisconnected = () => nativeGainNode.connect(nativeContext.destination);
            return monitorConnections2(nativeAudioWorkletNode, whenConnected, whenDisconnected);
          }
          return nativeAudioWorkletNode;
        } catch (err) {
          if (err.code === 11) {
            throw createNotSupportedError2();
          }
          throw err;
        }
      }
      if (processorConstructor === void 0) {
        throw createNotSupportedError2();
      }
      testClonabilityOfAudioWorkletNodeOptions(options);
      return createNativeAudioWorkletNodeFaker2(nativeContext, baseLatency, processorConstructor, options);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/compute-buffer-size.js
  var computeBufferSize = (baseLatency, sampleRate) => {
    if (baseLatency === null) {
      return 512;
    }
    return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/clone-audio-worklet-node-options.js
  var cloneAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    return new Promise((resolve, reject) => {
      const { port1, port2 } = new MessageChannel();
      port1.onmessage = ({ data }) => {
        port1.close();
        port2.close();
        resolve(data);
      };
      port1.onmessageerror = ({ data }) => {
        port1.close();
        port2.close();
        reject(data);
      };
      port2.postMessage(audioWorkletNodeOptions);
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor-promise.js
  var createAudioWorkletProcessorPromise = async (processorConstructor, audioWorkletNodeOptions) => {
    const clonedAudioWorkletNodeOptions = await cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);
    return new processorConstructor(clonedAudioWorkletNodeOptions);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor.js
  var createAudioWorkletProcessor = (nativeContext, nativeAudioWorkletNode, processorConstructor, audioWorkletNodeOptions) => {
    let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);
    if (nodeToProcessorMap === void 0) {
      nodeToProcessorMap = /* @__PURE__ */ new WeakMap();
      NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
    }
    const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);
    nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
    return audioWorkletProcessorPromise;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-faker-factory.js
  var createNativeAudioWorkletNodeFakerFactory = (connectMultipleOutputs2, createIndexSizeError2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNotSupportedError2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getActiveAudioWorkletNodeInputs2, monitorConnections2) => {
    return (nativeContext, baseLatency, processorConstructor, options) => {
      if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
        throw createNotSupportedError2();
      }
      const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
      if (outputChannelCount.some((channelCount) => channelCount < 1)) {
        throw createNotSupportedError2();
      }
      if (outputChannelCount.length !== options.numberOfOutputs) {
        throw createIndexSizeError2();
      }
      if (options.channelCountMode !== "explicit") {
        throw createNotSupportedError2();
      }
      const numberOfInputChannels = options.channelCount * options.numberOfInputs;
      const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
      const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
      if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
        throw createNotSupportedError2();
      }
      const messageChannel = new MessageChannel();
      const gainNodes = [];
      const inputChannelSplitterNodes = [];
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes.push(createNativeGainNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: options.channelCountMode,
          channelInterpretation: options.channelInterpretation,
          gain: 1
        }));
        inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: options.channelCount
        }));
      }
      const constantSourceNodes = [];
      if (processorConstructor.parameterDescriptors !== void 0) {
        for (const { defaultValue, maxValue, minValue, name } of processorConstructor.parameterDescriptors) {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: options.parameterData[name] !== void 0 ? options.parameterData[name] : defaultValue === void 0 ? 0 : defaultValue
          });
          Object.defineProperties(constantSourceNode.offset, {
            defaultValue: {
              get: () => defaultValue === void 0 ? 0 : defaultValue
            },
            maxValue: {
              get: () => maxValue === void 0 ? MOST_POSITIVE_SINGLE_FLOAT : maxValue
            },
            minValue: {
              get: () => minValue === void 0 ? MOST_NEGATIVE_SINGLE_FLOAT : minValue
            }
          });
          constantSourceNodes.push(constantSourceNode);
        }
      }
      const inputChannelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
      });
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const scriptProcessorNode = createNativeScriptProcessorNode2(
        nativeContext,
        bufferSize,
        numberOfInputChannels + numberOfParameters,
        // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        Math.max(1, numberOfOutputChannels)
      );
      const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: Math.max(1, numberOfOutputChannels),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, numberOfOutputChannels)
      });
      const outputChannelMergerNodes = [];
      for (let i = 0; i < options.numberOfOutputs; i += 1) {
        outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: outputChannelCount[i]
        }));
      }
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes[i].connect(inputChannelSplitterNodes[i]);
        for (let j = 0; j < options.channelCount; j += 1) {
          inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
        }
      }
      const parameterMap = new ReadOnlyMap(processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.map(({ name }, index) => {
        const constantSourceNode = constantSourceNodes[index];
        constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
        constantSourceNode.start(0);
        return [name, constantSourceNode.offset];
      }));
      inputChannelMergerNode.connect(scriptProcessorNode);
      let channelInterpretation = options.channelInterpretation;
      let onprocessorerror = null;
      const outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
      const nativeAudioWorkletNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return options.channelCount;
        },
        set channelCount(_) {
          throw createInvalidStateError2();
        },
        get channelCountMode() {
          return options.channelCountMode;
        },
        set channelCountMode(_) {
          throw createInvalidStateError2();
        },
        get channelInterpretation() {
          return channelInterpretation;
        },
        set channelInterpretation(value) {
          for (const gainNode of gainNodes) {
            gainNode.channelInterpretation = value;
          }
          channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return gainNodes;
        },
        get numberOfInputs() {
          return options.numberOfInputs;
        },
        get numberOfOutputs() {
          return options.numberOfOutputs;
        },
        get onprocessorerror() {
          return onprocessorerror;
        },
        set onprocessorerror(value) {
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.removeEventListener("processorerror", onprocessorerror);
          }
          onprocessorerror = typeof value === "function" ? value : null;
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.addEventListener("processorerror", onprocessorerror);
          }
        },
        get parameters() {
          return parameterMap;
        },
        get port() {
          return messageChannel.port2;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        connect: connectMultipleOutputs2.bind(null, outputAudioNodes),
        disconnect: disconnectMultipleOutputs2.bind(null, outputAudioNodes),
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      const patchedEventListeners = /* @__PURE__ */ new Map();
      messageChannel.port1.addEventListener = /* @__PURE__ */ ((addEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
            if (unpatchedEventListener !== null) {
              const patchedEventListener = patchedEventListeners.get(args[1]);
              if (patchedEventListener !== void 0) {
                args[1] = patchedEventListener;
              } else {
                args[1] = (event) => {
                  exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => unpatchedEventListener(event));
                };
                patchedEventListeners.set(unpatchedEventListener, args[1]);
              }
            }
          }
          return addEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.addEventListener);
      messageChannel.port1.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const patchedEventListener = patchedEventListeners.get(args[1]);
            if (patchedEventListener !== void 0) {
              patchedEventListeners.delete(args[1]);
              args[1] = patchedEventListener;
            }
          }
          return removeEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.removeEventListener);
      let onmessage = null;
      Object.defineProperty(messageChannel.port1, "onmessage", {
        get: () => onmessage,
        set: (value) => {
          if (typeof onmessage === "function") {
            messageChannel.port1.removeEventListener("message", onmessage);
          }
          onmessage = typeof value === "function" ? value : null;
          if (typeof onmessage === "function") {
            messageChannel.port1.addEventListener("message", onmessage);
            messageChannel.port1.start();
          }
        }
      });
      processorConstructor.prototype.port = messageChannel.port1;
      let audioWorkletProcessor = null;
      const audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorConstructor, options);
      audioWorkletProcessorPromise.then((dWrkltPrcssr) => audioWorkletProcessor = dWrkltPrcssr);
      const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
      const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
      const parameters = processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.reduce((prmtrs, { name }) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
      let isActive = true;
      const disconnectOutputsGraph = () => {
        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.disconnect(outputChannelSplitterNode);
        }
        for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
          const outputChannelMergerNode = outputChannelMergerNodes[i];
          for (let j = 0; j < outputChannelCount[i]; j += 1) {
            outputChannelSplitterNode.disconnect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[i];
        }
      };
      const activeInputIndexes = /* @__PURE__ */ new Map();
      scriptProcessorNode.onaudioprocess = ({ inputBuffer, outputBuffer }) => {
        if (audioWorkletProcessor !== null) {
          const activeInputs = getActiveAudioWorkletNodeInputs2(nativeAudioWorkletNodeFaker);
          for (let i = 0; i < bufferSize; i += 128) {
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < options.channelCount; k += 1) {
                copyFromChannel(inputBuffer, inputs[j], k, k, i);
              }
            }
            if (processorConstructor.parameterDescriptors !== void 0) {
              processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
                copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, i);
              });
            }
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < outputChannelCount[j]; k += 1) {
                if (outputs[j][k].byteLength === 0) {
                  outputs[j][k] = new Float32Array(128);
                }
              }
            }
            try {
              const potentiallyEmptyInputs = inputs.map((input, index) => {
                const activeInput = activeInputs[index];
                if (activeInput.size > 0) {
                  activeInputIndexes.set(index, bufferSize / 128);
                  return input;
                }
                const count = activeInputIndexes.get(index);
                if (count === void 0) {
                  return [];
                }
                if (input.every((channelData) => channelData.every((sample) => sample === 0))) {
                  if (count === 1) {
                    activeInputIndexes.delete(index);
                  } else {
                    activeInputIndexes.set(index, count - 1);
                  }
                }
                return input;
              });
              const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime + i / nativeContext.sampleRate, nativeContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
              isActive = activeSourceFlag;
              for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
                for (let k = 0; k < outputChannelCount[j]; k += 1) {
                  copyToChannel(outputBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
                }
                outputChannelSplitterNodeOutput += outputChannelCount[j];
              }
            } catch (error) {
              isActive = false;
              nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent("processorerror", {
                colno: error.colno,
                filename: error.filename,
                lineno: error.lineno,
                message: error.message
              }));
            }
            if (!isActive) {
              for (let j = 0; j < options.numberOfInputs; j += 1) {
                gainNodes[j].disconnect(inputChannelSplitterNodes[j]);
                for (let k = 0; k < options.channelCount; k += 1) {
                  inputChannelSplitterNodes[i].disconnect(inputChannelMergerNode, k, j * options.channelCount + k);
                }
              }
              if (processorConstructor.parameterDescriptors !== void 0) {
                const length = processorConstructor.parameterDescriptors.length;
                for (let j = 0; j < length; j += 1) {
                  const constantSourceNode = constantSourceNodes[j];
                  constantSourceNode.disconnect(inputChannelMergerNode, 0, numberOfInputChannels + j);
                  constantSourceNode.stop();
                }
              }
              inputChannelMergerNode.disconnect(scriptProcessorNode);
              scriptProcessorNode.onaudioprocess = null;
              if (isConnected) {
                disconnectOutputsGraph();
              } else {
                disconnectFakeGraph();
              }
              break;
            }
          }
        }
      };
      let isConnected = false;
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      const connectFakeGraph = () => scriptProcessorNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnectFakeGraph = () => {
        scriptProcessorNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      const whenConnected = () => {
        if (isActive) {
          disconnectFakeGraph();
          if (options.numberOfOutputs > 0) {
            scriptProcessorNode.connect(outputChannelSplitterNode);
          }
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
        }
        isConnected = true;
      };
      const whenDisconnected = () => {
        if (isActive) {
          connectFakeGraph();
          disconnectOutputsGraph();
        }
        isConnected = false;
      };
      connectFakeGraph();
      return monitorConnections2(nativeAudioWorkletNodeFaker, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-biquad-filter-node.js
  var createNativeBiquadFilterNode = (nativeContext, options) => {
    const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
    assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "Q");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "detune");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "frequency");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "gain");
    assignNativeAudioNodeOption(nativeBiquadFilterNode, options, "type");
    return nativeBiquadFilterNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-channel-merger-node-factory.js
  var createNativeChannelMergerNodeFactory = (nativeAudioContextConstructor2, wrapChannelMergerNode2) => {
    return (nativeContext, options) => {
      const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
        wrapChannelMergerNode2(nativeContext, nativeChannelMergerNode);
      }
      assignNativeAudioNodeOptions(nativeChannelMergerNode, options);
      return nativeChannelMergerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-channel-splitter-node.js
  var wrapChannelSplitterNode = (channelSplitterNode) => {
    const channelCount = channelSplitterNode.numberOfOutputs;
    Object.defineProperty(channelSplitterNode, "channelCount", {
      get: () => channelCount,
      set: (value) => {
        if (value !== channelCount) {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelCountMode", {
      get: () => "explicit",
      set: (value) => {
        if (value !== "explicit") {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelInterpretation", {
      get: () => "discrete",
      set: (value) => {
        if (value !== "discrete") {
          throw createInvalidStateError();
        }
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-channel-splitter-node.js
  var createNativeChannelSplitterNode = (nativeContext, options) => {
    const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
    assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
    wrapChannelSplitterNode(nativeChannelSplitterNode);
    return nativeChannelSplitterNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-factory.js
  var createNativeConstantSourceNodeFactory = (addSilentConnection2, cacheTestResult2, createNativeConstantSourceNodeFaker2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      if (nativeContext.createConstantSource === void 0) {
        return createNativeConstantSourceNodeFaker2(nativeContext, options);
      }
      const nativeConstantSourceNode = nativeContext.createConstantSource();
      assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, "offset");
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
      }
      addSilentConnection2(nativeContext, nativeConstantSourceNode);
      return nativeConstantSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/intercept-connections.js
  var interceptConnections = (original, interceptor) => {
    original.connect = interceptor.connect.bind(interceptor);
    original.disconnect = interceptor.disconnect.bind(interceptor);
    return original;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-faker-factory.js
  var createNativeConstantSourceNodeFakerFactory = (addSilentConnection2, createNativeAudioBufferSourceNode2, createNativeGainNode2, monitorConnections2) => {
    return (nativeContext, { offset, ...audioNodeOptions }) => {
      const audioBuffer = nativeContext.createBuffer(1, 2, 44100);
      const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const gainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: offset });
      const channelData = audioBuffer.getChannelData(0);
      channelData[0] = 1;
      channelData[1] = 1;
      audioBufferSourceNode.buffer = audioBuffer;
      audioBufferSourceNode.loop = true;
      const nativeConstantSourceNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return gainNode.channelCount;
        },
        set channelCount(value) {
          gainNode.channelCount = value;
        },
        get channelCountMode() {
          return gainNode.channelCountMode;
        },
        set channelCountMode(value) {
          gainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return gainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          gainNode.channelInterpretation = value;
        },
        get context() {
          return gainNode.context;
        },
        get inputs() {
          return [];
        },
        get numberOfInputs() {
          return audioBufferSourceNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return gainNode.numberOfOutputs;
        },
        get offset() {
          return gainNode.gain;
        },
        get onended() {
          return audioBufferSourceNode.onended;
        },
        set onended(value) {
          audioBufferSourceNode.onended = value;
        },
        addEventListener(...args) {
          return audioBufferSourceNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return audioBufferSourceNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return audioBufferSourceNode.removeEventListener(args[0], args[1], args[2]);
        },
        start(when = 0) {
          audioBufferSourceNode.start.call(audioBufferSourceNode, when);
        },
        stop(when = 0) {
          audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
        }
      };
      const whenConnected = () => audioBufferSourceNode.connect(gainNode);
      const whenDisconnected = () => audioBufferSourceNode.disconnect(gainNode);
      addSilentConnection2(nativeContext, audioBufferSourceNode);
      return monitorConnections2(interceptConnections(nativeConstantSourceNodeFaker, gainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-convolver-node-factory.js
  var createNativeConvolverNodeFactory = (createNotSupportedError2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeConvolverNode = nativeContext.createConvolver();
      assignNativeAudioNodeOptions(nativeConvolverNode, options);
      if (options.disableNormalization === nativeConvolverNode.normalize) {
        nativeConvolverNode.normalize = !options.disableNormalization;
      }
      assignNativeAudioNodeOption(nativeConvolverNode, options, "buffer");
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCount", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value > 2) {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCountMode", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value === "max") {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      return nativeConvolverNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-delay-node.js
  var createNativeDelayNode = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
    assignNativeAudioNodeOptions(nativeDelayNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, "delayTime");
    return nativeDelayNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-dynamics-compressor-node-factory.js
  var createNativeDynamicsCompressorNodeFactory = (createNotSupportedError2) => {
    return (nativeContext, options) => {
      const nativeDynamicsCompressorNode = nativeContext.createDynamicsCompressor();
      assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options);
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "attack");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "knee");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "ratio");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "release");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "threshold");
      return nativeDynamicsCompressorNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-gain-node.js
  var createNativeGainNode = (nativeContext, options) => {
    const nativeGainNode = nativeContext.createGain();
    assignNativeAudioNodeOptions(nativeGainNode, options);
    assignNativeAudioNodeAudioParamValue(nativeGainNode, options, "gain");
    return nativeGainNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-factory.js
  var createNativeIIRFilterNodeFactory = (createNativeIIRFilterNodeFaker2) => {
    return (nativeContext, baseLatency, options) => {
      if (nativeContext.createIIRFilter === void 0) {
        return createNativeIIRFilterNodeFaker2(nativeContext, baseLatency, options);
      }
      const nativeIIRFilterNode = nativeContext.createIIRFilter(options.feedforward, options.feedback);
      assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
      return nativeIIRFilterNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-faker-factory.js
  function divide(a, b) {
    const denominator = b[0] * b[0] + b[1] * b[1];
    return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
  }
  function multiply(a, b) {
    return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  }
  function evaluatePolynomial(coefficient, z) {
    let result = [0, 0];
    for (let i = coefficient.length - 1; i >= 0; i -= 1) {
      result = multiply(result, z);
      result[0] += coefficient[i];
    }
    return result;
  }
  var createNativeIIRFilterNodeFakerFactory = (createInvalidAccessError2, createInvalidStateError2, createNativeScriptProcessorNode2, createNotSupportedError2) => {
    return (nativeContext, baseLatency, { channelCount, channelCountMode, channelInterpretation, feedback, feedforward }) => {
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
      const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
      const feedbackLength = convertedFeedback.length;
      const feedforwardLength = convertedFeedforward.length;
      const minLength = Math.min(feedbackLength, feedforwardLength);
      if (feedbackLength === 0 || feedbackLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedback[0] === 0) {
        throw createInvalidStateError2();
      }
      if (feedforwardLength === 0 || feedforwardLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedforward[0] === 0) {
        throw createInvalidStateError2();
      }
      if (convertedFeedback[0] !== 1) {
        for (let i = 0; i < feedforwardLength; i += 1) {
          convertedFeedforward[i] /= convertedFeedback[0];
        }
        for (let i = 1; i < feedbackLength; i += 1) {
          convertedFeedback[i] /= convertedFeedback[0];
        }
      }
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, bufferSize, channelCount, channelCount);
      scriptProcessorNode.channelCount = channelCount;
      scriptProcessorNode.channelCountMode = channelCountMode;
      scriptProcessorNode.channelInterpretation = channelInterpretation;
      const bufferLength = 32;
      const bufferIndexes = [];
      const xBuffers = [];
      const yBuffers = [];
      for (let i = 0; i < channelCount; i += 1) {
        bufferIndexes.push(0);
        const xBuffer = new Float32Array(bufferLength);
        const yBuffer = new Float32Array(bufferLength);
        xBuffer.fill(0);
        yBuffer.fill(0);
        xBuffers.push(xBuffer);
        yBuffers.push(yBuffer);
      }
      scriptProcessorNode.onaudioprocess = (event) => {
        const inputBuffer = event.inputBuffer;
        const outputBuffer = event.outputBuffer;
        const numberOfChannels = inputBuffer.numberOfChannels;
        for (let i = 0; i < numberOfChannels; i += 1) {
          const input = inputBuffer.getChannelData(i);
          const output = outputBuffer.getChannelData(i);
          bufferIndexes[i] = filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffers[i], yBuffers[i], bufferIndexes[i], bufferLength, input, output);
        }
      };
      const nyquist = nativeContext.sampleRate / 2;
      const nativeIIRFilterNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return scriptProcessorNode.channelCount;
        },
        set channelCount(value) {
          scriptProcessorNode.channelCount = value;
        },
        get channelCountMode() {
          return scriptProcessorNode.channelCountMode;
        },
        set channelCountMode(value) {
          scriptProcessorNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return scriptProcessorNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          scriptProcessorNode.channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return [scriptProcessorNode];
        },
        get numberOfInputs() {
          return scriptProcessorNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return scriptProcessorNode.numberOfOutputs;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
          if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
            throw createInvalidAccessError2();
          }
          const length = frequencyHz.length;
          for (let i = 0; i < length; i += 1) {
            const omega = -Math.PI * (frequencyHz[i] / nyquist);
            const z = [Math.cos(omega), Math.sin(omega)];
            const numerator = evaluatePolynomial(convertedFeedforward, z);
            const denominator = evaluatePolynomial(convertedFeedback, z);
            const response = divide(numerator, denominator);
            magResponse[i] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
            phaseResponse[i] = Math.atan2(response[1], response[0]);
          }
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-element-audio-source-node.js
  var createNativeMediaElementAudioSourceNode = (nativeAudioContext, options) => {
    return nativeAudioContext.createMediaElementSource(options.mediaElement);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-destination-node.js
  var createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
    const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
    assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
    if (nativeMediaStreamAudioDestinationNode.numberOfOutputs === 1) {
      Object.defineProperty(nativeMediaStreamAudioDestinationNode, "numberOfOutputs", { get: () => 0 });
    }
    return nativeMediaStreamAudioDestinationNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-source-node.js
  var createNativeMediaStreamAudioSourceNode = (nativeAudioContext, { mediaStream }) => {
    const audioStreamTracks = mediaStream.getAudioTracks();
    audioStreamTracks.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const filteredAudioStreamTracks = audioStreamTracks.slice(0, 1);
    const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(new MediaStream(filteredAudioStreamTracks));
    Object.defineProperty(nativeMediaStreamAudioSourceNode, "mediaStream", { value: mediaStream });
    return nativeMediaStreamAudioSourceNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-track-audio-source-node-factory.js
  var createNativeMediaStreamTrackAudioSourceNodeFactory = (createInvalidStateError2, isNativeOfflineAudioContext2) => {
    return (nativeAudioContext, { mediaStreamTrack }) => {
      if (typeof nativeAudioContext.createMediaStreamTrackSource === "function") {
        return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
      }
      const mediaStream = new MediaStream([mediaStreamTrack]);
      const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);
      if (mediaStreamTrack.kind !== "audio") {
        throw createInvalidStateError2();
      }
      if (isNativeOfflineAudioContext2(nativeAudioContext)) {
        throw new TypeError();
      }
      return nativeMediaStreamAudioSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-offline-audio-context-constructor.js
  var createNativeOfflineAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("OfflineAudioContext")) {
      return window3.OfflineAudioContext;
    }
    return window3.hasOwnProperty("webkitOfflineAudioContext") ? window3.webkitOfflineAudioContext : null;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-oscillator-node-factory.js
  var createNativeOscillatorNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeOscillatorNode = nativeContext.createOscillator();
      assignNativeAudioNodeOptions(nativeOscillatorNode, options);
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "detune");
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "frequency");
      if (options.periodicWave !== void 0) {
        nativeOscillatorNode.setPeriodicWave(options.periodicWave);
      } else {
        assignNativeAudioNodeOption(nativeOscillatorNode, options, "type");
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeOscillatorNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
      }
      addSilentConnection2(nativeContext, nativeOscillatorNode);
      return nativeOscillatorNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-factory.js
  var createNativePannerNodeFactory = (createNativePannerNodeFaker2) => {
    return (nativeContext, options) => {
      const nativePannerNode = nativeContext.createPanner();
      if (nativePannerNode.orientationX === void 0) {
        return createNativePannerNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativePannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationZ");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionZ");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneInnerAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterGain");
      assignNativeAudioNodeOption(nativePannerNode, options, "distanceModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "maxDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "panningModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "refDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "rolloffFactor");
      return nativePannerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-faker-factory.js
  var createNativePannerNodeFakerFactory = (connectNativeAudioNodeToNativeAudioNode2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNativeWaveShaperNode2, createNotSupportedError2, disconnectNativeAudioNodeFromNativeAudioNode2, getFirstSample2, monitorConnections2) => {
    return (nativeContext, { coneInnerAngle, coneOuterAngle, coneOuterGain, distanceModel, maxDistance, orientationX, orientationY, orientationZ, panningModel, positionX, positionY, positionZ, refDistance, rolloffFactor, ...audioNodeOptions }) => {
      const pannerNode = nativeContext.createPanner();
      if (audioNodeOptions.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (audioNodeOptions.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
      const SINGLE_CHANNEL_OPTIONS = {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete"
      };
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        ...SINGLE_CHANNEL_OPTIONS,
        channelInterpretation: "speakers",
        numberOfInputs: 6
      });
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const orientationXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 1 });
      const orientationYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const orientationZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 6, 1);
      const waveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_OPTIONS,
        curve: new Float32Array([1, 1]),
        oversample: "none"
      });
      let lastOrientation = [orientationX, orientationY, orientationZ];
      let lastPosition = [positionX, positionY, positionZ];
      const buffer = new Float32Array(1);
      scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
        const orientation = [
          getFirstSample2(inputBuffer, buffer, 0),
          getFirstSample2(inputBuffer, buffer, 1),
          getFirstSample2(inputBuffer, buffer, 2)
        ];
        if (orientation.some((value, index) => value !== lastOrientation[index])) {
          pannerNode.setOrientation(...orientation);
          lastOrientation = orientation;
        }
        const positon = [
          getFirstSample2(inputBuffer, buffer, 3),
          getFirstSample2(inputBuffer, buffer, 4),
          getFirstSample2(inputBuffer, buffer, 5)
        ];
        if (positon.some((value, index) => value !== lastPosition[index])) {
          pannerNode.setPosition(...positon);
          lastPosition = positon;
        }
      };
      Object.defineProperty(orientationYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(orientationZGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionXGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionZGainNode.gain, "defaultValue", { get: () => 0 });
      const nativePannerNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return pannerNode.channelCount;
        },
        set channelCount(value) {
          if (value > 2) {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCount = value;
          pannerNode.channelCount = value;
        },
        get channelCountMode() {
          return pannerNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
          pannerNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return pannerNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          pannerNode.channelInterpretation = value;
        },
        get coneInnerAngle() {
          return pannerNode.coneInnerAngle;
        },
        set coneInnerAngle(value) {
          pannerNode.coneInnerAngle = value;
        },
        get coneOuterAngle() {
          return pannerNode.coneOuterAngle;
        },
        set coneOuterAngle(value) {
          pannerNode.coneOuterAngle = value;
        },
        get coneOuterGain() {
          return pannerNode.coneOuterGain;
        },
        set coneOuterGain(value) {
          if (value < 0 || value > 1) {
            throw createInvalidStateError2();
          }
          pannerNode.coneOuterGain = value;
        },
        get context() {
          return pannerNode.context;
        },
        get distanceModel() {
          return pannerNode.distanceModel;
        },
        set distanceModel(value) {
          pannerNode.distanceModel = value;
        },
        get inputs() {
          return [inputGainNode];
        },
        get maxDistance() {
          return pannerNode.maxDistance;
        },
        set maxDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.maxDistance = value;
        },
        get numberOfInputs() {
          return pannerNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return pannerNode.numberOfOutputs;
        },
        get orientationX() {
          return orientationXGainNode.gain;
        },
        get orientationY() {
          return orientationYGainNode.gain;
        },
        get orientationZ() {
          return orientationZGainNode.gain;
        },
        get panningModel() {
          return pannerNode.panningModel;
        },
        set panningModel(value) {
          pannerNode.panningModel = value;
        },
        get positionX() {
          return positionXGainNode.gain;
        },
        get positionY() {
          return positionYGainNode.gain;
        },
        get positionZ() {
          return positionZGainNode.gain;
        },
        get refDistance() {
          return pannerNode.refDistance;
        },
        set refDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.refDistance = value;
        },
        get rolloffFactor() {
          return pannerNode.rolloffFactor;
        },
        set rolloffFactor(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.rolloffFactor = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
        nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
      }
      if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
        nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
      }
      if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
        nativePannerNodeFaker.coneOuterGain = coneOuterGain;
      }
      if (distanceModel !== nativePannerNodeFaker.distanceModel) {
        nativePannerNodeFaker.distanceModel = distanceModel;
      }
      if (maxDistance !== nativePannerNodeFaker.maxDistance) {
        nativePannerNodeFaker.maxDistance = maxDistance;
      }
      if (orientationX !== nativePannerNodeFaker.orientationX.value) {
        nativePannerNodeFaker.orientationX.value = orientationX;
      }
      if (orientationY !== nativePannerNodeFaker.orientationY.value) {
        nativePannerNodeFaker.orientationY.value = orientationY;
      }
      if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
        nativePannerNodeFaker.orientationZ.value = orientationZ;
      }
      if (panningModel !== nativePannerNodeFaker.panningModel) {
        nativePannerNodeFaker.panningModel = panningModel;
      }
      if (positionX !== nativePannerNodeFaker.positionX.value) {
        nativePannerNodeFaker.positionX.value = positionX;
      }
      if (positionY !== nativePannerNodeFaker.positionY.value) {
        nativePannerNodeFaker.positionY.value = positionY;
      }
      if (positionZ !== nativePannerNodeFaker.positionZ.value) {
        nativePannerNodeFaker.positionZ.value = positionZ;
      }
      if (refDistance !== nativePannerNodeFaker.refDistance) {
        nativePannerNodeFaker.refDistance = refDistance;
      }
      if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
        nativePannerNodeFaker.rolloffFactor = rolloffFactor;
      }
      if (lastOrientation[0] !== 1 || lastOrientation[1] !== 0 || lastOrientation[2] !== 0) {
        pannerNode.setOrientation(...lastOrientation);
      }
      if (lastPosition[0] !== 0 || lastPosition[1] !== 0 || lastPosition[2] !== 0) {
        pannerNode.setPosition(...lastPosition);
      }
      const whenConnected = () => {
        inputGainNode.connect(pannerNode);
        connectNativeAudioNodeToNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.connect(orientationXGainNode).connect(channelMergerNode, 0, 0);
        waveShaperNode.connect(orientationYGainNode).connect(channelMergerNode, 0, 1);
        waveShaperNode.connect(orientationZGainNode).connect(channelMergerNode, 0, 2);
        waveShaperNode.connect(positionXGainNode).connect(channelMergerNode, 0, 3);
        waveShaperNode.connect(positionYGainNode).connect(channelMergerNode, 0, 4);
        waveShaperNode.connect(positionZGainNode).connect(channelMergerNode, 0, 5);
        channelMergerNode.connect(scriptProcessorNode).connect(nativeContext.destination);
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(pannerNode);
        disconnectNativeAudioNodeFromNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.disconnect(orientationXGainNode);
        orientationXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationYGainNode);
        orientationYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationZGainNode);
        orientationZGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionXGainNode);
        positionXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionYGainNode);
        positionYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionZGainNode);
        positionZGainNode.disconnect(channelMergerNode);
        channelMergerNode.disconnect(scriptProcessorNode);
        scriptProcessorNode.disconnect(nativeContext.destination);
      };
      return monitorConnections2(interceptConnections(nativePannerNodeFaker, pannerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-periodic-wave-factory.js
  var createNativePeriodicWaveFactory = (createIndexSizeError2) => {
    return (nativeContext, { disableNormalization, imag, real }) => {
      const convertedImag = imag instanceof Float32Array ? imag : new Float32Array(imag);
      const convertedReal = real instanceof Float32Array ? real : new Float32Array(real);
      const nativePeriodicWave = nativeContext.createPeriodicWave(convertedReal, convertedImag, { disableNormalization });
      if (Array.from(imag).length < 2) {
        throw createIndexSizeError2();
      }
      return nativePeriodicWave;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-script-processor-node.js
  var createNativeScriptProcessorNode = (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
    return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-factory.js
  var createNativeStereoPannerNodeFactory = (createNativeStereoPannerNodeFaker, createNotSupportedError2) => {
    return (nativeContext, options) => {
      const channelCountMode = options.channelCountMode;
      if (channelCountMode === "clamped-max") {
        throw createNotSupportedError2();
      }
      if (nativeContext.createStereoPanner === void 0) {
        return createNativeStereoPannerNodeFaker(nativeContext, options);
      }
      const nativeStereoPannerNode = nativeContext.createStereoPanner();
      assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, "pan");
      Object.defineProperty(nativeStereoPannerNode, "channelCountMode", {
        get: () => channelCountMode,
        set: (value) => {
          if (value !== channelCountMode) {
            throw createNotSupportedError2();
          }
        }
      });
      return nativeStereoPannerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-faker-factory.js
  var createNativeStereoPannerNodeFakerFactory = (createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeGainNode2, createNativeWaveShaperNode2, createNotSupportedError2, monitorConnections2) => {
    const CURVE_SIZE = 16385;
    const DC_CURVE = new Float32Array([1, 1]);
    const HALF_PI = Math.PI / 2;
    const SINGLE_CHANNEL_OPTIONS = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" };
    const SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = { ...SINGLE_CHANNEL_OPTIONS, oversample: "none" };
    const buildInternalGraphForMono = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightWaveShaperCurve = new Float32Array(CURVE_SIZE);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        const x = i / (CURVE_SIZE - 1) * HALF_PI;
        leftWaveShaperCurve[i] = Math.cos(x);
        rightWaveShaperCurve[i] = Math.sin(x);
      }
      const leftGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: leftWaveShaperCurve });
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
      const rightGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: rightWaveShaperCurve });
      return {
        connectGraph() {
          inputGainNode.connect(leftGainNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.connect(rightGainNode);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.connect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.connect(leftGainNode.gain);
          rightWaveShaperNode.connect(rightGainNode.gain);
          leftGainNode.connect(channelMergerNode, 0, 0);
          rightGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(leftGainNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.disconnect(rightGainNode);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.disconnect(leftGainNode.gain);
          rightWaveShaperNode.disconnect(rightGainNode.gain);
          leftGainNode.disconnect(channelMergerNode, 0, 0);
          rightGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraphForStereo = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const centerIndex = Math.floor(CURVE_SIZE / 2);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        if (i > centerIndex) {
          const x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
          rightInputForLeftOutputWaveShaperCurve[i] = 0;
          rightInputForRightOutputWaveShaperCurve[i] = 1;
        } else {
          const x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = 1;
          leftInputForRightOutputWaveShaperCurve[i] = 0;
          rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          rightInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
        }
      }
      const channelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: 2
      });
      const leftInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: leftInputForLeftOutputWaveShaperCurve
      });
      const leftInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: leftInputForRightOutputWaveShaperCurve
      });
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
      const rightInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: rightInputForLeftOutputWaveShaperCurve
      });
      const rightInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: rightInputForRightOutputWaveShaperCurve
      });
      return {
        connectGraph() {
          inputGainNode.connect(channelSplitterNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.connect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.connect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(channelSplitterNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.disconnect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.disconnect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.disconnect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.disconnect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.disconnect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.disconnect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.disconnect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.disconnect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraph = (nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) => {
      if (channelCount === 1) {
        return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      if (channelCount === 2) {
        return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      throw createNotSupportedError2();
    };
    return (nativeContext, { channelCount, channelCountMode, pan, ...audioNodeOptions }) => {
      if (channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        ...audioNodeOptions,
        channelCount: 1,
        channelCountMode,
        numberOfInputs: 2
      });
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, channelCount, channelCountMode, gain: 1 });
      const panGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: pan
      });
      let { connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
      Object.defineProperty(panGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(panGainNode.gain, "maxValue", { get: () => 1 });
      Object.defineProperty(panGainNode.gain, "minValue", { get: () => -1 });
      const nativeStereoPannerNodeFakerFactory2 = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return inputGainNode.channelCount;
        },
        set channelCount(value) {
          if (inputGainNode.channelCount !== value) {
            if (isConnected) {
              disconnectGraph();
            }
            ({ connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode));
            if (isConnected) {
              connectGraph();
            }
          }
          inputGainNode.channelCount = value;
        },
        get channelCountMode() {
          return inputGainNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "clamped-max" || value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return inputGainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
        },
        get context() {
          return inputGainNode.context;
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return inputGainNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return inputGainNode.numberOfOutputs;
        },
        get pan() {
          return panGainNode.gain;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      let isConnected = false;
      const whenConnected = () => {
        connectGraph();
        isConnected = true;
      };
      const whenDisconnected = () => {
        disconnectGraph();
        isConnected = false;
      };
      return monitorConnections2(interceptConnections(nativeStereoPannerNodeFakerFactory2, channelMergerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-factory.js
  var createNativeWaveShaperNodeFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeWaveShaperNodeFaker2, isDCCurve2, monitorConnections2, nativeAudioContextConstructor2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeWaveShaperNode = nativeContext.createWaveShaper();
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext" && nativeContext.createGain().gain.automationRate === void 0) {
        return createNativeWaveShaperNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
      const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);
      if (curve !== null && curve.length < 2) {
        throw createInvalidStateError2();
      }
      assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, "curve");
      assignNativeAudioNodeOption(nativeWaveShaperNode, options, "oversample");
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      overwriteAccessors2(nativeWaveShaperNode, "curve", (get) => () => get.call(nativeWaveShaperNode), (set) => (value) => {
        set.call(nativeWaveShaperNode, value);
        if (isConnected) {
          if (isDCCurve2(value) && disconnectNativeAudioBufferSourceNode === null) {
            disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
          } else if (!isDCCurve2(value) && disconnectNativeAudioBufferSourceNode !== null) {
            disconnectNativeAudioBufferSourceNode();
            disconnectNativeAudioBufferSourceNode = null;
          }
        }
        return value;
      });
      const whenConnected = () => {
        isConnected = true;
        if (isDCCurve2(nativeWaveShaperNode.curve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
        }
      };
      const whenDisconnected = () => {
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(nativeWaveShaperNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-faker-factory.js
  var createNativeWaveShaperNodeFakerFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeGainNode2, isDCCurve2, monitorConnections2) => {
    return (nativeContext, { curve, oversample, ...audioNodeOptions }) => {
      const negativeWaveShaperNode = nativeContext.createWaveShaper();
      const positiveWaveShaperNode = nativeContext.createWaveShaper();
      assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
      assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const invertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
      const outputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const revertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      let unmodifiedCurve = null;
      const nativeWaveShaperNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return negativeWaveShaperNode.channelCount;
        },
        set channelCount(value) {
          inputGainNode.channelCount = value;
          invertGainNode.channelCount = value;
          negativeWaveShaperNode.channelCount = value;
          outputGainNode.channelCount = value;
          positiveWaveShaperNode.channelCount = value;
          revertGainNode.channelCount = value;
        },
        get channelCountMode() {
          return negativeWaveShaperNode.channelCountMode;
        },
        set channelCountMode(value) {
          inputGainNode.channelCountMode = value;
          invertGainNode.channelCountMode = value;
          negativeWaveShaperNode.channelCountMode = value;
          outputGainNode.channelCountMode = value;
          positiveWaveShaperNode.channelCountMode = value;
          revertGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return negativeWaveShaperNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          invertGainNode.channelInterpretation = value;
          negativeWaveShaperNode.channelInterpretation = value;
          outputGainNode.channelInterpretation = value;
          positiveWaveShaperNode.channelInterpretation = value;
          revertGainNode.channelInterpretation = value;
        },
        get context() {
          return negativeWaveShaperNode.context;
        },
        get curve() {
          return unmodifiedCurve;
        },
        set curve(value) {
          if (value !== null && value.length < 2) {
            throw createInvalidStateError2();
          }
          if (value === null) {
            negativeWaveShaperNode.curve = value;
            positiveWaveShaperNode.curve = value;
          } else {
            const curveLength = value.length;
            const negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            const positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            negativeCurve[0] = value[0];
            positiveCurve[0] = -value[curveLength - 1];
            const length = Math.ceil((curveLength + 1) / 2);
            const centerIndex = (curveLength + 1) / 2 - 1;
            for (let i = 1; i < length; i += 1) {
              const theoreticIndex = i / length * centerIndex;
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
              positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
            }
            negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
            negativeWaveShaperNode.curve = negativeCurve;
            positiveWaveShaperNode.curve = positiveCurve;
          }
          unmodifiedCurve = value;
          if (isConnected) {
            if (isDCCurve2(unmodifiedCurve) && disconnectNativeAudioBufferSourceNode === null) {
              disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
            } else if (disconnectNativeAudioBufferSourceNode !== null) {
              disconnectNativeAudioBufferSourceNode();
              disconnectNativeAudioBufferSourceNode = null;
            }
          }
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return negativeWaveShaperNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return negativeWaveShaperNode.numberOfOutputs;
        },
        get oversample() {
          return negativeWaveShaperNode.oversample;
        },
        set oversample(value) {
          negativeWaveShaperNode.oversample = value;
          positiveWaveShaperNode.oversample = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (curve !== null) {
        nativeWaveShaperNodeFaker.curve = curve instanceof Float32Array ? curve : new Float32Array(curve);
      }
      if (oversample !== nativeWaveShaperNodeFaker.oversample) {
        nativeWaveShaperNodeFaker.oversample = oversample;
      }
      const whenConnected = () => {
        inputGainNode.connect(negativeWaveShaperNode).connect(outputGainNode);
        inputGainNode.connect(invertGainNode).connect(positiveWaveShaperNode).connect(revertGainNode).connect(outputGainNode);
        isConnected = true;
        if (isDCCurve2(unmodifiedCurve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
        }
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(negativeWaveShaperNode);
        negativeWaveShaperNode.disconnect(outputGainNode);
        inputGainNode.disconnect(invertGainNode);
        invertGainNode.disconnect(positiveWaveShaperNode);
        positiveWaveShaperNode.disconnect(revertGainNode);
        revertGainNode.disconnect(outputGainNode);
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(interceptConnections(nativeWaveShaperNodeFaker, outputGainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/not-supported-error.js
  var createNotSupportedError = () => new DOMException("", "NotSupportedError");

  // node_modules/standardized-audio-context/build/es2019/factories/offline-audio-context-constructor.js
  var DEFAULT_OPTIONS16 = {
    numberOfChannels: 1
  };
  var createOfflineAudioContextConstructor = (baseAudioContextConstructor2, cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, startRendering2) => {
    return class OfflineAudioContext extends baseAudioContextConstructor2 {
      constructor(a, b, c) {
        let options;
        if (typeof a === "number" && b !== void 0 && c !== void 0) {
          options = { length: b, numberOfChannels: a, sampleRate: c };
        } else if (typeof a === "object") {
          options = a;
        } else {
          throw new Error("The given parameters are not valid.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS16, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", /* @__PURE__ */ (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-constructor.js
  var DEFAULT_OPTIONS17 = {
    channelCount: 2,
    channelCountMode: "max",
    // This attribute has no effect for nodes with no inputs.
    channelInterpretation: "speakers",
    // This attribute has no effect for nodes with no inputs.
    detune: 0,
    frequency: 440,
    periodicWave: void 0,
    type: "sine"
  };
  var createOscillatorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeOscillatorNode2, createOscillatorNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class OscillatorNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS17, ...options };
        const nativeOscillatorNode = createNativeOscillatorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer2() : null;
        const nyquist = context.sampleRate / 2;
        super(context, false, nativeOscillatorNode, oscillatorNodeRenderer);
        this._detune = createAudioParam2(this, isOffline, nativeOscillatorNode.detune, 153600, -153600);
        this._frequency = createAudioParam2(this, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
        this._nativeOscillatorNode = nativeOscillatorNode;
        this._onended = null;
        this._oscillatorNodeRenderer = oscillatorNodeRenderer;
        if (this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== void 0) {
          this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
        }
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeOscillatorNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeOscillatorNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get type() {
        return this._nativeOscillatorNode.type;
      }
      set type(value) {
        this._nativeOscillatorNode.type = value;
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = null;
        }
      }
      setPeriodicWave(periodicWave) {
        this._nativeOscillatorNode.setPeriodicWave(periodicWave);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = periodicWave;
        }
      }
      start(when = 0) {
        this._nativeOscillatorNode.start(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeOscillatorNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeOscillatorNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeOscillatorNode.stop(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-renderer-factory.js
  var createOscillatorNodeRendererFactory = (connectAudioParam2, createNativeOscillatorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeOscillatorNodes = /* @__PURE__ */ new WeakMap();
      let periodicWave = null;
      let start = null;
      let stop = null;
      const createOscillatorNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeOscillatorNode = getNativeAudioNode2(proxy);
        const nativeOscillatorNodeIsOwnedByContext = isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeOscillatorNode.channelCount,
            channelCountMode: nativeOscillatorNode.channelCountMode,
            channelInterpretation: nativeOscillatorNode.channelInterpretation,
            detune: nativeOscillatorNode.detune.value,
            frequency: nativeOscillatorNode.frequency.value,
            periodicWave: periodicWave === null ? void 0 : periodicWave,
            type: nativeOscillatorNode.type
          };
          nativeOscillatorNode = createNativeOscillatorNode2(nativeOfflineAudioContext, options);
          if (start !== null) {
            nativeOscillatorNode.start(start);
          }
          if (stop !== null) {
            nativeOscillatorNode.stop(stop);
          }
        }
        renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeOscillatorNode);
        return nativeOscillatorNode;
      };
      return {
        set periodicWave(value) {
          periodicWave = value;
        },
        set start(value) {
          start = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeOscillatorNode !== void 0) {
            return Promise.resolve(renderedNativeOscillatorNode);
          }
          return createOscillatorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/panner-node-constructor.js
  var DEFAULT_OPTIONS18 = {
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: "inverse",
    maxDistance: 1e4,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: "equalpower",
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
  };
  var createPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativePannerNode2, createPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class PannerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS18, ...options };
        const nativePannerNode = createNativePannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const pannerNodeRenderer = isOffline ? createPannerNodeRenderer2() : null;
        super(context, false, nativePannerNode, pannerNodeRenderer);
        this._nativePannerNode = nativePannerNode;
        this._orientationX = createAudioParam2(this, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationY = createAudioParam2(this, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationZ = createAudioParam2(this, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionX = createAudioParam2(this, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionY = createAudioParam2(this, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionZ = createAudioParam2(this, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        setAudioNodeTailTime2(this, 1);
      }
      get coneInnerAngle() {
        return this._nativePannerNode.coneInnerAngle;
      }
      set coneInnerAngle(value) {
        this._nativePannerNode.coneInnerAngle = value;
      }
      get coneOuterAngle() {
        return this._nativePannerNode.coneOuterAngle;
      }
      set coneOuterAngle(value) {
        this._nativePannerNode.coneOuterAngle = value;
      }
      get coneOuterGain() {
        return this._nativePannerNode.coneOuterGain;
      }
      set coneOuterGain(value) {
        this._nativePannerNode.coneOuterGain = value;
      }
      get distanceModel() {
        return this._nativePannerNode.distanceModel;
      }
      set distanceModel(value) {
        this._nativePannerNode.distanceModel = value;
      }
      get maxDistance() {
        return this._nativePannerNode.maxDistance;
      }
      set maxDistance(value) {
        this._nativePannerNode.maxDistance = value;
      }
      get orientationX() {
        return this._orientationX;
      }
      get orientationY() {
        return this._orientationY;
      }
      get orientationZ() {
        return this._orientationZ;
      }
      get panningModel() {
        return this._nativePannerNode.panningModel;
      }
      set panningModel(value) {
        this._nativePannerNode.panningModel = value;
      }
      get positionX() {
        return this._positionX;
      }
      get positionY() {
        return this._positionY;
      }
      get positionZ() {
        return this._positionZ;
      }
      get refDistance() {
        return this._nativePannerNode.refDistance;
      }
      set refDistance(value) {
        this._nativePannerNode.refDistance = value;
      }
      get rolloffFactor() {
        return this._nativePannerNode.rolloffFactor;
      }
      set rolloffFactor(value) {
        this._nativePannerNode.rolloffFactor = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/panner-node-renderer-factory.js
  var createPannerNodeRendererFactory = (connectAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativePannerNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let renderedBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeGainNode = null;
        let nativePannerNode = getNativeAudioNode2(proxy);
        const commonAudioNodeOptions = {
          channelCount: nativePannerNode.channelCount,
          channelCountMode: nativePannerNode.channelCountMode,
          channelInterpretation: nativePannerNode.channelInterpretation
        };
        const commonNativePannerNodeOptions = {
          ...commonAudioNodeOptions,
          coneInnerAngle: nativePannerNode.coneInnerAngle,
          coneOuterAngle: nativePannerNode.coneOuterAngle,
          coneOuterGain: nativePannerNode.coneOuterGain,
          distanceModel: nativePannerNode.distanceModel,
          maxDistance: nativePannerNode.maxDistance,
          panningModel: nativePannerNode.panningModel,
          refDistance: nativePannerNode.refDistance,
          rolloffFactor: nativePannerNode.rolloffFactor
        };
        const nativePannerNodeIsOwnedByContext = isOwnedByContext(nativePannerNode, nativeOfflineAudioContext);
        if ("bufferSize" in nativePannerNode) {
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
        } else if (!nativePannerNodeIsOwnedByContext) {
          const options = {
            ...commonNativePannerNodeOptions,
            orientationX: nativePannerNode.orientationX.value,
            orientationY: nativePannerNode.orientationY.value,
            orientationZ: nativePannerNode.orientationZ.value,
            positionX: nativePannerNode.positionX.value,
            positionY: nativePannerNode.positionY.value,
            positionZ: nativePannerNode.positionZ.value
          };
          nativePannerNode = createNativePannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeGainNode === null ? nativePannerNode : nativeGainNode);
        if (nativeGainNode !== null) {
          if (renderedBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
              6,
              // Bug #17: Safari does not yet expose the length.
              proxy.context.length,
              nativeOfflineAudioContext.sampleRate
            );
            const nativeChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: 6
            });
            nativeChannelMergerNode.connect(partialOfflineAudioContext.destination);
            renderedBufferPromise = (async () => {
              const nativeConstantSourceNodes = await Promise.all([
                proxy.orientationX,
                proxy.orientationY,
                proxy.orientationZ,
                proxy.positionX,
                proxy.positionY,
                proxy.positionZ
              ].map(async (audioParam, index) => {
                const nativeConstantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: index === 0 ? 1 : 0
                });
                await renderAutomation2(partialOfflineAudioContext, audioParam, nativeConstantSourceNode.offset);
                return nativeConstantSourceNode;
              }));
              for (let i = 0; i < 6; i += 1) {
                nativeConstantSourceNodes[i].connect(nativeChannelMergerNode, 0, i);
                nativeConstantSourceNodes[i].start(0);
              }
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            })();
          }
          const renderedBuffer = await renderedBufferPromise;
          const inputGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, inputGainNode);
          const channelDatas = [];
          for (let i = 0; i < renderedBuffer.numberOfChannels; i += 1) {
            channelDatas.push(renderedBuffer.getChannelData(i));
          }
          let lastOrientation = [channelDatas[0][0], channelDatas[1][0], channelDatas[2][0]];
          let lastPosition = [channelDatas[3][0], channelDatas[4][0], channelDatas[5][0]];
          let gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
          let partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, {
            ...commonNativePannerNodeOptions,
            orientationX: lastOrientation[0],
            orientationY: lastOrientation[1],
            orientationZ: lastOrientation[2],
            positionX: lastPosition[0],
            positionY: lastPosition[1],
            positionZ: lastPosition[2]
          });
          inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
          partialPannerNode.connect(nativeGainNode);
          for (let i = 128; i < renderedBuffer.length; i += 128) {
            const orientation = [channelDatas[0][i], channelDatas[1][i], channelDatas[2][i]];
            const positon = [channelDatas[3][i], channelDatas[4][i], channelDatas[5][i]];
            if (orientation.some((value, index) => value !== lastOrientation[index]) || positon.some((value, index) => value !== lastPosition[index])) {
              lastOrientation = orientation;
              lastPosition = positon;
              const currentTime = i / nativeOfflineAudioContext.sampleRate;
              gateGainNode.gain.setValueAtTime(0, currentTime);
              gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 0 });
              partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, {
                ...commonNativePannerNodeOptions,
                orientationX: lastOrientation[0],
                orientationY: lastOrientation[1],
                orientationZ: lastOrientation[2],
                positionX: lastPosition[0],
                positionY: lastPosition[1],
                positionZ: lastPosition[2]
              });
              gateGainNode.gain.setValueAtTime(1, currentTime);
              inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
              partialPannerNode.connect(nativeGainNode);
            }
          }
          return nativeGainNode;
        }
        if (!nativePannerNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        }
        if (isNativeAudioNodeFaker(nativePannerNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode);
        }
        return nativePannerNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNodeOrNativePannerNode !== void 0) {
            return Promise.resolve(renderedNativeGainNodeOrNativePannerNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/periodic-wave-constructor.js
  var DEFAULT_OPTIONS19 = {
    disableNormalization: false
  };
  var createPeriodicWaveConstructor = (createNativePeriodicWave2, getNativeContext2, periodicWaveStore, sanitizePeriodicWaveOptions2) => {
    return class PeriodicWave {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = sanitizePeriodicWaveOptions2({ ...DEFAULT_OPTIONS19, ...options });
        const periodicWave = createNativePeriodicWave2(nativeContext, mergedOptions);
        periodicWaveStore.add(periodicWave);
        return periodicWave;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === PeriodicWave.prototype || periodicWaveStore.has(instance);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-automation.js
  var createRenderAutomation = (getAudioParamRenderer, renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      const audioParamRenderer = getAudioParamRenderer(audioParam);
      audioParamRenderer.replay(nativeAudioParam);
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-node.js
  var createRenderInputsOfAudioNode = (getAudioNodeConnections2, getAudioNodeRenderer2, isPartOfACycle2) => {
    return async (audioNode, nativeOfflineAudioContext, nativeAudioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      await Promise.all(audioNodeConnections.activeInputs.map((connections, input) => Array.from(connections).map(async ([source, output]) => {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
        const destination = audioNode.context.destination;
        if (!isPartOfACycle2(source) && (audioNode !== destination || !isPartOfACycle2(audioNode))) {
          renderedNativeAudioNode.connect(nativeAudioNode, output, input);
        }
      })).reduce((allRenderingPromises, renderingPromises) => [...allRenderingPromises, ...renderingPromises], []));
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-param.js
  var createRenderInputsOfAudioParam = (getAudioNodeRenderer2, getAudioParamConnections2, isPartOfACycle2) => {
    return async (audioParam, nativeOfflineAudioContext, nativeAudioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      await Promise.all(Array.from(audioParamConnections.activeInputs).map(async ([source, output]) => {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
        if (!isPartOfACycle2(source)) {
          renderedNativeAudioNode.connect(nativeAudioParam, output);
        }
      }));
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-native-offline-audio-context.js
  var createRenderNativeOfflineAudioContext = (cacheTestResult2, createNativeGainNode2, createNativeScriptProcessorNode2, testOfflineAudioContextCurrentTimeSupport) => {
    return (nativeOfflineAudioContext) => {
      if (cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
        return Promise.resolve(cacheTestResult2(testOfflineAudioContextCurrentTimeSupport, testOfflineAudioContextCurrentTimeSupport)).then((isOfflineAudioContextCurrentTimeSupported) => {
          if (!isOfflineAudioContextCurrentTimeSupported) {
            const scriptProcessorNode = createNativeScriptProcessorNode2(nativeOfflineAudioContext, 512, 0, 1);
            nativeOfflineAudioContext.oncomplete = () => {
              scriptProcessorNode.onaudioprocess = null;
              scriptProcessorNode.disconnect();
            };
            scriptProcessorNode.onaudioprocess = () => nativeOfflineAudioContext.currentTime;
            scriptProcessorNode.connect(nativeOfflineAudioContext.destination);
          }
          return nativeOfflineAudioContext.startRendering();
        });
      }
      return new Promise((resolve) => {
        const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          gain: 0
        });
        nativeOfflineAudioContext.oncomplete = (event) => {
          gainNode.disconnect();
          resolve(event.renderedBuffer);
        };
        gainNode.connect(nativeOfflineAudioContext.destination);
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/set-active-audio-worklet-node-inputs.js
  var createSetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2) => {
    return (nativeAudioWorkletNode, activeInputs) => {
      activeAudioWorkletNodeInputsStore2.set(nativeAudioWorkletNode, activeInputs);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/set-audio-node-tail-time.js
  var createSetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode, tailTime) => audioNodeTailTimeStore2.set(audioNode, tailTime);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/start-rendering.js
  var createStartRendering = (audioBufferStore2, cacheTestResult2, getAudioNodeRenderer2, getUnrenderedAudioWorkletNodes2, renderNativeOfflineAudioContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer2(destination).render(destination, nativeOfflineAudioContext).then(() => Promise.all(Array.from(getUnrenderedAudioWorkletNodes2(nativeOfflineAudioContext)).map((audioWorkletNode) => getAudioNodeRenderer2(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext)))).then(() => renderNativeOfflineAudioContext2(nativeOfflineAudioContext)).then((audioBuffer) => {
      if (typeof audioBuffer.copyFromChannel !== "function") {
        wrapAudioBufferCopyChannelMethods2(audioBuffer);
        wrapAudioBufferGetChannelDataMethod(audioBuffer);
      } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
        wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
      }
      audioBufferStore2.add(audioBuffer);
      return audioBuffer;
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-constructor.js
  var DEFAULT_OPTIONS20 = {
    channelCount: 2,
    /*
     * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
     * behavior.
     */
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    pan: 0
  };
  var createStereoPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeStereoPannerNode2, createStereoPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class StereoPannerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS20, ...options };
        const nativeStereoPannerNode = createNativeStereoPannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer2() : null;
        super(context, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
        this._pan = createAudioParam2(this, isOffline, nativeStereoPannerNode.pan);
      }
      get pan() {
        return this._pan;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-renderer-factory.js
  var createStereoPannerNodeRendererFactory = (connectAudioParam2, createNativeStereoPannerNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeStereoPannerNodes = /* @__PURE__ */ new WeakMap();
      const createStereoPannerNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeStereoPannerNode = getNativeAudioNode2(proxy);
        const nativeStereoPannerNodeIsOwnedByContext = isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeStereoPannerNode.channelCount,
            channelCountMode: nativeStereoPannerNode.channelCountMode,
            channelInterpretation: nativeStereoPannerNode.channelInterpretation,
            pan: nativeStereoPannerNode.pan.value
          };
          nativeStereoPannerNode = createNativeStereoPannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        }
        if (isNativeAudioNodeFaker(nativeStereoPannerNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
        }
        return nativeStereoPannerNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);
          if (renderedNativeStereoPannerNode !== void 0) {
            return Promise.resolve(renderedNativeStereoPannerNode);
          }
          return createStereoPannerNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-audio-buffer-constructor-support.js
  var createTestAudioBufferConstructorSupport = (nativeAudioBufferConstructor2) => {
    return () => {
      if (nativeAudioBufferConstructor2 === null) {
        return false;
      }
      try {
        new nativeAudioBufferConstructor2({ length: 1, sampleRate: 44100 });
      } catch {
        return false;
      }
      return true;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-audio-worklet-processor-post-message-support.js
  var createTestAudioWorkletProcessorPostMessageSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return true;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
        type: "application/javascript; charset=utf-8"
      });
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isEmittingMessageEvents = false;
      let isEmittingProcessorErrorEvents = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        audioWorkletNode.port.onmessage = () => isEmittingMessageEvents = true;
        audioWorkletNode.onprocessorerror = () => isEmittingProcessorErrorEvents = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        await offlineAudioContext.startRendering();
        await new Promise((resolve) => setTimeout(resolve));
      } catch {
      } finally {
        URL.revokeObjectURL(url);
      }
      return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-offline-audio-context-current-time-support.js
  var createTestOfflineAudioContextCurrentTimeSupport = (createNativeGainNode2, nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      return new Promise((resolve) => {
        nativeOfflineAudioContext.oncomplete = () => {
          gainNode.disconnect();
          resolve(nativeOfflineAudioContext.currentTime !== 0);
        };
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/unknown-error.js
  var createUnknownError = () => new DOMException("", "UnknownError");

  // node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-constructor.js
  var DEFAULT_OPTIONS21 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    curve: null,
    oversample: "none"
  };
  var createWaveShaperNodeConstructor = (audioNodeConstructor2, createInvalidStateError2, createNativeWaveShaperNode2, createWaveShaperNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class WaveShaperNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS21, ...options };
        const nativeWaveShaperNode = createNativeWaveShaperNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer2() : null;
        super(context, true, nativeWaveShaperNode, waveShaperNodeRenderer);
        this._isCurveNullified = false;
        this._nativeWaveShaperNode = nativeWaveShaperNode;
        setAudioNodeTailTime2(this, 1);
      }
      get curve() {
        if (this._isCurveNullified) {
          return null;
        }
        return this._nativeWaveShaperNode.curve;
      }
      set curve(value) {
        if (value === null) {
          this._isCurveNullified = true;
          this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
        } else {
          if (value.length < 2) {
            throw createInvalidStateError2();
          }
          this._isCurveNullified = false;
          this._nativeWaveShaperNode.curve = value;
        }
      }
      get oversample() {
        return this._nativeWaveShaperNode.oversample;
      }
      set oversample(value) {
        this._nativeWaveShaperNode.oversample = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-renderer-factory.js
  var createWaveShaperNodeRendererFactory = (createNativeWaveShaperNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeWaveShaperNodes = /* @__PURE__ */ new WeakMap();
      const createWaveShaperNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeWaveShaperNode = getNativeAudioNode2(proxy);
        const nativeWaveShaperNodeIsOwnedByContext = isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext);
        if (!nativeWaveShaperNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeWaveShaperNode.channelCount,
            channelCountMode: nativeWaveShaperNode.channelCountMode,
            channelInterpretation: nativeWaveShaperNode.channelInterpretation,
            curve: nativeWaveShaperNode.curve,
            oversample: nativeWaveShaperNode.oversample
          };
          nativeWaveShaperNode = createNativeWaveShaperNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
        if (isNativeAudioNodeFaker(nativeWaveShaperNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
        }
        return nativeWaveShaperNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
          if (renderedNativeWaveShaperNode !== void 0) {
            return Promise.resolve(renderedNativeWaveShaperNode);
          }
          return createWaveShaperNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/window.js
  var createWindow = () => typeof window === "undefined" ? null : window;

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods.js
  var createWrapAudioBufferCopyChannelMethods = (convertNumberToUnsignedLong2, createIndexSizeError2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const destinationLength = destination.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < destinationLength; i += 1) {
          destination[i] = channelData[i + bufferOffset];
        }
      };
      audioBuffer.copyToChannel = (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const sourceLength = source.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < sourceLength; i += 1) {
          channelData[i + bufferOffset] = source[i];
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods-out-of-bounds.js
  var createWrapAudioBufferCopyChannelMethodsOutOfBounds = (convertNumberToUnsignedLong2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = /* @__PURE__ */ ((copyFromChannel2) => {
        return (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyFromChannel2.call(audioBuffer, destination, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyFromChannel);
      audioBuffer.copyToChannel = /* @__PURE__ */ ((copyToChannel2) => {
        return (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyToChannel2.call(audioBuffer, source, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyToChannel);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-source-node-stop-method-nullified-buffer.js
  var createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer = (overwriteAccessors2) => {
    return (nativeAudioBufferSourceNode, nativeContext) => {
      const nullifiedBuffer = nativeContext.createBuffer(1, 1, 44100);
      if (nativeAudioBufferSourceNode.buffer === null) {
        nativeAudioBufferSourceNode.buffer = nullifiedBuffer;
      }
      overwriteAccessors2(nativeAudioBufferSourceNode, "buffer", (get) => () => {
        const value = get.call(nativeAudioBufferSourceNode);
        return value === nullifiedBuffer ? null : value;
      }, (set) => (value) => {
        return set.call(nativeAudioBufferSourceNode, value === null ? nullifiedBuffer : value);
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-channel-merger-node.js
  var createWrapChannelMergerNode = (createInvalidStateError2, monitorConnections2) => {
    return (nativeContext, channelMergerNode) => {
      channelMergerNode.channelCount = 1;
      channelMergerNode.channelCountMode = "explicit";
      Object.defineProperty(channelMergerNode, "channelCount", {
        get: () => 1,
        set: () => {
          throw createInvalidStateError2();
        }
      });
      Object.defineProperty(channelMergerNode, "channelCountMode", {
        get: () => "explicit",
        set: () => {
          throw createInvalidStateError2();
        }
      });
      const audioBufferSourceNode = nativeContext.createBufferSource();
      const whenConnected = () => {
        const length = channelMergerNode.numberOfInputs;
        for (let i = 0; i < length; i += 1) {
          audioBufferSourceNode.connect(channelMergerNode, 0, i);
        }
      };
      const whenDisconnected = () => audioBufferSourceNode.disconnect(channelMergerNode);
      monitorConnections2(channelMergerNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-first-sample.js
  var getFirstSample = (audioBuffer, buffer, channelNumber) => {
    if (audioBuffer.copyFromChannel === void 0) {
      return audioBuffer.getChannelData(channelNumber)[0];
    }
    audioBuffer.copyFromChannel(buffer, channelNumber);
    return buffer[0];
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-dc-curve.js
  var isDCCurve = (curve) => {
    if (curve === null) {
      return false;
    }
    const length = curve.length;
    if (length % 2 !== 0) {
      return curve[Math.floor(length / 2)] !== 0;
    }
    return curve[length / 2 - 1] + curve[length / 2] !== 0;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/overwrite-accessors.js
  var overwriteAccessors = (object, property, createGetter, createSetter) => {
    let prototype = object;
    while (!prototype.hasOwnProperty(property)) {
      prototype = Object.getPrototypeOf(prototype);
    }
    const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-audio-worklet-node-options.js
  var sanitizeAudioWorkletNodeOptions = (options) => {
    return {
      ...options,
      outputChannelCount: options.outputChannelCount !== void 0 ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ? (
        /*
         * Bug #61: This should be the computedNumberOfChannels, but unfortunately that is almost impossible to fake. That's why
         * the channelCountMode is required to be 'explicit' as long as there is not a native implementation in every browser. That
         * makes sure the computedNumberOfChannels is equivilant to the channelCount which makes it much easier to compute.
         */
        [options.channelCount]
      ) : Array.from({ length: options.numberOfOutputs }, () => 1)
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-channel-splitter-options.js
  var sanitizeChannelSplitterOptions = (options) => {
    return { ...options, channelCount: options.numberOfOutputs };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-periodic-wave-options.js
  var sanitizePeriodicWaveOptions = (options) => {
    const { imag, real } = options;
    if (imag === void 0) {
      if (real === void 0) {
        return { ...options, imag: [0, 0], real: [0, 0] };
      }
      return { ...options, imag: Array.from(real, () => 0), real };
    }
    if (real === void 0) {
      return { ...options, imag, real: Array.from(imag, () => 0) };
    }
    return { ...options, imag, real };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-value-at-time-until-possible.js
  var setValueAtTimeUntilPossible = (audioParam, value, startTime) => {
    try {
      audioParam.setValueAtTime(value, startTime);
    } catch (err) {
      if (err.code !== 9) {
        throw err;
      }
      setValueAtTimeUntilPossible(audioParam, value, startTime + 1e-7);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-consecutive-calls-support.js
  var testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.start();
    } catch {
      return true;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-offset-clamping-support.js
  var testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    try {
      nativeAudioBufferSourceNode.start(0, 1);
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-stop-method-nullified-buffer-support.js
  var testAudioBufferSourceNodeStopMethodNullifiedBufferSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.stop();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-start-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.start(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-consecutive-calls-support.js
  var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    nativeAudioBufferSourceNode.start();
    nativeAudioBufferSourceNode.stop();
    try {
      nativeAudioBufferSourceNode.stop();
      return true;
    } catch {
      return false;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.stop(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-worklet-node-options-clonability.js
  var testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
    const { port1, port2 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
      port2.close();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-offset-clamping.js
  var wrapAudioBufferSourceNodeStartMethodOffsetClamping = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = /* @__PURE__ */ ((start) => {
      return (when = 0, offset = 0, duration) => {
        const buffer = nativeAudioBufferSourceNode.buffer;
        const clampedOffset = buffer === null ? offset : Math.min(buffer.duration, offset);
        if (buffer !== null && clampedOffset > buffer.duration - 0.5 / nativeAudioBufferSourceNode.context.sampleRate) {
          start.call(nativeAudioBufferSourceNode, when, 0, 0);
        } else {
          start.call(nativeAudioBufferSourceNode, when, clampedOffset, duration);
        }
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-consecutive-calls.js
  var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = (nativeAudioScheduledSourceNode, nativeContext) => {
    const nativeGainNode = nativeContext.createGain();
    nativeAudioScheduledSourceNode.connect(nativeGainNode);
    const disconnectGainNode = /* @__PURE__ */ ((disconnect) => {
      return () => {
        disconnect.call(nativeAudioScheduledSourceNode, nativeGainNode);
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnectGainNode);
      };
    })(nativeAudioScheduledSourceNode.disconnect);
    nativeAudioScheduledSourceNode.addEventListener("ended", disconnectGainNode);
    interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      let isStopped = false;
      return (when = 0) => {
        if (isStopped) {
          try {
            stop.call(nativeAudioScheduledSourceNode, when);
          } catch {
            nativeGainNode.gain.setValueAtTime(0, when);
          }
        } else {
          stop.call(nativeAudioScheduledSourceNode, when);
          isStopped = true;
        }
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-event-listener.js
  var wrapEventListener = (target, eventListener) => {
    return (event) => {
      const descriptor = { value: target };
      Object.defineProperties(event, {
        currentTarget: descriptor,
        target: descriptor
      });
      if (typeof eventListener === "function") {
        return eventListener.call(target, event);
      }
      return eventListener.handleEvent.call(target, event);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/module.js
  var addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
  var addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
  var deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
  var audioNodeTailTimeStore = /* @__PURE__ */ new WeakMap();
  var getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
  var cacheTestResult = createCacheTestResult(/* @__PURE__ */ new Map(), /* @__PURE__ */ new WeakMap());
  var window2 = createWindow();
  var createNativeAnalyserNode = createNativeAnalyserNodeFactory(cacheTestResult, createIndexSizeError);
  var getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
  var renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
  var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode);
  var getNativeContext = createGetNativeContext(CONTEXT_STORE);
  var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window2);
  var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
  var audioParamAudioNodeStore = /* @__PURE__ */ new WeakMap();
  var eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
  var nativeAudioContextConstructor = createNativeAudioContextConstructor(window2);
  var isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
  var isNativeAudioNode2 = createIsNativeAudioNode(window2);
  var isNativeAudioParam = createIsNativeAudioParam(window2);
  var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window2);
  var audioNodeConstructor = createAudioNodeConstructor(createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE), createAddConnectionToAudioNode(addActiveInputConnectionToAudioNode, addPassiveInputConnectionToAudioNode, connectNativeAudioNodeToNativeAudioNode, deleteActiveInputConnectionToAudioNode, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getAudioNodeTailTime, getEventListenersOfAudioNode, getNativeAudioNode, insertElementInSet, isActiveAudioNode, isPartOfACycle, isPassiveAudioNode), cacheTestResult, createIncrementCycleCounterFactory(CYCLE_COUNTERS, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, isActiveAudioNode), createIndexSizeError, createInvalidAccessError, createNotSupportedError, createDecrementCycleCounter(connectNativeAudioNodeToNativeAudioNode, CYCLE_COUNTERS, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, getNativeContext, isActiveAudioNode, isNativeOfflineAudioContext), createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey), eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode2, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor);
  var analyserNodeConstructor = createAnalyserNodeConstructor(audioNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext);
  var audioBufferStore = /* @__PURE__ */ new WeakSet();
  var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window2);
  var convertNumberToUnsignedLong = createConvertNumberToUnsignedLong(new Uint32Array(1));
  var wrapAudioBufferCopyChannelMethods = createWrapAudioBufferCopyChannelMethods(convertNumberToUnsignedLong, createIndexSizeError);
  var wrapAudioBufferCopyChannelMethodsOutOfBounds = createWrapAudioBufferCopyChannelMethodsOutOfBounds(convertNumberToUnsignedLong);
  var audioBufferConstructor = createAudioBufferConstructor(audioBufferStore, cacheTestResult, createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor), wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var addSilentConnection = createAddSilentConnection(createNativeGainNode);
  var renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
  var connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
  var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(addSilentConnection, cacheTestResult, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodOffsetClampingSupport, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioBufferSourceNodeStartMethodOffsetClamping, createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer(overwriteAccessors), wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var renderAutomation = createRenderAutomation(createGetAudioParamRenderer(getAudioParamConnections), renderInputsOfAudioParam);
  var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(connectAudioParam, createNativeAudioBufferSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var createAudioParam = createAudioParamFactory(createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE), audioParamAudioNodeStore, AUDIO_PARAM_STORE, createAudioParamRenderer, import_automation_events2.createCancelAndHoldAutomationEvent, import_automation_events2.createCancelScheduledValuesAutomationEvent, import_automation_events2.createExponentialRampToValueAutomationEvent, import_automation_events2.createLinearRampToValueAutomationEvent, import_automation_events2.createSetTargetAutomationEvent, import_automation_events2.createSetValueAutomationEvent, import_automation_events2.createSetValueCurveAutomationEvent, nativeAudioContextConstructor, setValueAtTimeUntilPossible);
  var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors), getNativeContext, isNativeOfflineAudioContext, renderInputsOfAudioNode);
  var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
  var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode2);
  var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, monitorConnections);
  var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(nativeAudioContextConstructor, wrapChannelMergerNode);
  var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelMergerNodeConstructor = createChannelMergerNodeConstructor(audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext);
  var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions);
  var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(addSilentConnection, createNativeAudioBufferSourceNode, createNativeGainNode, monitorConnections);
  var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(addSilentConnection, cacheTestResult, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
  var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(connectAudioParam, createNativeConstantSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var constantSourceNodeConstructor = createConstantSourceNodeConstructor(audioNodeConstructor, createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createNativeConvolverNode = createNativeConvolverNodeFactory(createNotSupportedError, overwriteAccessors);
  var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode, getNativeAudioNode, renderInputsOfAudioNode);
  var convolverNodeConstructor = createConvolverNodeConstructor(audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createDelayNodeRenderer = createDelayNodeRendererFactory(connectAudioParam, createNativeDelayNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var delayNodeConstructor = createDelayNodeConstructor(audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNotSupportedError);
  var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(audioNodeConstructor, createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createGainNodeRenderer = createGainNodeRendererFactory(connectAudioParam, createNativeGainNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var gainNodeConstructor = createGainNodeConstructor(audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
  var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(cacheTestResult, createNativeGainNode, createNativeScriptProcessorNode, createTestOfflineAudioContextCurrentTimeSupport(createNativeGainNode, nativeOfflineAudioContextConstructor));
  var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeIIRFilterNodeFaker);
  var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, createNotSupportedError, getFirstSample, isNativeOfflineAudioContext, overwriteAccessors);
  var unrenderedAudioWorkletNodeStore = /* @__PURE__ */ new WeakMap();
  var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener, eventTargetConstructor, isNativeOfflineAudioContext, unrenderedAudioWorkletNodeStore, wrapEventListener);
  var createNativeOscillatorNode = createNativeOscillatorNodeFactory(addSilentConnection, cacheTestResult, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(connectAudioParam, createNativeOscillatorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var oscillatorNodeConstructor = createOscillatorNodeConstructor(audioNodeConstructor, createAudioParam, createNativeOscillatorNode, createOscillatorNodeRenderer, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
  var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeGainNode, isDCCurve, monitorConnections);
  var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeWaveShaperNodeFaker, isDCCurve, monitorConnections, nativeAudioContextConstructor, overwriteAccessors);
  var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(connectNativeAudioNodeToNativeAudioNode, createInvalidStateError, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError, disconnectNativeAudioNodeFromNativeAudioNode, getFirstSample, monitorConnections);
  var createNativePannerNode = createNativePannerNodeFactory(createNativePannerNodeFaker);
  var createPannerNodeRenderer = createPannerNodeRendererFactory(connectAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeGainNode, createNativePannerNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var pannerNodeConstructor = createPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativePeriodicWave = createNativePeriodicWaveFactory(createIndexSizeError);
  var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave, getNativeContext, /* @__PURE__ */ new WeakSet(), sanitizePeriodicWaveOptions);
  var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError, monitorConnections);
  var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(nativeStereoPannerNodeFakerFactory, createNotSupportedError);
  var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(connectAudioParam, createNativeStereoPannerNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext);
  var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode, getNativeAudioNode, renderInputsOfAudioNode);
  var waveShaperNodeConstructor = createWaveShaperNodeConstructor(audioNodeConstructor, createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var isSecureContext = createIsSecureContext(window2);
  var exposeCurrentFrameAndCurrentTime = createExposeCurrentFrameAndCurrentTime(window2);
  var backupOfflineAudioContextStore = /* @__PURE__ */ new WeakMap();
  var getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor);
  var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(
    cacheTestResult,
    createNotSupportedError,
    createEvaluateSource(window2),
    exposeCurrentFrameAndCurrentTime,
    createFetchSource(createAbortError),
    getNativeContext,
    getOrCreateBackupOfflineAudioContext,
    isNativeOfflineAudioContext,
    nativeAudioWorkletNodeConstructor,
    /* @__PURE__ */ new WeakMap(),
    /* @__PURE__ */ new WeakMap(),
    createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
    // @todo window is guaranteed to be defined because isSecureContext checks that as well.
    window2
  ) : void 0;
  var isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);
  var decodeAudioData = createDecodeAudioData(audioBufferStore, cacheTestResult, createDataCloneError, createEncodingError, /* @__PURE__ */ new WeakSet(), getNativeContext, isNativeContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testPromiseSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
  var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioDestinationNodeConstructor = createMediaStreamAudioDestinationNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(createInvalidStateError, isNativeOfflineAudioContext);
  var mediaStreamTrackAudioSourceNodeConstructor = createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
  var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNotSupportedError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor);
  var getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
  var addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
  var deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
  var activeAudioWorkletNodeInputsStore = /* @__PURE__ */ new WeakMap();
  var getActiveAudioWorkletNodeInputs = createGetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore, getValueForKey);
  var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections);
  var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioWorkletNodeFaker, createNativeGainNode, createNotSupportedError, monitorConnections);
  var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectAudioParam, connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, deleteUnrenderedAudioWorkletNode, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getNativeAudioNode, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
  var setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);
  var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(addUnrenderedAudioWorkletNode, audioNodeConstructor, createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, getAudioNodeConnections, getBackupOfflineAudioContext, getNativeContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions, setActiveAudioWorkletNodeInputs, testAudioWorkletNodeOptionsClonability, wrapEventListener) : void 0;
  var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
  var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
  var startRendering = createStartRendering(audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
  var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
  var isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);
  var isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode2);
  var isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);
  var isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);

  // node_modules/web-audio-beat-detector-broker/build/es2019/helpers/render.js
  var render = (audioBuffer, offset, duration) => {
    const offlineAudioContext = new offlineAudioContextConstructor(audioBuffer.numberOfChannels, Math.round(duration * audioBuffer.sampleRate), audioBuffer.sampleRate);
    const biquadFilter = offlineAudioContext.createBiquadFilter();
    const bufferSourceNode = offlineAudioContext.createBufferSource();
    biquadFilter.frequency.value = 240;
    biquadFilter.type = "lowpass";
    bufferSourceNode.buffer = audioBuffer;
    bufferSourceNode.connect(biquadFilter).connect(offlineAudioContext.destination);
    bufferSourceNode.start(0, offset, duration);
    return offlineAudioContext.startRendering().then((renderedBuffer) => {
      const channelData = renderedBuffer.getChannelData(0);
      const sampleRate = renderedBuffer.sampleRate;
      return { channelData, sampleRate };
    });
  };

  // node_modules/web-audio-beat-detector-broker/build/es2019/module.js
  var wrap = createBroker({
    analyze: ({ call }) => {
      return async (...args) => {
        var _a;
        const [audioBuffer, offsetOrTempoSettings, durationOrTempoSettings] = args;
        const offset = typeof offsetOrTempoSettings === "number" ? offsetOrTempoSettings : 0;
        const duration = typeof durationOrTempoSettings === "number" ? durationOrTempoSettings : audioBuffer.duration - offset;
        const { channelData, sampleRate } = await render(audioBuffer, offset, duration);
        const tempoSettings = typeof offsetOrTempoSettings === "object" ? offsetOrTempoSettings : typeof durationOrTempoSettings === "object" ? durationOrTempoSettings : (_a = args[3]) !== null && _a !== void 0 ? _a : null;
        return call("analyze", { channelData, sampleRate, ...tempoSettings === null ? tempoSettings : { tempoSettings } }, [
          channelData.buffer
        ]);
      };
    },
    guess: ({ call }) => {
      return async (...args) => {
        var _a;
        const [audioBuffer, offsetOrTempoSettings, durationOrTempoSettings] = args;
        const offset = typeof offsetOrTempoSettings === "number" ? offsetOrTempoSettings : 0;
        const duration = typeof durationOrTempoSettings === "number" ? durationOrTempoSettings : audioBuffer.duration - offset;
        const { channelData, sampleRate } = await render(audioBuffer, offset, duration);
        const tempoSettings = typeof offsetOrTempoSettings === "object" ? offsetOrTempoSettings : typeof durationOrTempoSettings === "object" ? durationOrTempoSettings : (_a = args[3]) !== null && _a !== void 0 ? _a : null;
        return call("guess", { channelData, sampleRate, ...tempoSettings === null ? tempoSettings : { tempoSettings } }, [
          channelData.buffer
        ]);
      };
    }
  });
  var load = (url) => {
    const worker2 = new Worker(url);
    return wrap(worker2);
  };

  // node_modules/web-audio-beat-detector/build/es2019/factories/load-or-return-broker.js
  var createLoadOrReturnBroker = (loadBroker, worker2) => {
    let broker = null;
    return () => {
      if (broker !== null) {
        return broker;
      }
      const blob = new Blob([worker2], { type: "application/javascript; charset=utf-8" });
      const url = URL.createObjectURL(blob);
      broker = loadBroker(url);
      setTimeout(() => URL.revokeObjectURL(url));
      return broker;
    };
  };

  // node_modules/web-audio-beat-detector/build/es2019/worker/worker.js
  var worker = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=a(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:c}})=>{const u=r[i];try{if(void 0===u)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?u():u(c);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const c=new Map,u=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(c);return c.set(o,()=>{n(),t.close(),c.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=u(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},h=(e,t,r)=>{const n=e.length,o=[];let s=!1;for(let a=0;a<n;a+=1)e[a]>t?s=!0:s&&(s=!1,o.push(a-1),a+=r/4-1);return s&&o.push(n-1),o},d=(e,t,r)=>{const n=(e=>{let t=0;const r=e.length;for(let n=0;n<r;n+=1)e[n]>t&&(t=e[n]);return t})(e),o=.3*n;let s=[],a=n-.05*n;if(n>.25)for(;s.length<30&&a>=o;)s=h(e,a,t),a-=.05*n;const i=(e=>{const t=[];return e.forEach((r,n)=>{const o=Math.min(e.length-n,10);for(let s=1;s<o;s+=1){const o=e[n+s]-r;t.some(e=>e.interval===o&&(e.peaks.push(r),!0))||t.push({interval:o,peaks:[r]})}}),t})(s),c=((e,t,r={})=>{var n,o;const s=Math.max(0,null!==(n=r.maxTempo)&&void 0!==n?n:180),a=Math.max(0,null!==(o=r.minTempo)&&void 0!==o?o:90),i=[];return e.forEach(e=>{let r=60/(e.interval/t);for(;r<a;)r*=2;for(;r>s;)r/=2;if(r<a)return;let n=!1,o=e.peaks.length;i.forEach(t=>{if(t.tempo===r&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],n=!0),t.tempo>r-.5&&t.tempo<r+.5){const n=2*Math.abs(t.tempo-r);o+=(1-n)*t.peaks.length,t.score+=(1-n)*e.peaks.length}}),n||i.push({peaks:e.peaks,score:o,tempo:r})}),i})(i,t,r);return c.sort((e,t)=>t.score-e.score),c},p=(e,t,r)=>{const n=d(e,t,r);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");return n[0].tempo},f=(e,t,r)=>{const n=d(e,t,r);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");const{peaks:o,tempo:s}=n[0],a=Math.round(s),i=60/a;o.sort((e,t)=>e-t);let c=o[0]/t;for(;c>i;)c-=i;return{bpm:a,offset:c,tempo:s}};l(self,{analyze:({channelData:e,sampleRate:t,tempoSettings:r})=>({result:p(e,t,r)}),guess:({channelData:e,sampleRate:t,tempoSettings:r})=>({result:f(e,t,r)})})})()})();`;

  // node_modules/web-audio-beat-detector/build/es2019/module.js
  var loadOrReturnBroker = createLoadOrReturnBroker(load, worker);
  var analyze = (...args) => loadOrReturnBroker().analyze(...args);
  var guess = (...args) => loadOrReturnBroker().guess(...args);

  // bpm-detectors.js
  var import_music_beat_detector = __toESM(require_music_beat_detector());
  window.BPMDetectors = {
    RealtimeBPM: { createRealTimeBpmProcessor: Z },
    BeatDetector: module_exports,
    MusicBeatDetector: { guess: import_music_beat_detector.guess }
  };
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
