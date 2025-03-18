import { isEmpty, get, head, isFunction, constant } from 'lodash-es';

const createValue = (source, parameters) => {
  if (isEmpty(parameters)) {
    return source;
  }
  return get(source, head(parameters));
};
const createUse = (value) => {
  if (isFunction(value)) {
    return value;
  }
  return constant(value);
};
const use = (source, ...parameters) => {
  const value = createValue(source, parameters);
  if (value === source) {
    return createUse(value);
  }
  return createUse(value).bind(source);
};

export { createUse, createValue, use };
