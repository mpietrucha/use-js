import { useConstant } from '@/constant'
import { isEmpty } from '@mpietrucha/is'

export const use = (source, ...parameters) => {
    if (isEmpty(parameters)) {
        return useConstant(source)
    }

    return use(useProperty(source, parameters.shift())).bind(source)
}
