import { is } from '@mpietrucha/is'
import { constant } from 'lodash-es'

export const useConstant = value => {
    if (is(value, Function)) {
        return value
    }

    return constant(value)
}
