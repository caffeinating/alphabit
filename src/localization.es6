
import * as T from './text';


// first is IE, 2nd others.
// this is not always correct, as it may not reflect the current content.
// left 2, in case we get en-US, for example.
const lang = T.left( window.navigator.userLanguage || window.navigator.language,2);


// Set the labels bundle for a language
export const addLabels = ( lang, bundle ) => {
    if ( labelBundle[lang] ) {
        labelBundle[lang] = Object.assign(labelBundle[lang], bundle);
    }
    else {
        labelBundle[lang] = bundle;
    }
};

const labelBundle = {
    en : {
        namePrefix:"Prefix"
    }
};

// Set the text bundle for a language
export const addText = ( lang, bundle ) => {
    if ( textBundle[lang] ) {
        textBundle[lang] = Object.assign(textBundle[lang], bundle);
    }
    else {
        textBundle[lang] = bundle;
    }
};

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

