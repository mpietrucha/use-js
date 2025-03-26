import { useConstant } from '@/constant'
import { useFinishComposition } from '@mpietrucha/function'
import { isNone, none } from '@mpietrucha/none'
import { constant } from '@mpietrucha/value'

export const use = (source, property = none()) => {
    if (isNone(property)) {
        return constant(source)
    }

    return useConstant(source, property).bind(source)
}

export const createUseComposition = property => {
    return useFinishComposition(use, property)
}
