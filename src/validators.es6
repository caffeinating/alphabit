"use strict";

import validUrl from 'valid-url';

export function required(value) {
    return !value ? ['This field cannot be empty'] : [];
}

export function url(value) {
    return value && !validUrl.isWebUri(value) ? ['This URL is invalid.  e.g. "http://example.com"'] : [];
}

export function email(value) {
    return !isValidEmail(value) ? ['This email address is invalid']: [];
}

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isValidEmail(email) {
    if (!email || email.length>254 || !tester.test(email) ) return false;

    var parts = email.split("@");
    if( parts[0].length>64 ) return false;

    var domainParts = parts[1].split(".");
    if (domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}
