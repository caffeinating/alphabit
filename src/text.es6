


export function empty( s ) {
    return s==null || s.length==0;  // this works on strings and arrays; not objects
}

export function len( s ) {
    return s==null ? 0 : s.length;
}

export function left( s, len ) {
    if ( s==null ) return "";
    if ( s.length <= len ) {
        return s;
    }
    return s.substr( 0, len );
}


export function pipedList( arr ) {
    return arr.join("|");
}

export function commaList( arr ) {
    return arr.join(",");
}


export const camelCaseToTitleCase = (camelCase) => {
    if (camelCase == null || camelCase == "") {
        return camelCase;
    }

    camelCase = camelCase.trim();
    var newText = "";
    for (var i = 0; i < camelCase.length; i++) {
        if (/[A-Z]/.test(camelCase[i])
            && i != 0
            && /[a-z]/.test(camelCase[i-1])) {
            newText += " ";
        }
        if (i == 0 && /[a-z]/.test(camelCase[i]))
        {
            newText += camelCase[i].toUpperCase();
        } else {
            newText += camelCase[i];
        }
    }

    return newText;
};



export function textValueExcludes( value, exclude ) {
    return value && (value.length>0) && (value !== exclude);
}

/**
 * Simple format function.  First arg is the string, subsequent
 * are values that replace placeholders in the string.
 *
 * Placeholders are numbered, like this {0}, {1}...
 *
 * @returns {String}
 */
export function format() {
    var formatted = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+(i-1)+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
}