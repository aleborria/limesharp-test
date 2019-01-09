/**
 * Get a binary number and return the next number on binary in the same type as entered
 * Return false, If the binary parameter is incorrect
 * @param binary string|[]
 * @return string|[]\false
 */
function next_binary_number(binary){
    if (!(binary instanceof Array)){
        console.error('Invalid parameter: string or array type is expected on binary parameter.');
        return false;
    }

    var invArray = [],
        nextNumber = [],
        carry = 1;

    for (var i = binary.length; i > 0; i--){
        // Validate if is a binary number
        if (binary[i-1] != 0 && binary[i-1] != 1){
            console.error('Invalid parameter: Invalid binary number.');
            nextNumber = false;
            return false;
        }

        // Has Carry and current number is 1
        if (binary[i-1] == 1 && carry){
            firstNewNumber = 0;
            invArray[invArray.length] = 0;
        } else {
            // Carry or current index is '0'
            invArray[invArray.length] = (carry)? 1 : binary[i-1] * 1;
            carry = 0;
        }
    }

    if (carry){
        invArray[invArray.length] = 1;
    }
    for (var j = invArray.length - 1; j >= 0;j--){
        nextNumber[nextNumber.length] = invArray[j];
    }
    return nextNumber;
}



// POSSIBLE TEST CASES:
// [1,0] => [1,1]
console.log('[1,0] => [1,1]');
console.log(next_binary_number([1,0]));

// [1,1] => [1,0,0]
console.log('[1,1] => [1,0,0]');
console.log(next_binary_number([1,1]));

// [1,1,0] => [1,1,1]
console.log('[1,1,0] => [1,1,1]');
console.log(next_binary_number([1,1,0]));

// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]
console.log('[1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]');
console.log(next_binary_number([1,0,0,0,0,0,0,0,0,1]));