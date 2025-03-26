import { constant } from '@mpietrucha/value'
import { get } from 'lodash-es'

export const useConstant = (source, property) => {
    const value = get(source, property)

    return constant(value)
}
