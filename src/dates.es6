// dates.es6  --  Date utilities

import * as T from './text';


const SPAN_REGEXP = /(\d+)([wdhms])/gi;

const NO_SPAN = "0";


export function toMillis( n, u ) {
    switch ( u ) {
        case 's': return n * 1000;
        case 'm': return n * 1000 * 60;
        case 'h': return n * 1000 * 60 * 60;
        case 'd': return n * 1000 * 60 * 60 * 24;
        case 'w': return n * 1000 * 60 * 60 * 24 * 7;
        default:
            return 0;
    }
}


export function isoText( datetimeStr ) {
    return T.empty( datetimeStr ) ?  "" : datetimeStr.slice(0,10);
}

export function isoDate( date ) {
    return date.toISOString().slice(0,10);    
}

/**
 * Returns milliseconds represented by the text argument.
 * The argument's format: du[du]*
 * Where:
 *    d - a number
 *    u - a time span unit specifier: s:second, m:minute, h:hour, d:day, w:week
 * Example:
 *    10m = ten minutes
 *    4d2h15m = four days, two hours, fifteen minutes
 *
 * @param text a string,
 *
 * @returns {number} of milliseconds
 */
export function parseSpan( text ) {
    if ( text==null || NO_SPAN == text ) {
        return 0;
    }
    let m;
    let result = 0;
    while ( m = SPAN_REGEXP.exec( text ) ) {
        const d = parseInt( m[1] );
        if ( !isNaN(d) ) {
            result += toMillis( d, m[2] );
        }
    }
    return result;
}


export function todayMinus( span ) {
    return new Date( Date.now() - parseSpan( span ) );    
}