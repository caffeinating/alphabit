
import {T}      from 'alphabit';


// first is IE, 2nd others.
// this is not always correct, as it may not reflect the current content.
// left 2, in case we get en-US, for example.
const lang = T.left( window.navigator.userLanguage || window.navigator.language,2);



// Later, we will load bundles from a text file, specific to a tenant
const labelBundle = {
    en : {
        namePrefix:"Prefix"
    }
};

// Later, we will load bundles from a text file, specific to a tenant
const textBundle = {
    en : {
        hello:"Hello"
    },
    es : {
        hello:"Ola"
    }
};


/**
 * Labels reflect labels for named fields (other other things)
 * @param fieldName - often the field name.
 * @returns {string}
 */
export function lbl( fieldName ) {
    const result = labelBundle[lang][fieldName];
    return result || T.camelCaseToTitleCase( fieldName );
}


/**
 * Return localized text mapped for the value
 * @param value - the default value, or a known constant
 * @returns {string}
 */
export function txt( value ) {
    const result = textBundle[lang][value];
    return result || value;
}


export default {
    lbl,
    txt
}
