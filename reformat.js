/**
 * Get a string and convert it to lowercase,
 * convert the first letter to uppercase and remove the vowels chars
 * @param toFormat string
 * @return string
 */
function reformat(toFormat){
    if (typeof(toFormat) !== 'string'){
        console.error('Invalid parameter: string type is expected on toFormat parameter.');
        return '';
    }

    if (!toFormat.length){
        return '';
    }

    var toFormatAux = toFormat.toLowerCase().replace(/[aeiou]/gi, '');
    toFormatAux = toFormat[0].toUpperCase() + toFormatAux.substring(1);

    return toFormatAux;
}


// POSSIBLE TEST CASES:
//Lmshrp dvlpr tst
console.log('Lmshrp dvlpr tst');
console.log(reformat("liMeSHArp DeveLoper TEST"));