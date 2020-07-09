(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.4' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});
	var _shared = function (key) {
	  return store[key] || (store[key] = {});
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var f$1 = _wks;

	var _wksExt = {
		f: f$1
	};

	var _library = false;

	var defineProperty = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol =  _global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
	};

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;



















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	// 19.1.3.6 Object.prototype.toString()

	var test = {};
	test[_wks('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  _redefine(Object.prototype, 'toString', function toString() {
	    return '[object ' + _classof(this) + ']';
	  }, true);
	}

	var symbol = _core.Symbol;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperties: _objectDps });

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

	var $getOwnPropertyDescriptor$1 = _objectGopd.f;

	_objectSap('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
	  };
	});

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto$1 = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto$1 : null;
	};

	// 19.1.2.9 Object.getPrototypeOf(O)



	_objectSap('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return _objectGpo(_toObject(it));
	  };
	});

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	_objectSap('getOwnPropertyNames', function () {
	  return _objectGopnExt.f;
	});

	// 19.1.2.5 Object.freeze(O)

	var meta = _meta.onFreeze;

	_objectSap('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

	// 19.1.2.17 Object.seal(O)

	var meta$1 = _meta.onFreeze;

	_objectSap('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
	  };
	});

	// 19.1.2.15 Object.preventExtensions(O)

	var meta$2 = _meta.onFreeze;

	_objectSap('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
	  };
	});

	// 19.1.2.12 Object.isFrozen(O)


	_objectSap('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

	// 19.1.2.13 Object.isSealed(O)


	_objectSap('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

	// 19.1.2.11 Object.isExtensible(O)


	_objectSap('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	// 7.2.9 SameValue(x, y)
	var _sameValue = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

	// 19.1.3.10 Object.is(value1, value2)

	_export(_export.S, 'Object', { is: _sameValue });

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

	var object = _core.Object;

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};

	var arraySlice = [].slice;
	var factories = {};

	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	var _bind = Function.bind || function bind(that /* , ...args */) {
	  var fn = _aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
	  };
	  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


	_export(_export.P, 'Function', { bind: _bind });

	var dP$2 = _objectDp.f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// 19.2.4.2 name
	NAME in FProto || _descriptors && dP$2(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	var HAS_INSTANCE = _wks('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !_isObject(O)) return false;
	  if (!_isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = _objectGpo(O)) if (this.prototype === O) return true;
	  return false;
	} });

	var _function = _core.Function;

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var $parseInt = _global.parseInt;
	var $trim = _stringTrim.trim;

	var hex = /^[-+]?0[xX]/;

	var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

	// 18.2.5 parseInt(string, radix)
	_export(_export.G + _export.F * (parseInt != _parseInt), { parseInt: _parseInt });

	var _parseInt$1 = _core.parseInt;

	var $parseFloat = _global.parseFloat;
	var $trim$1 = _stringTrim.trim;

	var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim$1(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	// 18.2.4 parseFloat(string)
	_export(_export.G + _export.F * (parseFloat != _parseFloat), { parseFloat: _parseFloat });

	var _parseFloat$1 = _core.parseFloat;

	var setPrototypeOf = _setProto.set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};

	var gOPN$2 = _objectGopn.f;
	var gOPD$2 = _objectGopd.f;
	var dP$3 = _objectDp.f;
	var $trim$2 = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim$2(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? _fails(function () { proto.valueOf.call(that); }) : _cof(that) != NUMBER)
	        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = _descriptors ? gOPN$2(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
	    if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
	      dP$3($Number, key, gOPD$2(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  _redefine(_global, NUMBER, $Number);
	}

	var _aNumberValue = function (it, msg) {
	  if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

	var _stringRepeat = function repeat(count) {
	  var str = String(_defined(this));
	  var res = '';
	  var n = _toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};

	var $toFixed = 1.0.toFixed;
	var floor$1 = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';

	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor$1(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor$1(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};

	_export(_export.P + _export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !_fails(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = _aNumberValue(this, ERROR);
	    var f = _toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + _stringRepeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

	var $toPrecision = 1.0.toPrecision;

	_export(_export.P + _export.F * (_fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !_fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

	// 20.1.2.1 Number.EPSILON


	_export(_export.S, 'Number', { EPSILON: Math.pow(2, -52) });

	// 20.1.2.2 Number.isFinite(number)

	var _isFinite = _global.isFinite;

	_export(_export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

	// 20.1.2.3 Number.isInteger(number)

	var floor$2 = Math.floor;
	var _isInteger = function isInteger(it) {
	  return !_isObject(it) && isFinite(it) && floor$2(it) === it;
	};

	// 20.1.2.3 Number.isInteger(number)


	_export(_export.S, 'Number', { isInteger: _isInteger });

	// 20.1.2.4 Number.isNaN(number)


	_export(_export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});

	// 20.1.2.5 Number.isSafeInteger(number)


	var abs = Math.abs;

	_export(_export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

	// 20.1.2.6 Number.MAX_SAFE_INTEGER


	_export(_export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

	// 20.1.2.10 Number.MIN_SAFE_INTEGER


	_export(_export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

	// 20.1.2.12 Number.parseFloat(string)
	_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

	// 20.1.2.13 Number.parseInt(string, radix)
	_export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', { parseInt: _parseInt });

	var number = _core.Number;

	// 20.2.2.20 Math.log1p(x)
	var _mathLog1p = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

	// 20.2.2.3 Math.acosh(x)


	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;

	_export(_export.S + _export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

	// 20.2.2.5 Math.asinh(x)

	var $asinh = Math.asinh;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0
	_export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

	// 20.2.2.7 Math.atanh(x)

	var $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0
	_export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

	// 20.2.2.28 Math.sign(x)
	var _mathSign = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

	// 20.2.2.9 Math.cbrt(x)



	_export(_export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

	// 20.2.2.11 Math.clz32(x)


	_export(_export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

	// 20.2.2.12 Math.cosh(x)

	var exp = Math.exp;

	_export(_export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	var _mathExpm1 = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

	// 20.2.2.14 Math.expm1(x)



	_export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', { expm1: _mathExpm1 });

	// 20.2.2.16 Math.fround(x)

	var pow$1 = Math.pow;
	var EPSILON = pow$1(2, -52);
	var EPSILON32 = pow$1(2, -23);
	var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
	var MIN32 = pow$1(2, -126);

	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};

	var _mathFround = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = _mathSign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};

	// 20.2.2.16 Math.fround(x)


	_export(_export.S, 'Math', { fround: _mathFround });

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

	var abs$1 = Math.abs;

	_export(_export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs$1(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

	// 20.2.2.18 Math.imul(x, y)

	var $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	_export(_export.S + _export.F * _fails(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

	// 20.2.2.21 Math.log10(x)


	_export(_export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});

	// 20.2.2.20 Math.log1p(x)


	_export(_export.S, 'Math', { log1p: _mathLog1p });

	// 20.2.2.22 Math.log2(x)


	_export(_export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

	// 20.2.2.28 Math.sign(x)


	_export(_export.S, 'Math', { sign: _mathSign });

	// 20.2.2.30 Math.sinh(x)


	var exp$1 = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	_export(_export.S + _export.F * _fails(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (_mathExpm1(x) - _mathExpm1(-x)) / 2
	      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
	  }
	});

	// 20.2.2.33 Math.tanh(x)


	var exp$2 = Math.exp;

	_export(_export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = _mathExpm1(x = +x);
	    var b = _mathExpm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
	  }
	});

	// 20.2.2.34 Math.trunc(x)


	_export(_export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

	var math = _core.Math;

	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

	_export(_export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = _toIobject(callSite.raw);
	    var len = _toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

	// 21.1.3.25 String.prototype.trim()
	_stringTrim('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _iterators = {};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if ( typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ( (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var $at$1 = _stringAt(false);
	_export(_export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at$1(this, pos);
	  }
	});

	// 7.2.8 IsRegExp(argument)


	var MATCH = _wks('match');
	var _isRegexp = function (it) {
	  var isRegExp;
	  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
	};

	// helper for String#{startsWith, endsWith, includes}



	var _stringContext = function (that, searchString, NAME) {
	  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(_defined(that));
	};

	var MATCH$1 = _wks('match');
	var _failsIsRegexp = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH$1] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};

	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];

	_export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = _stringContext(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = _toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

	var INCLUDES = 'includes';

	_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~_stringContext(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	_export(_export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: _stringRepeat
	});

	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = _stringContext(this, searchString, STARTS_WITH);
	    var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(_defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	var _stringHtml = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  _export(_export.P + _export.F * _fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

	// B.2.3.2 String.prototype.anchor(name)
	_stringHtml('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

	// B.2.3.3 String.prototype.big()
	_stringHtml('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

	// B.2.3.4 String.prototype.blink()
	_stringHtml('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

	// B.2.3.5 String.prototype.bold()
	_stringHtml('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

	// B.2.3.6 String.prototype.fixed()
	_stringHtml('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

	// B.2.3.7 String.prototype.fontcolor(color)
	_stringHtml('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

	// B.2.3.8 String.prototype.fontsize(size)
	_stringHtml('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

	// B.2.3.9 String.prototype.italics()
	_stringHtml('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

	// B.2.3.10 String.prototype.link(url)
	_stringHtml('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

	// B.2.3.11 String.prototype.small()
	_stringHtml('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

	// B.2.3.12 String.prototype.strike()
	_stringHtml('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

	// B.2.3.13 String.prototype.sub()
	_stringHtml('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

	// B.2.3.14 String.prototype.sup()
	_stringHtml('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

	var _fixReWks = function (KEY, length, exec) {
	  var SYMBOL = _wks(KEY);
	  var fns = exec(_defined, SYMBOL, ''[KEY]);
	  var strfn = fns[0];
	  var rxfn = fns[1];
	  if (_fails(function () {
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    _redefine(String.prototype, KEY, strfn);
	    _hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};

	// @@match logic
	_fixReWks('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

	// @@replace logic
	_fixReWks('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

	// @@search logic
	_fixReWks('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

	// @@split logic
	_fixReWks('split', 2, function (defined, SPLIT, $split) {
	  var isRegExp = _isRegexp;
	  var _split = $split;
	  var $push = [].push;
	  var $SPLIT = 'split';
	  var LENGTH = 'length';
	  var LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this);
	    var fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

	var string = _core.String;

	// 20.3.3.1 / 15.9.4.4 Date.now()


	_export(_export.S, 'Date', { now: function () { return new Date().getTime(); } });

	_export(_export.P + _export.F * _fails(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = _toObject(this);
	    var pv = _toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;

	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	var _dateToIsoString = (_fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !_fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()



	// PhantomJS / old WebKit has a broken implementations
	_export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
	  toISOString: _dateToIsoString
	});

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime$1 = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  _redefine(DateProto, TO_STRING, function toString() {
	    var value = getTime$1.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

	var NUMBER$1 = 'number';

	var _dateToPrimitive = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
	  return _toPrimitive(_anObject(this), hint != NUMBER$1);
	};

	var TO_PRIMITIVE$1 = _wks('toPrimitive');
	var proto$1 = Date.prototype;

	if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


	_export(_export.S, 'Array', { isArray: _isArray });

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$1 = _wks('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	var ITERATOR$2 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var ITERATOR$3 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$3]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$3]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$3] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	_export(_export.S + _export.F * !_iterDetect(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	// WebKit Array.of isn't generic
	_export(_export.S + _export.F * _fails(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) _createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

	var _strictMethod = function (method, arg) {
	  return !!method && _fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};

	// 22.1.3.13 Array.prototype.join(separator)


	var arrayJoin = [].join;

	// fallback for not array-like strings
	_export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
	  }
	});

	var arraySlice$1 = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	_export(_export.P + _export.F * _fails(function () {
	  if (_html) arraySlice$1.call(_html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = _toLength(this.length);
	    var klass = _cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice$1.call(this, begin, end);
	    var start = _toAbsoluteIndex(begin, len);
	    var upTo = _toAbsoluteIndex(end, len);
	    var size = _toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

	var $sort = [].sort;
	var test$1 = [1, 2, 3];

	_export(_export.P + _export.F * (_fails(function () {
	  // IE8-
	  test$1.sort(undefined);
	}) || !_fails(function () {
	  // V8 bug
	  test$1.sort(null);
	  // Old WebKit
	}) || !_strictMethod($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(_toObject(this))
	      : $sort.call(_toObject(this), _aFunction(comparefn));
	  }
	});

	var SPECIES = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	var $forEach = _arrayMethods(0);
	var STRICT = _strictMethod([].forEach, true);

	_export(_export.P + _export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

	var $map = _arrayMethods(1);

	_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

	var $filter = _arrayMethods(2);

	_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

	var $some = _arrayMethods(3);

	_export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

	var $every = _arrayMethods(4);

	_export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

	var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
	  _aFunction(callbackfn);
	  var O = _toObject(that);
	  var self = _iobject(O);
	  var length = _toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

	_export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

	_export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

	var $indexOf = _arrayIncludes(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	_export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

	var $native$1 = [].lastIndexOf;
	var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

	_export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
	    var O = _toIobject(this);
	    var length = _toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});

	var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = _toObject(this);
	  var len = _toLength(O.length);
	  var to = _toAbsoluteIndex(target, len);
	  var from = _toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto$1 = Array.prototype;
	if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto$1[UNSCOPABLES][key] = true;
	};

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


	_export(_export.P, 'Array', { copyWithin: _arrayCopyWithin });

	_addToUnscopables('copyWithin');

	var _arrayFill = function fill(value /* , start = 0, end = @length */) {
	  var O = _toObject(this);
	  var length = _toLength(O.length);
	  var aLen = arguments.length;
	  var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


	_export(_export.P, 'Array', { fill: _arrayFill });

	_addToUnscopables('fill');

	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	var $find = _arrayMethods(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	_export(_export.P + _export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $find$1 = _arrayMethods(6);
	var KEY$1 = 'findIndex';
	var forced$1 = true;
	// Shouldn't skip holes
	if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
	_export(_export.P + _export.F * forced$1, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY$1);

	var SPECIES$1 = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = _global[KEY];
	  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	_setSpecies('Array');

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var array = _core.Array;

	// 21.2.5.3 get RegExp.prototype.flags

	var _flags = function () {
	  var that = _anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var dP$4 = _objectDp.f;
	var gOPN$3 = _objectGopn.f;


	var $RegExp = _global.RegExp;
	var Base$1 = $RegExp;
	var proto$2 = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;

	if (_descriptors && (!CORRECT_NEW || _fails(function () {
	  re2[_wks('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = _isRegexp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : _inheritIfRequired(CORRECT_NEW
	        ? new Base$1(piRE && !fiU ? p.source : p, f)
	        : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f)
	      , tiRE ? this : proto$2, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP$4($RegExp, key, {
	      configurable: true,
	      get: function () { return Base$1[key]; },
	      set: function (it) { Base$1[key] = it; }
	    });
	  };
	  for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) proxy(keys$1[i++]);
	  proto$2.constructor = $RegExp;
	  $RegExp.prototype = proto$2;
	  _redefine(_global, 'RegExp', $RegExp);
	}

	_setSpecies('RegExp');

	// 21.2.5.3 get RegExp.prototype.flags()
	if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: _flags
	});

	var TO_STRING$1 = 'toString';
	var $toString$1 = /./[TO_STRING$1];

	var define = function (fn) {
	  _redefine(RegExp.prototype, TO_STRING$1, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (_fails(function () { return $toString$1.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = _anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString$1.name != TO_STRING$1) {
	  define(function toString() {
	    return $toString$1.call(this);
	  });
	}

	var regexp = _core.RegExp;

	var ITERATOR$4 = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i$1 = 0; i$1 < collections.length; i$1++) {
	  var NAME$1 = collections[i$1];
	  var explicit = DOMIterables[NAME$1];
	  var Collection = _global[NAME$1];
	  var proto$3 = Collection && Collection.prototype;
	  var key$1;
	  if (proto$3) {
	    if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
	    if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
	    _iterators[NAME$1] = ArrayValues;
	    if (explicit) for (key$1 in es6_array_iterator) if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
	  }
	}

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) _redefine(target, key, src[key], safe);
	  return target;
	};

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	var _validateCollection = function (it, TYPE) {
	  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};

	var dP$5 = _objectDp.f;









	var fastKey = _meta.fastKey;

	var SIZE = _descriptors ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	var _collectionStrong = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      _anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = _objectCreate(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    _redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = _validateCollection(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        _validateCollection(this, NAME);
	        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(_validateCollection(this, NAME), key);
	      }
	    });
	    if (_descriptors) dP$5(C.prototype, 'size', {
	      get: function () {
	        return _validateCollection(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    _iterDefine(C, NAME, function (iterated, kind) {
	      this._t = _validateCollection(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return _iterStep(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return _iterStep(0, entry.k);
	      if (kind == 'values') return _iterStep(0, entry.v);
	      return _iterStep(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    _setSpecies(NAME);
	  }
	};

	var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = _global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    _redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    _redefineAll(C.prototype, methods);
	    _meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = _fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = _iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && _fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        _anInstance(target, C, NAME);
	        var that = _inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  _setToStringTag(C, NAME);

	  O[NAME] = C;
	  _export(_export.G + _export.W + _export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

	var MAP = 'Map';

	// 23.1 Map Objects
	var es6_map = _collection(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, _collectionStrong, true);

	var map = _core.Map;

	var getWeak = _meta.getWeak;







	var arrayFind = _arrayMethods(5);
	var arrayFindIndex = _arrayMethods(6);
	var id$1 = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	var _collectionWeak = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      _anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id$1++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    _redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!_isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
	        return data && _has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!_isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
	        return data && _has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(_anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

	var es6_weakMap = createCommonjsModule(function (module) {
	var each = _arrayMethods(0);







	var WEAK_MAP = 'WeakMap';
	var getWeak = _meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = _collectionWeak.ufstore;
	var tmp = {};
	var InternalMap;

	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (_isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

	// IE11 WeakMap frozen keys fix
	if (_fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
	  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
	  _objectAssign(InternalMap.prototype, methods);
	  _meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    _redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (_isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}
	});

	var weakMap = _core.WeakMap;

	var SET = 'Set';

	// 23.2 Set Objects
	var es6_set = _collection(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, _collectionStrong);

	var set = _core.Set;

	var zone = createCommonjsModule(function (module, exports) {
	/**
	* @license
	* Copyright Google Inc. All Rights Reserved.
	*
	* Use of this source code is governed by an MIT-style license that can be
	* found in the LICENSE file at https://angular.io/license
	*/
	(function (global, factory) {
		 factory() ;
	}(commonjsGlobal, (function () {
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var Zone$1 = (function (global) {
	    var performance = global['performance'];
	    function mark(name) {
	        performance && performance['mark'] && performance['mark'](name);
	    }
	    function performanceMeasure(name, label) {
	        performance && performance['measure'] && performance['measure'](name, label);
	    }
	    mark('Zone');
	    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
	    if (global['Zone']) {
	        // if global['Zone'] already exists (maybe zone.js was already loaded or
	        // some other lib also registered a global object named Zone), we may need
	        // to throw an error, but sometimes user may not want this error.
	        // For example,
	        // we have two web pages, page1 includes zone.js, page2 doesn't.
	        // and the 1st time user load page1 and page2, everything work fine,
	        // but when user load page2 again, error occurs because global['Zone'] already exists.
	        // so we add a flag to let user choose whether to throw this error or not.
	        // By default, if existing Zone is from zone.js, we will not throw the error.
	        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
	            throw new Error('Zone already loaded.');
	        }
	        else {
	            return global['Zone'];
	        }
	    }
	    var Zone = /** @class */ (function () {
	        function Zone(parent, zoneSpec) {
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate =
	                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Zone.assertZonePatched = function () {
	            if (global['Promise'] !== patches['ZoneAwarePromise']) {
	                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
	                    'has been overwritten.\n' +
	                    'Most likely cause is that a Promise polyfill has been loaded ' +
	                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
	                    'If you must load one, do so before loading zone.js.)');
	            }
	        };
	        Object.defineProperty(Zone, "root", {
	            get: function () {
	                var zone = Zone.current;
	                while (zone.parent) {
	                    zone = zone.parent;
	                }
	                return zone;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Zone, "current", {
	            get: function () {
	                return _currentZoneFrame.zone;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () {
	                return _currentTask;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Zone.__load_patch = function (name, fn) {
	            if (patches.hasOwnProperty(name)) {
	                if (checkDuplicate) {
	                    throw Error('Already loaded patch: ' + name);
	                }
	            }
	            else if (!global['__Zone_disable_' + name]) {
	                var perfName = 'Zone:' + name;
	                mark(perfName);
	                patches[name] = fn(global, Zone, _api);
	                performanceMeasure(perfName, perfName);
	            }
	        };
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () {
	                return this._parent;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () {
	                return this._name;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Zone.prototype.get = function (key) {
	            var zone = this.getZoneWith(key);
	            if (zone)
	                return zone._properties[key];
	        };
	        Zone.prototype.getZoneWith = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current;
	                }
	                current = current._parent;
	            }
	            return null;
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZoneFrame = _currentZoneFrame.parent;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZoneFrame = _currentZoneFrame.parent;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            if (task.zone != this) {
	                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
	                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
	            }
	            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
	            // will run in notScheduled(canceled) state, we should not try to
	            // run such kind of task but just return
	            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
	                return;
	            }
	            var reEntryGuard = task.state != running;
	            reEntryGuard && task._transitionTo(running, scheduled);
	            task.runCount++;
	            var previousTask = _currentTask;
	            _currentTask = task;
	            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
	            try {
	                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = undefined;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                // if the task's state is notScheduled or unknown, then it has already been cancelled
	                // we should not reset the state to scheduled
	                if (task.state !== notScheduled && task.state !== unknown) {
	                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
	                        reEntryGuard && task._transitionTo(scheduled, running);
	                    }
	                    else {
	                        task.runCount = 0;
	                        this._updateTaskCount(task, -1);
	                        reEntryGuard &&
	                            task._transitionTo(notScheduled, running, notScheduled);
	                    }
	                }
	                _currentZoneFrame = _currentZoneFrame.parent;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleTask = function (task) {
	            if (task.zone && task.zone !== this) {
	                // check if the task was rescheduled, the newZone
	                // should not be the children of the original zone
	                var newZone = this;
	                while (newZone) {
	                    if (newZone === task.zone) {
	                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
	                    }
	                    newZone = newZone.parent;
	                }
	            }
	            task._transitionTo(scheduling, notScheduled);
	            var zoneDelegates = [];
	            task._zoneDelegates = zoneDelegates;
	            task._zone = this;
	            try {
	                task = this._zoneDelegate.scheduleTask(this, task);
	            }
	            catch (err) {
	                // should set task's state to unknown when scheduleTask throw error
	                // because the err may from reschedule, so the fromState maybe notScheduled
	                task._transitionTo(unknown, scheduling, notScheduled);
	                // TODO: @JiaLiPassion, should we check the result from handleError?
	                this._zoneDelegate.handleError(this, err);
	                throw err;
	            }
	            if (task._zoneDelegates === zoneDelegates) {
	                // we have to check because internally the delegate can reschedule the task.
	                this._updateTaskCount(task, 1);
	            }
	            if (task.state == scheduling) {
	                task._transitionTo(scheduled, scheduling);
	            }
	            return task;
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            if (task.zone != this)
	                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
	                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
	            task._transitionTo(canceling, scheduled, running);
	            try {
	                this._zoneDelegate.cancelTask(this, task);
	            }
	            catch (err) {
	                // if error occurs when cancelTask, transit the state to unknown
	                task._transitionTo(unknown, canceling);
	                this._zoneDelegate.handleError(this, err);
	                throw err;
	            }
	            this._updateTaskCount(task, -1);
	            task._transitionTo(notScheduled, canceling);
	            task.runCount = 0;
	            return task;
	        };
	        Zone.prototype._updateTaskCount = function (task, count) {
	            var zoneDelegates = task._zoneDelegates;
	            if (count == -1) {
	                task._zoneDelegates = null;
	            }
	            for (var i = 0; i < zoneDelegates.length; i++) {
	                zoneDelegates[i]._updateTaskCount(task.type, count);
	            }
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    var DELEGATE_ZS = {
	        name: '',
	        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
	        onScheduleTask: function (delegate, _, target, task) {
	            return delegate.scheduleTask(target, task);
	        },
	        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
	            return delegate.invokeTask(target, task, applyThis, applyArgs);
	        },
	        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
	    };
	    var ZoneDelegate = /** @class */ (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
	            this._interceptZS =
	                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt =
	                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._interceptCurrZone =
	                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt =
	                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
	            this._handleErrorZS =
	                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt =
	                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._handleErrorCurrZone =
	                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
	            this._scheduleTaskZS =
	                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt = zoneSpec &&
	                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._scheduleTaskCurrZone =
	                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
	            this._invokeTaskZS =
	                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt =
	                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._invokeTaskCurrZone =
	                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
	            this._cancelTaskZS =
	                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt =
	                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._cancelTaskCurrZone =
	                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
	            this._hasTaskZS = null;
	            this._hasTaskDlgt = null;
	            this._hasTaskDlgtOwner = null;
	            this._hasTaskCurrZone = null;
	            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
	            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
	            if (zoneSpecHasTask || parentHasTask) {
	                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
	                // a case all task related interceptors must go through this ZD. We can't short circuit it.
	                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
	                this._hasTaskDlgt = parentDelegate;
	                this._hasTaskDlgtOwner = this;
	                this._hasTaskCurrZone = zone;
	                if (!zoneSpec.onScheduleTask) {
	                    this._scheduleTaskZS = DELEGATE_ZS;
	                    this._scheduleTaskDlgt = parentDelegate;
	                    this._scheduleTaskCurrZone = this.zone;
	                }
	                if (!zoneSpec.onInvokeTask) {
	                    this._invokeTaskZS = DELEGATE_ZS;
	                    this._invokeTaskDlgt = parentDelegate;
	                    this._invokeTaskCurrZone = this.zone;
	                }
	                if (!zoneSpec.onCancelTask) {
	                    this._cancelTaskZS = DELEGATE_ZS;
	                    this._cancelTaskDlgt = parentDelegate;
	                    this._cancelTaskCurrZone = this.zone;
	                }
	            }
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
	                new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS ?
	                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
	                callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
	                callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS ?
	                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
	                true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            var returnTask = task;
	            if (this._scheduleTaskZS) {
	                if (this._hasTaskZS) {
	                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
	                }
	                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
	                if (!returnTask)
	                    returnTask = task;
	            }
	            else {
	                if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == microTask) {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	            }
	            return returnTask;
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
	                task.callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
	            }
	            else {
	                if (!task.cancelFn) {
	                    throw Error('Task is not cancelable');
	                }
	                value = task.cancelFn(task);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            // hasTask should not throw error so other ZoneDelegate
	            // can still trigger hasTask callback
	            try {
	                this._hasTaskZS &&
	                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
	            }
	            catch (err) {
	                this.handleError(targetZone, err);
	            }
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts['microTask'] > 0,
	                    macroTask: counts['macroTask'] > 0,
	                    eventTask: counts['eventTask'] > 0,
	                    change: type
	                };
	                this.hasTask(this.zone, isEmpty);
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = /** @class */ (function () {
	        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
	            this._zone = null;
	            this.runCount = 0;
	            this._zoneDelegates = null;
	            this._state = 'notScheduled';
	            this.type = type;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            // TODO: @JiaLiPassion options should have interface
	            if (type === eventTask && options && options.useG) {
	                this.invoke = ZoneTask.invokeTask;
	            }
	            else {
	                this.invoke = function () {
	                    return ZoneTask.invokeTask.call(global, self, this, arguments);
	                };
	            }
	        }
	        ZoneTask.invokeTask = function (task, target, args) {
	            if (!task) {
	                task = this;
	            }
	            _numberOfNestedTaskFrames++;
	            try {
	                task.runCount++;
	                return task.zone.runTask(task, target, args);
	            }
	            finally {
	                if (_numberOfNestedTaskFrames == 1) {
	                    drainMicroTaskQueue();
	                }
	                _numberOfNestedTaskFrames--;
	            }
	        };
	        Object.defineProperty(ZoneTask.prototype, "zone", {
	            get: function () {
	                return this._zone;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ZoneTask.prototype, "state", {
	            get: function () {
	                return this._state;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        ZoneTask.prototype.cancelScheduleRequest = function () {
	            this._transitionTo(notScheduled, scheduling);
	        };
	        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
	            if (this._state === fromState1 || this._state === fromState2) {
	                this._state = toState;
	                if (toState == notScheduled) {
	                    this._zoneDelegates = null;
	                }
	            }
	            else {
	                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
	            }
	        };
	        ZoneTask.prototype.toString = function () {
	            if (this.data && typeof this.data.handleId !== 'undefined') {
	                return this.data.handleId.toString();
	            }
	            else {
	                return Object.prototype.toString.call(this);
	            }
	        };
	        // add toJSON method to prevent cyclic error when
	        // call JSON.stringify(zoneTask)
	        ZoneTask.prototype.toJSON = function () {
	            return {
	                type: this.type,
	                state: this.state,
	                source: this.source,
	                zone: this.zone.name,
	                runCount: this.runCount
	            };
	        };
	        return ZoneTask;
	    }());
	    //////////////////////////////////////////////////////
	    //////////////////////////////////////////////////////
	    ///  MICROTASK QUEUE
	    //////////////////////////////////////////////////////
	    //////////////////////////////////////////////////////
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var nativeMicroTaskQueuePromise;
	    function scheduleMicroTask(task) {
	        // if we are not running in any task, and there has not been anything scheduled
	        // we must bootstrap the initial task creation by manually scheduling the drain
	        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (!nativeMicroTaskQueuePromise) {
	                if (global[symbolPromise]) {
	                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
	                }
	            }
	            if (nativeMicroTaskQueuePromise) {
	                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
	                if (!nativeThen) {
	                    // native Promise is not patchable, we need to use `then` directly
	                    // issue 1078
	                    nativeThen = nativeMicroTaskQueuePromise['then'];
	                }
	                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	        task && _microTaskQueue.push(task);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (error) {
	                        _api.onUnhandledError(error);
	                    }
	                }
	            }
	            _api.microtaskDrainDone();
	            _isDrainingMicrotaskQueue = false;
	        }
	    }
	    //////////////////////////////////////////////////////
	    //////////////////////////////////////////////////////
	    ///  BOOTSTRAP
	    //////////////////////////////////////////////////////
	    //////////////////////////////////////////////////////
	    var NO_ZONE = { name: 'NO ZONE' };
	    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
	    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
	    var patches = {};
	    var _api = {
	        symbol: __symbol__,
	        currentZoneFrame: function () { return _currentZoneFrame; },
	        onUnhandledError: noop,
	        microtaskDrainDone: noop,
	        scheduleMicroTask: scheduleMicroTask,
	        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
	        patchEventTarget: function () { return []; },
	        patchOnProperties: noop,
	        patchMethod: function () { return noop; },
	        bindArguments: function () { return []; },
	        patchThen: function () { return noop; },
	        patchMacroTask: function () { return noop; },
	        setNativePromise: function (NativePromise) {
	            // sometimes NativePromise.resolve static function
	            // is not ready yet, (such as core-js/es6.promise)
	            // so we need to check here.
	            if (NativePromise && typeof NativePromise.resolve === 'function') {
	                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
	            }
	        },
	        patchEventPrototype: function () { return noop; },
	        isIEOrEdge: function () { return false; },
	        getGlobalObjects: function () { return undefined; },
	        ObjectDefineProperty: function () { return noop; },
	        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
	        ObjectCreate: function () { return undefined; },
	        ArraySlice: function () { return []; },
	        patchClass: function () { return noop; },
	        wrapWithCurrentZone: function () { return noop; },
	        filterProperties: function () { return []; },
	        attachOriginToPatched: function () { return noop; },
	        _redefineProperty: function () { return noop; },
	        patchCallbacks: function () { return noop; }
	    };
	    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
	    var _currentTask = null;
	    var _numberOfNestedTaskFrames = 0;
	    function noop() { }
	    function __symbol__(name) {
	        return '__zone_symbol__' + name;
	    }
	    performanceMeasure('Zone', 'Zone');
	    return global['Zone'] = Zone;
	})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || commonjsGlobal);

	var __values =  function (o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m) return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
	    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var ObjectDefineProperty = Object.defineProperty;
	    function readableObjectToString(obj) {
	        if (obj && obj.toString === Object.prototype.toString) {
	            var className = obj.constructor && obj.constructor.name;
	            return (className ? className : '') + ': ' + JSON.stringify(obj);
	        }
	        return obj ? obj.toString() : Object.prototype.toString.call(obj);
	    }
	    var __symbol__ = api.symbol;
	    var _uncaughtPromiseErrors = [];
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var creationTrace = '__creationTrace__';
	    api.onUnhandledError = function (e) {
	        if (api.showUncaughtError()) {
	            var rejection = e && e.rejection;
	            if (rejection) {
	                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
	            }
	            else {
	                console.error(e);
	            }
	        }
	    };
	    api.microtaskDrainDone = function () {
	        while (_uncaughtPromiseErrors.length) {
	            var _loop_1 = function () {
	                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
	                try {
	                    uncaughtPromiseError.zone.runGuarded(function () {
	                        throw uncaughtPromiseError;
	                    });
	                }
	                catch (error) {
	                    handleUnhandledRejection(error);
	                }
	            };
	            while (_uncaughtPromiseErrors.length) {
	                _loop_1();
	            }
	        }
	    };
	    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
	    function handleUnhandledRejection(e) {
	        api.onUnhandledError(e);
	        try {
	            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
	            if (handler && typeof handler === 'function') {
	                handler.call(this, e);
	            }
	        }
	        catch (err) {
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) {
	        return value;
	    }
	    function forwardRejection(rejection) {
	        return ZoneAwarePromise.reject(rejection);
	    }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var symbolFinally = __symbol__('finally');
	    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
	    var symbolParentPromiseState = __symbol__('parentPromiseState');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            try {
	                resolvePromise(promise, state, v);
	            }
	            catch (err) {
	                resolvePromise(promise, false, err);
	            }
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    var once = function () {
	        var wasCalled = false;
	        return function wrapper(wrappedFunction) {
	            return function () {
	                if (wasCalled) {
	                    return;
	                }
	                wasCalled = true;
	                wrappedFunction.apply(null, arguments);
	            };
	        };
	    };
	    var TYPE_ERROR = 'Promise resolved with itself';
	    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
	    // Promise Resolution
	    function resolvePromise(promise, state, value) {
	        var onceWrapper = once();
	        if (promise === value) {
	            throw new TypeError(TYPE_ERROR);
	        }
	        if (promise[symbolState] === UNRESOLVED) {
	            // should only get value.then once based on promise spec.
	            var then = null;
	            try {
	                if (typeof value === 'object' || typeof value === 'function') {
	                    then = value && value.then;
	                }
	            }
	            catch (err) {
	                onceWrapper(function () {
	                    resolvePromise(promise, false, err);
	                })();
	                return promise;
	            }
	            // if (value instanceof ZoneAwarePromise) {
	            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
	                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
	                value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (state !== REJECTED && typeof then === 'function') {
	                try {
	                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
	                }
	                catch (err) {
	                    onceWrapper(function () {
	                        resolvePromise(promise, false, err);
	                    })();
	                }
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                if (promise[symbolFinally] === symbolFinally) {
	                    // the promise is generated by Promise.prototype.finally
	                    if (state === RESOLVED) {
	                        // the state is resolved, should ignore the value
	                        // and use parent promise value
	                        promise[symbolState] = promise[symbolParentPromiseState];
	                        promise[symbolValue] = promise[symbolParentPromiseValue];
	                    }
	                }
	                // record task information in value when error occurs, so we can
	                // do some additional work such as render longStackTrace
	                if (state === REJECTED && value instanceof Error) {
	                    // check if longStackTraceZone is here
	                    var trace = Zone.currentTask && Zone.currentTask.data &&
	                        Zone.currentTask.data[creationTrace];
	                    if (trace) {
	                        // only keep the long stack trace into error when in longStackTraceZone
	                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
	                    }
	                }
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        // try to print more readable error log
	                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
	                            (value && value.stack ? '\n' + value.stack : ''));
	                    }
	                    catch (err) {
	                        var error_1 = err;
	                        error_1.rejection = value;
	                        error_1.promise = promise;
	                        error_1.zone = Zone.current;
	                        error_1.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error_1);
	                        api.scheduleMicroTask(); // to make sure that it is running
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            // if the promise is rejected no catch status
	            // and queue.length > 0, means there is a error handler
	            // here to handle the rejected promise, we should trigger
	            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
	            // eventHandler
	            try {
	                var handler = Zone[REJECTION_HANDLED_HANDLER];
	                if (handler && typeof handler === 'function') {
	                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
	                }
	            }
	            catch (err) {
	            }
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var promiseState = promise[symbolState];
	        var delegate = promiseState ?
	            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
	            (typeof onRejected === 'function') ? onRejected : forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                var parentPromiseValue = promise[symbolValue];
	                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
	                if (isFinallyPromise) {
	                    // if the promise is generated from finally call, keep parent promise's state and value
	                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
	                    chainPromise[symbolParentPromiseState] = promiseState;
	                }
	                // should not pass value to finally callback
	                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
	                    [] :
	                    [parentPromiseValue]);
	                resolvePromise(chainPromise, true, value);
	            }
	            catch (error) {
	                // if error occurs, should always return this error
	                resolvePromise(chainPromise, false, error);
	            }
	        }, chainPromise);
	    }
	    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
	    var ZoneAwarePromise = /** @class */ (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            if (!(promise instanceof ZoneAwarePromise)) {
	                throw new Error('Must be an instanceof Promise.');
	            }
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (error) {
	                resolvePromise(promise, false, error);
	            }
	        }
	        ZoneAwarePromise.toString = function () {
	            return ZONE_AWARE_PROMISE_TO_STRING;
	        };
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var e_1, _a;
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            function onResolve(value) {
	                resolve(value);
	            }
	            function onReject(error) {
	                reject(error);
	            }
	            try {
	                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
	                    var value = values_1_1.value;
	                    if (!isThenable(value)) {
	                        value = this.resolve(value);
	                    }
	                    value.then(onResolve, onReject);
	                }
	            }
	            catch (e_1_1) { e_1 = { error: e_1_1 }; }
	            finally {
	                try {
	                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
	                }
	                finally { if (e_1) throw e_1.error; }
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var e_2, _a;
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            // Start at 2 to prevent prematurely resolving if .then is called immediately.
	            var unresolvedCount = 2;
	            var valueIndex = 0;
	            var resolvedValues = [];
	            var _loop_2 = function (value) {
	                if (!isThenable(value)) {
	                    value = this_1.resolve(value);
	                }
	                var curValueIndex = valueIndex;
	                value.then(function (value) {
	                    resolvedValues[curValueIndex] = value;
	                    unresolvedCount--;
	                    if (unresolvedCount === 0) {
	                        resolve(resolvedValues);
	                    }
	                }, reject);
	                unresolvedCount++;
	                valueIndex++;
	            };
	            var this_1 = this;
	            try {
	                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
	                    var value = values_2_1.value;
	                    _loop_2(value);
	                }
	            }
	            catch (e_2_1) { e_2 = { error: e_2_1 }; }
	            finally {
	                try {
	                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
	                }
	                finally { if (e_2) throw e_2.error; }
	            }
	            // Make the unresolvedCount zero-based again.
	            unresolvedCount -= 2;
	            if (unresolvedCount === 0) {
	                resolve(resolvedValues);
	            }
	            return promise;
	        };
	        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
	            get: function () {
	                return 'Promise';
	            },
	            enumerable: true,
	            configurable: true
	        });
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new this.constructor(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        ZoneAwarePromise.prototype.finally = function (onFinally) {
	            var chainPromise = new this.constructor(null);
	            chainPromise[symbolFinally] = symbolFinally;
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
	            }
	            return chainPromise;
	        };
	        return ZoneAwarePromise;
	    }());
	    // Protect against aggressive optimizers dropping seemingly unused properties.
	    // E.g. Closure Compiler in advanced mode.
	    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
	    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
	    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
	    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
	    var NativePromise = global[symbolPromise] = global['Promise'];
	    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
	    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
	    if (!desc || desc.configurable) {
	        desc && delete desc.writable;
	        desc && delete desc.value;
	        if (!desc) {
	            desc = { configurable: true, enumerable: true };
	        }
	        desc.get = function () {
	            // if we already set ZoneAwarePromise, use patched one
	            // otherwise return native one.
	            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
	        };
	        desc.set = function (NewNativePromise) {
	            if (NewNativePromise === ZoneAwarePromise) {
	                // if the NewNativePromise is ZoneAwarePromise
	                // save to global
	                global[ZONE_AWARE_PROMISE] = NewNativePromise;
	            }
	            else {
	                // if the NewNativePromise is not ZoneAwarePromise
	                // for example: after load zone.js, some library just
	                // set es6-promise to global, if we set it to global
	                // directly, assertZonePatched will fail and angular
	                // will not loaded, so we just set the NewNativePromise
	                // to global[symbolPromise], so the result is just like
	                // we load ES6 Promise before zone.js
	                global[symbolPromise] = NewNativePromise;
	                if (!NewNativePromise.prototype[symbolThen]) {
	                    patchThen(NewNativePromise);
	                }
	                api.setNativePromise(NewNativePromise);
	            }
	        };
	        ObjectDefineProperty(global, 'Promise', desc);
	    }
	    global['Promise'] = ZoneAwarePromise;
	    var symbolThenPatched = __symbol__('thenPatched');
	    function patchThen(Ctor) {
	        var proto = Ctor.prototype;
	        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
	        if (prop && (prop.writable === false || !prop.configurable)) {
	            // check Ctor.prototype.then propertyDescriptor is writable or not
	            // in meteor env, writable is false, we should ignore such case
	            return;
	        }
	        var originalThen = proto.then;
	        // Keep a reference to the original method.
	        proto[symbolThen] = originalThen;
	        Ctor.prototype.then = function (onResolve, onReject) {
	            var _this = this;
	            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
	                originalThen.call(_this, resolve, reject);
	            });
	            return wrapped.then(onResolve, onReject);
	        };
	        Ctor[symbolThenPatched] = true;
	    }
	    api.patchThen = patchThen;
	    function zoneify(fn) {
	        return function () {
	            var resultPromise = fn.apply(this, arguments);
	            if (resultPromise instanceof ZoneAwarePromise) {
	                return resultPromise;
	            }
	            var ctor = resultPromise.constructor;
	            if (!ctor[symbolThenPatched]) {
	                patchThen(ctor);
	            }
	            return resultPromise;
	        };
	    }
	    if (NativePromise) {
	        patchThen(NativePromise);
	        var fetch_1 = global['fetch'];
	        if (typeof fetch_1 == 'function') {
	            global[api.symbol('fetch')] = fetch_1;
	            global['fetch'] = zoneify(fetch_1);
	        }
	    }
	    // This is not part of public API, but it is useful for tests, so we expose it.
	    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
	    return ZoneAwarePromise;
	});

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Suppress closure compiler errors about unknown 'Zone' variable
	 * @fileoverview
	 * @suppress {undefinedVars,globalThis,missingRequire}
	 */
	// issue #989, to reduce bundle size, use short name
	/** Object.getOwnPropertyDescriptor */
	var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	/** Object.defineProperty */
	var ObjectDefineProperty = Object.defineProperty;
	/** Object.getPrototypeOf */
	var ObjectGetPrototypeOf = Object.getPrototypeOf;
	/** Object.create */
	var ObjectCreate = Object.create;
	/** Array.prototype.slice */
	var ArraySlice = Array.prototype.slice;
	/** addEventListener string const */
	var ADD_EVENT_LISTENER_STR = 'addEventListener';
	/** removeEventListener string const */
	var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
	/** zoneSymbol addEventListener */
	var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
	/** zoneSymbol removeEventListener */
	var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
	/** true string const */
	var TRUE_STR = 'true';
	/** false string const */
	var FALSE_STR = 'false';
	/** __zone_symbol__ string const */
	var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
	function wrapWithCurrentZone(callback, source) {
	    return Zone.current.wrap(callback, source);
	}
	function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
	    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
	}
	var zoneSymbol = Zone.__symbol__;
	var isWindowExists = typeof window !== 'undefined';
	var internalWindow = isWindowExists ? window : undefined;
	var _global = isWindowExists && internalWindow || typeof self === 'object' && self || commonjsGlobal;
	var REMOVE_ATTRIBUTE = 'removeAttribute';
	var NULL_ON_PROP_VALUE = [null];
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}
	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function (i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
	            if (!isPropertyWritable(prototypeDesc)) {
	                return "continue";
	            }
	            prototype[name_1] = (function (delegate) {
	                var patched = function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	                attachOriginToPatched(patched, delegate);
	                return patched;
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}
	function isPropertyWritable(propertyDesc) {
	    if (!propertyDesc) {
	        return true;
	    }
	    if (propertyDesc.writable === false) {
	        return false;
	    }
	    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
	}
	var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
	// this code.
	var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
	    {}.toString.call(_global.process) === '[object process]');
	var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
	// we are in electron of nw, so we are both browser and nodejs
	// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
	// this code.
	var isMix = typeof _global.process !== 'undefined' &&
	    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
	    !!(isWindowExists && internalWindow['HTMLElement']);
	var zoneSymbolEventNames = {};
	var wrapFn = function (event) {
	    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
	    // event will be undefined, so we need to use window.event
	    event = event || _global.event;
	    if (!event) {
	        return;
	    }
	    var eventNameSymbol = zoneSymbolEventNames[event.type];
	    if (!eventNameSymbol) {
	        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
	    }
	    var target = this || event.target || _global;
	    var listener = target[eventNameSymbol];
	    var result;
	    if (isBrowser && target === internalWindow && event.type === 'error') {
	        // window.onerror have different signiture
	        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
	        // and onerror callback will prevent default when callback return true
	        var errorEvent = event;
	        result = listener &&
	            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
	        if (result === true) {
	            event.preventDefault();
	        }
	    }
	    else {
	        result = listener && listener.apply(this, arguments);
	        if (result != undefined && !result) {
	            event.preventDefault();
	        }
	    }
	    return result;
	};
	function patchProperty(obj, prop, prototype) {
	    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
	    if (!desc && prototype) {
	        // when patch window object, use prototype to check prop exist or not
	        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
	        if (prototypeDesc) {
	            desc = { enumerable: true, configurable: true };
	        }
	    }
	    // if the descriptor not exists or is not configurable
	    // just return
	    if (!desc || !desc.configurable) {
	        return;
	    }
	    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
	    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
	        return;
	    }
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    var originalDescGet = desc.get;
	    var originalDescSet = desc.set;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var eventNameSymbol = zoneSymbolEventNames[eventName];
	    if (!eventNameSymbol) {
	        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
	    }
	    desc.set = function (newValue) {
	        // in some of windows's onproperty callback, this is undefined
	        // so we need to check it
	        var target = this;
	        if (!target && obj === _global) {
	            target = _global;
	        }
	        if (!target) {
	            return;
	        }
	        var previousValue = target[eventNameSymbol];
	        if (previousValue) {
	            target.removeEventListener(eventName, wrapFn);
	        }
	        // issue #978, when onload handler was added before loading zone.js
	        // we should remove it with originalDescSet
	        if (originalDescSet) {
	            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
	        }
	        if (typeof newValue === 'function') {
	            target[eventNameSymbol] = newValue;
	            target.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            target[eventNameSymbol] = null;
	        }
	    };
	    // The getter would return undefined for unassigned properties but the default value of an
	    // unassigned property is null
	    desc.get = function () {
	        // in some of windows's onproperty callback, this is undefined
	        // so we need to check it
	        var target = this;
	        if (!target && obj === _global) {
	            target = _global;
	        }
	        if (!target) {
	            return null;
	        }
	        var listener = target[eventNameSymbol];
	        if (listener) {
	            return listener;
	        }
	        else if (originalDescGet) {
	            // result will be null when use inline event attribute,
	            // such as <button onclick="func();">OK</button>
	            // because the onclick function is internal raw uncompiled handler
	            // the onclick will be evaluated when first time event was triggered or
	            // the property is accessed, https://github.com/angular/zone.js/issues/525
	            // so we should use original native get to retrieve the handler
	            var value = originalDescGet && originalDescGet.call(this);
	            if (value) {
	                desc.set.call(this, value);
	                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
	                    target.removeAttribute(prop);
	                }
	                return value;
	            }
	        }
	        return null;
	    };
	    ObjectDefineProperty(obj, prop, desc);
	    obj[onPropPatchedSymbol] = true;
	}
	function patchOnProperties(obj, properties, prototype) {
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i], prototype);
	        }
	    }
	    else {
	        var onProperties = [];
	        for (var prop in obj) {
	            if (prop.substr(0, 2) == 'on') {
	                onProperties.push(prop);
	            }
	        }
	        for (var j = 0; j < onProperties.length; j++) {
	            patchProperty(obj, onProperties[j], prototype);
	        }
	    }
	}
	var originalInstanceKey = zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global[className];
	    if (!OriginalClass)
	        return;
	    // keep original class in global
	    _global[zoneSymbol(className)] = OriginalClass;
	    _global[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default:
	                throw new Error('Arg list too long.');
	        }
	    };
	    // attach original delegate to patched function
	    attachOriginToPatched(_global[className], OriginalClass);
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        // https://bugs.webkit.org/show_bug.cgi?id=44721
	        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
	            continue;
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                ObjectDefineProperty(_global[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
	                            // keep callback in wrapped function so we can
	                            // use it in Function.prototype.toString to return
	                            // the native one.
	                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global[className][prop] = OriginalClass[prop];
	        }
	    }
	}

	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && !proto.hasOwnProperty(name)) {
	        proto = ObjectGetPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = zoneSymbol(name);
	    var delegate = null;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        // check whether proto[name] is writable
	        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
	        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
	        if (isPropertyWritable(desc)) {
	            var patchDelegate_1 = patchFn(delegate, delegateName, name);
	            proto[name] = function () {
	                return patchDelegate_1(this, arguments);
	            };
	            attachOriginToPatched(proto[name], delegate);
	        }
	    }
	    return delegate;
	}
	// TODO: @JiaLiPassion, support cancel task later if necessary
	function patchMacroTask(obj, funcName, metaCreator) {
	    var setNative = null;
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[data.cbIdx] = function () {
	            task.invoke.apply(this, arguments);
	        };
	        setNative.apply(data.target, data.args);
	        return task;
	    }
	    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
	        var meta = metaCreator(self, args);
	        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
	            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
	        }
	        else {
	            // cause an error by calling it directly.
	            return delegate.apply(self, args);
	        }
	    }; });
	}

	function attachOriginToPatched(patched, original) {
	    patched[zoneSymbol('OriginalDelegate')] = original;
	}
	var isDetectedIEOrEdge = false;
	var ieOrEdge = false;
	function isIE() {
	    try {
	        var ua = internalWindow.navigator.userAgent;
	        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
	            return true;
	        }
	    }
	    catch (error) {
	    }
	    return false;
	}
	function isIEOrEdge() {
	    if (isDetectedIEOrEdge) {
	        return ieOrEdge;
	    }
	    isDetectedIEOrEdge = true;
	    try {
	        var ua = internalWindow.navigator.userAgent;
	        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
	            ieOrEdge = true;
	        }
	    }
	    catch (error) {
	    }
	    return ieOrEdge;
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	// override Function.prototype.toString to make zone.js patched function
	// look like native function
	Zone.__load_patch('toString', function (global) {
	    // patch Func.prototype.toString to let them look like native
	    var originalFunctionToString = Function.prototype.toString;
	    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
	    var PROMISE_SYMBOL = zoneSymbol('Promise');
	    var ERROR_SYMBOL = zoneSymbol('Error');
	    var newFunctionToString = function toString() {
	        if (typeof this === 'function') {
	            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
	            if (originalDelegate) {
	                if (typeof originalDelegate === 'function') {
	                    return originalFunctionToString.call(originalDelegate);
	                }
	                else {
	                    return Object.prototype.toString.call(originalDelegate);
	                }
	            }
	            if (this === Promise) {
	                var nativePromise = global[PROMISE_SYMBOL];
	                if (nativePromise) {
	                    return originalFunctionToString.call(nativePromise);
	                }
	            }
	            if (this === Error) {
	                var nativeError = global[ERROR_SYMBOL];
	                if (nativeError) {
	                    return originalFunctionToString.call(nativeError);
	                }
	            }
	        }
	        return originalFunctionToString.call(this);
	    };
	    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
	    Function.prototype.toString = newFunctionToString;
	    // patch Object.prototype.toString to let them look like native
	    var originalObjectToString = Object.prototype.toString;
	    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
	    Object.prototype.toString = function () {
	        if (this instanceof Promise) {
	            return PROMISE_OBJECT_TO_STRING;
	        }
	        return originalObjectToString.call(this);
	    };
	});

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @fileoverview
	 * @suppress {missingRequire}
	 */
	var passiveSupported = false;
	if (typeof window !== 'undefined') {
	    try {
	        var options = Object.defineProperty({}, 'passive', {
	            get: function () {
	                passiveSupported = true;
	            }
	        });
	        window.addEventListener('test', options, options);
	        window.removeEventListener('test', options, options);
	    }
	    catch (err) {
	        passiveSupported = false;
	    }
	}
	// an identifier to tell ZoneTask do not create a new invoke closure
	var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
	    useG: true
	};
	var zoneSymbolEventNames$1 = {};
	var globalSources = {};
	var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
	var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
	function patchEventTarget(_global, apis, patchOptions) {
	    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
	    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
	    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
	    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
	    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
	    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
	    var PREPEND_EVENT_LISTENER = 'prependListener';
	    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
	    var invokeTask = function (task, target, event) {
	        // for better performance, check isRemoved which is set
	        // by removeEventListener
	        if (task.isRemoved) {
	            return;
	        }
	        var delegate = task.callback;
	        if (typeof delegate === 'object' && delegate.handleEvent) {
	            // create the bind version of handleEvent when invoke
	            task.callback = function (event) { return delegate.handleEvent(event); };
	            task.originalDelegate = delegate;
	        }
	        // invoke static task.invoke
	        task.invoke(task, target, [event]);
	        var options = task.options;
	        if (options && typeof options === 'object' && options.once) {
	            // if options.once is true, after invoke once remove listener here
	            // only browser need to do this, nodejs eventEmitter will cal removeListener
	            // inside EventEmitter.once
	            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
	            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
	        }
	    };
	    // global shared zoneAwareCallback to handle all event callback with capture = false
	    var globalZoneAwareCallback = function (event) {
	        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
	        // event will be undefined, so we need to use window.event
	        event = event || _global.event;
	        if (!event) {
	            return;
	        }
	        // event.target is needed for Samsung TV and SourceBuffer
	        // || global is needed https://github.com/angular/zone.js/issues/190
	        var target = this || event.target || _global;
	        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
	        if (tasks) {
	            // invoke all tasks which attached to current target with given event.type and capture = false
	            // for performance concern, if task.length === 1, just invoke
	            if (tasks.length === 1) {
	                invokeTask(tasks[0], target, event);
	            }
	            else {
	                // https://github.com/angular/zone.js/issues/836
	                // copy the tasks array before invoke, to avoid
	                // the callback will remove itself or other listener
	                var copyTasks = tasks.slice();
	                for (var i = 0; i < copyTasks.length; i++) {
	                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
	                        break;
	                    }
	                    invokeTask(copyTasks[i], target, event);
	                }
	            }
	        }
	    };
	    // global shared zoneAwareCallback to handle all event callback with capture = true
	    var globalZoneAwareCaptureCallback = function (event) {
	        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
	        // event will be undefined, so we need to use window.event
	        event = event || _global.event;
	        if (!event) {
	            return;
	        }
	        // event.target is needed for Samsung TV and SourceBuffer
	        // || global is needed https://github.com/angular/zone.js/issues/190
	        var target = this || event.target || _global;
	        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
	        if (tasks) {
	            // invoke all tasks which attached to current target with given event.type and capture = false
	            // for performance concern, if task.length === 1, just invoke
	            if (tasks.length === 1) {
	                invokeTask(tasks[0], target, event);
	            }
	            else {
	                // https://github.com/angular/zone.js/issues/836
	                // copy the tasks array before invoke, to avoid
	                // the callback will remove itself or other listener
	                var copyTasks = tasks.slice();
	                for (var i = 0; i < copyTasks.length; i++) {
	                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
	                        break;
	                    }
	                    invokeTask(copyTasks[i], target, event);
	                }
	            }
	        }
	    };
	    function patchEventTargetMethods(obj, patchOptions) {
	        if (!obj) {
	            return false;
	        }
	        var useGlobalCallback = true;
	        if (patchOptions && patchOptions.useG !== undefined) {
	            useGlobalCallback = patchOptions.useG;
	        }
	        var validateHandler = patchOptions && patchOptions.vh;
	        var checkDuplicate = true;
	        if (patchOptions && patchOptions.chkDup !== undefined) {
	            checkDuplicate = patchOptions.chkDup;
	        }
	        var returnTarget = false;
	        if (patchOptions && patchOptions.rt !== undefined) {
	            returnTarget = patchOptions.rt;
	        }
	        var proto = obj;
	        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
	            proto = ObjectGetPrototypeOf(proto);
	        }
	        if (!proto && obj[ADD_EVENT_LISTENER]) {
	            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	            proto = obj;
	        }
	        if (!proto) {
	            return false;
	        }
	        if (proto[zoneSymbolAddEventListener]) {
	            return false;
	        }
	        var eventNameToString = patchOptions && patchOptions.eventNameToString;
	        // a shared global taskData to pass data for scheduleEventTask
	        // so we do not need to create a new object just for pass some data
	        var taskData = {};
	        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
	        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
	            proto[REMOVE_EVENT_LISTENER];
	        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
	            proto[LISTENERS_EVENT_LISTENER];
	        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
	            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
	        var nativePrependEventListener;
	        if (patchOptions && patchOptions.prepend) {
	            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
	                proto[patchOptions.prepend];
	        }
	        function checkIsPassive(task) {
	            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
	                typeof taskData.options !== 'undefined' && taskData.options !== null) {
	                // options is a non-null non-undefined object
	                // passive is not supported
	                // don't pass options as object
	                // just pass capture as a boolean
	                task.options = !!taskData.options.capture;
	                taskData.options = task.options;
	            }
	        }
	        var customScheduleGlobal = function (task) {
	            // if there is already a task for the eventName + capture,
	            // just return, because we use the shared globalZoneAwareCallback here.
	            if (taskData.isExisting) {
	                return;
	            }
	            checkIsPassive(task);
	            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
	        };
	        var customCancelGlobal = function (task) {
	            // if task is not marked as isRemoved, this call is directly
	            // from Zone.prototype.cancelTask, we should remove the task
	            // from tasksList of target first
	            if (!task.isRemoved) {
	                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
	                var symbolEventName = void 0;
	                if (symbolEventNames) {
	                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
	                }
	                var existingTasks = symbolEventName && task.target[symbolEventName];
	                if (existingTasks) {
	                    for (var i = 0; i < existingTasks.length; i++) {
	                        var existingTask = existingTasks[i];
	                        if (existingTask === task) {
	                            existingTasks.splice(i, 1);
	                            // set isRemoved to data for faster invokeTask check
	                            task.isRemoved = true;
	                            if (existingTasks.length === 0) {
	                                // all tasks for the eventName + capture have gone,
	                                // remove globalZoneAwareCallback and remove the task cache from target
	                                task.allRemoved = true;
	                                task.target[symbolEventName] = null;
	                            }
	                            break;
	                        }
	                    }
	                }
	            }
	            // if all tasks for the eventName + capture have gone,
	            // we will really remove the global event callback,
	            // if not, return
	            if (!task.allRemoved) {
	                return;
	            }
	            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
	        };
	        var customScheduleNonGlobal = function (task) {
	            checkIsPassive(task);
	            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
	        };
	        var customSchedulePrepend = function (task) {
	            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
	        };
	        var customCancelNonGlobal = function (task) {
	            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
	        };
	        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
	        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
	        var compareTaskCallbackVsDelegate = function (task, delegate) {
	            var typeOfDelegate = typeof delegate;
	            return (typeOfDelegate === 'function' && task.callback === delegate) ||
	                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
	        };
	        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
	        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
	        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
	            if (returnTarget === void 0) { returnTarget = false; }
	            if (prepend === void 0) { prepend = false; }
	            return function () {
	                var target = this || _global;
	                var eventName = arguments[0];
	                var delegate = arguments[1];
	                if (!delegate) {
	                    return nativeListener.apply(this, arguments);
	                }
	                if (isNode && eventName === 'uncaughtException') {
	                    // don't patch uncaughtException of nodejs to prevent endless loop
	                    return nativeListener.apply(this, arguments);
	                }
	                // don't create the bind delegate function for handleEvent
	                // case here to improve addEventListener performance
	                // we will create the bind delegate when invoke
	                var isHandleEvent = false;
	                if (typeof delegate !== 'function') {
	                    if (!delegate.handleEvent) {
	                        return nativeListener.apply(this, arguments);
	                    }
	                    isHandleEvent = true;
	                }
	                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
	                    return;
	                }
	                var options = arguments[2];
	                if (blackListedEvents) {
	                    // check black list
	                    for (var i = 0; i < blackListedEvents.length; i++) {
	                        if (eventName === blackListedEvents[i]) {
	                            return nativeListener.apply(this, arguments);
	                        }
	                    }
	                }
	                var capture;
	                var once = false;
	                if (options === undefined) {
	                    capture = false;
	                }
	                else if (options === true) {
	                    capture = true;
	                }
	                else if (options === false) {
	                    capture = false;
	                }
	                else {
	                    capture = options ? !!options.capture : false;
	                    once = options ? !!options.once : false;
	                }
	                var zone = Zone.current;
	                var symbolEventNames = zoneSymbolEventNames$1[eventName];
	                var symbolEventName;
	                if (!symbolEventNames) {
	                    // the code is duplicate, but I just want to get some better performance
	                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
	                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
	                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
	                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
	                    zoneSymbolEventNames$1[eventName] = {};
	                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
	                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
	                    symbolEventName = capture ? symbolCapture : symbol;
	                }
	                else {
	                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
	                }
	                var existingTasks = target[symbolEventName];
	                var isExisting = false;
	                if (existingTasks) {
	                    // already have task registered
	                    isExisting = true;
	                    if (checkDuplicate) {
	                        for (var i = 0; i < existingTasks.length; i++) {
	                            if (compare(existingTasks[i], delegate)) {
	                                // same callback, same capture, same event name, just return
	                                return;
	                            }
	                        }
	                    }
	                }
	                else {
	                    existingTasks = target[symbolEventName] = [];
	                }
	                var source;
	                var constructorName = target.constructor['name'];
	                var targetSource = globalSources[constructorName];
	                if (targetSource) {
	                    source = targetSource[eventName];
	                }
	                if (!source) {
	                    source = constructorName + addSource +
	                        (eventNameToString ? eventNameToString(eventName) : eventName);
	                }
	                // do not create a new object as task.data to pass those things
	                // just use the global shared one
	                taskData.options = options;
	                if (once) {
	                    // if addEventListener with once options, we don't pass it to
	                    // native addEventListener, instead we keep the once setting
	                    // and handle ourselves.
	                    taskData.options.once = false;
	                }
	                taskData.target = target;
	                taskData.capture = capture;
	                taskData.eventName = eventName;
	                taskData.isExisting = isExisting;
	                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
	                // keep taskData into data to allow onScheduleEventTask to access the task information
	                if (data) {
	                    data.taskData = taskData;
	                }
	                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
	                // should clear taskData.target to avoid memory leak
	                // issue, https://github.com/angular/angular/issues/20442
	                taskData.target = null;
	                // need to clear up taskData because it is a global object
	                if (data) {
	                    data.taskData = null;
	                }
	                // have to save those information to task in case
	                // application may call task.zone.cancelTask() directly
	                if (once) {
	                    options.once = true;
	                }
	                if (!(!passiveSupported && typeof task.options === 'boolean')) {
	                    // if not support passive, and we pass an option object
	                    // to addEventListener, we should save the options to task
	                    task.options = options;
	                }
	                task.target = target;
	                task.capture = capture;
	                task.eventName = eventName;
	                if (isHandleEvent) {
	                    // save original delegate for compare to check duplicate
	                    task.originalDelegate = delegate;
	                }
	                if (!prepend) {
	                    existingTasks.push(task);
	                }
	                else {
	                    existingTasks.unshift(task);
	                }
	                if (returnTarget) {
	                    return target;
	                }
	            };
	        };
	        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
	        if (nativePrependEventListener) {
	            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
	        }
	        proto[REMOVE_EVENT_LISTENER] = function () {
	            var target = this || _global;
	            var eventName = arguments[0];
	            var options = arguments[2];
	            var capture;
	            if (options === undefined) {
	                capture = false;
	            }
	            else if (options === true) {
	                capture = true;
	            }
	            else if (options === false) {
	                capture = false;
	            }
	            else {
	                capture = options ? !!options.capture : false;
	            }
	            var delegate = arguments[1];
	            if (!delegate) {
	                return nativeRemoveEventListener.apply(this, arguments);
	            }
	            if (validateHandler &&
	                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
	                return;
	            }
	            var symbolEventNames = zoneSymbolEventNames$1[eventName];
	            var symbolEventName;
	            if (symbolEventNames) {
	                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
	            }
	            var existingTasks = symbolEventName && target[symbolEventName];
	            if (existingTasks) {
	                for (var i = 0; i < existingTasks.length; i++) {
	                    var existingTask = existingTasks[i];
	                    if (compare(existingTask, delegate)) {
	                        existingTasks.splice(i, 1);
	                        // set isRemoved to data for faster invokeTask check
	                        existingTask.isRemoved = true;
	                        if (existingTasks.length === 0) {
	                            // all tasks for the eventName + capture have gone,
	                            // remove globalZoneAwareCallback and remove the task cache from target
	                            existingTask.allRemoved = true;
	                            target[symbolEventName] = null;
	                        }
	                        existingTask.zone.cancelTask(existingTask);
	                        if (returnTarget) {
	                            return target;
	                        }
	                        return;
	                    }
	                }
	            }
	            // issue 930, didn't find the event name or callback
	            // from zone kept existingTasks, the callback maybe
	            // added outside of zone, we need to call native removeEventListener
	            // to try to remove it.
	            return nativeRemoveEventListener.apply(this, arguments);
	        };
	        proto[LISTENERS_EVENT_LISTENER] = function () {
	            var target = this || _global;
	            var eventName = arguments[0];
	            var listeners = [];
	            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
	            for (var i = 0; i < tasks.length; i++) {
	                var task = tasks[i];
	                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
	                listeners.push(delegate);
	            }
	            return listeners;
	        };
	        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
	            var target = this || _global;
	            var eventName = arguments[0];
	            if (!eventName) {
	                var keys = Object.keys(target);
	                for (var i = 0; i < keys.length; i++) {
	                    var prop = keys[i];
	                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
	                    var evtName = match && match[1];
	                    // in nodejs EventEmitter, removeListener event is
	                    // used for monitoring the removeListener call,
	                    // so just keep removeListener eventListener until
	                    // all other eventListeners are removed
	                    if (evtName && evtName !== 'removeListener') {
	                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
	                    }
	                }
	                // remove removeListener listener finally
	                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
	            }
	            else {
	                var symbolEventNames = zoneSymbolEventNames$1[eventName];
	                if (symbolEventNames) {
	                    var symbolEventName = symbolEventNames[FALSE_STR];
	                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
	                    var tasks = target[symbolEventName];
	                    var captureTasks = target[symbolCaptureEventName];
	                    if (tasks) {
	                        var removeTasks = tasks.slice();
	                        for (var i = 0; i < removeTasks.length; i++) {
	                            var task = removeTasks[i];
	                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
	                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
	                        }
	                    }
	                    if (captureTasks) {
	                        var removeTasks = captureTasks.slice();
	                        for (var i = 0; i < removeTasks.length; i++) {
	                            var task = removeTasks[i];
	                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
	                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
	                        }
	                    }
	                }
	            }
	            if (returnTarget) {
	                return this;
	            }
	        };
	        // for native toString patch
	        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
	        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
	        if (nativeRemoveAllListeners) {
	            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
	        }
	        if (nativeListeners) {
	            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
	        }
	        return true;
	    }
	    var results = [];
	    for (var i = 0; i < apis.length; i++) {
	        results[i] = patchEventTargetMethods(apis[i], patchOptions);
	    }
	    return results;
	}
	function findEventTasks(target, eventName) {
	    var foundTasks = [];
	    for (var prop in target) {
	        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
	        var evtName = match && match[1];
	        if (evtName && (!eventName || evtName === eventName)) {
	            var tasks = target[prop];
	            if (tasks) {
	                for (var i = 0; i < tasks.length; i++) {
	                    foundTasks.push(tasks[i]);
	                }
	            }
	        }
	    }
	    return foundTasks;
	}
	function patchEventPrototype(global, api) {
	    var Event = global['Event'];
	    if (Event && Event.prototype) {
	        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
	            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
	            // we need to call the native stopImmediatePropagation
	            // in case in some hybrid application, some part of
	            // application will be controlled by zone, some are not
	            delegate && delegate.apply(self, args);
	        }; });
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function patchCallbacks(api, target, targetName, method, callbacks) {
	    var symbol = Zone.__symbol__(method);
	    if (target[symbol]) {
	        return;
	    }
	    var nativeDelegate = target[symbol] = target[method];
	    target[method] = function (name, opts, options) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = targetName + "." + method + "::" + callback;
	                var prototype = opts.prototype;
	                if (prototype.hasOwnProperty(callback)) {
	                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
	                        api._redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else if (prototype[callback]) {
	                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
	                    }
	                }
	                else if (prototype[callback]) {
	                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
	                }
	            });
	        }
	        return nativeDelegate.call(target, name, opts, options);
	    };
	    api.attachOriginToPatched(target[method], nativeDelegate);
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var zoneSymbol$1 = Zone.__symbol__;
	var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
	    Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = zoneSymbol$1('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        var originalConfigurableFlag = desc.configurable;
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (desc && isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	function _redefineProperty(obj, prop, desc) {
	    var originalConfigurableFlag = desc.configurable;
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	}
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    // issue-927, if the desc is frozen, don't try to change the desc
	    if (!Object.isFrozen(desc)) {
	        desc.configurable = true;
	    }
	    if (!desc.configurable) {
	        // issue-927, if the obj is frozen, don't try to set the desc to obj
	        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        if (obj[unconfigurablesKey]) {
	            obj[unconfigurablesKey][prop] = true;
	        }
	    }
	    return desc;
	}
	function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
	    try {
	        return _defineProperty(obj, prop, desc);
	    }
	    catch (error) {
	        if (desc.configurable) {
	            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
	            // retry with the original flag value
	            if (typeof originalConfigurableFlag == 'undefined') {
	                delete desc.configurable;
	            }
	            else {
	                desc.configurable = originalConfigurableFlag;
	            }
	            try {
	                return _defineProperty(obj, prop, desc);
	            }
	            catch (error) {
	                var descJson = null;
	                try {
	                    descJson = JSON.stringify(desc);
	                }
	                catch (error) {
	                    descJson = desc.toString();
	                }
	                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
	            }
	        }
	        else {
	            throw error;
	        }
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @fileoverview
	 * @suppress {globalThis}
	 */
	var globalEventHandlersEventNames = [
	    'abort',
	    'animationcancel',
	    'animationend',
	    'animationiteration',
	    'auxclick',
	    'beforeinput',
	    'blur',
	    'cancel',
	    'canplay',
	    'canplaythrough',
	    'change',
	    'compositionstart',
	    'compositionupdate',
	    'compositionend',
	    'cuechange',
	    'click',
	    'close',
	    'contextmenu',
	    'curechange',
	    'dblclick',
	    'drag',
	    'dragend',
	    'dragenter',
	    'dragexit',
	    'dragleave',
	    'dragover',
	    'drop',
	    'durationchange',
	    'emptied',
	    'ended',
	    'error',
	    'focus',
	    'focusin',
	    'focusout',
	    'gotpointercapture',
	    'input',
	    'invalid',
	    'keydown',
	    'keypress',
	    'keyup',
	    'load',
	    'loadstart',
	    'loadeddata',
	    'loadedmetadata',
	    'lostpointercapture',
	    'mousedown',
	    'mouseenter',
	    'mouseleave',
	    'mousemove',
	    'mouseout',
	    'mouseover',
	    'mouseup',
	    'mousewheel',
	    'orientationchange',
	    'pause',
	    'play',
	    'playing',
	    'pointercancel',
	    'pointerdown',
	    'pointerenter',
	    'pointerleave',
	    'pointerlockchange',
	    'mozpointerlockchange',
	    'webkitpointerlockerchange',
	    'pointerlockerror',
	    'mozpointerlockerror',
	    'webkitpointerlockerror',
	    'pointermove',
	    'pointout',
	    'pointerover',
	    'pointerup',
	    'progress',
	    'ratechange',
	    'reset',
	    'resize',
	    'scroll',
	    'seeked',
	    'seeking',
	    'select',
	    'selectionchange',
	    'selectstart',
	    'show',
	    'sort',
	    'stalled',
	    'submit',
	    'suspend',
	    'timeupdate',
	    'volumechange',
	    'touchcancel',
	    'touchmove',
	    'touchstart',
	    'touchend',
	    'transitioncancel',
	    'transitionend',
	    'waiting',
	    'wheel'
	];
	var documentEventNames = [
	    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
	    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
	    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
	    'visibilitychange', 'resume'
	];
	var windowEventNames = [
	    'absolutedeviceorientation',
	    'afterinput',
	    'afterprint',
	    'appinstalled',
	    'beforeinstallprompt',
	    'beforeprint',
	    'beforeunload',
	    'devicelight',
	    'devicemotion',
	    'deviceorientation',
	    'deviceorientationabsolute',
	    'deviceproximity',
	    'hashchange',
	    'languagechange',
	    'message',
	    'mozbeforepaint',
	    'offline',
	    'online',
	    'paint',
	    'pageshow',
	    'pagehide',
	    'popstate',
	    'rejectionhandled',
	    'storage',
	    'unhandledrejection',
	    'unload',
	    'userproximity',
	    'vrdisplyconnected',
	    'vrdisplaydisconnected',
	    'vrdisplaypresentchange'
	];
	var htmlElementEventNames = [
	    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
	    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
	    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
	];
	var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
	var ieElementEventNames = [
	    'activate',
	    'afterupdate',
	    'ariarequest',
	    'beforeactivate',
	    'beforedeactivate',
	    'beforeeditfocus',
	    'beforeupdate',
	    'cellchange',
	    'controlselect',
	    'dataavailable',
	    'datasetchanged',
	    'datasetcomplete',
	    'errorupdate',
	    'filterchange',
	    'layoutcomplete',
	    'losecapture',
	    'move',
	    'moveend',
	    'movestart',
	    'propertychange',
	    'resizeend',
	    'resizestart',
	    'rowenter',
	    'rowexit',
	    'rowsdelete',
	    'rowsinserted',
	    'command',
	    'compassneedscalibration',
	    'deactivate',
	    'help',
	    'mscontentzoom',
	    'msmanipulationstatechanged',
	    'msgesturechange',
	    'msgesturedoubletap',
	    'msgestureend',
	    'msgesturehold',
	    'msgesturestart',
	    'msgesturetap',
	    'msgotpointercapture',
	    'msinertiastart',
	    'mslostpointercapture',
	    'mspointercancel',
	    'mspointerdown',
	    'mspointerenter',
	    'mspointerhover',
	    'mspointerleave',
	    'mspointermove',
	    'mspointerout',
	    'mspointerover',
	    'mspointerup',
	    'pointerout',
	    'mssitemodejumplistitemremoved',
	    'msthumbnailclick',
	    'stop',
	    'storagecommit'
	];
	var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
	var formEventNames = ['autocomplete', 'autocompleteerror'];
	var detailEventNames = ['toggle'];
	var frameEventNames = ['load'];
	var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
	var marqueeEventNames = ['bounce', 'finish', 'start'];
	var XMLHttpRequestEventNames = [
	    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
	    'readystatechange'
	];
	var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
	var websocketEventNames = ['close', 'error', 'open', 'message'];
	var workerEventNames = ['error', 'message'];
	var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
	function filterProperties(target, onProperties, ignoreProperties) {
	    if (!ignoreProperties || ignoreProperties.length === 0) {
	        return onProperties;
	    }
	    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
	    if (!tip || tip.length === 0) {
	        return onProperties;
	    }
	    var targetIgnoreProperties = tip[0].ignoreProperties;
	    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
	}
	function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
	    // check whether target is available, sometimes target will be undefined
	    // because different browser or some 3rd party plugin.
	    if (!target) {
	        return;
	    }
	    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
	    patchOnProperties(target, filteredProperties, prototype);
	}
	function propertyDescriptorPatch(api, _global) {
	    if (isNode && !isMix) {
	        return;
	    }
	    if (Zone[api.symbol('patchEvents')]) {
	        // events are already been patched by legacy patch.
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    var ignoreProperties = _global['__Zone_ignore_on_properties'];
	    // for browsers that we can patch the descriptor:  Chrome & Firefox
	    if (isBrowser) {
	        var internalWindow = window;
	        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
	        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
	        // so we need to pass WindowPrototype to check onProp exist or not
	        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
	        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
	        if (typeof internalWindow['SVGElement'] !== 'undefined') {
	            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
	        }
	        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
	        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
	        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
	        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
	        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
	        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
	        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
	        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
	        if (HTMLMarqueeElement_1) {
	            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
	        }
	        var Worker_1 = internalWindow['Worker'];
	        if (Worker_1) {
	            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
	        }
	    }
	    var XMLHttpRequest = _global['XMLHttpRequest'];
	    if (XMLHttpRequest) {
	        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
	        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
	    }
	    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
	    if (XMLHttpRequestEventTarget) {
	        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
	    }
	    if (typeof IDBIndex !== 'undefined') {
	        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
	        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
	        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
	        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
	        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
	        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
	    }
	    if (supportsWebSocket) {
	        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	Zone.__load_patch('util', function (global, Zone, api) {
	    api.patchOnProperties = patchOnProperties;
	    api.patchMethod = patchMethod;
	    api.bindArguments = bindArguments;
	    api.patchMacroTask = patchMacroTask;
	    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
	    // define which events will not be patched by `Zone.js`.
	    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
	    // the name consistent with angular repo.
	    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
	    // backwards compatibility.
	    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
	    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
	    if (global[SYMBOL_UNPATCHED_EVENTS]) {
	        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
	    }
	    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
	        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
	            global[SYMBOL_BLACK_LISTED_EVENTS];
	    }
	    api.patchEventPrototype = patchEventPrototype;
	    api.patchEventTarget = patchEventTarget;
	    api.isIEOrEdge = isIEOrEdge;
	    api.ObjectDefineProperty = ObjectDefineProperty;
	    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
	    api.ObjectCreate = ObjectCreate;
	    api.ArraySlice = ArraySlice;
	    api.patchClass = patchClass;
	    api.wrapWithCurrentZone = wrapWithCurrentZone;
	    api.filterProperties = filterProperties;
	    api.attachOriginToPatched = attachOriginToPatched;
	    api._redefineProperty = _redefineProperty;
	    api.patchCallbacks = patchCallbacks;
	    api.getGlobalObjects = function () { return ({
	        globalSources: globalSources,
	        zoneSymbolEventNames: zoneSymbolEventNames$1,
	        eventNames: eventNames,
	        isBrowser: isBrowser,
	        isMix: isMix,
	        isNode: isNode,
	        TRUE_STR: TRUE_STR,
	        FALSE_STR: FALSE_STR,
	        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
	        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
	        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
	    }); };
	});

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function eventTargetLegacyPatch(_global, api) {
	    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
	    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
	        .split(',');
	    var EVENT_TARGET = 'EventTarget';
	    var apis = [];
	    var isWtf = _global['wtf'];
	    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
	    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
	    var ieOrEdge = api.isIEOrEdge();
	    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
	    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
	    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
	    //  predefine all __zone_symbol__ + eventName + true/false string
	    for (var i = 0; i < eventNames.length; i++) {
	        var eventName = eventNames[i];
	        var falseEventName = eventName + FALSE_STR;
	        var trueEventName = eventName + TRUE_STR;
	        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
	        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
	        zoneSymbolEventNames[eventName] = {};
	        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
	        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
	    }
	    //  predefine all task.source string
	    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
	        var target = WTF_ISSUE_555_ARRAY[i];
	        var targets = globalSources[target] = {};
	        for (var j = 0; j < eventNames.length; j++) {
	            var eventName = eventNames[j];
	            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
	        }
	    }
	    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
	        if (!isDisableIECheck && ieOrEdge) {
	            if (isEnableCrossContextCheck) {
	                try {
	                    var testString = delegate.toString();
	                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
	                        nativeDelegate.apply(target, args);
	                        return false;
	                    }
	                }
	                catch (error) {
	                    nativeDelegate.apply(target, args);
	                    return false;
	                }
	            }
	            else {
	                var testString = delegate.toString();
	                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
	                    nativeDelegate.apply(target, args);
	                    return false;
	                }
	            }
	        }
	        else if (isEnableCrossContextCheck) {
	            try {
	                delegate.toString();
	            }
	            catch (error) {
	                nativeDelegate.apply(target, args);
	                return false;
	            }
	        }
	        return true;
	    };
	    var apiTypes = [];
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        apiTypes.push(type && type.prototype);
	    }
	    // vh is validateHandler to check event handler
	    // is valid or not(for security check)
	    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
	    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
	    return true;
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	// we have to patch the instance since the proto is non-configurable
	function apply(api, _global) {
	    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        api.patchEventTarget(_global, [WS.prototype]);
	    }
	    _global.WebSocket = function (x, y) {
	        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
	        var proxySocket;
	        var proxySocketProto;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = api.ObjectCreate(socket);
	            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
	            // but proxySocket not, so we will keep socket as prototype and pass it to
	            // patchOnProperties method
	            proxySocketProto = socket;
	            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    var args = api.ArraySlice.call(arguments);
	                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
	                        var eventName = args.length > 0 ? args[0] : undefined;
	                        if (eventName) {
	                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
	                            socket[propertySymbol] = proxySocket[propertySymbol];
	                        }
	                    }
	                    return socket[propName].apply(socket, args);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
	        return proxySocket;
	    };
	    var globalWebSocket = _global['WebSocket'];
	    for (var prop in WS) {
	        globalWebSocket[prop] = WS[prop];
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @fileoverview
	 * @suppress {globalThis}
	 */
	function propertyDescriptorLegacyPatch(api, _global) {
	    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
	    if (isNode && !isMix) {
	        return;
	    }
	    if (!canPatchViaPropertyDescriptor(api, _global)) {
	        var supportsWebSocket = typeof WebSocket !== 'undefined';
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents(api);
	        api.patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            apply(api, _global);
	        }
	        Zone[api.symbol('patchEvents')] = true;
	    }
	}
	function canPatchViaPropertyDescriptor(api, _global) {
	    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
	    if ((isBrowser || isMix) &&
	        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
	        typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	        // try to use onclick to detect whether we can patch via propertyDescriptor
	        // because XMLHttpRequest is not available in service worker
	        if (desc) {
	            api.ObjectDefineProperty(Element.prototype, 'onclick', {
	                enumerable: true,
	                configurable: true,
	                get: function () {
	                    return true;
	                }
	            });
	            var div = document.createElement('div');
	            var result = !!div.onclick;
	            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
	            return result;
	        }
	    }
	    var XMLHttpRequest = _global['XMLHttpRequest'];
	    if (!XMLHttpRequest) {
	        // XMLHttpRequest is not available in service worker
	        return false;
	    }
	    var ON_READY_STATE_CHANGE = 'onreadystatechange';
	    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
	    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
	    // add enumerable and configurable here because in opera
	    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
	    // without adding enumerable and configurable will cause onreadystatechange
	    // non-configurable
	    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
	    // we should set a real desc instead a fake one
	    if (xhrDesc) {
	        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
	            enumerable: true,
	            configurable: true,
	            get: function () {
	                return true;
	            }
	        });
	        var req = new XMLHttpRequest();
	        var result = !!req.onreadystatechange;
	        // restore original desc
	        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
	        return result;
	    }
	    else {
	        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
	        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
	            enumerable: true,
	            configurable: true,
	            get: function () {
	                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
	            },
	            set: function (value) {
	                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
	            }
	        });
	        var req = new XMLHttpRequest();
	        var detectFunc = function () { };
	        req.onreadystatechange = detectFunc;
	        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
	        req.onreadystatechange = null;
	        return result;
	    }
	}
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents(api) {
	    var eventNames = api.getGlobalObjects().eventNames;
	    var unboundKey = api.symbol('unbound');
	    var _loop_1 = function (i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        self.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function registerElementPatch(_global, api) {
	    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
	    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
	        return;
	    }
	    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
	    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @fileoverview
	 * @suppress {missingRequire}
	 */
	(function (_global) {
	    _global['__zone_symbol__legacyPatch'] = function () {
	        var Zone = _global['Zone'];
	        Zone.__load_patch('registerElement', function (global, Zone, api) {
	            registerElementPatch(global, api);
	        });
	        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
	            eventTargetLegacyPatch(global, api);
	            propertyDescriptorLegacyPatch(api, global);
	        });
	    };
	})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || commonjsGlobal);

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @fileoverview
	 * @suppress {missingRequire}
	 */
	var taskSymbol = zoneSymbol('zoneTask');
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    var tasksByHandleId = {};
	    function scheduleTask(task) {
	        var data = task.data;
	        function timer() {
	            try {
	                task.invoke.apply(this, arguments);
	            }
	            finally {
	                // issue-934, task will be cancelled
	                // even it is a periodic task such as
	                // setInterval
	                if (!(task.data && task.data.isPeriodic)) {
	                    if (typeof data.handleId === 'number') {
	                        // in non-nodejs env, we remove timerId
	                        // from local cache
	                        delete tasksByHandleId[data.handleId];
	                    }
	                    else if (data.handleId) {
	                        // Node returns complex objects as handleIds
	                        // we remove task reference from timer object
	                        data.handleId[taskSymbol] = null;
	                    }
	                }
	            }
	        }
	        data.args[0] = timer;
	        data.handleId = setNative.apply(window, data.args);
	        return task;
	    }
	    function clearTask(task) {
	        return clearNative(task.data.handleId);
	    }
	    setNative =
	        patchMethod(window, setName, function (delegate) { return function (self, args) {
	            if (typeof args[0] === 'function') {
	                var options = {
	                    isPeriodic: nameSuffix === 'Interval',
	                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
	                        undefined,
	                    args: args
	                };
	                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
	                if (!task) {
	                    return task;
	                }
	                // Node.js must additionally support the ref and unref functions.
	                var handle = task.data.handleId;
	                if (typeof handle === 'number') {
	                    // for non nodejs env, we save handleId: task
	                    // mapping in local cache for clearTimeout
	                    tasksByHandleId[handle] = task;
	                }
	                else if (handle) {
	                    // for nodejs env, we save task
	                    // reference in timerId Object for clearTimeout
	                    handle[taskSymbol] = task;
	                }
	                // check whether handle is null, because some polyfill or browser
	                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
	                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
	                    typeof handle.unref === 'function') {
	                    task.ref = handle.ref.bind(handle);
	                    task.unref = handle.unref.bind(handle);
	                }
	                if (typeof handle === 'number' || handle) {
	                    return handle;
	                }
	                return task;
	            }
	            else {
	                // cause an error by calling it directly.
	                return delegate.apply(window, args);
	            }
	        }; });
	    clearNative =
	        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	            var id = args[0];
	            var task;
	            if (typeof id === 'number') {
	                // non nodejs env.
	                task = tasksByHandleId[id];
	            }
	            else {
	                // nodejs env.
	                task = id && id[taskSymbol];
	                // other environments.
	                if (!task) {
	                    task = id;
	                }
	            }
	            if (task && typeof task.type === 'string') {
	                if (task.state !== 'notScheduled' &&
	                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
	                    if (typeof id === 'number') {
	                        delete tasksByHandleId[id];
	                    }
	                    else if (id) {
	                        id[taskSymbol] = null;
	                    }
	                    // Do not cancel already canceled functions
	                    task.zone.cancelTask(task);
	                }
	            }
	            else {
	                // cause an error by calling it directly.
	                delegate.apply(window, args);
	            }
	        }; });
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function patchCustomElements(_global, api) {
	    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
	    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
	        return;
	    }
	    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
	    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function eventTargetPatch(_global, api) {
	    if (Zone[api.symbol('patchEventTarget')]) {
	        // EventTarget is already patched.
	        return;
	    }
	    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
	    //  predefine all __zone_symbol__ + eventName + true/false string
	    for (var i = 0; i < eventNames.length; i++) {
	        var eventName = eventNames[i];
	        var falseEventName = eventName + FALSE_STR;
	        var trueEventName = eventName + TRUE_STR;
	        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
	        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
	        zoneSymbolEventNames[eventName] = {};
	        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
	        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
	    }
	    var EVENT_TARGET = _global['EventTarget'];
	    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
	        return;
	    }
	    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
	    return true;
	}
	function patchEvent$1(global, api) {
	    api.patchEventPrototype(global, api);
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @fileoverview
	 * @suppress {missingRequire}
	 */
	Zone.__load_patch('legacy', function (global) {
	    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
	    if (legacyPatch) {
	        legacyPatch();
	    }
	});
	Zone.__load_patch('timers', function (global) {
	    var set = 'set';
	    var clear = 'clear';
	    patchTimer(global, set, clear, 'Timeout');
	    patchTimer(global, set, clear, 'Interval');
	    patchTimer(global, set, clear, 'Immediate');
	});
	Zone.__load_patch('requestAnimationFrame', function (global) {
	    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
	    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	});
	Zone.__load_patch('blocking', function (global, Zone) {
	    var blockingMethods = ['alert', 'prompt', 'confirm'];
	    for (var i = 0; i < blockingMethods.length; i++) {
	        var name_1 = blockingMethods[i];
	        patchMethod(global, name_1, function (delegate, symbol, name) {
	            return function (s, args) {
	                return Zone.current.run(delegate, global, args, name);
	            };
	        });
	    }
	});
	Zone.__load_patch('EventTarget', function (global, Zone, api) {
	    patchEvent$1(global, api);
	    eventTargetPatch(global, api);
	    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
	    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
	    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
	        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
	    }
	    patchClass('MutationObserver');
	    patchClass('WebKitMutationObserver');
	    patchClass('IntersectionObserver');
	    patchClass('FileReader');
	});
	Zone.__load_patch('on_property', function (global, Zone, api) {
	    propertyDescriptorPatch(api, global);
	    propertyPatch();
	});
	Zone.__load_patch('customElements', function (global, Zone, api) {
	    patchCustomElements(global, api);
	});
	Zone.__load_patch('XHR', function (global, Zone) {
	    // Treat XMLHttpRequest as a macrotask.
	    patchXHR(global);
	    var XHR_TASK = zoneSymbol('xhrTask');
	    var XHR_SYNC = zoneSymbol('xhrSync');
	    var XHR_LISTENER = zoneSymbol('xhrListener');
	    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
	    var XHR_URL = zoneSymbol('xhrURL');
	    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
	    function patchXHR(window) {
	        var XMLHttpRequest = window['XMLHttpRequest'];
	        if (!XMLHttpRequest) {
	            // XMLHttpRequest is not available in service worker
	            return;
	        }
	        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
	        function findPendingTask(target) {
	            return target[XHR_TASK];
	        }
	        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
	        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
	        if (!oriAddListener) {
	            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
	            if (XMLHttpRequestEventTarget_1) {
	                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
	                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
	                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
	            }
	        }
	        var READY_STATE_CHANGE = 'readystatechange';
	        var SCHEDULED = 'scheduled';
	        function scheduleTask(task) {
	            var data = task.data;
	            var target = data.target;
	            target[XHR_SCHEDULED] = false;
	            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
	            // remove existing event listener
	            var listener = target[XHR_LISTENER];
	            if (!oriAddListener) {
	                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
	                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
	            }
	            if (listener) {
	                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
	            }
	            var newListener = target[XHR_LISTENER] = function () {
	                if (target.readyState === target.DONE) {
	                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
	                    // readyState=4 multiple times, so we need to check task state here
	                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
	                        // check whether the xhr has registered onload listener
	                        // if that is the case, the task should invoke after all
	                        // onload listeners finish.
	                        var loadTasks = target['__zone_symbol__loadfalse'];
	                        if (loadTasks && loadTasks.length > 0) {
	                            var oriInvoke_1 = task.invoke;
	                            task.invoke = function () {
	                                // need to load the tasks again, because in other
	                                // load listener, they may remove themselves
	                                var loadTasks = target['__zone_symbol__loadfalse'];
	                                for (var i = 0; i < loadTasks.length; i++) {
	                                    if (loadTasks[i] === task) {
	                                        loadTasks.splice(i, 1);
	                                    }
	                                }
	                                if (!data.aborted && task.state === SCHEDULED) {
	                                    oriInvoke_1.call(task);
	                                }
	                            };
	                            loadTasks.push(task);
	                        }
	                        else {
	                            task.invoke();
	                        }
	                    }
	                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
	                        // error occurs when xhr.send()
	                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
	                    }
	                }
	            };
	            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
	            var storedTask = target[XHR_TASK];
	            if (!storedTask) {
	                target[XHR_TASK] = task;
	            }
	            sendNative.apply(target, data.args);
	            target[XHR_SCHEDULED] = true;
	            return task;
	        }
	        function placeholderCallback() { }
	        function clearTask(task) {
	            var data = task.data;
	            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	            // to prevent it from firing. So instead, we store info for the event listener.
	            data.aborted = true;
	            return abortNative.apply(data.target, data.args);
	        }
	        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
	            self[XHR_SYNC] = args[2] == false;
	            self[XHR_URL] = args[1];
	            return openNative.apply(self, args);
	        }; });
	        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
	        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
	        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
	        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
	            if (Zone.current[fetchTaskScheduling] === true) {
	                // a fetch is scheduling, so we are using xhr to polyfill fetch
	                // and because we already schedule macroTask for fetch, we should
	                // not schedule a macroTask for xhr again
	                return sendNative.apply(self, args);
	            }
	            if (self[XHR_SYNC]) {
	                // if the XHR is sync there is no task to schedule, just execute the code.
	                return sendNative.apply(self, args);
	            }
	            else {
	                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
	                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
	                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
	                    task.state === SCHEDULED) {
	                    // xhr request throw error when send
	                    // we should invoke task instead of leaving a scheduled
	                    // pending macroTask
	                    task.invoke();
	                }
	            }
	        }; });
	        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
	            var task = findPendingTask(self);
	            if (task && typeof task.type == 'string') {
	                // If the XHR has already completed, do nothing.
	                // If the XHR has already been aborted, do nothing.
	                // Fix #569, call abort multiple times before done will cause
	                // macroTask task count be negative number
	                if (task.cancelFn == null || (task.data && task.data.aborted)) {
	                    return;
	                }
	                task.zone.cancelTask(task);
	            }
	            else if (Zone.current[fetchTaskAborting] === true) {
	                // the abort is called from fetch polyfill, we need to call native abort of XHR.
	                return abortNative.apply(self, args);
	            }
	            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
	            // task
	            // to cancel. Do nothing.
	        }; });
	    }
	});
	Zone.__load_patch('geolocation', function (global) {
	    /// GEO_LOCATION
	    if (global['navigator'] && global['navigator'].geolocation) {
	        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
	    }
	});
	Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
	    // handle unhandled promise rejection
	    function findPromiseRejectionHandler(evtName) {
	        return function (e) {
	            var eventTasks = findEventTasks(global, evtName);
	            eventTasks.forEach(function (eventTask) {
	                // windows has added unhandledrejection event listener
	                // trigger the event listener
	                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
	                if (PromiseRejectionEvent) {
	                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
	                    eventTask.invoke(evt);
	                }
	            });
	        };
	    }
	    if (global['PromiseRejectionEvent']) {
	        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
	            findPromiseRejectionHandler('unhandledrejection');
	        Zone[zoneSymbol('rejectionHandledHandler')] =
	            findPromiseRejectionHandler('rejectionhandled');
	    }
	});

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */

	})));
	});

	/*
	* SystemJS 3.1.6
	*/
	(function () {
	  const hasSelf = typeof self !== 'undefined';

	  const envGlobal = hasSelf ? self : commonjsGlobal;

	  let baseUrl;
	  if (typeof location !== 'undefined') {
	    baseUrl = location.href.split('#')[0].split('?')[0];
	    const lastSepIndex = baseUrl.lastIndexOf('/');
	    if (lastSepIndex !== -1)
	      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
	  }

	  const backslashRegEx = /\\/g;
	  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
	    if (relUrl.indexOf('\\') !== -1)
	      relUrl = relUrl.replace(backslashRegEx, '/');
	    // protocol-relative
	    if (relUrl[0] === '/' && relUrl[1] === '/') {
	      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
	    }
	    // relative-url
	    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
	        relUrl.length === 1  && (relUrl += '/')) ||
	        relUrl[0] === '/') {
	      const parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
	      // Disabled, but these cases will give inconsistent results for deep backtracking
	      //if (parentUrl[parentProtocol.length] !== '/')
	      //  throw new Error('Cannot resolve');
	      // read pathname from parent URL
	      // pathname taken to be part after leading "/"
	      let pathname;
	      if (parentUrl[parentProtocol.length + 1] === '/') {
	        // resolving to a :// so we need to read out the auth and host
	        if (parentProtocol !== 'file:') {
	          pathname = parentUrl.slice(parentProtocol.length + 2);
	          pathname = pathname.slice(pathname.indexOf('/') + 1);
	        }
	        else {
	          pathname = parentUrl.slice(8);
	        }
	      }
	      else {
	        // resolving to :/ so pathname is the /... part
	        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
	      }

	      if (relUrl[0] === '/')
	        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

	      // join together and split for removal of .. and . segments
	      // looping the string instead of anything fancy for perf reasons
	      // '../../../../../z' resolved to 'x/y' is just 'z'
	      const segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

	      const output = [];
	      let segmentIndex = -1;
	      for (let i = 0; i < segmented.length; i++) {
	        // busy reading a segment - only terminate on '/'
	        if (segmentIndex !== -1) {
	          if (segmented[i] === '/') {
	            output.push(segmented.slice(segmentIndex, i + 1));
	            segmentIndex = -1;
	          }
	        }

	        // new segment - check if it is relative
	        else if (segmented[i] === '.') {
	          // ../ segment
	          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
	            output.pop();
	            i += 2;
	          }
	          // ./ segment
	          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
	            i += 1;
	          }
	          else {
	            // the start of a new segment as below
	            segmentIndex = i;
	          }
	        }
	        // it is the start of a new segment
	        else {
	          segmentIndex = i;
	        }
	      }
	      // finish reading out the last segment
	      if (segmentIndex !== -1)
	        output.push(segmented.slice(segmentIndex));
	      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
	    }
	  }

	  /*
	   * Import maps implementation
	   * 
	   * To make lookups fast we pre-resolve the entire import map
	   * and then match based on backtracked hash lookups
	   * 
	   */

	  function resolveUrl (relUrl, parentUrl) {
	    return resolveIfNotPlainOrUrl(relUrl, parentUrl) ||
	        relUrl.indexOf(':') !== -1 && relUrl ||
	        resolveIfNotPlainOrUrl('./' + relUrl, parentUrl);
	  }

	  function resolvePackages(pkgs, baseUrl) {
	    var outPkgs = {};
	    for (var p in pkgs) {
	      var value = pkgs[p];
	      // TODO package fallback support
	      if (typeof value !== 'string')
	        continue;
	      outPkgs[resolveIfNotPlainOrUrl(p, baseUrl) || p] = resolveUrl(value, baseUrl);
	    }
	    return outPkgs;
	  }

	  function parseImportMap (json, baseUrl) {
	    const imports = resolvePackages(json.imports, baseUrl) || {};
	    const scopes = {};
	    if (json.scopes) {
	      for (let scopeName in json.scopes) {
	        const scope = json.scopes[scopeName];
	        let resolvedScopeName = resolveUrl(scopeName, baseUrl);
	        if (resolvedScopeName[resolvedScopeName.length - 1] !== '/')
	          resolvedScopeName += '/';
	        scopes[resolvedScopeName] = resolvePackages(scope, resolvedScopeName) || {};
	      }
	    }

	    return { imports: imports, scopes: scopes };
	  }

	  function getMatch (path, matchObj) {
	    if (matchObj[path])
	      return path;
	    let sepIndex = path.length;
	    do {
	      const segment = path.slice(0, sepIndex + 1);
	      if (segment in matchObj)
	        return segment;
	    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
	  }

	  function applyPackages (id, packages) {
	    const pkgName = getMatch(id, packages);
	    if (pkgName) {
	      const pkg = packages[pkgName];
	      if (pkg === null)

	      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/')
	        console.warn("Invalid package target " + pkg + " for '" + pkgName + "' should have a trailing '/'.");
	      return pkg + id.slice(pkgName.length);
	    }
	  }

	  function resolveImportMap (id, parentUrl, importMap) {
	    const urlResolved = resolveIfNotPlainOrUrl(id, parentUrl) || id.indexOf(':') !== -1 && id;
	    if (urlResolved)
	      id = urlResolved;
	    const scopeName = getMatch(parentUrl, importMap.scopes);
	    if (scopeName) {
	      const scopePackages = importMap.scopes[scopeName];
	      const packageResolution = applyPackages(id, scopePackages);
	      if (packageResolution)
	        return packageResolution;
	    }
	    return applyPackages(id, importMap.imports) || urlResolved || throwBare(id, parentUrl);
	  }

	  function throwBare (id, parentUrl) {
	    throw new Error('Unable to resolve bare specifier "' + id + (parentUrl ? '" from ' + parentUrl : '"'));
	  }

	  /*
	   * SystemJS Core
	   * 
	   * Provides
	   * - System.import
	   * - System.register support for
	   *     live bindings, function hoisting through circular references,
	   *     reexports, dynamic import, import.meta.url, top-level await
	   * - System.getRegister to get the registration
	   * - Symbol.toStringTag support in Module objects
	   * - Hookable System.createContext to customize import.meta
	   * - System.onload(id, err?) handler for tracing / hot-reloading
	   * 
	   * Core comes with no System.prototype.resolve or
	   * System.prototype.instantiate implementations
	   */

	  const hasSymbol = typeof Symbol !== 'undefined';
	  const toStringTag = hasSymbol && Symbol.toStringTag;
	  const REGISTRY = hasSymbol ? Symbol() : '@';

	  function SystemJS () {
	    this[REGISTRY] = {};
	  }

	  const systemJSPrototype = SystemJS.prototype;
	  systemJSPrototype.import = function (id, parentUrl) {
	    const loader = this;
	    return Promise.resolve(loader.resolve(id, parentUrl))
	    .then(function (id) {
	      const load = getOrCreateLoad(loader, id);
	      return load.C || topLevelLoad(loader, load);
	    });
	  };

	  // Hookable createContext function -> allowing eg custom import meta
	  systemJSPrototype.createContext = function (parentId) {
	    return {
	      url: parentId
	    };
	  };

	  // onLoad(id, err) provided for tracing / hot-reloading
	  systemJSPrototype.onload = function () {};

	  let lastRegister;
	  systemJSPrototype.register = function (deps, declare) {
	    lastRegister = [deps, declare];
	  };

	  /*
	   * getRegister provides the last anonymous System.register call
	   */
	  systemJSPrototype.getRegister = function () {
	    const _lastRegister = lastRegister;
	    lastRegister = undefined;
	    return _lastRegister;
	  };

	  function getOrCreateLoad (loader, id, firstParentUrl) {
	    let load = loader[REGISTRY][id];
	    if (load)
	      return load;

	    const importerSetters = [];
	    const ns = Object.create(null);
	    if (toStringTag)
	      Object.defineProperty(ns, toStringTag, { value: 'Module' });
	    
	    let instantiatePromise = Promise.resolve()
	    .then(function () {
	      return loader.instantiate(id, firstParentUrl);
	    })
	    .then(function (registration) {
	      if (!registration)
	        throw new Error('Module ' + id + ' did not instantiate');
	      function _export (name, value) {
	        // note if we have hoisted exports (including reexports)
	        load.h = true;
	        let changed = false;
	        if (typeof name !== 'object') {
	          if (!(name in ns) || ns[name] !== value) {
	            ns[name] = value;
	            changed = true;
	          }
	        }
	        else {
	          for (let p in name) {
	            let value = name[p];
	            if (!(p in ns) || ns[p] !== value) {
	              ns[p] = value;
	              changed = true;
	            }
	          }
	        }
	        if (changed)
	          for (let i = 0; i < importerSetters.length; i++)
	            importerSetters[i](ns);
	        return value;
	      }
	      const declared = registration[1](_export, registration[1].length === 2 ? {
	        import: function (importId) {
	          return loader.import(importId, id);
	        },
	        meta: loader.createContext(id)
	      } : undefined);
	      load.e = declared.execute || function () {};
	      return [registration[0], declared.setters || []];
	    });

	    instantiatePromise = instantiatePromise.catch(function (err) {
	        loader.onload(load.id, err);
	        throw err;
	      });

	    const linkPromise = instantiatePromise
	    .then(function (instantiation) {
	      return Promise.all(instantiation[0].map(function (dep, i) {
	        const setter = instantiation[1][i];
	        return Promise.resolve(loader.resolve(dep, id))
	        .then(function (depId) {
	          const depLoad = getOrCreateLoad(loader, depId, id);
	          // depLoad.I may be undefined for already-evaluated
	          return Promise.resolve(depLoad.I)
	          .then(function () {
	            if (setter) {
	              depLoad.i.push(setter);
	              // only run early setters when there are hoisted exports of that module
	              // the timing works here as pending hoisted export calls will trigger through importerSetters
	              if (depLoad.h || !depLoad.I)
	                setter(depLoad.n);
	            }
	            return depLoad;
	          });
	        })
	      }))
	      .then(function (depLoads) {
	        load.d = depLoads;
	      });
	    });

	    linkPromise.catch(function (err) {
	      load.e = null;
	      load.er = err;
	    });

	    // Captial letter = a promise function
	    return load = loader[REGISTRY][id] = {
	      id: id,
	      // importerSetters, the setters functions registered to this dependency
	      // we retain this to add more later
	      i: importerSetters,
	      // module namespace object
	      n: ns,

	      // instantiate
	      I: instantiatePromise,
	      // link
	      L: linkPromise,
	      // whether it has hoisted exports
	      h: false,

	      // On instantiate completion we have populated:
	      // dependency load records
	      d: undefined,
	      // execution function
	      // set to NULL immediately after execution (or on any failure) to indicate execution has happened
	      // in such a case, pC should be used, and pLo, pLi will be emptied
	      e: undefined,

	      // On execution we have populated:
	      // the execution error if any
	      er: undefined,
	      // in the case of TLA, the execution promise
	      E: undefined,

	      // On execution, pLi, pLo, e cleared

	      // Promise for top-level completion
	      C: undefined
	    };
	  }

	  function instantiateAll (loader, load, loaded) {
	    if (!loaded[load.id]) {
	      loaded[load.id] = true;
	      // load.L may be undefined for already-instantiated
	      return Promise.resolve(load.L)
	      .then(function () {
	        return Promise.all(load.d.map(function (dep) {
	          return instantiateAll(loader, dep, loaded);
	        }));
	      })
	    }
	  }

	  function topLevelLoad (loader, load) {
	    return load.C = instantiateAll(loader, load, {})
	    .then(function () {
	      return postOrderExec(loader, load, {});
	    })
	    .then(function () {
	      return load.n;
	    });
	  }

	  // the closest we can get to call(undefined)
	  const nullContext = Object.freeze(Object.create(null));

	  // returns a promise if and only if a top-level await subgraph
	  // throws on sync errors
	  function postOrderExec (loader, load, seen) {
	    if (seen[load.id])
	      return;
	    seen[load.id] = true;

	    if (!load.e) {
	      if (load.er)
	        throw load.er;
	      if (load.E)
	        return load.E;
	      return;
	    }

	    // deps execute first, unless circular
	    let depLoadPromises;
	    load.d.forEach(function (depLoad) {
	      {
	        try {
	          const depLoadPromise = postOrderExec(loader, depLoad, seen);
	          if (depLoadPromise)
	            (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
	        }
	        catch (err) {
	          loader.onload(load.id, err);
	          throw err;
	        }
	      }
	    });
	    if (depLoadPromises) {
	      return Promise.all(depLoadPromises)
	        .then(doExec)
	        .catch(function (err) {
	          loader.onload(load.id, err);
	          throw err;
	        });
	    }

	    return doExec();

	    function doExec () {
	      try {
	        let execPromise = load.e.call(nullContext);
	        if (execPromise) {
	          execPromise = execPromise.then(function () {
	              load.C = load.n;
	              load.E = null; // indicates completion
	              loader.onload(load.id, null);
	            }, function (err) {
	              loader.onload(load.id, err);
	              throw err;
	            });
	          return load.E = load.E || execPromise;
	        }
	        // (should be a promise, but a minify optimization to leave out Promise.resolve)
	        load.C = load.n;
	        loader.onload(load.id, null);
	      }
	      catch (err) {
	        loader.onload(load.id, err);
	        load.er = err;
	        throw err;
	      }
	      finally {
	        load.L = load.I = undefined;
	        load.e = null;
	      }
	    }
	  }

	  envGlobal.System = new SystemJS();

	  /*
	   * Supports loading System.register via script tag injection
	   */

	  let err;
	  if (typeof window !== 'undefined')
	    window.addEventListener('error', function (e) {
	      err = e.error;
	    });

	  const systemRegister = systemJSPrototype.register;
	  systemJSPrototype.register = function (deps, declare) {
	    err = undefined;
	    systemRegister.call(this, deps, declare);
	  };

	  systemJSPrototype.instantiate = function (url, firstParentUrl) {
	    const loader = this;
	    return new Promise(function (resolve, reject) {
	      const script = document.createElement('script');
	      script.charset = 'utf-8';
	      script.async = true;
	      script.crossOrigin = 'anonymous';
	      script.addEventListener('error', function () {
	        reject(new Error('Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : '')));
	      });
	      script.addEventListener('load', function () {
	        document.head.removeChild(script);
	        // Note URL normalization issues are going to be a careful concern here
	        if (err) {
	          reject(err);
	          return err = undefined;
	        }
	        else {
	          resolve(loader.getRegister());
	        }
	      });
	      script.src = url;
	      document.head.appendChild(script);
	    });
	  };

	  /*
	   * Supports loading System.register in workers
	   */

	  if (hasSelf && typeof importScripts === 'function')
	    systemJSPrototype.instantiate = function (url) {
	      const loader = this;
	      return new Promise(function (resolve, reject) {
	        try {
	          importScripts(url);
	        }
	        catch (e) {
	          reject(e);
	        }
	        resolve(loader.getRegister());
	      });
	    };

	  /*
	   * SystemJS global script loading support
	   * Extra for the s.js build only
	   * (Included by default in system.js build)
	   */
	  (function (global) {

	  const systemJSPrototype = System.constructor.prototype;

	  // safari unpredictably lists some new globals first or second in object order
	  let firstGlobalProp, secondGlobalProp, lastGlobalProp;
	  function getGlobalProp () {
	    let cnt = 0;
	    let lastProp;
	    for (let p in global) {
	      if (!global.hasOwnProperty(p))
	        continue;
	      if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)
	        return p;
	      cnt++;
	      lastProp = p;
	    }
	    if (lastProp !== lastGlobalProp)
	      return lastProp;
	  }

	  function noteGlobalProps () {
	    // alternatively Object.keys(global).pop()
	    // but this may be faster (pending benchmarks)
	    firstGlobalProp = secondGlobalProp = undefined;
	    for (let p in global) {
	      if (!global.hasOwnProperty(p))
	        continue;
	      if (!firstGlobalProp)
	        firstGlobalProp = p;
	      else if (!secondGlobalProp)
	        secondGlobalProp = p;
	      lastGlobalProp = p;
	    }
	    return lastGlobalProp;
	  }

	  const impt = systemJSPrototype.import;
	  systemJSPrototype.import = function (id, parentUrl) {
	    noteGlobalProps();
	    return impt.call(this, id, parentUrl);
	  };

	  const emptyInstantiation = [[], function () { return {} }];

	  const getRegister = systemJSPrototype.getRegister;
	  systemJSPrototype.getRegister = function () {
	    const lastRegister = getRegister.call(this);
	    if (lastRegister)
	      return lastRegister;
	    
	    // no registration -> attempt a global detection as difference from snapshot
	    // when multiple globals, we take the global value to be the last defined new global object property
	    // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
	    // note in Edge, deleting and re-adding a global does not change its ordering
	    const globalProp = getGlobalProp();
	    if (!globalProp)
	      return emptyInstantiation;
	    
	    let globalExport;
	    try {
	      globalExport = global[globalProp];
	    }
	    catch (e) {
	      return emptyInstantiation;
	    }

	    return [[], function (_export) {
	      return { execute: function () { _export('default', globalExport); } };
	    }];
	  };

	  })(typeof self !== 'undefined' ? self : commonjsGlobal);

	  /*
	   * Loads WASM based on file extension detection
	   * Assumes successive instantiate will handle other files
	   */
	  const instantiate = systemJSPrototype.instantiate;
	  systemJSPrototype.instantiate = function (url, parent) {
	    if (url.slice(-5) !== '.wasm')
	      return instantiate.call(this, url, parent);
	    
	    return fetch(url)
	    .then(function (res) {
	      if (!res.ok)
	        throw new Error(res.status + ' ' + res.statusText + ' ' + res.url + (parent ? ' loading from ' + parent : ''));

	      if (WebAssembly.compileStreaming)
	        return WebAssembly.compileStreaming(res);
	      
	      return res.arrayBuffer()
	      .then(function (buf) {
	        return WebAssembly.compile(buf);
	      });
	    })
	    .then(function (module) {
	      const deps = [];
	      const setters = [];
	      const importObj = {};

	      // we can only set imports if supported (eg early Safari doesnt support)
	      if (WebAssembly.Module.imports)
	        WebAssembly.Module.imports(module).forEach(function (impt) {
	          const key = impt.module;
	          setters.push(function (m) {
	            importObj[key] = m;
	          });
	          if (deps.indexOf(key) === -1)
	            deps.push(key);
	        });

	      return [deps, function (_export) {
	        return {
	          setters: setters,
	          execute: function () {
	            return WebAssembly.instantiate(module, importObj)
	            .then(function (instance) {
	              _export(instance.exports);
	            });
	          }
	        };
	      }];
	    });
	  };

	  /*
	   * Import map support for SystemJS
	   * 
	   * <script type="systemjs-importmap">{}</script>
	   * OR
	   * <script type="systemjs-importmap" src=package.json></script>
	   * 
	   * Only those import maps available at the time of SystemJS initialization will be loaded
	   * and they will be loaded in DOM order.
	   * 
	   * There is no support for dynamic import maps injection currently.
	   */

	  const baseMap = Object.create(null);
	  baseMap.imports = Object.create(null);
	  baseMap.scopes = Object.create(null);
	  let importMapPromise = Promise.resolve(baseMap);
	  let acquiringImportMaps = typeof document !== 'undefined';

	  if (acquiringImportMaps) {
	    Array.prototype.forEach.call(document.querySelectorAll('script[type="systemjs-importmap"][src]'), function (script) {
	      script._j = fetch(script.src).then(function (resp) {
	        return resp.json();
	      });
	    });
	  }

	  function mergeImportMap(originalMap, newMap) {
	    for (let i in newMap.imports) {
	      originalMap.imports[i] = newMap.imports[i];
	    }
	    for (let i in newMap.scopes) {
	      originalMap.scopes[i] = newMap.scopes[i];
	    }
	    return originalMap;
	  }

	  systemJSPrototype.resolve = function (id, parentUrl) {
	    parentUrl = parentUrl || baseUrl;

	    if (acquiringImportMaps) {
	      acquiringImportMaps = false;
	      Array.prototype.forEach.call(document.querySelectorAll('script[type="systemjs-importmap"]'), function (script) {
	        importMapPromise = importMapPromise.then(function (map) {
	          return (script._j || script.src && fetch(script.src).then(function (resp) {return resp.json()}) || Promise.resolve(JSON.parse(script.innerHTML)))
	          .then(function (json) {
	            return mergeImportMap(map, parseImportMap(json, script.src || baseUrl));
	          });
	        });
	      });
	    }

	    return importMapPromise
	    .then(function (importMap) {
	      return resolveImportMap(id, parentUrl, importMap);
	    });
	  };

	  const toStringTag$1 = typeof Symbol !== 'undefined' && Symbol.toStringTag;

	  systemJSPrototype.get = function (id) {
	    const load = this[REGISTRY][id];
	    if (load && load.e === null && !load.E) {
	      if (load.er)
	        return null;
	      return load.n;
	    }
	  };

	  systemJSPrototype.set = function (id, module) {
	    let ns;
	    if (toStringTag$1 && module[toStringTag$1] === 'Module') {
	      ns = module;
	    }
	    else {
	      ns = Object.assign(Object.create(null), module);
	      if (toStringTag$1)
	        Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
	    }
	    const done = Promise.resolve(ns);
	    this.delete(id);
	    this[REGISTRY][id] = {
	      id: id,
	      i: [],
	      n: ns,
	      I: done,
	      L: done,
	      h: false,
	      d: [],
	      e: null,
	      er: undefined,
	      E: undefined,
	      C: done
	    };
	    return ns;
	  };

	  systemJSPrototype.has = function (id) {
	    const load = this[REGISTRY][id];
	    return load && load.e === null && !load.E;
	  };

	  // Delete function provided for hot-reloading use cases
	  systemJSPrototype.delete = function (id) {
	    const load = this.get(id);
	    if (load === undefined)
	      return false;
	    // remove from importerSetters
	    // (release for gc)
	    if (load && load.d)
	      load.d.forEach(function (depLoad) {
	        const importerIndex = depLoad.i.indexOf(load);
	        if (importerIndex !== -1)
	          depLoad.i.splice(importerIndex, 1);
	      });
	    return delete this[REGISTRY][id];
	  };

	  const iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

	  systemJSPrototype.entries = function () {
	    const loader = this, keys = Object.keys(loader[REGISTRY]);
	    let index = 0, ns, key;
	    const result = {
	      next: function () {
	        while (
	          (key = keys[index++]) !== undefined && 
	          (ns = loader.get(key)) === undefined
	        );
	        return {
	          done: key === undefined,
	          value: key !== undefined && [key, ns]
	        };
	      }
	    };

	    result[iterator] = function() { return this };

	    return result;
	  };

	}());

}());
