
/**
 * Verify if a string is valid, it is =! ( null, undefined, "" )
 * @param {String} value 
 * @returns {boolean}
 */
export function isStringValue( value ){
    return value == null || value == undefined || value == "";
}

export function isExpectedArray( array, minSize = 0 ){
    return array == null || array == undefined || !Array.isArray(array) || array.length >= minSize ;
}

export function isPositiveNumber(number){
    if ( number == null || number == undefined || number == "" || isNaN(number) ) return false; 
    
    return number > 0;
}


/**
 * If value is null or undefined, then function returns "" value
 * @param {*} value 
 * @returns {String}
 */
export function convertEmptyValueToString( value ){
    if ( value == null || value == undefined ){
        return ""
    }
    return value;
}


/**
 * Change a non array object to a empty Array, if value is an array, then function return initial value
 * @param {*} value 
 * @returns {Array}
 */
export function changeUnknownValueToArray( value ){
    if ( isExpectedArray(value) ){
        return [];
    }
    return value;
}

export function changeUnknownValueToObject( value, object ){
    if ( isStringValue(value ) ){
        return object;
    }
    return value;
}