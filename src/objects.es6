
"use strict";

import deepEqual from 'deep-equal';


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

export function emptyObject( o ) {
    return o==null || (Object.keys( o ).length === 0 );
}

export function empty( o ) {
    return o==null || o.length==0;  // this works on strings and arrays; not objects
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
