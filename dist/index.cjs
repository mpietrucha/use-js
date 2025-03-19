'use strict';

const is = require('@mpietrucha/is');
const lodashEs = require('lodash-es');

const useConstant = (value) => {
  if (is.is(value, Function)) {
    return value;
  }
  return lodashEs.constant(value);
};

const use = (source, ...parameters) => {
  if (is.isEmpty(parameters)) {
    return useConstant(source);
  }
  return use(useProperty(source, parameters.shift())).bind(source);
};

exports.use = use;
exports.useConstant = useConstant;
