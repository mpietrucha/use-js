'use strict';

const lodashEs = require('lodash-es');

const createValue = (source, parameters) => {
  if (lodashEs.isEmpty(parameters)) {
    return source;
  }
  return lodashEs.get(source, lodashEs.head(parameters));
};
const createUse = (value) => {
  if (lodashEs.isFunction(value)) {
    return value;
  }
  return lodashEs.constant(value);
};
const use = (source, ...parameters) => {
  const value = createValue(source, parameters);
  if (value === source) {
    return createUse(value);
  }
  return createUse(value).bind(source);
};

exports.createUse = createUse;
exports.createValue = createValue;
exports.use = use;
