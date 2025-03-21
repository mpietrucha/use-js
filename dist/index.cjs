'use strict';

const is = require('@mpietrucha/is');
const lodashEs = require('lodash-es');

const createConstant$1 = (value) => {
  if (is.is(value, Function)) {
    return value;
  }
  return lodashEs.constant(value);
};

const use = (source, property = is.createNone()) => {
  if (is.isNone(property)) {
    return createConstant(source);
  }
  const value = lodashEs.get(source, property);
  return use(value).bind(source);
};
const createUse = (property) => {
  return lodashEs.partialRight(use, property);
};

exports.createConstant = createConstant$1;
exports.createUse = createUse;
exports.use = use;
