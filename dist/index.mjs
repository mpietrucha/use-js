import { is, createNone, isNone } from '@mpietrucha/is';
import { constant, partialRight, get } from 'lodash-es';

const createConstant$1 = (value) => {
  if (is(value, Function)) {
    return value;
  }
  return constant(value);
};

const use = (source, property = createNone()) => {
  if (isNone(property)) {
    return createConstant(source);
  }
  const value = get(source, property);
  return use(value).bind(source);
};
const createUse = (property) => {
  return partialRight(use, property);
};

export { createConstant$1 as createConstant, createUse, use };
