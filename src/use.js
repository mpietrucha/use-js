import { createConstant } from '@/constant'
import { createNone, isNone } from '@mpietrucha/is'
import { partialRight as createComposition, get } from 'lodash-es'

export const use = (source, property = createNone()) => {
    if (isNone(property)) {
        return createConstant(source)
    }

    const value = get(source, property)

    return use(value).bind(source)
}

export const createUse = property => {
    return createComposition(use, property)
}
