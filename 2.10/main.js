/* Conversion snippets */

// Convert a binary String to a decimal number
var sBinString = '1011';
var nMyNumber = parseInt(sBinString, 2);
console.log(nMyNumber); // prints 11, i.e 1011

// Convert a decimal number to a binary string
nMyNumber = 11;
sBinString = nMyNumber.toString(2);
console.log(sBinString); // prints 1011, i.e 1011

// Automate Mask Creation
function createMask() {
    var nMask = 0; nFlag = 0; nLen = arguments.length > 32 ? 32 : arguments.length;
    for (nFlag; nFlag < nLen; nMask |= arguments[nFlag] << nFlag++);
    return nMask;
}
var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
var mask2 = createMask(false, false, true)       // 4 , i.e.: 0100
var mask3 = createMask(true);                    // 1 , i.e.: 0001

// Reverse algithm: an array of booleans from a mask
function arrayFromMask(nMask) {
    // nMask must be between -2147483648 and 2147483647
    if (nMask > 0x7fffffff || nMask < -0x80000000) {
        throw new TypeError('array from mask - out of range');
    }
    
    for (var nShifted = nMask, aFromMask = []; nShifted;
        aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
    return aFromMask;
}