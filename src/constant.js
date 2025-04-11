import { useProperty } from '@mpietrucha/object'
import { useConstant as constant } from '@mpietrucha/value'

export const useConstant = (source, property) => {
    const value = useProperty(source, property)

    return constant(value)
}
