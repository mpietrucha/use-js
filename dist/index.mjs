import { is, isEmpty } from '@mpietrucha/is';
import { constant } from 'lodash-es';

const useConstant = (value) => {
  if (is(value, Function)) {
    return value;
  }
  return constant(value);
};

const use = (source, ...parameters) => {
  if (isEmpty(parameters)) {
    return useConstant(source);
  }
  return use(useProperty(source, parameters.shift())).bind(source);
};

export { use, useConstant };
