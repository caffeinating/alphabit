
"use strict";

export function toMap( o ) {
    let map = Object.create( null );
    if ( o != null ) {
        const keys = Object.keys( o );
        for ( let i=0; i<keys.length; i++ ) {
            map[keys[i]] = o[keys[i]];
        }
        console.log( 'returning map' );
        return map;
    }
}

export function equals( o1, o2 ) {
    return deepEqual( o1, o2 );
}

/**
 * True if o is an object.
 */
export function isObject( o ) {
    return o === Object(o);
}

/**
 * True if o is null, or an object without any keys (i.e. properties).
 */
export function emptyObject( o ) {
    return o==null || (isObject(o) && Object.keys( o ).length === 0 );
}

/**
 * Any kind of empty thing: String, Array, or Object
 * @param o an instance of some javascript type (i.e. a thing)
 */
export function empty( o ) {
    return o==null || o.length==0 || emptyObject(o);
}

/**
 * Returns a new array excluding the element at index
 * @param index
 * @param array
 */
export function removeIndex( index, array ) {
// remove:       3
// from  : 0,1,2,3,4,5
// result: 0,1,2,4,5
    
    if ( index < 0 || index >= array.length ) {
        return array;
    }
    if ( index==0 ) {
        return array.slice( 1 );
    }
    if ( index==(array.length-1) ) {
        return array.slice( 0, index );
    }
    const one = array.slice( 0, index );
    const two = array.slice( index+1, array.length );
    Array.prototype.push.apply(one, two);
    return one;
}


/**
 * Return true if any of the object's own properties
 * contains the given text, ignoring case.
 * @param o
 * @param text
 */
export function containsText( o, text ) {
    const test = text.toLowerCase();
    const result = Object.keys( o )
        .filter( each => typeof o[each] === "string" )
        .find( each => o[each].toLowerCase().includes( test ) );
    return result != undefined;
}


/**
 * Return true if any of the object's own properties
 * contains the given text, ignoring case.
 * @param o
 * @param text
 */
export function find( o, text ) {
    const result = Object.keys( o )
        .find( each => o[each].includes( test ) );
    return result != undefined;
}


export function cloneExcluding( obj, ...excludedProps ) {
    let clone = Object.assign( {}, obj );
    excludedProps.forEach( (p) => delete clone[p] );
    return clone;
}



/**
 * From within 'state', find the value of its descendant
 * as implied by the path argument.
 *
 * @param state - an object with complex state
 * @param path - dotted path notation... e.g. grand.parent.child
 * @returns {*} - value from state[path]
 */
export function resolve( state, path ) {
    return path.split('.').reduce( (o,i)=>o[i], state );
}


export function deepEqual( o1, o2 ) {
    if ( o1===o2 ) return true;

}
