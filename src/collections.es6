
/**
 * Return true if the arg is undefined, null or empty.
 */
export function empty( arr ) {
    return arr==null || arr.length==0;  // this works on strings and arrays; not objects
}

