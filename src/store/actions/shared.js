/**
 * Creates a new Redux Action.
 *
 * @export
 * @param {string} key Action store pointer.
 * @param {Symbol} type Action Type.
 * @param {any} payload Action args.
 * @returns {any} Action.
 */
export function createAction(key, type, payload)
{
    return {
        key,
        type,
        payload
    };
}

/**
 * Creates Redux Action Type from object
 * using Symbols.
 *
 * @export
 * @param {any} obj Dictionary with actions types for declare.
 * @returns {any} Freezed object for Redux Action Types.
 */
export function createActionTypesUnique(obj)
{
    let types = {};

    for (const key in obj)
    {
        types[key] = Symbol(obj[key]);
    }

    return Object.freeze(types);
}

/**
 * Creates Redux Action Type from object
 * using the store key as prefix.
 *
 * @export
 * @param {any} storeKey Store partition name for prefix.
 * @param {any} obj Dictionary with actions types for declare.
 * @returns {any} Freezed object for Redux Action Types.
 */
export function createActionTypes(storeKey, obj)
{
    let types = {};

    for (const key in obj)
    {
        types[key] = `${ storeKey }_${ obj[key] }`;
    }

    return Object.freeze(types);
}

/**
 * Creates Redux Action Type from string array
 * using Symbols.
 *
 * @export
 * @param {any} array String array.
 * @returns {any} Freezed object for Redux Action Types.
 */
export function createActionTypesMirroringUnique(array)
{
    return Object.freeze(
        array.reduce((keys, key) => (
            { ...keys, [key]: Symbol(key) }
        ), {})
    );
}

/**
 * Creates Redux Action Type from string array
 * using the store key as prefix.
 *
 * @export
 * @param {any} storeKey Store partition name for prefix.
 * @param {any} array String array.
 * @returns {any} Freezed object for Redux Action Types.
 */
export function createActionTypesMirroring(storeKey, array)
{
    return Object.freeze(
        array.reduce((keys, key) => (
            { ...keys, [key]: `${ storeKey }_${ key }` }
        ), {})
    );
}
