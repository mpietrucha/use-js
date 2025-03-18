import { constant, get, head, isEmpty, isFunction } from 'lodash-es'

export const createValue = (source, parameters) => {
    if (isEmpty(parameters)) {
        return source
    }

    return get(source, head(parameters))
}

export const createUse = value => {
    if (isFunction(value)) {
        return value
    }

    return constant(value)
}

export const use = (source, ...parameters) => {
    const value = createValue(source, parameters)

    if (value === source) {
        return createUse(value)
    }

    return createUse(value).bind(source)
}
