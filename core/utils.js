export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return 'element_' + result
}

export function copy(target, map = new WeakMap()) {
  try {
    if (typeof target !== 'object' || target === null) {
      return target
    }

    if (map.has(target)) {
      return map.get(target)
    }

    const result = Array.isArray(target) ? [] : {}
    map.set(target, result)

    for (const key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        const value = target[key]
        result[key] = typeof value === 'function' ? value : copy(value, map)
      }
    }

    return result
  } catch (error) {
    console.error('An error occurred with a deep copy and was rolled back', target)
    console.error(error)
    return target
  }
}
