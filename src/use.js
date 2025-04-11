import { useConstant } from '@/constant'
import { useFinishComposition } from '@mpietrucha/function'
import { isEmpty } from '@mpietrucha/is-basic'
import { useConstant as constant } from '@mpietrucha/value'

export const use = (source, ...property) => {
    if (isEmpty(property)) {
        return constant(source)
    }

    return useConstant(source, property.shift()).bind(source)
}

export const createUseComposition = property => {
    return useFinishComposition(use, property)
}
