import { is } from '@mpietrucha/is'
import { constant } from 'lodash-es'

export const createConstant = value => {
    if (is(value, Function)) {
        return value
    }

    return constant(value)
}
